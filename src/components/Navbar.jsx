import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo-premium.png';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', to: '/' },
    { label: 'MedLBH', to: '/about' },
    { label: 'Services', to: '/services', hasDropdown: true },
    { label: 'Produits', to: '/products' },
    { label: 'Nos partenaires', to: '/partners' },
    { label: 'Actualités', to: '/news' },
    { label: 'Contact', to: '/contact' },
  ];

  const languages = [
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'AR', label: 'العربية', flag: '🇲🇦' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setShowLangMenu(false);
    // Ici vous pouvez ajouter la logique de changement de langue
    console.log('Langue changée:', langCode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
    >
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo - Plus Grand */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img
                  src={logo}
                  alt="MedLBH Solutions"
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8]/20 to-[#5de0e6]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group relative flex items-center gap-1.5 text-[15px] font-medium transition-all duration-200 ${isActive(item.to)
                      ? 'text-[#00A8E8]'
                      : 'text-gray-700 hover:text-[#00A8E8]'
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-all duration-200 ${isActive(item.to)
                          ? 'text-[#00A8E8]'
                          : 'text-gray-400 group-hover:text-[#00A8E8]'
                        }`}
                    />
                  )}
                  {/* Animated underline */}
                  <div
                    className={`absolute -bottom-[25px] left-0 h-[3px] bg-gradient-to-r from-[#00A8E8] to-[#5de0e6] transition-all duration-300 ${isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Auth Section & Language - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-[#00A8E8] transition-colors rounded-lg hover:bg-gray-50"
                >
                  <Globe size={18} />
                  <span className="text-sm font-medium">{currentLang}</span>
                  <ChevronDown size={14} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* Language Dropdown */}
                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${currentLang === lang.code
                              ? 'bg-blue-50 text-[#00A8E8]'
                              : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span className="text-sm font-medium">{lang.label}</span>
                          {currentLang === lang.code && (
                            <span className="ml-auto text-[#00A8E8]">✓</span>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-gray-700 hover:text-[#00A8E8] transition-colors rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] flex items-center justify-center text-white font-semibold text-sm shadow-md">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium">{user.name}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-6 py-2.5 text-[15px] text-gray-700 hover:text-[#00A8E8] transition-colors font-medium"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    className="px-7 py-3 bg-gradient-to-r from-[#00A8E8] to-[#5de0e6] text-white text-[15px] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Inscription
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-6 py-5 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center justify-between px-4 py-3.5 text-base rounded-lg transition-all ${isActive(item.to)
                      ? 'text-[#00A8E8] font-semibold bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={15} className="text-gray-400" />}
                </Link>
              ))}

              {/* Language Selector Mobile */}
              <div className="pt-3 border-t border-gray-200">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                  Langue
                </div>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${currentLang === lang.code
                          ? 'bg-blue-50 text-[#00A8E8] font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm">{lang.label}</span>
                      {currentLang === lang.code && (
                        <span className="ml-auto text-[#00A8E8]">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-3.5 text-[#00A8E8] hover:bg-blue-50 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] flex items-center justify-center text-white font-semibold shadow-md">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{user.name}</div>
                        <div className="text-xs text-gray-500">Tableau de bord</div>
                      </div>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <LogOut size={17} />
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-3.5 text-center text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Connexion
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-3.5 bg-gradient-to-r from-[#00A8E8] to-[#5de0e6] text-white text-center rounded-lg font-semibold shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Inscription
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
