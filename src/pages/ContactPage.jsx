import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, ArrowRight, Sparkles, Clock, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ nom: '', prenom: '', fonction: '', email: '', telephone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ nom: '', prenom: '', fonction: '', email: '', telephone: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+212 6 90 40 52 69',
      link: 'tel:+212690405269',
      gradient: 'from-[#00A8E8] to-[#5de0e6]',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@medlbhsolution.ma',
      link: 'mailto:contact@medlbhsolution.ma',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Casablanca - Grenoble',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: 'Lun - Ven: 9h - 18h',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const features = [
    {
      icon: MessageCircle,
      title: 'Réponse rapide',
      description: 'Nous répondons sous 24h',
    },
    {
      icon: Sparkles,
      title: 'Consultation gratuite',
      description: 'Premier rendez-vous offert',
    },
    {
      icon: CheckCircle2,
      title: 'Accompagnement personnalisé',
      description: 'Solutions sur mesure',
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00A8E8]/10 to-[#5de0e6]/10 border border-[#00A8E8]/20 rounded-full mb-6"
            >
              <Send size={16} className="text-[#00A8E8]" />
              <span className="text-sm font-semibold text-[#00A8E8]">Contactez-nous</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Parlons de votre{' '}
              <span className="bg-gradient-to-r from-[#00A8E8] to-[#5de0e6] bg-clip-text text-transparent">
                projet
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Notre équipe d'experts est à votre écoute pour transformer vos ambitions en réalité
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Contact Info - Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-32">
                {/* Contact Cards */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300"
                        >
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                            <Icon size={20} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-500 text-sm mb-1">{item.label}</p>
                            {item.link ? (
                              <a
                                href={item.link}
                                className="text-gray-900 hover:text-[#00A8E8] transition-colors font-medium"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-gray-900 font-medium">{item.value}</p>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Founder Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#00A8E8] to-[#5de0e6] rounded-3xl p-8 shadow-xl text-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-2xl font-bold border-2 border-white/30">
                      NL
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Nadia Labhilil</h3>
                      <p className="text-white/80 text-sm">Fondatrice & CEO</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Plus de 15 ans d'expérience dans l'accompagnement des établissements de santé privés.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Envoyez-nous un message</h2>
                  <p className="text-gray-600">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/10 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/10 transition-all"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/10 transition-all"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/10 transition-all"
                        placeholder="+212 6 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Fonction
                    </label>
                    <input
                      type="text"
                      name="fonction"
                      value={form.fonction}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/10 transition-all"
                      placeholder="Directeur, Médecin, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/10 transition-all resize-none"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-8 bg-gradient-to-r from-[#00A8E8] to-[#5de0e6] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Send size={20} />
                    Envoyer le message
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>

                {/* Success Message */}
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-green-800 text-lg">Message envoyé avec succès !</p>
                        <p className="text-green-600 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
