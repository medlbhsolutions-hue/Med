import express from 'express';
import { verifyToken } from './auth.js';
import Clinic from '../models/Clinic.js';

const router = express.Router();

// Get all clinics
router.get('/', async (req, res) => {
  try {
    const clinics = await Clinic.find();
    res.json(clinics);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Get clinic by ID
router.get('/:id', async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.params.id);
    if (!clinic) return res.status(404).json({ message: 'Clinique non trouvée' });
    res.json(clinic);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Create clinic (protected)
router.post('/', verifyToken, async (req, res) => {
  try {
    const clinic = new Clinic({
      ...req.body,
      userId: req.userId
    });
    await clinic.save();
    res.status(201).json(clinic);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Update clinic (protected)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.params.id);
    if (!clinic) return res.status(404).json({ message: 'Clinique non trouvée' });
    if (clinic.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    Object.assign(clinic, req.body);
    await clinic.save();
    res.json(clinic);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Delete clinic (protected)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.params.id);
    if (!clinic) return res.status(404).json({ message: 'Clinique non trouvée' });
    if (clinic.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Accès non autorisé' });
    }
    
    await Clinic.findByIdAndDelete(req.params.id);
    res.json({ message: 'Clinique supprimée' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

export default router;
