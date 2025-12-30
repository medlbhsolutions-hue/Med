import { motion } from 'framer-motion';
import { MapPin, Building2, Users, Bed, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClinicCard = ({ clinic }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full"
        >
            {/* Image / Header */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                    src={clinic.logo || "https://images.unsplash.com/photo-1516549655169-df83a06745ed?auto=format&fit=crop&q=80"}
                    alt={clinic.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                    <span className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                        {clinic.city}
                    </span>
                    <h3 className="font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                        {clinic.name}
                    </h3>
                </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-grow flex flex-col">
                {/* Specs */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl justify-around">
                    <div className="flex flex-col items-center">
                        <Bed size={18} className="text-blue-500 mb-1" />
                        <span className="font-semibold text-gray-900">{clinic.beds || '-'}</span>
                        <span className="text-[10px]">Lits</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div className="flex flex-col items-center">
                        <Users size={18} className="text-purple-500 mb-1" />
                        <span className="font-semibold text-gray-900">{clinic.staff || '-'}</span>
                        <span className="text-[10px]">Staff</span>
                    </div>
                </div>

                {/* Description or Specialties */}
                <div className="mb-6 flex-grow">
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {clinic.description || "Aucune description disponible pour le moment."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {clinic.specialties?.slice(0, 3).map((spec, i) => (
                            <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg">
                                {spec}
                            </span>
                        ))}
                        {clinic.specialties?.length > 3 && (
                            <span className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-lg">
                                +{clinic.specialties.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* Details Button */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={14} />
                        {clinic.address}
                    </div>
                    <Link
                        to={`/clinics/${clinic.id}`}
                        className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                    >
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ClinicCard;
