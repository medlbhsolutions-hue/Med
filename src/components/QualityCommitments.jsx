import { motion } from 'framer-motion';
import { ExcellenceIcon, EthicsIcon, ReactivityIcon, InnovationIcon } from '../assets/icons/Icons';
import { Sparkles, Shield, Zap, Lightbulb, CheckCircle2 } from 'lucide-react';

const QualityCommitments = () => {
  const commitments = [
    {
      icon: ExcellenceIcon,
      lucideIcon: Sparkles,
      title: 'Excellence et transparence',
      description: 'Dans toutes nos relations avec nos clients et partenaires.',
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      icon: EthicsIcon,
      lucideIcon: Shield,
      title: 'Éthique et confidentialité',
      description: 'Protection rigoureuse des données médicales et personnelles.',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: ReactivityIcon,
      lucideIcon: Zap,
      title: 'Réactivité et proximité',
      description: 'Une équipe disponible et à l\'écoute de vos besoins spécifiques.',
      gradient: 'from-purple-400 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: InnovationIcon,
      lucideIcon: Lightbulb,
      title: 'Innovation et durabilité',
      description: 'Des solutions adaptées aux enjeux actuels et futurs du secteur médical.',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full filter blur-3xl" />

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
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Nos Valeurs</span>
          </div>

          <h2 className="section-title mb-4">Nos engagements qualité</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Des valeurs fortes qui guident chacune de nos actions pour votre satisfaction
          </p>
        </motion.div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            const LucideIcon = commitment.lucideIcon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${commitment.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${commitment.gradient}`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${commitment.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <LucideIcon className={`w-8 h-8 bg-gradient-to-br ${commitment.gradient} bg-clip-text text-transparent`} />
                        </div>
                      </div>

                      {/* Floating Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${commitment.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                      {commitment.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {commitment.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-transparent transition-colors">
                      <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${commitment.gradient} rounded-full transition-all duration-500`} />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${commitment.gradient} blur-2xl transition-opacity duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-gray-700 font-medium">Certifié ISO 9001 • Conforme aux normes médicales internationales</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityCommitments;
