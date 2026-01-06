import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const createAdmin = async () => {
    const email = 'admin@medlbh.com';
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // 1. Check if user exists in our 'users' table
    const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "Row not found"
        console.error('Error checking user:', fetchError);
        return;
    }

    if (existingUser) {
        console.log('User already exists in public.users table. Updating role to admin...');
        const { error: updateError } = await supabase
            .from('users')
            .update({ role: 'admin', password: hashedPassword })
            .eq('email', email);

        if (updateError) console.error('Error updating user:', updateError);
        else console.log('✅ User updated to ADMIN successfully.');
    } else {
        console.log('Creating new Admin user...');
        const { error: insertError } = await supabase
            .from('users')
            .insert([{
                email,
                password: hashedPassword,
                role: 'admin',
                name: 'Super Admin'
            }]);

        if (insertError) console.error('Error creating user:', insertError);
        else console.log('✅ Admin user created successfully.');
    }
};

createAdmin();
