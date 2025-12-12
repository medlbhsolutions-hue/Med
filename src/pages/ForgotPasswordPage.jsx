import { useState } from 'react';
import { authService } from '../services/api';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await authService.forgotPassword(email);
      setSent(true);
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'envoi du mail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-10">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Mot de passe oublié</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-bold text-blue-700 mb-2">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm" placeholder="Votre email" />
          </div>
          {error && <div className="text-red-600 mb-2 text-center font-semibold">{error}</div>}
          <button type="submit" className="w-full bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 active:scale-95">
            {loading ? 'Envoi...' : 'Envoyer le lien de réinitialisation'}
          </button>
        </form>
        {sent && (
          <div className="mt-8 text-green-700 font-bold text-center text-lg bg-green-100 px-6 py-4 rounded-xl shadow-lg">
            Un email de réinitialisation a été envoyé !
          </div>
        )}
      </div>
    </div>
  );
}
