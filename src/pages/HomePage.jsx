import HeroSection from '../components/HeroSection';
import ProductSearchSection from '../components/ProductSearchSection';
import QualityCommitments from '../components/QualityCommitments';
import ServicePoles from '../components/ServicePoles';
import ContactSection from '../components/ContactSection';
import RendezVousPlanner from '../components/RendezVousPlanner';
import { useState } from 'react';

const HomePage = () => {
  const [showRdv, setShowRdv] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <HeroSection />

      <ProductSearchSection />

      <div className="container-custom py-16 space-y-20">
        <QualityCommitments />
        <ServicePoles />
        <ContactSection />
      </div>

      {/* Bouton et formulaire en bas de page */}
      <div className="container-custom pb-16">
        <div className="flex justify-center mb-8">
          {!showRdv && (
            <button
              className="group relative px-12 py-6 bg-gradient-to-r from-[#00A8E8] via-[#3dbfe6] to-[#5de0e6] text-white rounded-2xl text-lg font-bold flex items-center justify-center gap-4 shadow-2xl hover:shadow-[#00A8E8]/50 hover:scale-105 transition-all duration-500 overflow-hidden border border-white/20 backdrop-blur-sm"
              onClick={() => setShowRdv(true)}
            >
              {/* Effet de brillance animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Icône calendrier avec animation */}
              <span role="img" aria-label="calendrier" className="text-3xl group-hover:scale-110 transition-transform duration-300">📅</span>

              {/* Texte */}
              <span className="relative z-10 tracking-wide">Planifier un rendez-vous</span>

              {/* Particules décoratives */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-150"></div>
            </button>
          )}
          {showRdv && <RendezVousPlanner onClose={() => setShowRdv(false)} />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

