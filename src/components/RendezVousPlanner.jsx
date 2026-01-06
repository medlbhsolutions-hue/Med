import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Video, CheckCircle2, X, User, Mail, Phone, Loader2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { appointmentService } from '../services/api';

const RendezVousPlanner = ({ onClose }) => {
  // Steps: 'selection' -> 'details' -> 'success'
  const [step, setStep] = useState('selection');

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDateObj, setSelectedDateObj] = useState(null);
  const [selectedHour, setSelectedHour] = useState('');
  const [type, setType] = useState('presentiel');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // User details form
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [days, setDays] = useState([]);

  // Generate next 5 working days dynamically
  useEffect(() => {
    const nextDays = [];
    let d = new Date();
    // Skip today to avoid "past" times issues for simplicity, or start tomorrow
    d.setDate(d.getDate() + 1);

    let count = 0;
    while (count < 5) {
      if (d.getDay() !== 0 && d.getDay() !== 6) { // Exclude Sat/Sun
        const dayName = d.toLocaleDateString('fr-FR', { weekday: 'long' });
        const dateStr = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
        // Capitalize first letter
        const formattedName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

        nextDays.push({
          name: formattedName,
          date: dateStr,
          fullDate: new Date(d), // Clone
          available: true // Assuming all future weekdays are available for now
        });
        count++;
      }
      d.setDate(d.getDate() + 1);
    }
    setDays(nextDays);
  }, []);

  const hours = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleNextStep = () => {
    if (selectedDay && selectedHour) {
      setStep('details');
    }
  };

  const handleBack = () => {
    setStep('selection');
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Construct date object
      const dateToSubmit = new Date(selectedDateObj);
      const [h, m] = selectedHour.split(':');
      dateToSubmit.setHours(parseInt(h), parseInt(m));

      const payload = {
        patient_name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
        type: type === 'presentiel' ? 'Présentiel' : 'À distance',
        date: dateToSubmit.toISOString(),
        duration: '30 min', // Default
        notes: userDetails.notes
      };

      await appointmentService.requestAppointment(payload);
      setStep('success');

      // Auto close after 3 seconds
      setTimeout(() => {
        if (onClose) onClose();
      }, 4000);

    } catch (err) {
      console.error(err);
      setError('Une erreur est survenue lors de la réservation. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-100 custom-scrollbar"
        onClick={e => e.stopPropagation()}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#00A8E8 #f1f5f9'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#00A8E8] via-[#3dbfe6] to-[#5de0e6] text-white p-8 rounded-t-3xl shadow-lg z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
              <Calendar size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Planifier un rendez-vous</h2>
              <p className="text-white/80 text-sm">
                {step === 'selection' ? 'Choisissez votre créneau' : step === 'details' ? 'Vos coordonnées' : 'Confirmation'}
              </p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <AnimatePresence mode="wait">

            {/* STEP 1: SELECT SLOT */}
            {step === 'selection' && (
              <motion.div
                key="selection"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                {/* Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-lg flex items-center justify-center">
                      <MapPin size={16} className="text-white" />
                    </div>
                    Type de rendez-vous
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setType('presentiel')}
                      className={`p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${type === 'presentiel'
                        ? 'border-[#00A8E8] bg-gradient-to-br from-[#00A8E8]/10 to-[#5de0e6]/5 shadow-xl shadow-[#00A8E8]/20'
                        : 'border-gray-200 bg-white hover:border-[#00A8E8]/30 hover:shadow-lg'
                        }`}
                    >
                      <MapPin size={24} className={`mx-auto mb-2 ${type === 'presentiel' ? 'text-[#00A8E8]' : 'text-gray-400'}`} />
                      <div className={`font-semibold ${type === 'presentiel' ? 'text-[#00A8E8]' : 'text-gray-700'}`}>Présentiel</div>
                      <div className="text-xs text-gray-500 mt-1">À nos bureaux</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setType('distanciel')}
                      className={`p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${type === 'distanciel'
                        ? 'border-[#00A8E8] bg-gradient-to-br from-[#00A8E8]/10 to-[#5de0e6]/5 shadow-xl shadow-[#00A8E8]/20'
                        : 'border-gray-200 bg-white hover:border-[#00A8E8]/30 hover:shadow-lg'
                        }`}
                    >
                      <Video size={24} className={`mx-auto mb-2 ${type === 'distanciel' ? 'text-[#00A8E8]' : 'text-gray-400'}`} />
                      <div className={`font-semibold ${type === 'distanciel' ? 'text-[#00A8E8]' : 'text-gray-700'}`}>À distance</div>
                      <div className="text-xs text-gray-500 mt-1">Visioconférence</div>
                    </button>
                  </div>
                </div>

                {/* Days */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-lg flex items-center justify-center">
                      <Calendar size={16} className="text-white" />
                    </div>
                    Choisir un jour
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {days.map(day => (
                      <button
                        key={day.date}
                        type="button"
                        onClick={() => { setSelectedDay(day.name); setSelectedDateObj(day.fullDate); }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${selectedDay === day.name
                          ? 'border-[#00A8E8] bg-gradient-to-br from-[#00A8E8]/10 to-[#5de0e6]/5 shadow-xl shadow-[#00A8E8]/20 scale-105'
                          : 'border-gray-200 bg-white hover:border-[#00A8E8]/50 hover:shadow-md hover:scale-105'
                          }`}
                      >
                        <div className={`text-xs font-semibold mb-1 ${selectedDay === day.name ? 'text-[#00A8E8]' : 'text-gray-500'}`}>
                          {day.name.substring(0, 3)}
                        </div>
                        <div className={`text-sm font-bold ${selectedDay === day.name ? 'text-[#00A8E8]' : 'text-gray-700'}`}>
                          {day.date}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-lg flex items-center justify-center">
                      <Clock size={16} className="text-white" />
                    </div>
                    Choisir une heure
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {hours.map(hour => (
                      <button
                        key={hour}
                        type="button"
                        onClick={() => setSelectedHour(hour)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-2 ${selectedHour === hour
                          ? 'border-[#00A8E8] bg-gradient-to-br from-[#00A8E8]/10 to-[#5de0e6]/5 shadow-xl shadow-[#00A8E8]/20 scale-105'
                          : 'border-gray-200 bg-white hover:border-[#00A8E8]/50 hover:shadow-md hover:scale-105'
                          }`}
                      >
                        <Clock size={16} className={selectedHour === hour ? 'text-[#00A8E8]' : 'text-gray-400'} />
                        <span className={`font-semibold ${selectedHour === hour ? 'text-[#00A8E8]' : 'text-gray-700'}`}>
                          {hour}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <div className="pt-4">
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDay || !selectedHour}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all ${selectedDay && selectedHour
                        ? 'bg-gradient-to-r from-[#00A8E8] to-[#0066FF] hover:shadow-lg hover:scale-[1.02]'
                        : 'bg-gray-300 cursor-not-allowed'
                      }`}
                  >
                    Continuer
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: USER DETAILS */}
            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-gray-800">Vos informations</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        required
                        type="text"
                        value={userDetails.name}
                        onChange={e => setUserDetails({ ...userDetails, name: e.target.value })}
                        className="w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A8E8] bg-white"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          required
                          type="email"
                          value={userDetails.email}
                          onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                          className="w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A8E8] bg-white"
                          placeholder="exemple@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          required
                          type="tel"
                          value={userDetails.phone}
                          onChange={e => setUserDetails({ ...userDetails, phone: e.target.value })}
                          className="w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A8E8] bg-white"
                          placeholder="+212 6..."
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optionnel)</label>
                    <textarea
                      value={userDetails.notes}
                      onChange={e => setUserDetails({ ...userDetails, notes: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A8E8] bg-white h-24 resize-none"
                      placeholder="Précisez le motif de votre consultation..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl flex items-center gap-2 text-sm">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-1/3 py-4 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex-1 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${loading
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#00A8E8] to-[#0066FF] hover:shadow-lg hover:scale-[1.02]'
                        }`}
                    >
                      {loading ? <Loader2 className="animate-spin" /> : <CheckCircle2 />}
                      Confirmer le rendez-vous
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 3: SUCCESS */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Demande envoyée !
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">{selectedDay}</span> à <span className="font-semibold">{selectedHour}</span>
                </p>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  Votre demande a bien été reçue. Nous vous contacterons par email ou téléphone pour la confirmation définitive.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RendezVousPlanner;