import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, TrendingUp, Shield, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Professionnels de santé' },
    { icon: Award, value: '15+', label: 'Années d\'expertise' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction client' },
    { icon: Shield, value: '100%', label: 'Conformité qualité' },
  ];

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#5de0e6] to-[#00A8E8] rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-[#00A8E8] to-[#004AAD] rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-[#5de0e6] to-purple-500 rounded-full blur-3xl opacity-25"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(93,224,230,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(93,224,230,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8 shadow-2xl"
            >
              <Sparkles size={18} className="text-[#5de0e6]" />
              <span className="text-sm font-bold text-white tracking-wide">Solutions Médicales d'Excellence</span>
            </motion.div>

            {/* Main Heading with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Accompagnement global des{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#5de0e6] via-[#00A8E8] to-[#5de0e6] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    établissements de santé privés
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#5de0e6] to-[#00A8E8] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
                <p className="text-lg text-gray-200 leading-relaxed">
                  Offrir aux cliniques privées une solution intégrée : recrutement, installation,
                  accompagnement opérationnel, recouvrement et développement stratégique.
                </p>
              </div>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link
                to="/services"
                className="group relative px-10 py-5 bg-gradient-to-r from-[#5de0e6] to-[#00A8E8] text-white font-bold rounded-2xl shadow-2xl hover:shadow-[#5de0e6]/50 transition-all duration-300 flex items-center gap-3 overflow-hidden hover:scale-105"
              >
                <span className="relative z-10">Découvrir nos services</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8] to-[#004AAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl"
              >
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Glassmorphism Card */}
                  <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-[#5de0e6]/30 transition-all duration-500 hover:scale-105 hover:bg-white/15">
                    {/* Gradient Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5de0e6]/20 to-[#00A8E8]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                    <div className="flex flex-col items-center text-center">
                      {/* Icon with Gradient Background */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#5de0e6] to-[#00A8E8] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon size={28} className="text-white" />
                      </div>

                      {/* Value */}
                      <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent mb-3">
                        {stat.value}
                      </div>

                      {/* Label */}
                      <div className="text-sm text-gray-300 font-semibold leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Premium Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
