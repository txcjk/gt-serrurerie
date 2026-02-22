import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Star, CheckCircle2, ArrowRight, ChevronRight, ShieldCheck, Clock, Hammer, MapPin } from 'lucide-react';
import { SERVICES, PROJECTS, REVIEWS, FAQS, ZONES } from '../constants';

export const Home = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20 industrial-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Disponible 24h/7j - Intervention rapide
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Serrurier & Métallerie <br />
              <span className="text-accent">à Bordeaux</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              Dépannage d'urgence en 30 min et réalisations métalliques sur mesure. 
              Un artisan local, des tarifs transparents et un savoir-faire certifié.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0640709262" 
                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-sm flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
              >
                <Phone size={20} />
                Appeler maintenant
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-sm border border-white/20 flex items-center justify-center gap-3 transition-all"
              >
                <Mail size={20} />
                Demander un devis
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-8 text-white/50 text-sm uppercase tracking-wider font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                Devis Gratuit
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                Agréé Assurances
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" className="text-accent" />)}
                </div>
                4.8/5 (132 avis)
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/locksmith/800/1000" 
                alt="Serrurier en intervention" 
                className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 border border-accent/20 -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-l-2 border-b-2 border-accent/30 -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-4">Nos Prestations</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Une expertise complète en serrurerie et métallerie
            </p>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="p-8 bg-background border border-secondary hover:border-accent/30 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-ink/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="/services" className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  En savoir plus <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-4">Métallerie d'Art</h2>
              <p className="text-3xl md:text-4xl font-display font-bold mb-6">
                Nos dernières réalisations sur mesure
              </p>
              <p className="text-white/60">
                De la conception à la pose, nous donnons vie à vos projets en métal : escaliers, verrières, garde-corps et structures industrielles.
              </p>
            </div>
            <a href="/contact" className="px-6 py-3 border border-white/20 hover:bg-white hover:text-primary transition-all font-bold uppercase text-sm tracking-wider">
              Voir tous les projets
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative aspect-[4/3] overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-4">Témoignages</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Ce que disent nos clients</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" className="text-accent" />)}
              </div>
              <span className="text-2xl font-bold text-primary">4.8/5</span>
            </div>
            <p className="text-ink/50 text-sm">Basé sur 132 avis Google</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="p-8 bg-background border border-secondary rounded-sm relative group hover:border-accent/30 transition-all">
                <div className="absolute -top-4 left-8 text-accent opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H4.017V21H6.017Z" /></svg>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="text-accent" />)}
                </div>
                <p className="text-ink/80 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex justify-between items-center border-t border-secondary pt-4">
                  <span className="font-bold text-primary">{review.author}</span>
                  <span className="text-xs text-ink/40">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Transparence", desc: "Tarifs annoncés avant intervention. Pas de mauvaise surprise.", icon: <ShieldCheck /> },
              { title: "Réactivité", desc: "Intervention en 30 min pour les urgences. Disponible 24h/7j.", icon: <Clock /> },
              { title: "Savoir-faire", desc: "Artisan qualifié en serrurerie et métallerie fine.", icon: <Hammer /> },
              { title: "Local", desc: "Entreprise bordelaise au service des girondins.", icon: <MapPin /> },
            ].map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-16 h-16 bg-accent text-white flex items-center justify-center mx-auto mb-6 rounded-full">
                  {React.cloneElement(point.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-wider">{point.title}</h3>
                <p className="text-white/60 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold text-sm tracking-[0.2em] uppercase mb-4">FAQ</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Questions fréquentes</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-secondary rounded-sm overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center bg-background hover:bg-secondary/20 transition-colors"
                >
                  <span className="font-bold text-primary">{faq.q}</span>
                  <ChevronRight className={`text-accent transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-ink/70 leading-relaxed border-t border-secondary/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
