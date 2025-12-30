import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, ShieldCheck, ArrowLeft, Bed, Users, Star, Award, Stethoscope } from 'lucide-react';
import { clinicService } from '../services/api';

const ClinicDetailPage = () => {
    const { id } = useParams();
    const [clinic, setClinic] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClinic = async () => {
            try {
                const { data } = await clinicService.getById(id);
                setClinic(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchClinic();
    }, [id]);

    if (loading) return <div className="h-screen flex items-center justify-center"><div className="animate-spin text-blue-600 text-4xl">C</div></div>;
    if (!clinic) return <div className="h-screen flex items-center justify-center">Clinique non trouvée</div>;

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Banner */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />
                <img
                    src={clinic.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"}
                    alt={clinic.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
                    <div className="container-custom">
                        <Link to="/clinics" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium">
                            <ArrowLeft size={20} /> Retour aux cliniques
                        </Link>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                        {clinic.city}
                                    </span>
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <Star fill="currentColor" size={16} />
                                        <Star fill="currentColor" size={16} />
                                        <Star fill="currentColor" size={16} />
                                        <Star fill="currentColor" size={16} />
                                        <Star fill="currentColor" size={16} />
                                    </div>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{clinic.name}</h1>
                                <p className="text-xl text-white/90 font-light flex items-center gap-2">
                                    <MapPin size={20} /> {clinic.address}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                                    Prendre Rendez-vous
                                </button>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                                    Contacter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Description */}
                    <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <HospitalIcon className="text-blue-600" />
                            À propos de l'établissement
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {clinic.description || "Cet établissement n'a pas encore fourni de description détaillée."}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                            <StatItem icon={Bed} value={clinic.beds} label="Lits" />
                            <StatItem icon={Users} value={clinic.staff} label="Médecins" />
                            <StatItem icon={ShieldCheck} value="Certifié" label="Qualité" />
                            <StatItem icon={Clock} value="24/7" label="Urgences" />
                        </div>
                    </section>

                    {/* Specialties */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Spécialités</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {clinic.specialties?.map((spec, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                        <Stethoscope size={24} />
                                    </div>
                                    <span className="font-semibold text-gray-800">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Founder Card */}
                    {clinic.founder && (
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Fondateur</h3>
                                <div className="text-2xl font-bold mb-1">{clinic.founder}</div>
                                <p className="text-white/60 text-sm">Directeur Médical</p>
                            </div>
                            <Award className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32" />
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                        <div className="space-y-6">
                            <ContactItem icon={Phone} label="Téléphone" value={clinic.phone} href={`tel:${clinic.phone}`} />
                            <ContactItem icon={Mail} label="Email" value={clinic.email} href={`mailto:${clinic.email}`} />
                            <ContactItem icon={MapPin} label="Adresse" value={clinic.address} />
                            <ContactItem icon={Globe} label="Site Web" value="www.site-clinique.ma" href="#" />
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-3xl h-64 w-full flex items-center justify-center text-gray-500 font-medium">
                        Carte Google Maps
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper Components
const StatItem = ({ icon: Icon, value, label }) => (
    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl">
        <Icon className="text-blue-600 mb-2" size={24} />
        <span className="text-xl font-bold text-gray-900">{value}</span>
        <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
    </div>
);

const ContactItem = ({ icon: Icon, label, value, href }) => (
    <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
            <Icon size={20} />
        </div>
        <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</div>
            {href ? (
                <a href={href} className="text-gray-900 font-medium hover:text-blue-600 transition block break-all">
                    {value || 'Non renseigné'}
                </a>
            ) : (
                <div className="text-gray-900 font-medium break-words">{value || 'Non renseigné'}</div>
            )}
        </div>
    </div>
);

const HospitalIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12 6v4" />
        <path d="M14 14h-4" />
        <path d="M14 18h-4" />
        <path d="M14 8h-4" />
        <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
        <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
);

export default ClinicDetailPage;
