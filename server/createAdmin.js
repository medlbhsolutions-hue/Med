import 'dotenv/config'; // Charge les variables .env
import { sequelize } from './models/db.js';
import User from './models/User.js';

const createAdmin = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection to database established.');

        // Sync models (just in case)
        await sequelize.sync();

        // Check if admin exists
        const adminExists = await User.findOne({ where: { email: 'admin@medlbh.com' } });

        if (adminExists) {
            console.log('⚠️ Admin user already exists.');
            // Update password just in case
            adminExists.password = 'admin123';
            adminExists.role = 'admin';
            await adminExists.save();
            console.log('🔒 Admin password reset to: admin123');
        } else {
            const newAdmin = await User.create({
                name: 'Super Admin',
                prenom: 'MedLBH',
                email: 'admin@medlbh.com',
                password: 'admin123', // Will be hashed by hooks
                role: 'admin',
                phone: '0000000000',
                address: 'HQ'
            });
            console.log('🎉 Admin user created successfully!');
            console.log('📧 Email: admin@medlbh.com');
            console.log('🔑 Password: admin123');
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating admin:', error);
        process.exit(1);
    }
};

createAdmin();
