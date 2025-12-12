import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { sendConfirmationEmail } from '../services/email.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'medlbh_secret_key_2024';

// Middleware to verify token
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token manquant' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalide' });
  }
};

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, prenom, email, password, role, clinicName, specialization, phone } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    const user = new User({
      name,
      prenom,
      email,
      password,
      role,
      clinicName,
      specialization,
      phone
    });

    await user.save();

    // Suppression de l'envoi d'email

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Connecté avec succès',
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
  }
});

// Verify Token
router.get('/verify', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Get Current User
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Register Medecin
router.post('/register-medecin', async (req, res) => {
  try {
    const { name, email, password, role, clinicName, specialization } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    const user = new User({
      name,
      email,
      password,
      role,
      clinicName,
      specialization
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    try {
      // Envoi email à l'utilisateur
      await sendConfirmationEmail(req.body.email, 'Confirmation d’inscription MedLBH', 'Votre inscription a bien été reçue. Merci !');
      // Envoi email à l'admin
      await sendConfirmationEmail(process.env.MEDLBH_MAIL_USER, 'Nouvelle inscription MedLBH', `Nouvelle inscription médecin: ${req.body.nom} ${req.body.prenom}`);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Erreur lors de l’envoi de l’email.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription', error: error.message });
  }
});

export default router;
