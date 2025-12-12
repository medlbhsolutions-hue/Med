import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import React, { useState } from 'react';

const ContactSection = ({ onPlanifierClick }) => {
  const [form, setForm] = useState({ nom: '', prenom: '', fonction: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Ici, tu peux ajouter la logique d'envoi d'email ou d'appel API
    setSent(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Contact & Prochaines étapes</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">MedLBH Solutions</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Fondatrice</p>
                  <p className="text-gray-600">Nadia Labhilil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href="mailto:llabhilil@yahoo.fr" className="text-primary hover:underline">
                    llabhilil@yahoo.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Téléphone</p>
                  <a href="tel:+212690405269" className="text-primary hover:underline">
                    +212 6 90 40 52 69
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Siège</p>
                  <p className="text-gray-600">Casablanca - Grenoble</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Site Web</p>
                  <a href="http://www.medlbhsolutions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.medlbhsolutions.com
                  </a>
                </div>
              </div>
            </div>

            <button className="btn-primary mt-8 w-full" onClick={onPlanifierClick}>
              📅 Planifier un rendez-vous
            </button>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Prochaines étapes</h3>
            
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Consultation initiale',
                  description: 'Évaluation de vos besoins spécifiques'
                },
                {
                  step: 2,
                  title: 'Proposition personnalisée',
                  description: 'Solutions adaptées à votre clinique'
                },
                {
                  step: 3,
                  title: 'Mise en œuvre',
                  description: 'Accompagnement et suivi régulier'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl p-10 mt-8">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center tracking-tight">Contactez-nous</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-bold text-blue-700 mb-2">Nom</label>
                <input type="text" name="nom" value={form.nom} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-base font-bold text-blue-700 mb-2">Prénom</label>
                <input type="text" name="prenom" value={form.prenom} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre prénom" />
              </div>
            </div>
            <div>
              <label className="block text-base font-bold text-blue-700 mb-2">Fonction</label>
              <input type="text" name="fonction" value={form.fonction} onChange={handleChange} className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre fonction" />
            </div>
            <div>
              <label className="block text-base font-bold text-blue-700 mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre email" />
            </div>
            <div>
              <label className="block text-base font-bold text-blue-700 mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200 resize-none" rows={4} placeholder="Votre message..." />
            </div>
            <button type="submit" className="w-full bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 active:scale-95">
              Envoyer
            </button>
          </form>
          {sent && (
            <div className="mt-8 flex flex-col items-center justify-center animate-bounce-in">
              <svg className="w-14 h-14 text-green-500 mb-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
              </svg>
              <div className="text-green-700 font-bold text-xl bg-green-100 px-6 py-4 rounded-xl shadow-lg animate-fade-in">
                Votre message a été envoyé !
              </div>
            </div>
          )}
          <div className="mt-10 border-t pt-8">
            <h3 className="text-lg font-bold text-blue-700 mb-2">Nos coordonnées</h3>
            <p>Email : llabhilil@yahoo.fr</p>
            <p>Téléphone : +212 6 90 40 52 69</p>
            <p>Siège : Casablanca – Grenoble</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// Styles Tailwind à ajouter :
// .input: w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50
// .btn-primary: bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition
