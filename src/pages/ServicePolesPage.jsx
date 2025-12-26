import { motion } from 'framer-motion';
import { HeartPulse, Building2, Stethoscope, Users, TrendingUp, ArrowRight, CheckCircle2, Sparkles, Target, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicePolesPage = () => {
  const services = [
    {
      icon: HeartPulse,
      title: 'Recrutement médical',
      description: 'Sélection et mise en relation de talents médicaux d\'excellence adaptés à vos besoins spécifiques.',
      gradient: 'from-[#00A8E8] to-[#5de0e6]',
      features: [
        'Sourcing de profils qualifiés',
        'Évaluation des compétences',
        'Accompagnement à l\'intégration',
        'Suivi post-recrutement'
      ],
      stats: { value: '500+', label: 'Professionnels recrutés' }
    },
    {
      icon: Building2,
      title: 'Installation d\'établissements',
      description: 'Accompagnement complet dans la création, l\'installation et l\'ouverture de structures de santé modernes.',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Étude de faisabilité',
        'Conception architecturale',
        'Équipement médical',
        'Mise en conformité'
      ],
      stats: { value: '50+', label: 'Établissements créés' }
    },
    {
      icon: Stethoscope,
      title: 'Accompagnement opérationnel',
      description: 'Support quotidien pour optimiser la gestion, la qualité et l\'organisation de votre établissement médical.',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Optimisation des processus',
        'Formation du personnel',
        'Gestion de la qualité',
        'Support administratif'
      ],
      stats: { value: '98%', label: 'Satisfaction client' }
    },
    {
      icon: Users,
      title: 'Recouvrement',
      description: 'Optimisation des processus de facturation et de recouvrement pour assurer la pérennité financière.',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Audit financier',
        'Optimisation facturation',
        'Gestion des impayés',
        'Reporting détaillé'
      ],
      stats: { value: '+35%', label: 'Amélioration moyenne' }
    },
    {
      icon: TrendingUp,
      title: 'Développement stratégique',
      description: 'Conseil en stratégie, expansion et développement pour propulser votre établissement vers l\'excellence.',
      gradient: 'from-indigo-500 to-blue-500',
      features: [
        'Analyse de marché',
        'Plan de développement',
        'Stratégie de croissance',
        'Accompagnement à l\'expansion'
      ],
      stats: { value: '15+', label: 'Années d\'expertise' }
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Approche personnalisée',
      description: 'Solutions sur mesure adaptées à vos besoins spécifiques'
    },
    {
      icon: Award,
      title: 'Expertise reconnue',
      description: 'Plus de 15 ans d\'expérience dans le secteur médical'
    },
    {
      icon: Zap,
      title: 'Résultats rapides',
      description: 'Mise en œuvre efficace et suivi régulier'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#5de0e6] to-[#00A8E8] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00A8E8]/10 to-[#5de0e6]/10 border border-[#00A8E8]/20 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-[#00A8E8]" />
              <span className="text-sm font-semibold text-[#00A8E8]">Nos Services</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Des solutions{' '}
              <span className="bg-gradient-to-r from-[#00A8E8] to-[#5de0e6] bg-clip-text text-transparent">
                sur mesure
              </span>
              {' '}pour votre réussite
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Accompagnement complet et personnalisé pour transformer et développer votre établissement de santé
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* Gradient Border on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                    {/* Icon */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00A8E8] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6 flex-1">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className={`text-[#00A8E8] flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-5 text-white`}>
                        <div className="text-3xl font-black mb-1">{service.stats.value}</div>
                        <div className="text-sm text-white/90 font-medium">{service.stats.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative text-center text-white">
                <h2 className="text-4xl font-bold mb-4">
                  Prêt à transformer votre établissement ?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group px-8 py-4 bg-white text-[#00A8E8] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    Nous contacter
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/products"
                    className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    Voir nos produits
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePolesPage;
