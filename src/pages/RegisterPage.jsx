import { useState } from 'react';
import { authService } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import RegistrationFormSelector from '../components/RegistrationFormSelector';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'clinic', // clinic or doctor
    clinicName: '',
    specialization: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    setLoading(true);
    try {
      const response = await authService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        clinicName: formData.clinicName,
        specialization: formData.specialization,
      });

      // Redirect to login
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur s\'est produite');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 py-10 flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto bg-white rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center tracking-tight">Créer un compte</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-bold text-blue-700 mb-2">Nom</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-base font-bold text-blue-700 mb-2">Prénom</label>
              <input type="text" name="prenom" value={formData.prenom || ''} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre prénom" />
            </div>
          </div>
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre email" />
          </div>
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Mot de passe</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Mot de passe" />
          </div>
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Confirmer le mot de passe</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Confirmez le mot de passe" />
          </div>
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Téléphone</label>
            <input type="tel" name="telephone" value={formData.telephone || ''} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all duration-200" placeholder="Votre téléphone" />
          </div>
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Type d'utilisateur</label>
            <select name="role" value={formData.role} onChange={handleChange} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm">
              <option value="clinic">Clinique</option>
              <option value="doctor">Médecin</option>
              <option value="other">Autre</option>
            </select>
          </div>
          {formData.role === 'clinic' && (
            <div>
              <label className="block text-base font-bold text-blue-700 mb-2">Nom de la clinique</label>
              <input type="text" name="clinicName" value={formData.clinicName} onChange={handleChange} className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm" placeholder="Nom de la clinique" />
            </div>
          )}
          {formData.role === 'doctor' && (
            <div>
              <label className="block text-base font-bold text-blue-700 mb-2">Spécialité</label>
              <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm" placeholder="Spécialité médicale" />
            </div>
          )}
          {error && <div className="text-red-600 mb-2 text-center font-semibold">{error}</div>}
          <button type="submit" className="w-full bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 active:scale-95">
            {loading ? 'Inscription...' : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
