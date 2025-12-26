import { useState } from 'react';
import { Search, ChevronRight, Package, Stethoscope, Activity, Heart, Pill, Syringe, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductSearchSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const categories = [
        { id: 'anesthesie', name: 'Anesthésie', icon: Syringe, color: 'from-blue-500 to-cyan-500', count: '150+' },
        { id: 'biologie', name: 'Biologie', icon: Activity, color: 'from-green-500 to-emerald-500', count: '200+' },
        { id: 'cardiologie', name: 'Cardiologie', icon: Heart, color: 'from-red-500 to-pink-500', count: '120+' },
        { id: 'chirurgie', name: 'Chirurgie', icon: Stethoscope, color: 'from-purple-500 to-indigo-500', count: '180+' },
        { id: 'coloscopie', name: 'Coloscopie', icon: Package, color: 'from-orange-500 to-amber-500', count: '90+' },
        { id: 'medicaments', name: 'Médicaments', icon: Pill, color: 'from-teal-500 to-cyan-500', count: '300+' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        window.location.href = `/products?search=${searchQuery}&category=${selectedCategory}`;
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5de0e6] via-[#00A8E8] to-[#004AAD]">
                {/* Animated Orbs */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5de0e6] rounded-full mix-blend-overlay filter blur-3xl"
                    />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.1]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-white font-semibold text-sm">Distributeur de dispositifs médicaux</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Trouvez votre équipement médical
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Équipements, matériel et consommable de qualité pour vos établissements de santé
                    </p>
                </motion.div>

                {/* Premium Search Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto mb-16"
                >
                    <div className="relative">
                        {/* Glassmorphism Card */}
                        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <form onSubmit={handleSearch} className="space-y-6">
                                {/* Search Input with Dropdown */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                    {/* Category Dropdown */}
                                    <div className="md:col-span-4 relative">
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="w-full px-6 py-5 text-lg bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-2xl focus:border-white focus:ring-4 focus:ring-white/20 transition-all outline-none appearance-none cursor-pointer font-medium text-gray-700"
                                        >
                                            <option value="">Catégorie</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 rotate-90 pointer-events-none" size={20} />
                                    </div>

                                    {/* Search Input */}
                                    <div className="md:col-span-8 relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Search size={24} />
                                        </div>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onFocus={() => setIsSearchFocused(true)}
                                            onBlur={() => setIsSearchFocused(false)}
                                            placeholder="Nom du produit, référence, marque..."
                                            className={`w-full pl-16 pr-6 py-5 text-lg bg-white/90 backdrop-blur-sm border-2 rounded-2xl transition-all outline-none font-medium ${isSearchFocused
                                                    ? 'border-white ring-4 ring-white/20'
                                                    : 'border-white/50'
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    className="w-full px-8 py-5 bg-white text-primary text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    <Search size={24} />
                                    Rechercher dans notre catalogue
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl" />
                    </div>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Parcourir par catégorie
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <Link
                                    to={`/products?category=${category.id}`}
                                    className="group block relative"
                                >
                                    {/* Glassmorphism Card */}
                                    <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/20">
                                        {/* Icon Container */}
                                        <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <category.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Category Name */}
                                        <h4 className="text-sm font-bold text-white text-center leading-tight mb-2">
                                            {category.name}
                                        </h4>

                                        {/* Product Count */}
                                        <div className="text-xs text-white/70 text-center font-semibold">
                                            {category.count} produits
                                        </div>

                                        {/* Hover Arrow */}
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                <ArrowRight className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glow Effect on Hover */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA to Products Page */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Voir tous nos produits
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        fill="white"
                        fillOpacity="0.1"
                    />
                    <path
                        d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default ProductSearchSection;
