import { useState, useEffect } from 'react';
import { newsService } from '../services/api';
import { Calendar, User } from 'lucide-react';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await newsService.getAll();
      setNews(response.data);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    } finally {
      setLoading(false);
    }
  };

  const sampleNews = [
    {
      id: 1,
      title: 'Lancement de notre nouveau service de téléconsultation',
      excerpt: 'Nous sommes fiers d\'annoncer le lancement de notre plateforme de téléconsultation...',
      date: '15 novembre 2024',
      author: 'Nadia Labhilil',
      category: 'Services',
      image: '🏥'
    },
    {
      id: 2,
      title: 'Partenariat stratégique avec l\'hôpital central de Casablanca',
      excerpt: 'Une nouvelle collaboration pour renforcer notre réseau de santé...',
      date: '10 novembre 2024',
      author: 'Équipe MedLBH',
      category: 'Partenariats',
      image: '🤝'
    },
    {
      id: 3,
      title: 'Formation continue pour nos professionnels de santé',
      excerpt: 'Découvrez notre programme de formation innovant...',
      date: '5 novembre 2024',
      author: 'Dr. Ahmed',
      category: 'Formation',
      image: '📚'
    },
  ];

  return (
    <div className="min-h-screen bg-light pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Actualités MedLBH</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Restez informé des derniers développements et actualités du secteur médical
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">Chargement...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleNews.map((article) => (
              <article key={article.id} className="card hover:shadow-xl transition cursor-pointer">
                <div className="text-6xl mb-4">{article.image}</div>
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {article.author}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
