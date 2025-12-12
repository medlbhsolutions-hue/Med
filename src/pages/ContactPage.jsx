import ContactSection from '../components/ContactSection';
import RendezVousPlanner from '../components/RendezVousPlanner';
import RegistrationFormSelector from '../components/RegistrationFormSelector';
import { useState } from 'react';

const ContactPage = () => {
  const [showRdv, setShowRdv] = useState(false);
  // Ajout du sélecteur de formulaire (importé en haut)
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <ContactSection onPlanifierClick={() => setShowRdv(true)} />
      <div className="w-full flex justify-center mt-8">
        <RegistrationFormSelector />
      </div>
      {showRdv && (
        <div className="w-full flex justify-center mt-8">
          <RendezVousPlanner />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
