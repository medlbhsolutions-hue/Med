import React from 'react';
import logo from '../assets/images/logo.png';
import teamImg from '../assets/images/team_medical.png';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-blue-50 overflow-hidden">
      {/* Fond motifs médicaux SVG */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.15">
            <rect x="50" y="50" width="120" height="120" rx="24" fill="#0056b3" />
            <circle cx="300" cy="120" r="60" fill="#ff6b00" />
            <rect x="500" y="80" width="100" height="100" rx="20" fill="#0056b3" />
            <circle cx="700" cy="150" r="40" fill="#ff6b00" />
            <rect x="200" y="350" width="140" height="80" rx="18" fill="#0056b3" />
            <circle cx="600" cy="400" r="50" fill="#ff6b00" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 bg-white bg-opacity-80 rounded-xl shadow-lg p-8">
        {/* Colonne gauche : logo + texte */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="MedLBH Logo" className="h-12 w-auto rounded" />
            <h2 className="text-3xl font-light text-blue-700">Qui sommes-nous ?</h2>
          </div>
          <div className="text-gray-700 text-lg space-y-2">
            <p className="text-blue-500 font-semibold text-xl">MedLBH Solutions – Medical & Human Bridges</p>
            <p><span className="font-bold">Fondatrice :</span> <span className="text-blue-700">Nadia Labhilil</span></p>
            <p><span className="font-bold">Siège :</span> <span className="text-blue-700">Casablanca – Grenoble</span></p>
            <div className="mt-4">
              <span className="font-bold text-orange-600 text-lg">Mission :</span>
              <span className="ml-2">Mettre en relation les talents médicaux, les établissements et les institutions pour construire un <span className="font-semibold text-blue-700">écosystème de santé performant et humain</span>.</span>
            </div>
            <div className="mt-2">
              <span className="font-bold text-blue-700 text-lg">Vision :</span>
              <span className="ml-2">Offrir aux cliniques privées une solution intégrée : <span className="font-semibold text-orange-600">recrutement</span>, <span className="font-semibold text-orange-600">installation</span>, <span className="font-semibold text-orange-600">accompagnement opérationnel</span>, <span className="font-semibold text-orange-600">recouvrement</span> et <span className="font-semibold text-orange-600">développement stratégique</span>.</span>
            </div>
          </div>
        </div>
        {/* Colonne droite : image équipe médicale */}
        <div className="flex-1 flex justify-center items-center">
          <div className="transform rotate-3 shadow-xl border-4 border-blue-100 bg-white">
            {teamImg ? (
              <img src={teamImg} alt="Équipe médicale MedLBH" className="rounded-lg w-80 h-auto object-cover" />
            ) : (
              <div className="w-80 h-56 flex items-center justify-center text-gray-400 bg-blue-50 rounded-lg border">Image d'équipe médicale</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
