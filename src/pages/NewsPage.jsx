import { useState, useEffect } from 'react';
import { newsService } from '../services/api';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsPage = () => {
  const sampleNews = [
    {
      id: 1,
      title: 'Lancement de notre nouveau service de téléconsultation',
      excerpt: 'Nous sommes fiers d\'annoncer le lancement de notre plateforme de téléconsultation pour améliorer l\'accès aux soins...',
      date: '2024-11-15',
      author: 'Nadia Labhilil',
      category: 'Services',
      image: '🏥',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Partenariat stratégique avec l\'hôpital central de Casablanca',
      excerpt: 'Une nouvelle collaboration pour renforcer notre réseau de santé et offrir des services de qualité supérieure...',
      date: '2024-11-10',
      author: 'Équipe MedLBH',
      category: 'Partenariats',
      image: '🤝',
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Formation continue pour nos professionnels de santé',
      excerpt: 'Découvrez notre programme de formation innovant destiné à maintenir l\'excellence de nos équipes médicales...',
      date: '2024-11-05',
      author: 'Dr. Ahmed',
      category: 'Formation',
      image: '📚',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Innovation technologique dans nos établissements',
      excerpt: 'Déploiement de nouvelles technologies pour améliorer l\'expérience patient et l\'efficacité opérationnelle...',
      date: '2024-10-28',
      author: 'Équipe MedLBH',
      category: 'Innovation',
      image: '💡',
      readTime: '7 min'
    },
    {
      id: 5,
      title: 'Certification qualité ISO 9001 obtenue',
      excerpt: 'Nous sommes fiers d\'annoncer l\'obtention de la certification ISO 9001 pour nos processus de gestion...',
      date: '2024-10-20',
      author: 'Direction Qualité',
      category: 'Qualité',
      image: '🏆',
      readTime: '3 min'
    },
    {
      id: 6,
      title: 'Expansion de nos services en régions',
      excerpt: 'Ouverture de nouveaux centres dans plusieurs villes pour être plus proches de nos patients...',
      date: '2024-10-15',
      author: 'Nadia Labhilil',
      category: 'Expansion',
      image: '🌍',
      readTime: '5 min'
    },
  ];

  const [news, setNews] = useState(sampleNews);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Services', 'Partenariats', 'Formation', 'Innovation', 'Qualité', 'Expansion'];

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
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = selectedCategory === 'Tous'
    ? news
    : news.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Services': 'from-blue-500 to-cyan-500',
      'Partenariats': 'from-purple-500 to-pink-500',
      'Formation': 'from-green-500 to-emerald-500',
      'Innovation': 'from-orange-500 to-red-500',
      'Qualité': 'from-yellow-500 to-orange-500',
      'Expansion': 'from-indigo-500 to-blue-500',
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
            <span className="px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm font-semibold">
              📰 Actualités & Nouvelles
            </span>
          </div>
          <h1 className="section-title">Actualités MedLBH</h1>
          <p className="section-subtitle">
            Restez informé des derniers développements et actualités du secteur médical
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-secondary to-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
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
            <div className="inline-block w-16 h-16 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Chargement des actualités...</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group card-gradient hover-lift cursor-pointer overflow-hidden"
              >
                {/* Image/Icon */}
                <div className="relative mb-4 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {article.image || '📰'}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(article.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                      {article.category || 'Général'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-secondary" />
                        <span>{new Date(article.date || Date.now()).toLocaleDateString('fr-FR')}</span>
                      </div>
                      {article.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-secondary" />
                          <span>{article.readTime}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <User size={14} className="text-primary" />
                      <span className="font-medium">{article.author || 'MedLBH'}</span>
                    </div>

                    <button className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Lire plus
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {!loading && filteredNews.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Aucune actualité trouvée</h3>
            <p className="text-gray-600">Essayez de sélectionner une autre catégorie</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;

