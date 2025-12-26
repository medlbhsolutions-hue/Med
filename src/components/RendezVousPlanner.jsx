import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Video, CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';

const RendezVousPlanner = ({ onClose }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [type, setType] = useState('presentiel');
  const [sent, setSent] = useState(false);

  const days = [
    { name: 'Lundi', date: '26 Déc', available: true },
    { name: 'Mardi', date: '27 Déc', available: false },
    { name: 'Mercredi', date: '28 Déc', available: true },
    { name: 'Jeudi', date: '29 Déc', available: true },
    { name: 'Vendredi', date: '30 Déc', available: false }
  ];

  const hours = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      if (onClose) onClose();
    }, 3000);
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
        <div className="sticky top-0 bg-gradient-to-r from-[#00A8E8] via-[#3dbfe6] to-[#5de0e6] text-white p-8 rounded-t-3xl shadow-lg z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Planifier un rendez-vous</h2>
                <p className="text-white/80 text-sm">Choisissez votre créneau préféré</p>
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
        </div>

        {/* Content */}
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Type de rendez-vous */}
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
                    <div className={`font-semibold ${type === 'presentiel' ? 'text-[#00A8E8]' : 'text-gray-700'}`}>
                      Présentiel
                    </div>
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
                    <div className={`font-semibold ${type === 'distanciel' ? 'text-[#00A8E8]' : 'text-gray-700'}`}>
                      À distance
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Visioconférence</div>
                  </button>
                </div>
              </div>

              {/* Jour */}
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
                      key={day.name}
                      type="button"
                      disabled={!day.available}
                      onClick={() => day.available && setSelectedDay(day.name)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${!day.available
                        ? 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                        : selectedDay === day.name
                          ? 'border-[#00A8E8] bg-gradient-to-br from-[#00A8E8]/10 to-[#5de0e6]/5 shadow-xl shadow-[#00A8E8]/20 scale-105'
                          : 'border-gray-200 bg-white hover:border-[#00A8E8]/50 hover:shadow-md hover:scale-105'
                        }`}
                    >
                      <div className={`text-xs font-semibold mb-1 ${selectedDay === day.name ? 'text-[#00A8E8]' : 'text-gray-500'
                        }`}>
                        {day.name.substring(0, 3)}
                      </div>
                      <div className={`text-sm font-bold ${selectedDay === day.name ? 'text-[#00A8E8]' : 'text-gray-700'
                        }`}>
                        {day.date}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Heure */}
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
                      <span className={`font-semibold ${selectedHour === hour ? 'text-[#00A8E8]' : 'text-gray-700'
                        }`}>
                        {hour}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!selectedDay || !selectedHour}
                whileHover={{ scale: selectedDay && selectedHour ? 1.03 : 1 }}
                whileTap={{ scale: selectedDay && selectedHour ? 0.97 : 1 }}
                className={`relative overflow-hidden w-full py-5 px-8 rounded-2xl font-bold text-lg shadow-xl transition-all duration-500 group ${selectedDay && selectedHour
                  ? 'bg-gradient-to-r from-[#00A8E8] via-[#3dbfe6] to-[#5de0e6] text-white hover:shadow-2xl hover:shadow-[#00A8E8]/40 border border-white/20'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {selectedDay && selectedHour && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} />
                  Valider le créneau
                </span>
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Rendez-vous confirmé !
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">{selectedDay}</span> à <span className="font-semibold">{selectedHour}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Vous recevrez une confirmation par email
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RendezVousPlanner;