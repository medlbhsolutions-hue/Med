import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BarChart3, Users, Calendar, FileText } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-light pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats */}
          {[
            { icon: Users, label: 'Patients', value: '324', color: 'primary' },
            { icon: Calendar, label: 'Rendez-vous', value: '48', color: 'secondary' },
            { icon: FileText, label: 'Dossiers', value: '156', color: 'accent' },
            { icon: BarChart3, label: 'Chiffre d\'affaires', value: '€125K', color: 'primary' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  </div>
                  <Icon className="text-gray-300" size={40} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="card">
          <div className="border-b border-gray-200 flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-4 font-semibold transition ${
                activeTab === 'overview'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Aperçu
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`pb-3 px-4 font-semibold transition ${
                activeTab === 'history'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Historique
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-3 px-4 font-semibold transition ${
                activeTab === 'profile'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Profil
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-6">Bienvenue, {user?.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Activités récentes</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-primary">✓</span>
                        <span>Consultation Dr. Ahmed - 5 nov 2024</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary">✓</span>
                        <span>Rapport médical généré - 3 nov 2024</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary">✓</span>
                        <span>Paiement reçu - 1 nov 2024</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Prochains rendez-vous</h4>
                    <div className="bg-light p-4 rounded-lg">
                      <p className="font-semibold">Dr. Fatima</p>
                      <p className="text-sm text-gray-600">12 nov 2024 à 14:30</p>
                      <p className="text-sm text-gray-600 mt-2">Consultation générale</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Historique</h3>
                <div className="space-y-3">
                  {['Consultation - 15 nov', 'Examen - 10 nov', 'Prescription - 5 nov', 'Suivi - 1 nov'].map((item, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <p className="font-semibold text-gray-800">{item}</p>
                      <p className="text-sm text-gray-600 mt-1">Cliquez pour voir les détails</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Informations personnelles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Nom</label>
                    <p className="text-gray-800">{user?.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                    <p className="text-gray-800">{user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Rôle</label>
                    <p className="text-gray-800 capitalize">{user?.role}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Téléphone</label>
                    <p className="text-gray-800">+212 6 XX XX XX XX</p>
                  </div>
                </div>
                <button className="btn-primary mt-6">Modifier le profil</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
