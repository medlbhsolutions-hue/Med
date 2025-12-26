import express from 'express';
import { verifyToken } from './auth.js';
import { supabase } from '../config/supabase.js';

const router = express.Router();

// Get all news
router.get('/', async (req, res) => {
  try {
    const { data: news, error } = await supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Get news by ID
router.get('/:id', async (req, res) => {
  try {
    const { data: news, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error || !news) return res.status(404).json({ message: 'Article non trouvé' });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Create news (protected - admin only)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, content, excerpt, author, category, image, published } = req.body;

    // Using explicit mapping to match table columns if needed, or pass req.body if keys match
    const { data: news, error } = await supabase
      .from('news')
      .insert([{
        title, content, excerpt, author, category, image, published
      }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Update news (protected - admin only)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    // Only update fields present in req.body
    const { data: news, error } = await supabase
      .from('news')
      .update(req.body)
      .eq('id', req.params.id)
      .select()
      .single();

    if (error || !news) return res.status(404).json({ message: 'Article non trouvé' });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Delete news (protected - admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;
    res.json({ message: 'Article supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

export default router;
