import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_KEY');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const clinics = [
    {
        name: "Clinique Internationale de Marrakech",
        founder: "Dr. Hassan El Amrani",
        city: "Marrakech",
        address: "Route de l'Aéroport, Marrakech",
        specialties: ["Cardiologie", "Traumatologie", "Oncologie"],
        beds: 120,
        staff: 250,
        description: "Un établissement de référence offrant des soins de haute qualité avec un plateau technique de dernière génération.",
        logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200",
        email: "contact@cim.ma",
        phone: "+212 524 00 00 00"
    },
    {
        name: "Hôpital Privé de Casablanca",
        founder: "Groupe Akdital",
        city: "Casablanca",
        address: "Bouskoura, Casablanca",
        specialties: ["Chirurgie", "Maternité", "Urgences"],
        beds: 200,
        staff: 400,
        description: "Une structure multidisciplinaire alliant expertise médicale et confort hôtelier pour une prise en charge optimale.",
        logo: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=200",
        email: "info@hpc.ma",
        phone: "+212 522 00 00 00"
    },
    {
        name: "Clinique Errahma",
        founder: "Dr. Sarah Benjelloun",
        city: "Rabat",
        address: "Agdal, Rabat",
        specialties: ["Gynécologie", "Pédiatrie", "Médecine Interne"],
        beds: 80,
        staff: 150,
        description: "Spécialisée dans la santé de la femme et de l'enfant, offrant un cadre chaleureux et sécurisant.",
        logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=200",
        email: "contact@errahma.ma",
        phone: "+212 537 00 00 00"
    }
];

const seedClinics = async () => {
    console.log('🌱 Seeding clinics...');

    // Optional: Delete existing to avoid duplicates if iterating
    // await supabase.from('clinics').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    const { data, error } = await supabase
        .from('clinics')
        .insert(clinics)
        .select();

    if (error) {
        console.error('❌ Error seeding clinics:', error);
    } else {
        console.log(`✅ Successfully added ${data.length} clinics.`);
    }

    process.exit();
};

seedClinics();
