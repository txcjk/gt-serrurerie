import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X, Instagram, Facebook, ExternalLink, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Zones', href: '/zones' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter">
              GT <span className="text-accent">SERRURERIE</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-white/90 hover:text-accent font-medium transition-colors text-sm uppercase tracking-wider ${location.pathname === link.href ? 'text-accent' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:0640709262" 
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-sm font-bold flex items-center gap-2 transition-transform active:scale-95"
            >
              <Phone size={18} />
              06 40 70 92 62
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium text-white hover:bg-accent/10 hover:text-accent transition-colors ${location.pathname === link.href ? 'text-accent' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a 
                  href="tel:0640709262" 
                  className="w-full bg-accent text-white px-5 py-4 rounded-sm font-bold flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-display font-bold tracking-tighter mb-6 block">
              GT <span className="text-accent">SERRURERIE</span>
            </span>
            <p className="text-white/50 leading-relaxed mb-6">
              Votre artisan serrurier-métallier de confiance à Bordeaux. Expertise, rapidité et transparence pour tous vos besoins de sécurité et de métallerie.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/GTSerrurerie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/gt_serrurerie_metallerie/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-accent">Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/services" className="hover:text-white transition-colors">Dépannage Urgence</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Ouverture de porte</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Porte Blindée</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Métallerie Fine</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-accent">Zones</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/zones" className="hover:text-white transition-colors">Bordeaux Centre</Link></li>
              <li><Link to="/zones" className="hover:text-white transition-colors">Mérignac / Pessac</Link></li>
              <li><Link to="/zones" className="hover:text-white transition-colors">Rive Droite</Link></li>
              <li><Link to="/zones" className="hover:text-white transition-colors">Médoc / Bassin</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-accent">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3"><Phone size={16} className="text-accent" /> 06 40 70 92 62</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /> contact@gt-serrurerie.fr</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-accent" /> 59 C Av. de Germignan, 33320 Le Taillan-Médoc</li>
              <li className="flex items-center gap-3"><Clock size={16} className="text-accent" /> 24h/24 - 7j/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-widest font-bold">
          <p>© 2024 GT SERRURERIE - TOUS DROITS RÉSERVÉS</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
            <a 
              href="https://annuaire-entreprises.data.gouv.fr/entreprise/gt-serrurerie-metallerie-977846922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              SIRET : 977 846 922 <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
