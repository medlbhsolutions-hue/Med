import express from 'express';
import { verifyToken } from './auth.js';
import { supabase } from '../config/supabase.js';
import { generatePhi3Response } from '../ai/phi3.js';

const router = express.Router();

// Send message to chatbot
router.post('/message', verifyToken, async (req, res) => {
  try {
    const { message, context } = req.body;

    // Generate response using Phi 3
    const response = await generatePhi3Response(message, context);

    // Save to chat history
    const { error } = await supabase
      .from('chat_history')
      .insert([{
        user_id: req.userId,
        user_message: message,
        bot_response: response,
        context
      }]);

    if (error) {
      console.warn('Chat history save error:', error);
      // We might not want to fail the request just because history save failed, but logging is good
    }

    res.json({ message: response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      message: 'Je suis désolé, une erreur s\'est produite. Veuillez réessayer.'
    });
  }
});

// Get chat history
router.get('/history', verifyToken, async (req, res) => {
  try {
    const { data: history, error } = await supabase
      .from('chat_history')
      .select('*')
      .eq('user_id', req.userId)
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) throw error;
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Clear chat history
router.delete('/history', verifyToken, async (req, res) => {
  try {
    const { error } = await supabase
      .from('chat_history')
      .delete()
      .eq('user_id', req.userId);

    if (error) throw error;
    res.json({ message: 'Historique de chat supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

export default router;
