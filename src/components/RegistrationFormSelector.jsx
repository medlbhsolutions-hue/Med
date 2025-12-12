import React, { useState } from 'react';
import FormulaireMedecinInternational from './forms/FormulaireMedecinInternational';
import FormulaireRecrutementClinique from './forms/FormulaireRecrutementClinique';
import FormulaireLancementActivite from './forms/FormulaireLancementActivite';

const formOptions = [
  {
    key: 'medecin',
    label: "Médecin International",
    description: "Pour les médecins souhaitant une carrière internationale."
  },
  {
    key: 'clinique',
    label: "Recrutement Clinique",
    description: "Pour les cliniques et établissements de santé."
  },
  {
    key: 'activite',
    label: "Lancement d'Activité",
    description: "Pour les établissements en création ou développement."
  }
];

export default function RegistrationFormSelector() {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Choisissez votre formulaire d'inscription</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
        {formOptions.map(option => (
          <button
            key={option.key}
            className={`flex-1 border rounded-lg p-4 text-left transition-colors duration-200 ${selectedForm === option.key ? 'border-blue-700 bg-blue-50' : 'border-gray-200 bg-gray-50'} hover:border-blue-700`}
            onClick={() => setSelectedForm(option.key)}
          >
            <span className="font-semibold text-blue-700">{option.label}</span>
            <p className="text-sm text-gray-600 mt-1">{option.description}</p>
          </button>
        ))}
      </div>
      <div className="mt-4">
        {selectedForm === 'medecin' && <FormulaireMedecinInternational />}
        {selectedForm === 'clinique' && <FormulaireRecrutementClinique />}
        {selectedForm === 'activite' && <FormulaireLancementActivite />}
        {!selectedForm && (
          <p className="text-center text-gray-500">Veuillez choisir un formulaire pour commencer votre inscription.</p>
        )}
      </div>
    </div>
  );
}
