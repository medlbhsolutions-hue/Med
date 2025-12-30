import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, AlertCircle, Loader2, Building2 } from 'lucide-react';
import { clinicService } from '../services/api';
import ClinicCard from '../components/ClinicCard';

const ClinicsPage = () => {
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('All');

    useEffect(() => {
        fetchClinics();
    }, []);

    const fetchClinics = async () => {
        try {
            const { data } = await clinicService.getAll();
            setClinics(data || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Derived state for filtering
    const filteredClinics = clinics.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.specialties?.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCity = selectedCity === 'All' || c.city === selectedCity;
        return matchesSearch && matchesCity;
    });

    // Unique cities
    const cities = ['All', ...new Set(clinics.map(c => c.city).filter(Boolean))];

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-16">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
                    >
                        <Building2 size={16} />
                        Réseau Partenaire
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Nos Cliniques Partenaires
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Découvrez les établissements d'excellence qui constituent notre réseau de soin à travers le Maroc.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-center border border-gray-100">
                    <div className="flex-1 relative w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Rechercher une clinique, une spécialité..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-48">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <select
                                className="w-full pl-10 pr-8 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none font-medium text-gray-700"
                                value={selectedCity}
                                onChange={e => setSelectedCity(e.target.value)}
                            >
                                <option value="All">Toutes les villes</option>
                                {cities.filter(c => c !== 'All').map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                            <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="animate-spin text-blue-600" size={40} />
                    </div>
                ) : filteredClinics.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredClinics.map(clinic => (
                            <ClinicCard key={clinic.id} clinic={clinic} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="text-gray-400" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Aucune clinique trouvée</h3>
                        <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedCity('All'); }}
                            className="mt-4 text-blue-600 font-semibold hover:text-blue-700"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClinicsPage;
