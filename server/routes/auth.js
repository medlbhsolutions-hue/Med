import express from 'express';
import jwt from 'jsonwebtoken';
import { supabase } from '../config/supabase.js';
import bcrypt from 'bcryptjs';

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

    // Check existing
    const { data: existingUser } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data: newUser, error } = await supabase
      .from('users')
      .insert([
        {
          name,
          prenom,
          email,
          password: hashedPassword,
          role: role || 'clinic',
          clinic_name: clinicName,
          specialization,
          phone
        }
      ])
      .select()
      .single();

    if (error) throw error;

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
      token
    });
  } catch (error) {
    console.error('Erreur inscription:', error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Connecté avec succès',
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
  }
});

// Verify Token (Get Current User)
router.get('/verify', verifyToken, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('id, name, prenom, email, role')
      .eq('id', req.userId)
      .single();

    if (error) throw error;
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Get Me
router.get('/me', verifyToken, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('*') // Be careful not to send password back if possible, but maintaining interface
      .eq('id', req.userId)
      .single();

    if (user) delete user.password; // Remove password hash

    if (error) throw error;
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur', error: error.message });
  }
});

// Register Medecin
router.post('/register-medecin', async (req, res) => {
  try {
    const { name, email, password, role, clinicName, specialization } = req.body;

    const { data: existingUser } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data: newUser, error } = await supabase
      .from('users')
      .insert([{
        name,
        email,
        password: hashedPassword,
        role,
        clinic_name: clinicName,
        specialization
      }])
      .select()
      .single();

    if (error) throw error;

    // Emails commented out similar to original code or kept simple
    // const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ success: true });

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription', error: error.message });
  }
});

export default router;
