import { useState } from 'react';
import { Search, Filter, X, Package, Mail, Star, Grid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubCategory, setSelectedSubCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);

    // Categories avec sous-catégories
    const categories = [
        {
            id: 'anesthesie',
            name: 'Anesthésie',
            subCategories: ['Masques', 'Circuits respiratoires', 'Canules', 'Accessoires']
        },
        {
            id: 'biologie',
            name: 'Biologie',
            subCategories: ['Tests rapides', 'Prélèvements', 'Réactifs', 'Consommables']
        },
        {
            id: 'cardiologie',
            name: 'Cardiologie interventionnelle',
            subCategories: ['Cathéters', 'Guides', 'Stents', 'Accessoires']
        },
        {
            id: 'chirurgie',
            name: 'Chirurgie générale',
            subCategories: ['Instruments', 'Sutures', 'Drains', 'Pansements']
        },
        {
            id: 'coloscopie',
            name: 'Coloscopie',
            subCategories: ['Endoscopes', 'Pinces', 'Accessoires', 'Consommables']
        },
        {
            id: 'medicaments',
            name: 'Médicaments',
            subCategories: ['Analgésiques', 'Antibiotiques', 'Sédatifs', 'Autres']
        },
        {
            id: 'epi',
            name: 'EPI',
            subCategories: ['Gants', 'Masques', 'Blouses', 'Lunettes']
        },
        {
            id: 'consommables',
            name: 'Consommables',
            subCategories: ['Seringues', 'Aiguilles', 'Compresses', 'Désinfectants']
        }
    ];

    // Produits d'exemple (à remplacer par des données réelles)
    const allProducts = [
        {
            id: 1,
            name: 'Masque d\'anesthésie adulte',
            category: 'anesthesie',
            subCategory: 'Masques',
            description: 'Masque d\'anesthésie transparent, taille adulte',
            stock: 150,
            rating: 4.5,
            brand: 'MedTech Pro',
            reference: 'MTP-MA-001'
        },
        {
            id: 2,
            name: 'Gants nitrile bleus (boîte de 100)',
            category: 'epi',
            subCategory: 'Gants',
            description: 'Gants d\'examen en nitrile, sans poudre',
            stock: 500,
            rating: 4.8,
            brand: 'SafeGuard',
            reference: 'SG-GNB-100'
        },
        {
            id: 3,
            name: 'Cathéter cardiaque 6F',
            category: 'cardiologie',
            subCategory: 'Cathéters',
            description: 'Cathéter diagnostic pour angiographie',
            stock: 45,
            rating: 4.7,
            brand: 'CardioTech',
            reference: 'CT-CAT-6F'
        },
        {
            id: 4,
            name: 'Kit de suture chirurgicale',
            category: 'chirurgie',
            subCategory: 'Sutures',
            description: 'Kit complet avec aiguilles et fils résorbables',
            stock: 200,
            rating: 4.6,
            brand: 'SurgiPro',
            reference: 'SP-KIT-SUT'
        },
        {
            id: 5,
            name: 'Seringues 10ml (boîte de 100)',
            category: 'consommables',
            subCategory: 'Seringues',
            description: 'Seringues stériles à usage unique',
            stock: 350,
            rating: 4.9,
            brand: 'MediSupply',
            reference: 'MS-SER-10ML'
        },
        {
            id: 6,
            name: 'Endoscope flexible',
            category: 'coloscopie',
            subCategory: 'Endoscopes',
            description: 'Endoscope HD avec éclairage LED',
            stock: 12,
            rating: 4.8,
            brand: 'EndoVision',
            reference: 'EV-ENDO-HD'
        },
        {
            id: 7,
            name: 'Test rapide COVID-19 (boîte de 25)',
            category: 'biologie',
            subCategory: 'Tests rapides',
            description: 'Tests antigéniques rapides, résultats en 15min',
            stock: 180,
            rating: 4.4,
            brand: 'BioTest',
            reference: 'BT-COVID-25'
        },
        {
            id: 8,
            name: 'Paracétamol 500mg (boîte de 100)',
            category: 'medicaments',
            subCategory: 'Analgésiques',
            description: 'Comprimés analgésiques et antipyrétiques',
            stock: 600,
            rating: 4.7,
            brand: 'PharmaCare',
            reference: 'PC-PARA-500'
        }
    ];

    // Filtrer les produits
    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.reference.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSubCategory = selectedSubCategory === 'all' || product.subCategory === selectedSubCategory;

        return matchesSearch && matchesCategory && matchesSubCategory;
    });

    // Trier les produits
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'rating':
                return b.rating - a.rating;
            case 'stock':
                return b.stock - a.stock;
            default:
                return 0;
        }
    });

    // Récupérer les sous-catégories de la catégorie sélectionnée
    const currentSubCategories = categories.find(cat => cat.id === selectedCategory)?.subCategories || [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32 pb-16">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Nos Produits Médicaux
                    </h1>
                    <p className="text-xl text-gray-600">
                        Découvrez notre gamme complète d'équipements et consommables médicaux
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 mb-8"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Rechercher un produit..."
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                            />
                        </div>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            <Filter size={20} />
                            Filtres
                            {showFilters && <X size={16} />}
                        </button>
                    </div>

                    {/* Filters Panel */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                                    {/* Category Filter */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Catégorie
                                        </label>
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => {
                                                setSelectedCategory(e.target.value);
                                                setSelectedSubCategory('all');
                                            }}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                        >
                                            <option value="all">Toutes les catégories</option>
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Sub-Category Filter */}
                                    {selectedCategory !== 'all' && (
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Sous-catégorie
                                            </label>
                                            <select
                                                value={selectedSubCategory}
                                                onChange={(e) => setSelectedSubCategory(e.target.value)}
                                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                            >
                                                <option value="all">Toutes</option>
                                                {currentSubCategories.map(sub => (
                                                    <option key={sub} value={sub}>{sub}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="text-gray-600">
                        <span className="font-semibold text-gray-900">{sortedProducts.length}</span> produit(s) trouvé(s)
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white"
                        >
                            <option value="name">Nom (A-Z)</option>
                            <option value="rating">Meilleures notes</option>
                            <option value="stock">Disponibilité</option>
                        </select>

                        {/* View Mode */}
                        <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <Grid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid/List */}
                <AnimatePresence mode="wait">
                    {sortedProducts.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-20"
                        >
                            <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun produit trouvé</h3>
                            <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={viewMode}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={viewMode === 'grid'
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                                : 'space-y-4'
                            }
                        >
                            {sortedProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${viewMode === 'list' ? 'flex flex-row' : 'flex flex-col'
                                        }`}
                                >
                                    {/* Product Image */}
                                    <div className={`relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'
                                        }`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Package className="w-20 h-20 text-gray-300" />
                                        </div>
                                        {product.stock < 50 && (
                                            <div className="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                                                Stock limité
                                            </div>
                                        )}
                                        {product.stock > 200 && (
                                            <div className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                                En stock
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                {categories.find(c => c.id === product.category)?.name}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {product.name}
                                        </h3>

                                        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                                            {product.description}
                                        </p>

                                        <div className="space-y-1 mb-4">
                                            <div className="text-xs text-gray-500">
                                                <span className="font-semibold">Marque:</span> {product.brand}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                <span className="font-semibold">Référence:</span> {product.reference}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                <span className="font-semibold">Disponibilité:</span>{' '}
                                                <span className={product.stock > 100 ? 'text-green-600 font-semibold' : product.stock > 50 ? 'text-orange-600 font-semibold' : 'text-red-600 font-semibold'}>
                                                    {product.stock} unités
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                                                <Mail size={18} />
                                                Demander un devis
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProductsPage;
