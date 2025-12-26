import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, MapPin, Mail, Phone, Sparkles, CheckCircle2, Heart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque aspect de notre travail',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Intégrité',
      description: 'Transparence et éthique au cœur de nos relations',
      gradient: 'from-[#00A8E8] to-[#5de0e6]'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Solutions modernes et adaptées aux défis actuels',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Partenariats durables et relations de confiance',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const stats = [
    { value: '15+', label: 'Années d\'expérience', icon: Award },
    { value: '500+', label: 'Professionnels recrutés', icon: Users },
    { value: '50+', label: 'Établissements accompagnés', icon: TrendingUp },
    { value: '98%', label: 'Satisfaction client', icon: CheckCircle2 }
  ];

  const services = [
    'Recrutement de talents médicaux',
    'Installation d\'établissements',
    'Accompagnement opérationnel',
    'Gestion du recouvrement',
    'Développement stratégique'
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
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#5de0e6] to-[#00A8E8] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00A8E8]/10 to-[#5de0e6]/10 border border-[#00A8E8]/20 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-[#00A8E8]" />
              <span className="text-sm font-semibold text-[#00A8E8]">À propos de nous</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              MedLBH Solutions
            </h1>
            <p className="text-2xl text-[#00A8E8] font-semibold mb-4">
              Medical & Human Bridges
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Construire des ponts entre les talents médicaux, les établissements et les institutions
              pour créer un écosystème de santé performant et humain
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 text-center">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium text-center">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Mettre en relation les talents médicaux, les établissements et les institutions pour construire un{' '}
                  <span className="font-bold text-[#00A8E8]">écosystème de santé performant et humain</span>.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-3xl p-10 shadow-xl h-full text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border-2 border-white/30">
                  <Eye size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Offrir aux cliniques privées une solution intégrée complète :
                </p>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-white flex-shrink-0" />
                      <span className="text-white/90 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full hover:scale-105">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                    NL
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nadia Labhilil</h3>
                  <p className="text-xl text-[#00A8E8] font-semibold mb-4">Fondatrice & CEO</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Avec plus de 15 ans d'expérience dans le secteur médical, Nadia Labhilil a fondé MedLBH Solutions
                    pour créer des ponts entre les talents médicaux et les établissements de santé.
                  </p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin size={18} className="text-[#00A8E8]" />
                      <span className="text-sm font-medium">Casablanca - Grenoble</span>
                    </div>
                    <a href="mailto:llabhilil@yahoo.fr" className="flex items-center gap-2 text-gray-700 hover:text-[#00A8E8] transition-colors">
                      <Mail size={18} className="text-[#00A8E8]" />
                      <span className="text-sm font-medium">llabhilil@yahoo.fr</span>
                    </a>
                    <a href="tel:+212690405269" className="flex items-center gap-2 text-gray-700 hover:text-[#00A8E8] transition-colors">
                      <Phone size={18} className="text-[#00A8E8]" />
                      <span className="text-sm font-medium">+212 6 90 40 52 69</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-3xl p-12 shadow-2xl overflow-hidden text-center text-white">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl font-bold mb-4">Rejoignez-nous dans notre mission</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Ensemble, construisons l'avenir de la santé privée
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00A8E8] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contactez-nous
                  <Sparkles size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
