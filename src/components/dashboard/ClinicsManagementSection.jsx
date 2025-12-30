import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Search, MapPin, Building2, Upload } from 'lucide-react';
import { clinicService } from '../../services/api';

const ClinicsManagementSection = () => {
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        address: '',
        description: '',
        beds: '',
        staff: '',
        specialties: '',
        image: ''
    });

    useEffect(() => {
        fetchClinics();
    }, []);

    const fetchClinics = async () => {
        try {
            const { data } = await clinicService.getAll();
            setClinics(data || []);
        } catch (error) {
            console.error('Error fetching clinics:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (clinic = null) => {
        if (clinic) {
            setSelectedClinic(clinic);
            // Convert array to string for edit input if needed
            setFormData({
                ...clinic,
                specialties: Array.isArray(clinic.specialties) ? clinic.specialties.join(', ') : clinic.specialties || ''
            });
        } else {
            setSelectedClinic(null);
            setFormData({ name: '', city: '', address: '', description: '', beds: '', staff: '', specialties: '', image: '' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            // Convert string 'Cardio, Onco' back to array ['Cardio', 'Onco']
            specialties: typeof formData.specialties === 'string'
                ? formData.specialties.split(',').map(s => s.trim()).filter(Boolean)
                : formData.specialties
        };

        try {
            if (selectedClinic) {
                await clinicService.update(selectedClinic.id, payload);
            } else {
                await clinicService.create(payload);
            }
            setIsModalOpen(false);
            fetchClinics(); // Refresh list
        } catch (error) {
            alert('Erreur lors de la sauvegarde : ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette clinique ?')) return;
        try {
            await clinicService.delete(id);
            setClinics(clinics.filter(c => c.id !== id));
        } catch (error) {
            alert('Erreur lors de la suppression');
        }
    };

    const filteredClinics = clinics.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.city?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Gestion des Cliniques</h2>
                    <p className="text-gray-500 text-sm">Gérez votre réseau de partenaires</p>
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => handleOpenModal()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition-colors"
                    >
                        <Plus size={18} />
                        Ajouter
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClinics.map(clinic => (
                    <div key={clinic.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <Building2 size={24} />
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleOpenModal(clinic)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                                    <Edit2 size={16} />
                                </button>
                                <button onClick={() => handleDelete(clinic.id)} className="p-2 hover:bg-red-50 rounded-lg text-red-500">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <h3 className="font-bold text-gray-900 mb-1">{clinic.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                            <MapPin size={14} />
                            {clinic.city}
                        </div>

                        <div className="flex gap-2 text-xs">
                            <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md border border-green-100">
                                {clinic.staff || 0} Staff
                            </span>
                            <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md border border-purple-100">
                                {clinic.beds || 0} Lits
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {selectedClinic ? 'Modifier la Clinique' : 'Nouvelle Clinique'}
                                </h3>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">X</button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Nom de la clinique</label>
                                        <input
                                            required
                                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Ville</label>
                                        <input
                                            required
                                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.city}
                                            onChange={e => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Adresse complète</label>
                                        <input
                                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.address}
                                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Nombre de lits</label>
                                        <input
                                            type="number"
                                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.beds}
                                            onChange={e => setFormData({ ...formData, beds: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Staff médical</label>
                                        <input
                                            type="number"
                                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.staff}
                                            onChange={e => setFormData({ ...formData, staff: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Spécialités (séparées par des virgules)</label>
                                        <input
                                            placeholder="Ex: Cardiologie, Neurologie, ..."
                                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.specialties}
                                            onChange={e => setFormData({ ...formData, specialties: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">URL de l'image (Logo/Photo)</label>
                                        <div className="flex gap-2">
                                            <input
                                                placeholder="https://..."
                                                className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                                value={formData.image}
                                                onChange={e => setFormData({ ...formData, image: e.target.value })}
                                            />
                                            {/* Future: Add real file upload here */}
                                            <button type="button" className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200" title="Upload (Soon)">
                                                <Upload size={20} className="text-gray-500" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-2 space-y-1">
                                        <label className="text-sm font-semibold text-gray-700">Description</label>
                                        <textarea
                                            rows={4}
                                            className="w-full p-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.description}
                                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-6 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium"
                                    >
                                        Annuler
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-medium shadow-lg shadow-blue-500/30"
                                    >
                                        {loading ? 'Sauvegarde...' : 'Enregistrer'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ClinicsManagementSection;
