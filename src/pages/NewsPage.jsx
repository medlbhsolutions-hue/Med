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
  GraduationCap,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsPage = () => {
  const sampleNews = [
    {
      id: 1,
      title: 'Bilan 2025 : L\'année de l\'expansion record pour les cliniques privées au Maroc',
      excerpt: 'Avec plus de 20 nouveaux établissements ouverts par les groupes majeurs comme Akdital et Oncorad, 2025 marque un tournant historique. Analyse de cette croissance soutenue.',
      content: `
        <p class="mb-4">L'année 2025 restera gravée comme une année charnière pour le secteur de la santé privée au Maroc. Sous l'impulsion de la généralisation de l'Assurance Maladie Obligatoire (AMO), la demande de soins a explosé, incitant les grands groupes de santé à accélérer leurs plans de développement.</p>
        
        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">Une croissance à deux chiffres</h4>
        <p class="mb-4">Les chiffres sont éloquents : plus de 20 nouveaux établissements ont ouvert leurs portes à travers le Royaume, de Tanger à Dakhla. Les groupes leaders comme Akdital et Oncorad ont été les fers de lance de cette dynamique, investissant massivement dans des infrastructures de pointe.</p>
        
        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">Les moteurs de cette expansion</h4>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>La réforme de la santé :</strong> La généralisation de la couverture sociale a solvabilisé une grande partie de la population, rendant les soins privés plus accessibles.</li>
          <li><strong>L'investissement régional :</strong> Contrairement au passé, les investissements ne se concentrent plus uniquement sur l'axe Casablanca-Rabat. Des villes comme Beni Mellal, Errachidia ou Guelmim disposent désormais de plateaux techniques aux standards internationaux.</li>
          <li><strong>Partenariats Public-Privé :</strong> L'État encourage désormais ouvertement la complémentarité entre les deux secteurs pour pallier les déserts médicaux.</li>
        </ul>

        <p class="mb-4">Cette dynamique ne semble pas près de s'arrêter, avec déjà 15 projets annoncés pour le premier semestre 2026.</p>
      `,
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
      content: `
        <p class="mb-4">C'est une grande fierté pour les équipes de MedLBH. En cette fin d'année 2025, nous avons finalisé l'accompagnement de trois projets majeurs qui viennent renforcer l'offre de soins dans les régions du Nord et du Souss-Massa.</p>

        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">Un accompagnement 360°</h4>
        <p class="mb-4">Notre intervention a couvert l'ensemble de la chaîne de valeur :</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Études de faisabilité :</strong> Analyse fine des besoins démographiques et épidémiologiques de chaque zone.</li>
          <li><strong>Équipement biomédical :</strong> Sélection et installation des dernières technologies en imagerie et blocs opératoires via nos partenaires exclusifs.</li>
          <li><strong>Recrutement :</strong> Plus de 150 professionnels de santé (médecins, infirmiers, techniciens) ont été recrutés et formés par nos soins.</li>
        </ul>

        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">Focus sur la Clinique Panoramique d'Agadir</h4>
        <p class="mb-4">Ce joyau architectural de 120 lits, spécialisé en oncologie et cardiologie interventionnelle, est désormais une référence dans la région. MedLBH a notamment piloté l'installation du premier PET-Scan numérique de la ville.</p>
      `,
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
      content: `
        <p class="mb-4">Le Digital Health Forum de Casablanca a fermé ses portes sur un constat unanime : la digitalisation n'est plus une option, c'est une urgence vitale pour l'efficacité de notre système de santé.</p>

        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">L'IA au service du diagnostic</h4>
        <p class="mb-4">L'intelligence artificielle n'est plus de la science-fiction au Maroc. Plusieurs cliniques pilotes utilisent déjà des algorithmes pour assister les radiologues dans la détection précoce des tumeurs. En 2026, ces outils devraient se généraliser.</p>

        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">L'interopérabilité : le grand chantier</h4>
        <p class="mb-4">Le défi majeur reste le partage des données. Le Ministère a réaffirmé sa volonté d'imposer des standards d'interopérabilité stricts pour que le Dossier Patient Partagé (DPP) devienne une réalité fluide entre le public et le privé.</p>
      `,
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
      content: `
        <p class="mb-4">Face à la recrudescence des cyberattaques visant les hôpitaux dans le monde, le Maroc prend les devants. Une nouvelle circulaire impose aux cliniques privées un cahier des charges strict en matière de sécurité informatique.</p>
        
        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">Les 5 piliers de la conformité</h4>
        <ol class="list-decimal pl-5 mb-4 space-y-2">
          <li><strong>Authentification forte :</strong> Double facteur obligatoire pour tout accès aux dossiers médicaux.</li>
          <li><strong>Sauvegardes immuables :</strong> Obligation de disposer de backups déconnectés pour contrer les ransomwares.</li>
          <li><strong>Audit annuel :</strong> Un pentest (test d'intrusion) doit être réalisé par un cabinet certifié chaque année.</li>
          <li><strong>Formation du personnel :</strong> Sessions de sensibilisation obligatoires tous les 6 mois.</li>
          <li><strong>Cloisonnement des réseaux :</strong> Séparation stricte entre le réseau Wi-Fi invité et le réseau biomédical.</li>
        </ol>
      `,
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
      content: `
        <p class="mb-4">Si la généralisation de l'AMO a boosté l'activité, elle a aussi mis sous tension la trésorerie de nombreuses structures. Le délai moyen de remboursement, bien qu'en amélioration, reste autour de 45 jours, créant un besoin en fonds de roulement (BFR) structurel.</p>
        
        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">Optimiser le cycle de facturation</h4>
        <p class="mb-4">La clé réside dans la réduction du taux de rejet des dossiers. MedLBH a audité plus de 50 cliniques cette année : <strong>30% des retards de paiement sont dus à des erreurs administratives simples</strong> lors de l'admission.</p>
        
        <p class="mb-4">Nous recommandons la mise en place de cellules de "préis-facturation" dédiées, équipées de logiciels de contrôle automatique avant l'envoi des dossiers à la CNSS/CNOPS.</p>
      `,
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
      content: `
        <p class="mb-4">Le décret facilitant l'exercice de la médecine par des praticiens étrangers au Maroc change la donne. Nous observons un afflux inédit de candidatures, notamment de médecins de la diaspora souhaitant rentrer, mais aussi de spécialistes européens et africains.</p>
        
        <h4 class="text-lg font-bold text-gray-800 mt-6 mb-3">Les profils les plus recherchés</h4>
        <p class="mb-4">La demande reste très forte sur certaines spécialités pénuriques :</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Anesthésie-Réanimation</li>
          <li>Radiologie interventionnelle</li>
          <li>Gériatrie (une spécialité d'avenir avec le vieillissement de la population)</li>
        </ul>
      `,
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
      content: `
        <p class="mb-4">L'IA ne remplace pas le radiologue, elle l'augmente. C'est le message clé de cette fin d'année 2025. Les solutions de détection automatique de fractures ou de nodules pulmonaires sont désormais fiables à plus de 98%.</p>
        <p class="mb-4">Pour les cliniques, l'investissement est rapidement rentabilisé par le gain de temps médical et la sécurisation des diagnostics, un atout majeur pour l'accréditation.</p>
      `,
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
      content: `
        <p class="mb-4">La Loi de Finances 2026 confirme la priorité donnée à la santé. Voici les mesures phares à connaître pour vos business plans :</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Exonération de TVA</strong> maintenue sur l'ensemble des équipements biomédicaux importés.</li>
          <li><strong>IS réduit</strong> pour les établissements s'installant dans les zones d'accélération industrielle ou les régions éloignées pendant les 5 premières années.</li>
          <li><strong>Incitations à l'embauche</strong> : Prise en charge par l'État des charges sociales pour tout recrutement de personnel paramédical en CDI pour une durée de 24 mois.</li>
        </ul>
      `,
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
      content: `
        <p class="mb-4">La qualité des soins repose avant tout sur la compétence des hommes et des femmes. C'est pourquoi MedLBH lance son "Académie", une plateforme de formation hybride (e-learning + présentiel).</p>
        <p class="mb-4">Au programme : prise en charge de la douleur, hygiène hospitalière, communication avec le patient, et maîtrise des nouveaux logiciels de gestion.</p>
      `,
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
  const [selectedArticle, setSelectedArticle] = useState(null);

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
      if (Array.isArray(response.data) && response.data.length > 0) {
        setNews(response.data);
      } else {
        // Keep sample news if no data or error
        setNews(sampleNews);
      }
    } catch (error) {
      console.error('Failed to fetch news from Supabase:', error);
    } finally {
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
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full cursor-pointer hover:-translate-y-2"
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

        {/* Article Detail Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-gray-800 hover:text-red-500 transition-all duration-300 shadow-sm"
                >
                  <X size={24} />
                </button>

                {/* Modal Header Image */}
                <div className={`h-48 md:h-64 bg-gradient-to-br ${getCategoryColor(selectedArticle.category)} relative flex items-center justify-center shrink-0`}>
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  <div className="text-white drop-shadow-2xl scale-150">
                    {(() => {
                      const Icon = iconMap[selectedArticle.iconKey] || TrendingUp;
                      return <Icon size={80} strokeWidth={1} />;
                    })()}
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <span className="px-4 py-1.5 bg-black/20 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20">
                      {selectedArticle.category}
                    </span>
                  </div>
                </div>

                {/* Modal Content Scrollable Area */}
                <div className="overflow-y-auto p-6 md:p-10">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{new Date(selectedArticle.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{selectedArticle.readTime} de lecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-primary" />
                      <span>{selectedArticle.author}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {selectedArticle.title}
                  </h2>

                  {/* Article Body */}
                  <div
                    className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-4"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  ></div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50 text-center text-sm text-gray-500 shrink-0">
                  MedLBH News • Informer pour mieux soigner
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsPage;
