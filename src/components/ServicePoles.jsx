import { motion } from 'framer-motion';
import { ChartIcon, SecurityIcon } from '../assets/icons/Icons';
import { Users, Building2, TrendingUp, DollarSign, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const ServicePoles = () => {
  const poles = [
    {
      title: 'Pôle 1 - Recrutement & Mobilité Médicale',
      icon: SecurityIcon,
      lucideIcon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        'Sélection et recrutement de médecins spécialistes et cadres de santé',
        'Accompagnement administratif complet (CNOM, visa, équivalence, installation)',
        'Intégration professionnelle et sociale (famille, logement, scolarité)',
        'Conventions exclusives d\'installation sur 3 à 5 ans',
      ]
    },
    {
      title: 'Pôle 2 - Accompagnement Structuration',
      icon: ChartIcon,
      lucideIcon: Building2,
      gradient: 'from-purple-500 to-pink-500',
      items: [
        'Études de faisabilité et business plan',
        'Constitution d\'équipe médicale qualifiée',
        'Élaboration du parcours patient',
        'Assistance à la certification',
        'Accompagnement administratif et fiscal',
        'Monitoring dès le lancement contre les mauvaises pratiques',
      ]
    },
    {
      title: 'Pôle 3 - Conseil Stratégique',
      icon: ChartIcon,
      lucideIcon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      items: [
        'Négociation de conventions de prestations médicales',
        'Développement de partenariats entre cliniques et investisseurs',
        'Communication médico-institutionnelle',
        'Production de rapports et études sectorielles',
        'Positionnement stratégique et développement',
      ]
    },
    {
      title: 'Pôle 4 - Recouvrement & Gestion',
      icon: SecurityIcon,
      lucideIcon: DollarSign,
      gradient: 'from-green-500 to-emerald-500',
      items: [
        'Expertise sectorielle approfondie',
        'Approche intégrée sur 4 pôles',
        'Accompagnement personnalisé',
        'Résultats mesurables et suivi',
      ]
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#004AAD 1px, transparent 1px), linear-gradient(90deg, #004AAD 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Nos Services</span>
          </div>

          <h2 className="section-title mb-4">Nos pôles de services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Une expertise complète et intégrée pour accompagner votre établissement de santé à chaque étape
          </p>
        </motion.div>

        {/* Poles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {poles.map((pole, index) => {
            const Icon = pole.icon;
            const LucideIcon = pole.lucideIcon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pole.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  <div className="absolute inset-[2px] bg-white rounded-3xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Icon */}
                      <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${pole.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <LucideIcon className={`w-8 h-8 bg-gradient-to-br ${pole.gradient} bg-clip-text text-transparent`} />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                          {pole.title}
                        </h3>
                        <div className={`mt-2 h-1 w-0 group-hover:w-24 bg-gradient-to-r ${pole.gradient} rounded-full transition-all duration-500`} />
                      </div>
                    </div>

                    {/* Items List */}
                    <ul className="space-y-3">
                      {pole.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * itemIndex }}
                          className="flex gap-3 items-start group/item"
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${pole.gradient} flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <button className={`group/btn flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${pole.gradient} bg-clip-text text-transparent hover:gap-3 transition-all`}>
                        En savoir plus
                        <ArrowRight className={`w-4 h-4 bg-gradient-to-r ${pole.gradient} bg-clip-text text-transparent`} />
                      </button>
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pole.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${pole.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4', label: 'Pôles d\'expertise' },
            { value: '500+', label: 'Projets réalisés' },
            { value: '15+', label: 'Années d\'expérience' },
            { value: '98%', label: 'Clients satisfaits' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePoles;
