import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, Layers, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Médecins installés' },
    { icon: Award, value: '15+', label: 'Années d\'expertise' },
    { icon: Globe, value: '2 Pays', label: 'Maroc - France' },
    { icon: Layers, value: '4 Pôles', label: 'Expertise Intégrée' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A1120] font-sans">
      {/* --- Ultra-Premium Background Layer --- */}
      <div className="absolute inset-0">
        {/* Deep, rich gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0A1120] to-[#0A1120]" />

        {/* Subtle Golden/Amber Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-amber-500/5 rounded-full blur-[100px]" />

        {/* Fine Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-36 pb-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* --- Exclusive Badge --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#5de0e6]/30 bg-[#00A8E8]/10 backdrop-blur-md">
              <Sparkles size={14} className="text-[#5de0e6]" />
              <span className="font-sans text-[#5de0e6] text-sm tracking-widest uppercase font-bold">Medical & Human Bridges</span>
              <Sparkles size={14} className="text-[#5de0e6]" />
            </div>
          </motion.div>

          {/* --- Main Headline --- */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-5xl lg:text-7xl xl:text-8xl text-white mb-8 leading-tight tracking-tight font-bold"
          >
            Votre partenaire pour <br />
            <span className="bg-gradient-to-r from-[#5de0e6] via-white to-[#5de0e6] bg-clip-text text-transparent">
              l'Excellence Médicale
            </span>
          </motion.h1>

          {/* --- Subtitle with Citation --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-16 space-y-6"
          >
            <p className="font-sans text-2xl text-blue-200/80 italic font-light">
              "Créer des ponts pour ceux qui sauvent des vies"
            </p>
            <p className="text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Nous offrons aux cliniques privées une solution intégrée : recrutement d'élite, installation clé en main, et développement stratégique international.
            </p>
          </motion.div>

          {/* --- Premium CTA --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <Link
              to="/services"
              className="group relative px-8 py-4 bg-[#5de0e6] text-[#0A1120] rounded-sm font-bold tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(93,224,230,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Découvrir nos services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 text-white border border-white/20 rounded-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>

          {/* --- Refined Stats Grid --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 border-t border-white/5 pt-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative p-6">
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                  <div className="relative z-10 flex flex-col items-center">
                    <Icon size={24} className="text-[#5de0e6] mb-4 stroke-[1.5]" />
                    <div className="font-sans text-3xl font-bold text-white mb-1 group-hover:text-[#5de0e6] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
