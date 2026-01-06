import { useState, useEffect } from 'react';
import { newsService } from '../services/api';
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  TrendingUp,
  Building2,
  Smartphone,
  Bot,
  ShieldCheck,
  Wallet,
  Globe,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

const NewsPage = () => {
  const sampleNews = [
    {
      id: 1,
      title: 'Bilan 2025 : L\'année de l\'expansion record pour les cliniques privées au Maroc',
      excerpt: 'Avec plus de 20 nouveaux établissements ouverts par les groupes majeurs comme Akdital et Oncorad, 2025 marque un tournant historique. Analyse de cette croissance soutenue.',
      date: '2026-01-04',
      author: 'Pôle Conseil Stratégique',
      category: 'Stratégie',
      iconKey: 'trending',
      readTime: '6 min'
    },
    {
      id: 2,
      title: 'MedLBH accompagne l\'ouverture de 3 nouvelles cliniques à Tanger et Agadir',
      excerpt: 'L\'expertise MedLBH à l\'honneur : de l\'étude de faisabilité au recrutement des équipes, retour sur ces projets d\'envergure livrés clé en main en fin d\'année.',
      date: '2026-01-05',
      author: 'Direction Générale',
      category: 'Vie de l\'entreprise',
      iconKey: 'building',
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Digital Health Forum 2025 : Ce qu\'il faut retenir pour 2026',
      excerpt: 'Retour sur la conférence de Casablanca de novembre dernier : IA, Dossier Patient Partagé et Télémédecine seront les priorités absolues des investissements IT cette année.',
      date: '2025-12-28',
      author: 'Pôle IT & Digital',
      category: 'Digital Santé',
      iconKey: 'bot',
      readTime: '5 min'
    },
    {
      id: 4,
      title: 'Nouvelles normes de cybersécurité pour les établissements de soins',
      excerpt: 'Le Ministère de la Santé durcit le ton sur la protection des données patients. Voici les 5 mesures obligatoires à implémenter avant juin 2026 pour éviter les sanctions.',
      date: '2025-12-15',
      author: 'Service Juridique',
      category: 'Réglementation',
      iconKey: 'shield',
      readTime: '7 min'
    },
    {
      id: 5,
      title: 'Généralisation de l\'AMO : Quel impact sur la trésorerie des cliniques ?',
      excerpt: 'Un an après l\'accélération de la réforme, le délai moyen de remboursement reste un défi. Nos experts financiers décryptent les leviers pour optimiser votre BFR.',
      date: '2025-12-10',
      author: 'Pôle Finance',
      category: 'Finance',
      iconKey: 'wallet',
      readTime: '8 min'
    },
    {
      id: 6,
      title: 'Recrutement Médical International : Le Maroc, nouvelle destination prisée ?',
      excerpt: 'Les simplifications administratives de 2025 portent leurs fruits. De plus en plus de spécialistes étrangers choisissent le secteur privé marocain. Comment attirer ces talents ?',
      date: '2025-11-22',
      author: 'Direction RH',
      category: 'Recrutement',
      iconKey: 'globe',
      readTime: '5 min'
    },
    {
      id: 7,
      title: 'Intelligence Artificielle et Radiologie : La révolution silencieuse',
      excerpt: 'L\'intégration de solutions d\'aide au diagnostic basées sur l\'IA devient un standard. Quels outils choisir pour votre plateau technique en 2026 ?',
      date: '2025-11-05',
      author: 'Dr. Alami - Partenaire MedLBH',
      category: 'Digital Santé',
      iconKey: 'smartphone',
      readTime: '6 min'
    },
    {
      id: 8,
      title: 'Fiscalité 2026 : Les nouveautés de la Loi de Finance pour le secteur santé',
      excerpt: 'Exonérations de TVA, incitations à l\'investissement régional... Le point complet sur les mesures fiscales favorisant le développement des infrastructures de santé.',
      date: '2026-01-03',
      author: 'Expert Comptable',
      category: 'Finance',
      iconKey: 'trending',
      readTime: '9 min'
    },
    {
      id: 9,
      title: 'Formation Continue : Lancement de l\'Académie MedLBH',
      excerpt: 'Pour répondre aux besoins de montée en compétence du personnel paramédical, nous lançons notre plateforme de e-learning certifiante. Découvrez le catalogue 2026.',
      date: '2025-12-20',
      author: 'Formation',
      category: 'Vie de l\'entreprise',
      iconKey: 'graduation',
      readTime: '3 min'
    },
  ];

  const [news, setNews] = useState(sampleNews);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Recrutement', 'Stratégie', 'Réglementation', 'Digital Santé', 'Finance', 'Vie de l\'entreprise'];

  const iconMap = {
    trending: TrendingUp,
    building: Building2,
    bot: Bot,
    shield: ShieldCheck,
    wallet: Wallet,
    globe: Globe,
    smartphone: Smartphone,
    graduation: GraduationCap
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await newsService.getAll();
      if (Array.isArray(response.data)) {
        setNews(response.data.length > 0 ? response.data : sampleNews);
      }
    } catch (error) {
      console.error('Failed to fetch news from Supabase:', error);
      // Fallback is already initial state
    } finally {
      // Simulate a small loading delay for clearer UI transition if it was too fast
      setTimeout(() => setLoading(false), 500);
    }
  };

  const filteredNews = selectedCategory === 'Tous'
    ? news
    : news.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Recrutement': 'from-[#00A8E8] to-[#5de0e6]',
      'Stratégie': 'from-purple-600 to-indigo-600',
      'Réglementation': 'from-slate-700 to-slate-900',
      'Digital Santé': 'from-blue-600 to-indigo-500',
      'Finance': 'from-emerald-600 to-teal-500',
      'Vie de l\'entreprise': 'from-amber-500 to-orange-600',
    };
    return colors[category] || 'from-secondary to-primary';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-28 pb-16">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm font-semibold shadow-md">
              📰 Actualités & Nouvelles
            </span>
          </div>
          <h1 className="section-title">Actualités MedLBH</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Restez informé des derniers développements, analyses stratégiques et actualités du secteur médical au Maroc.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-secondary to-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* News Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-medium">Chargement des actualités...</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews.map((article, index) => {
              const IconComponent = iconMap[article.iconKey] || TrendingUp;

              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                >
                  {/* Image/Icon Area */}
                  <div className={`relative h-56 bg-gradient-to-br ${getCategoryColor(article.category)} p-6 flex items-center justify-center overflow-hidden`}>
                    {/* Abstract Shapes Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

                    <div className="text-white transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                      <IconComponent size={80} strokeWidth={1.5} />
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-sm border border-white/30">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-secondary" />
                          <span>{new Date(article.date || Date.now()).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        {article.readTime && (
                          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                            <Clock size={13} className="text-gray-400" />
                            <span>{article.readTime}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-gray-600">
                            <User size={12} />
                          </div>
                          <span>{article.author}</span>
                        </div>

                        <button className="flex items-center gap-1 text-primary text-sm font-bold group-hover:translate-x-1 transition-transform">
                          Lire
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {/* No Results */}
        {!loading && filteredNews.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 mx-auto max-w-2xl">
            <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
              <div className="text-4xl">🔍</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Aucune actualité trouvée</h3>
            <p className="text-gray-600">Aucun article ne correspond à la catégorie sélectionnée.</p>
            <button
              onClick={() => setSelectedCategory('Tous')}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Voir toutes les actualités
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;

