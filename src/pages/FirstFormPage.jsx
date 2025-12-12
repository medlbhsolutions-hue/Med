import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationFormSelector from '../components/RegistrationFormSelector';

export default function FirstFormPage() {
  const navigate = useNavigate();

  // Callback à passer au RegistrationFormSelector pour marquer le formulaire comme rempli
  const handleFormSubmitted = () => {
    localStorage.setItem('firstFormDone', 'true');
    navigate('/dashboard');
  };

  useEffect(() => {
    // Si déjà rempli, rediriger vers dashboard
    if (localStorage.getItem('firstFormDone') === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto">
        <RegistrationFormSelector onFormSubmitted={handleFormSubmitted} />
      </div>
    </div>
  );
}
