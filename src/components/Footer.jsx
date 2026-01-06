import { Link } from 'react-router-dom';
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
  Send
} from 'lucide-react';
import logo from '../assets/images/logo-new.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Recrutement & Mobilité', to: '/services' },
      { label: 'Structuration', to: '/services' },
      { label: 'Conseil Stratégique', to: '/services' },
      { label: 'Recouvrement & Gestion', to: '/services' },
    ],
    company: [
      { label: 'Qui sommes-nous', to: '/about' },
      { label: 'Nos Actualités', to: '/news' },
      { label: 'Carrières', to: '/contact' },
      { label: 'Contactez-nous', to: '/contact' },
    ],
    legal: [
      { label: 'Politique de confidentialité', to: '#' },
      { label: 'Conditions d\'utilisation', to: '#' },
      { label: 'Mentions légales', to: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden font-sans border-t-4 border-primary">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="container-custom pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block p-4 bg-white rounded-xl shadow-lg hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={logo}
                alt="MedLBH Solutions logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-base lg:text-lg max-w-sm">
              Solutions intégrées pour l'excellence des établissements de santé privés.
              <span className="block mt-2 text-secondary font-medium">L'expert de confiance à vos côtés.</span>
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-black/20"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Expertises
              <span className="block mt-1 w-8 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-secondary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Entreprise
              <span className="block mt-1 w-8 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-secondary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Contact
              <span className="block mt-1 w-8 h-1 bg-secondary rounded-full"></span>
            </h4>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Casablanca, Maroc<br />Grenoble, France
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Phone size={16} />
                </div>
                <a href="tel:+212690405269" className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  +212 6 90 40 52 69
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Mail size={16} />
                </div>
                <a href="mailto:contact@medlbhsolution.ma" className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  contact@medlbhsolution.ma
                </a>
              </li>
            </ul>

            <div className="p-5 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
              <p className="text-xs font-bold text-gray-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Send size={12} className="text-secondary" />
                Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                />
                <button className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white p-2.5 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} MedLBH Solutions. Tous droits réservés.</p>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link, idx) => (
              <Link key={idx} to={link.to} className="hover:text-secondary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span>Réalisé par <span className="text-gray-400 font-medium">MedLBH Team</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
