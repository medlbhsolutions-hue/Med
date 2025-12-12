import express from 'express';
import { verifyToken } from './auth.js';
import News from '../models/News.js';

const router = express.Router();

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find({ published: true }).sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Get news by ID
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'Article non trouvé' });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Create news (protected - admin only)
router.post('/', verifyToken, async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Update news (protected - admin only)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!news) return res.status(404).json({ message: 'Article non trouvé' });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Delete news (protected - admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: 'Article supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

export default router;
