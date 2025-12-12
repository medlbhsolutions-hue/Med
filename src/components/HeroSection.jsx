import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white z-10"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Accompagnement global des établissements de santé privés
              </h1>
              <p className="text-xl mb-4">
                Une approche intégrée pour répondre à tous vos besoins
              </p>
              <p className="text-lg mb-8 italic">
                "Offir aux cliniques privées une solution intégrée : recrutement, installation, accompagnement opérationnel, recouvrement et développement stratégique."
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
                >
                  Découvrir nos services
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-primary hover:bg-light font-bold py-3 px-8 rounded-lg transition"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="w-full">
                  <ImageCarousel />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Défiler pour découvrir</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
