import React from 'react';
import { HeartPulse, Stethoscope, Building2, Users, TrendingUp } from 'lucide-react';

const poles = [
  {
    icon: <HeartPulse size={36} className="text-blue-700" />,
    title: 'Recrutement médical',
    description: "Sélection et mise en relation de talents médicaux adaptés à vos besoins."
  },
  {
    icon: <Building2 size={36} className="text-blue-700" />,
    title: "Installation d'établissements",
    description: "Accompagnement dans la création, l'installation et l'ouverture de structures de santé."
  },
  {
    icon: <Stethoscope size={36} className="text-blue-700" />,
    title: 'Accompagnement opérationnel',
    description: "Support quotidien pour la gestion, la qualité et l'organisation médicale."
  },
  {
    icon: <Users size={36} className="text-blue-700" />,
    title: 'Recouvrement',
    description: "Optimisation des processus de facturation et de recouvrement pour la pérennité financière."
  },
  {
    icon: <TrendingUp size={36} className="text-blue-700" />,
    title: 'Développement stratégique',
    description: "Conseil en stratégie, expansion et développement de votre établissement."
  }
];

export default function ServicePolesPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Nos pôles de services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {poles.map((pole, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg shadow">
              <div>{pole.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-1">{pole.title}</h3>
                <p className="text-gray-700">{pole.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
