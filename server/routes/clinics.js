import express from 'express';
import { verifyToken } from './auth.js';
import { supabase } from '../config/supabase.js';

const router = express.Router();

// Get all clinics
router.get('/', async (req, res) => {
  try {
    const { data: clinics, error } = await supabase
      .from('clinics')
      .select('*');

    if (error) throw error;
    res.json(clinics);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Get clinic by ID
router.get('/:id', async (req, res) => {
  try {
    const { data: clinic, error } = await supabase
      .from('clinics')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error || !clinic) return res.status(404).json({ message: 'Clinique non trouvée' });
    res.json(clinic);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Create clinic (protected)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, founder, email, phone, address, city, country, specialties, beds, staff, description, logo } = req.body;

    // Explicitly mapping if necessary
    const { data: clinic, error } = await supabase
      .from('clinics')
      .insert([{
        name, founder, email, phone, address, city, country, specialties, beds, staff, description, logo,
        user_id: req.userId
      }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(clinic);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Update clinic (protected)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    // Check ownership first
    const { data: existingClinic } = await supabase
      .from('clinics')
      .select('user_id')
      .eq('id', req.params.id)
      .single();

    if (!existingClinic) return res.status(404).json({ message: 'Clinique non trouvée' });
    if (existingClinic.user_id !== req.userId) {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }

    const { data: clinic, error } = await supabase
      .from('clinics')
      .update(req.body)
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;
    res.json(clinic);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Delete clinic (protected)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    // Check ownership first
    const { data: existingClinic } = await supabase
      .from('clinics')
      .select('user_id')
      .eq('id', req.params.id)
      .single();

    if (!existingClinic) return res.status(404).json({ message: 'Clinique non trouvée' });
    if (existingClinic.user_id !== req.userId) {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }

    const { error } = await supabase
      .from('clinics')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;
    res.json({ message: 'Clinique supprimée' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

export default router;
