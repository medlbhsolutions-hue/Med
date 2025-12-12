import express from 'express';
import { verifyToken } from './auth.js';
import ChatHistory from '../models/ChatHistory.js';
import { generatePhi3Response } from '../ai/phi3.js';

const router = express.Router();

// Send message to chatbot
router.post('/message', verifyToken, async (req, res) => {
  try {
    const { message, context } = req.body;

    // Generate response using Phi 3
    const response = await generatePhi3Response(message, context);

    // Save to chat history
    const chatEntry = new ChatHistory({
      userId: req.userId,
      userMessage: message,
      botResponse: response,
      context
    });

    await chatEntry.save();

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
    const history = await ChatHistory.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .limit(50);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Clear chat history
router.delete('/history', verifyToken, async (req, res) => {
  try {
    await ChatHistory.deleteMany({ userId: req.userId });
    res.json({ message: 'Historique de chat supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

export default router;
