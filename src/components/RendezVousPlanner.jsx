import React, { useState } from 'react';

const days = [
  { name: 'Lundi', available: true },
  { name: 'Mardi', available: false },
  { name: 'Mercredi', available: true },
  { name: 'Jeudi', available: true },
  { name: 'Vendredi', available: false }
];
const hours = Array.from({ length: 9 }, (_, i) => 9 + i);

export default function RendezVousPlanner() {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [type, setType] = useState('presentiel');
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        <span role="img" aria-label="calendrier">📅</span>
        Planifier un rendez-vous
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="font-semibold mb-2 block">Type de rendez-vous</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
            <option value="presentiel">Présentiel</option>
            <option value="distanciel">À distance</option>
          </select>
        </div>
        <div>
          <label className="font-semibold mb-2 block">Jour</label>
          <div className="grid grid-cols-5 gap-3">
            {days.map(day => (
              <button
                key={day.name}
                type="button"
                disabled={!day.available}
                className={`py-2 px-2 rounded-lg font-semibold text-sm border transition-all duration-200 transform
                  ${day.available ? 'bg-green-100 text-green-700 border-green-400 hover:bg-green-200 hover:scale-105 active:scale-95' : 'bg-red-100 text-red-500 border-red-300 cursor-not-allowed'}
                  ${selectedDay === day.name ? 'ring-2 ring-blue-500 shadow-lg scale-110' : ''}`}
                onClick={() => day.available && setSelectedDay(day.name)}
                style={{ transition: 'box-shadow 0.3s, transform 0.2s' }}
              >
                {day.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="font-semibold mb-2 block">Heure</label>
          <div className="grid grid-cols-3 gap-2">
            {hours.map(hour => (
              <button
                key={hour}
                type="button"
                className={`py-2 px-2 rounded-lg font-semibold text-sm border bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-200 hover:scale-105 active:scale-95 transition-all duration-200 transform
                  ${selectedHour === `${hour}:00` ? 'ring-2 ring-blue-500 shadow-lg scale-110' : ''}`}
                onClick={() => setSelectedHour(`${hour}:00`)}
                style={{ transition: 'box-shadow 0.3s, transform 0.2s' }}
              >
                {hour}:00
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-blue-800 transition shadow-lg mt-4"
          disabled={!selectedDay || !selectedHour}
        >
          Valider le créneau
        </button>
      </form>
      {sent && (
        <div className="mt-8 flex flex-col items-center justify-center animate-bounce-in">
          <svg className="w-16 h-16 text-green-500 mb-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
          </svg>
          <div className="text-green-700 font-bold text-xl bg-green-100 px-6 py-4 rounded-xl shadow-lg animate-fade-in">
            Votre demande de rendez-vous a été enregistrée !
          </div>
        </div>
      )}
    </div>
  );
}