import express from 'express';
import { supabase } from '../config/supabase.js';
import { verifyToken } from './auth.js';

const router = express.Router();

// Get all appointments for the current user (doctor or patient logic could be added)
router.get('/', verifyToken, async (req, res) => {
    try {
        const userId = req.userId;

        // Determine if user is doctor or patient is irrelevant if we store both IDs or just fetch by user_id
        // For now, assuming appointments have a 'user_id' field which refers to the creator/doctor/patient depending on logic.
        // Let's assume 'doctor_id' or 'patient_id'. 
        // Simplified: fetch where doctor_id = userId OR patient_id = userId if we were tracking patients as users.
        // For this MVP, let's assume filtering by doctor_id matches the logged in user (Doctor Dashboard).

        // Fetch all appointments for the MVP (Admin view)
        // This ensures public requests (doctor_id is null) are visible
        const { data: appointments, error } = await supabase
            .from('appointments')
            .select('*')
            // .or(`doctor_id.eq.${userId},patient_id.eq.${userId}`) // Commented out to see public requests
            .order('date', { ascending: true });

        if (error) throw error;

        res.json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des rendez-vous', error: error.message });
    }
});

// Create a new appointment
router.post('/', verifyToken, async (req, res) => {
    try {
        const { patient_name, type, date, duration, notes, status } = req.body;
        const doctor_id = req.userId; // The logged in user is the doctor creating the appointment for now

        const { data: newAppointment, error } = await supabase
            .from('appointments')
            .insert([
                {
                    doctor_id,
                    patient_name, // If patient is not a system user
                    // patient_id, // If patient was a system user
                    type,
                    date,
                    duration,
                    status: status || 'confirmed', // Default to confirmed if created by doctor
                    notes
                }
            ])
            .select()
            .single();

        if (error) throw error;

        res.status(201).json(newAppointment);
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ message: 'Erreur lors de la création du rendez-vous', error: error.message });
    }
});

// Create a new public appointment request (No Token Required)
router.post('/public', async (req, res) => {
    try {
        const { patient_name, type, date, duration, notes, email, phone } = req.body;

        // Optionally, validation here

        const { data: newAppointment, error } = await supabase
            .from('appointments')
            .insert([
                {
                    patient_name,
                    // Store email/phone in notes for now, or add columns later if needed.
                    // Ideally we should add columns, but for MVP let's append to notes.
                    notes: `${notes || ''}\nEmail: ${email || 'N/A'}\nTel: ${phone || 'N/A'}`,
                    type,
                    date,
                    duration: duration || '30 min',
                    status: 'pending' // Public requests start as pending
                }
            ])
            .select()
            .single();

        if (error) throw error;

        res.status(201).json(newAppointment);
    } catch (error) {
        console.error('Error creating public appointment:', error);
        res.status(500).json({ message: 'Erreur lors de la demande de rendez-vous', error: error.message });
    }
});

// Update appointment status
router.patch('/:id/status', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body; // 'confirmed', 'pending', 'cancelled'

        const { data: updatedAppointment, error } = await supabase
            .from('appointments')
            .update({ status })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        res.json(updatedAppointment);
    } catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du rendez-vous', error: error.message });
    }
});

// Delete appointment
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from('appointments')
            .delete()
            .eq('id', id);

        if (error) throw error;

        res.json({ message: 'Rendez-vous supprimé avec succès' });
    } catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).json({ message: 'Erreur lors de la suppression du rendez-vous', error: error.message });
    }
});

export default router;
