import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db.js';
import bcrypt from 'bcryptjs';

class User extends Model {
  async comparePassword(plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  }
}

User.init({
  name: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'clinic' },
  clinicName: { type: DataTypes.STRING },
  specialization: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      user.password = await bcrypt.hash(user.password, 10);
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  }
});

export default User;
