import mongoose from 'mongoose';

const clinicSchema = new mongoose.Schema({
  name: String,
  founder: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  country: String,
  specialties: [String],
  beds: Number,
  staff: Number,
  description: String,
  logo: String,
  userId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Clinic', clinicSchema);
