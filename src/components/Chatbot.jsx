import { useState } from 'react';
import { chatbotService } from '../services/api';
import { Send } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Bonjour! Je suis l\'assistant MedLBH. Comment puis-je vous aider?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Get context from conversation
      const context = messages.map(m => `${m.sender}: ${m.text}`).join('\n');
      
      const response = await chatbotService.sendMessage(input, context);
      
      const botMessage = {
        id: messages.length + 2,
        text: response.data.message,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      const errorMessage = {
        id: messages.length + 2,
        text: 'Je suis désolé, une erreur s\'est produite. Veuillez réessayer.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant d'ouverture du chatbot */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 bg-blue-700 text-white rounded-full p-4 shadow-lg hover:bg-blue-800 z-50"
          aria-label="Ouvrir le chatbot"
          onClick={() => setOpen(true)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.386 1.053 4.54 2.75 6.063V22l3.293-1.646A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" fill="currentColor"/></svg>
        </button>
      )}
      {/* Fenêtre du chatbot */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-blue-700">
          <div className="flex items-center justify-between bg-blue-700 text-white rounded-t-lg px-4 py-3">
            <span className="font-bold text-lg">Assistant MedLBH</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-blue-200 text-xl">×</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto" style={{ minHeight: '200px', maxHeight: '320px' }}>
            {/* Affichage des messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className={`text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'} mt-1 block`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none px-4 py-2">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <form className="flex items-center p-3 border-t" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Votre question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
            />
            <button type="submit" className="ml-2 bg-blue-700 text-white rounded-full p-2 hover:bg-blue-800">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 21l21-9-21-9v7l15 2-15 2v7z" fill="currentColor"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};
