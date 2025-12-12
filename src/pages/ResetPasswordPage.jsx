import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authService } from '../services/api';

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    setLoading(true);
    try {
      await authService.resetPassword(token, password);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la réinitialisation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-10">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Réinitialiser le mot de passe</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Nouveau mot de passe</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm" placeholder="Nouveau mot de passe" />
          </div>
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Confirmer le mot de passe</label>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm" placeholder="Confirmez le mot de passe" />
          </div>
          {error && <div className="text-red-600 mb-2 text-center font-semibold">{error}</div>}
          <button type="submit" className="w-full bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 active:scale-95">
            {loading ? 'Réinitialisation...' : 'Réinitialiser'}
          </button>
        </form>
        {success && (
          <div className="mt-8 text-green-700 font-bold text-center text-lg bg-green-100 px-6 py-4 rounded-xl shadow-lg">
            Mot de passe réinitialisé ! Redirection...
          </div>
        )}
      </div>
    </div>
  );
}
