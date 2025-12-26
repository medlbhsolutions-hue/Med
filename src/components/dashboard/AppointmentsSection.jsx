import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Plus, Search, ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';

const AppointmentsSection = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Mock Data
    const appointments = [
        { id: 1, time: '09:00', patient: 'Jean Dupont', type: 'Consultation', status: 'confirmed', duration: '30 min' },
        { id: 2, time: '10:00', patient: 'Marie Curie', type: 'Suivi', status: 'pending', duration: '45 min' },
        { id: 3, time: '11:30', patient: 'Albert Einstein', type: 'Examen', status: 'cancelled', duration: '30 min' },
        { id: 4, time: '14:00', patient: 'Isaac Newton', type: 'Consultation', status: 'confirmed', duration: '60 min' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'bg-green-100 text-green-600';
            case 'pending': return 'bg-orange-100 text-orange-600';
            case 'cancelled': return 'bg-red-100 text-red-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'confirmed': return 'Confirmé';
            case 'pending': return 'En attente';
            case 'cancelled': return 'Annulé';
            default: return status;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-2">
                    <button className="p-2 hover:bg-white rounded-lg transition shadow-sm hover:shadow">
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <div className="flex items-center gap-2 px-2">
                        <CalendarIcon size={20} className="text-blue-500" />
                        <span className="font-bold text-gray-800 text-lg">
                            {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                    <button className="p-2 hover:bg-white rounded-lg transition shadow-sm hover:shadow">
                        <ChevronRight size={20} className="text-gray-600" />
                    </button>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Rechercher un RDV..."
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1 transition-all">
                        <Plus size={20} />
                        <span className="hidden sm:inline">Nouveau RDV</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Liste des RDV */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Clock size={20} className="text-blue-500" />
                        Timeline de la journée
                    </h3>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
                        {/* Timeline Ligne Verticale */}
                        <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gray-100"></div>

                        <div className="space-y-8">
                            {appointments.map((apt) => (
                                <div key={apt.id} className="relative pl-10 group">
                                    {/* Point Timeline */}
                                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-sm ring-2 ${apt.status === 'confirmed' ? 'ring-green-500 bg-green-500' :
                                            apt.status === 'pending' ? 'ring-orange-400 bg-orange-400' :
                                                'ring-red-400 bg-red-400'
                                        }`}></div>

                                    <div className="bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100 cursor-pointer group-hover:scale-[1.01]">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono font-bold text-lg text-gray-800">{apt.time}</span>
                                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">{apt.duration}</span>
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${getStatusColor(apt.status)}`}>
                                                {getStatusLabel(apt.status)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-800 text-lg">{apt.patient}</h4>
                                                <p className="text-sm text-gray-500">{apt.type}</p>
                                            </div>
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 bg-white rounded-lg shadow-sm text-green-600 hover:text-green-700 hover:bg-green-50" title="Confirmer">
                                                    <CheckCircle size={18} />
                                                </button>
                                                <button className="p-2 bg-white rounded-lg shadow-sm text-red-600 hover:text-red-700 hover:bg-red-50" title="Annuler">
                                                    <XCircle size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Calendar Mini-Widget & Quick Stats */}
                <div className="space-y-6">
                    {/* Mini Calendar Placeholder */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-gray-800">Calendrier</h4>
                            <span className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">Voir tout</span>
                        </div>
                        {/* Simple Calendar Grid Mockup */}
                        <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
                            <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
                        </div>
                        <div className="grid grid-cols-7 text-center gap-y-3 mb-2 text-sm font-medium text-gray-700">
                            <span className="text-gray-300">28</span><span className="text-gray-300">29</span><span className="text-gray-300">30</span>
                            <span>1</span><span>2</span><span>3</span><span>4</span>
                            <span>5</span><span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto shadow-sm">6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
                            <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-blue-600 rounded-2xl p-6 shadow-lg shadow-blue-200 text-white">
                        <h4 className="font-bold text-lg mb-1">Aperçu du jour</h4>
                        <p className="text-blue-100 text-sm mb-4">You have a busy day ahead!</p>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-blue-100 text-sm">Total RDV</span>
                                <span className="font-bold text-xl">8</span>
                            </div>
                            <div className="w-full bg-blue-500 rounded-full h-1.5">
                                <div className="bg-white rounded-full h-1.5 w-3/4"></div>
                            </div>

                            <div className="flex justify-between items-center pt-2">
                                <span className="text-blue-100 text-sm">Confirmés</span>
                                <span className="font-bold text-lg">6</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-blue-100 text-sm">En attente</span>
                                <span className="font-bold text-lg text-yellow-300">2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsSection;
