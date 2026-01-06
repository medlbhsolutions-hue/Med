import { motion } from 'framer-motion';
import { HeartPulse, Building2, Stethoscope, Users, TrendingUp, ArrowRight, CheckCircle2, Sparkles, Target, Award, Zap, Scale, FileText, Headphones, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicePolesPage = () => {
  const services = [
    {
      icon: Users,
      title: 'Expertise RH & Recrutement',
      description: 'Chasse de tête spécialisée (Médecins, Infirmiers), gestion des carrières et staffing intérimaire pour optimiser vos équipes.',
      gradient: 'from-[#00A8E8] to-[#5de0e6]',
      features: [
        'Sélection et recrutement de médecins spécialistes et cadres de santé',
        'Accompagnement administratif complet (CNOM, visa, équivalence, installation)',
        'Intégration professionnelle et sociale (famille, logement, scolarité)',
        'Conventions exclusives d\'installation sur 3 à 5 ans'
      ],
      stats: { value: '500+', label: 'Profils placés' }
    },
    {
      icon: Scale,
      title: 'Conseil Juridique, Comptabilité & Conformité',
      description: 'Double expertise pour sécuriser votre activité : accompagnement légal complet et gestion comptable rigoureuse.',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Droit de la Santé & Contrats',
        'Expertise comptable & Fiscale',
        'Gestion de la paie',
        'Veille réglementaire'
      ],
      stats: { value: '100%', label: 'Conformité & Rigueur' }
    },
    {
      icon: FileText,
      title: 'Facturation, Recouvrement & Optimisation',
      description: 'Maximisation de vos revenus : de l\'audit de facturation à la récupération active de vos créances impayées.',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Suivi et relance des créances (CNSS, CNOP, mutuelles, assurances)',
        'Gestion des PEC et facturations hospitalières',
        'Réconciliation et traçabilité des dossiers',
        'Audit et reporting mensuel de performance',
        'Médiation et résolution de litiges administratifs'
      ],
      stats: { value: '+25%', label: 'Trésorerie récupérée' }
    },
    {
      icon: Headphones,
      title: 'Centre de Relation Patient',
      description: 'Un centre d\'appels médical dédié pour gérer vos flux entrants, vos rendez-vous et rassurer vos patients 24/7.',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Permanence téléphonique 24/7',
        'Prise de RDV & Télé-secrétariat',
        'Gestion des urgences',
        'Enquêtes de satisfaction'
      ],
      stats: { value: '<30s', label: 'Temps d\'attente moyen' }
    },
    {
      icon: Laptop,
      title: 'Solutions Digitales & IT',
      description: 'Développement sur mesure de vos outils numériques : sites web vitrine, applications mobiles patients et logiciels métiers.',
      gradient: 'from-blue-600 to-indigo-600',
      features: [
        'Sites Web & Portails Patient',
        'Applications Mobiles (iOS/Android)',
        'Logiciels de Gestion (ERP/HIS)',
        'Cybersécurité des données de santé'
      ],
      stats: { value: 'New', label: 'Innovation Tech' }
    },
    {
      icon: Building2,
      title: 'Accompagnement Structuration',
      description: 'Accompagnement au lancement de votre activité',
      gradient: 'from-teal-500 to-cyan-500',
      features: [
        'Études de faisabilité et business plan',
        'Constitution d\'équipe médicale qualifiée',
        'Élaboration du parcours patient',
        'Assistance à la certification',
        'Accompagnement administratif et fiscal',
        'Monitoring dès le lancement contre les mauvaises pratiques'
      ],
      stats: { value: '50+', label: 'Projets lancés' }
    }
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


      {/* Strategic Vision Section (From Analysis) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Une vision <span className="text-[#00A8E8]">360°</span> de votre établissement
            </h2>
            <p className="text-xl text-gray-600">
              Notre méthode accompagne le cycle de vie complet de votre structure, de sa naissance à sa pérennité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Structurer',
                desc: 'Études de faisabilité, Business Plan et Conformité pour lancer sur des bases saines.',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                step: '02',
                title: 'Recruter',
                desc: 'Constitution des équipes médicales "Core Team" et gestion de la mobilité internationale.',
                color: 'bg-blue-100 text-[#00A8E8]'
              },
              {
                step: '03',
                title: 'Développer',
                desc: 'Négociation de conventions, partenariats investisseurs et communication institutionnelle.',
                color: 'bg-indigo-100 text-indigo-600'
              },
              {
                step: '04',
                title: 'Optimiser',
                desc: 'Recouvrement actif, audit de performance et sécurisation de la trésorerie.',
                color: 'bg-green-100 text-green-600'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 rounded-full opacity-20 ${item.color.split(' ')[0]}`} />
                <span className={`text-4xl font-black opacity-20 mb-4 block ${item.color.split(' ')[1]}`}>{item.step}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (From Analysis) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                  <Award size={16} className="text-[#00A8E8]" />
                  <span className="text-sm font-bold text-[#00A8E8]">Pourquoi MedLBH ?</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  L'alliance de l'<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-blue-600">Expertise Médicale</span> et de la Performance
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nous ne sommes pas de simples consultants. Nous sommes des partenaires engagés dans votre réussite opérationnelle et financière.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Expertise Sectorielle', desc: 'Connaissance pointue des enjeux de santé au Maroc et en France.' },
                    { title: 'Approche Intégrée', desc: 'Un interlocuteur unique pour le RH, le Juridique, la Tech et la Gestion.' },
                    { title: 'Résultats Mesurables', desc: 'Culture du KPI : nous visons l\'impact direct sur votre trésorerie et votre qualité.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#00A8E8]">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{feat.title}</h4>
                        <p className="text-sm text-gray-600">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E8] to-blue-600 rounded-3xl opacity-10 transform rotate-3" />
              <div className="bg-gray-900 rounded-3xl p-8 relative shadow-2xl text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Target size={32} className="text-[#00A8E8]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Notre Mission</div>
                    <div className="text-xl font-bold">Medical & Human Bridges</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  "Créer des ponts pour ceux qui sauvent des vies. Notre ambition est de connecter les talents, les structures et les innovations pour bâtir l'hôpital de demain."
                </p>
                <div className="flex items-center gap-4 border-t border-gray-700 pt-6">
                  <div className="w-12 h-12 bg-gray-700 rounded-full" /> {/* Placeholder for Founder Photo */}
                  <div>
                    <div className="font-bold">Nadia Labhilil</div>
                    <div className="text-sm text-[#00A8E8]">Fondatrice MedLBH Solutions</div>
                  </div>
                </div>
              </div>
            </div>
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
