import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, User, Plus, Search, ChevronLeft, ChevronRight, CheckCircle, XCircle, Loader, AlertCircle } from 'lucide-react';
import { appointmentService } from '../../services/api';

const AppointmentsSection = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);

    // New Appointment Form State
    const [newAppointment, setNewAppointment] = useState({
        patient_name: '',
        type: 'Consultation',
        time: '09:00',
        duration: '30 min',
        notes: ''
    });

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            setLoading(true);
            const response = await appointmentService.getAll();
            // Transform backend data if necessary or use as is
            // Assuming backend returns array of appointments
            setAppointments(response.data);
            setError(null);
        } catch (err) {
            console.error(err);
            // Fallback to empty array if error, but show error message
            setError('Impossible de charger les rendez-vous.');
            // KEEP MOCK DATA FOR DEMO IF API FAILS (Optional, but good for "In Progress" feel)
            // Remove this in production
            // setAppointments([
            //     { id: 1, date: new Date().toISOString(), time: '09:00', patient_name: 'Jean Dupont (Demo)', type: 'Consultation', status: 'confirmed', duration: '30 min' }
            // ]);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateAppointment = async (e) => {
        e.preventDefault();
        try {
            // Combine date and time
            const dateObj = new Date(selectedDate);
            const [hours, minutes] = newAppointment.time.split(':');
            dateObj.setHours(parseInt(hours), parseInt(minutes));

            const payload = {
                ...newAppointment,
                date: dateObj.toISOString(),
                status: 'confirmed'
            };

            await appointmentService.create(payload);
            setShowCreateModal(false);
            setNewAppointment({ patient_name: '', type: 'Consultation', time: '09:00', duration: '30 min', notes: '' });
            fetchAppointments(); // Refresh list
        } catch (err) {
            console.error('Error creating appointment:', err);
            setError('Erreur lors de la création.');
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await appointmentService.updateStatus(id, status);
            // Optimistic update or refresh
            setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status } : apt));
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };

    // Filter appointments for selected date (simple comparison just for day)
    const filteredAppointments = appointments.filter(apt => {
        const aptDate = new Date(apt.date || apt.created_at); // Use Date field
        return aptDate.toDateString() === selectedDate.toDateString();
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

    // Calculate times from date string if not stored separately
    const getFormattedTime = (dateString) => {
        return new Date(dateString).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    };

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

    // Quick Stats Calculation
    const totalToday = filteredAppointments.length;
    const confirmedToday = filteredAppointments.filter(a => a.status === 'confirmed').length;
    const pendingToday = filteredAppointments.filter(a => a.status === 'pending').length;

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-2">
                    <button
                        onClick={() => setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)))}
                        className="p-2 hover:bg-white rounded-lg transition shadow-sm hover:shadow"
                    >
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <div className="flex items-center gap-2 px-2">
                        <CalendarIcon size={20} className="text-blue-500" />
                        <span className="font-bold text-gray-800 text-lg">
                            {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                    <button
                        onClick={() => setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)))}
                        className="p-2 hover:bg-white rounded-lg transition shadow-sm hover:shadow"
                    >
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
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1 transition-all"
                    >
                        <Plus size={20} />
                        <span className="hidden sm:inline">Nouveau RDV</span>
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2 border border-red-200">
                    <AlertCircle size={20} />
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Liste des RDV */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Clock size={20} className="text-blue-500" />
                        Timeline de la journée
                    </h3>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loader className="animate-spin text-blue-500" size={40} />
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative min-h-[300px]">
                            {/* Timeline Ligne Verticale */}
                            <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gray-100"></div>

                            {filteredAppointments.length === 0 ? (
                                <div className="text-center py-12 text-gray-400 pl-16">
                                    <p>Aucun rendez-vous prévu pour cette date.</p>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {filteredAppointments.map((apt) => (
                                        <div key={apt.id} className="relative pl-10 group">
                                            {/* Point Timeline */}
                                            <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-sm ring-2 ${apt.status === 'confirmed' ? 'ring-green-500 bg-green-500' :
                                                apt.status === 'pending' ? 'ring-orange-400 bg-orange-400' :
                                                    'ring-red-400 bg-red-400'
                                                }`}></div>

                                            <div className="bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100 cursor-pointer group-hover:scale-[1.01]">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-mono font-bold text-lg text-gray-800">
                                                            {getFormattedTime(apt.date)}
                                                        </span>
                                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">{apt.duration}</span>
                                                    </div>
                                                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${getStatusColor(apt.status)}`}>
                                                        {getStatusLabel(apt.status)}
                                                    </span>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h4 className="font-bold text-gray-800 text-lg">{apt.patient_name}</h4>
                                                        <p className="text-sm text-gray-500">{apt.type}</p>
                                                        {apt.notes && <p className="text-xs text-gray-400 mt-1 italic">{apt.notes}</p>}
                                                    </div>
                                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        {apt.status !== 'confirmed' && (
                                                            <button
                                                                onClick={(e) => { e.stopPropagation(); handleStatusUpdate(apt.id, 'confirmed'); }}
                                                                className="p-2 bg-white rounded-lg shadow-sm text-green-600 hover:text-green-700 hover:bg-green-50"
                                                                title="Confirmer"
                                                            >
                                                                <CheckCircle size={18} />
                                                            </button>
                                                        )}
                                                        {apt.status !== 'cancelled' && (
                                                            <button
                                                                onClick={(e) => { e.stopPropagation(); handleStatusUpdate(apt.id, 'cancelled'); }}
                                                                className="p-2 bg-white rounded-lg shadow-sm text-red-600 hover:text-red-700 hover:bg-red-50"
                                                                title="Annuler"
                                                            >
                                                                <XCircle size={18} />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Calendar Mini-Widget & Quick Stats */}
                <div className="space-y-6">
                    {/* Mini Calendar Placeholder - Calendar functionality could be expanded later */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-gray-800">Calendrier</h4>
                            <span className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">Voir tout</span>
                        </div>
                        {/* Simple Calendar Grid Mockup - Visual Only For Now */}
                        <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
                            <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
                        </div>
                        <div className="grid grid-cols-7 text-center gap-y-3 mb-2 text-sm font-medium text-gray-700">
                            {/* Just a visual representation for now */}
                            <span className="text-gray-300">28</span><span className="text-gray-300">29</span><span className="text-gray-300">30</span>
                            <span>1</span><span>2</span><span>3</span><span>4</span>
                            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto shadow-sm">Today</span>
                            <span>...</span>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-blue-600 rounded-2xl p-6 shadow-lg shadow-blue-200 text-white">
                        <h4 className="font-bold text-lg mb-1">Aperçu du jour</h4>
                        <p className="text-blue-100 text-sm mb-4">You have a busy day ahead!</p>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-blue-100 text-sm">Total RDV</span>
                                <span className="font-bold text-xl">{totalToday}</span>
                            </div>
                            <div className="w-full bg-blue-500 rounded-full h-1.5">
                                <div
                                    className="bg-white rounded-full h-1.5 transition-all duration-500"
                                    style={{ width: totalToday ? `${(confirmedToday / totalToday) * 100}%` : '0%' }}
                                ></div>
                            </div>

                            <div className="flex justify-between items-center pt-2">
                                <span className="text-blue-100 text-sm">Confirmés</span>
                                <span className="font-bold text-lg">{confirmedToday}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-blue-100 text-sm">En attente</span>
                                <span className="font-bold text-lg text-yellow-300">{pendingToday}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
                        <h3 className="text-xl font-bold mb-4">Nouveau Rendez-vous</h3>
                        <form onSubmit={handleCreateAppointment} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                                <input
                                    type="text"
                                    required
                                    value={newAppointment.patient_name}
                                    onChange={e => setNewAppointment({ ...newAppointment, patient_name: e.target.value })}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Nom du patient"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Heure</label>
                                    <input
                                        type="time"
                                        required
                                        value={newAppointment.time}
                                        onChange={e => setNewAppointment({ ...newAppointment, time: e.target.value })}
                                        className="w-full p-2 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Durée</label>
                                    <select
                                        value={newAppointment.duration}
                                        onChange={e => setNewAppointment({ ...newAppointment, duration: e.target.value })}
                                        className="w-full p-2 border rounded-lg"
                                    >
                                        <option>15 min</option>
                                        <option>30 min</option>
                                        <option>45 min</option>
                                        <option>60 min</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                <select
                                    value={newAppointment.type}
                                    onChange={e => setNewAppointment({ ...newAppointment, type: e.target.value })}
                                    className="w-full p-2 border rounded-lg"
                                >
                                    <option>Consultation</option>
                                    <option>Suivi</option>
                                    <option>Examen</option>
                                    <option>Urgence</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowCreateModal(false)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Créer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppointmentsSection;
