import HeroSection from '../components/HeroSection';
import QualityCommitments from '../components/QualityCommitments';
import ServicePoles from '../components/ServicePoles';
import ContactSection from '../components/ContactSection';
import RendezVousPlanner from '../components/RendezVousPlanner';
// import { useState } from 'react';
import { useState } from 'react';

const HomePage = () => {
  const [showRdv, setShowRdv] = useState(false);
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="container mx-auto py-10 flex-1">
        <HeroSection />
        <QualityCommitments />
        <ServicePoles />
        <ContactSection />
      </div>
      {/* Bouton et formulaire en bas de page */}
      <div className="container mx-auto pb-10">
        <div className="mb-8">
          {!showRdv && (
            <button
              className="w-full bg-blue-700 text-white rounded-xl py-4 text-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-blue-800 transition"
              onClick={() => setShowRdv(true)}
            >
              <span role="img" aria-label="calendrier">📅</span>
              Planifier un rendez-vous
            </button>
          )}
          {showRdv && <RendezVousPlanner />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
