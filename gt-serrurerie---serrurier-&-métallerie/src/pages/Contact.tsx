import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Contact & <span className="text-accent">Devis</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Une question ? Un projet ? Contactez-nous pour obtenir un devis gratuit et personnalisé sous 24h.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-primary p-8 text-white rounded-sm shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-8 uppercase tracking-tight">Nos Coordonnées</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-sm"><Phone size={24} /></div>
                    <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Téléphone</p>
                      <p className="text-xl font-bold">06 40 70 92 62</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-sm"><Mail size={24} /></div>
                    <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Email</p>
                      <p className="text-xl font-bold break-all">contact@gt-serrurerie.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-sm"><MapPin size={24} /></div>
                    <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Atelier</p>
                      <p className="text-xl font-bold">59 C Av. de Germignan, 33320 Le Taillan-Médoc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 border border-secondary rounded-sm">
                <h3 className="font-display font-bold text-primary uppercase tracking-widest mb-6">Horaires</h3>
                <div className="space-y-4 text-ink/70">
                  <div className="flex justify-between border-b border-secondary pb-2">
                    <span>Lundi - Vendredi</span>
                    <span className="font-bold">08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary pb-2">
                    <span>Samedi</span>
                    <span className="font-bold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-accent font-bold">
                    <span>Urgences 24h/7j</span>
                    <span>Disponible</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-accent/10 border border-accent/20 rounded-sm">
                <ShieldCheck className="text-accent shrink-0" size={32} />
                <p className="text-sm text-primary font-medium">
                  Artisan certifié et assuré. Garantie décennale sur tous nos travaux de métallerie.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-background p-8 md:p-12 border border-secondary rounded-sm shadow-sm">
                <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-tight">Demande de devis gratuit</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-ink/60 mb-2">Nom complet</label>
                      <input type="text" className="w-full p-4 bg-white border border-secondary focus:border-accent outline-none transition-colors" placeholder="Jean Dupont" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-ink/60 mb-2">Téléphone</label>
                      <input type="tel" className="w-full p-4 bg-white border border-secondary focus:border-accent outline-none transition-colors" placeholder="06 12 34 56 78" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-ink/60 mb-2">Email</label>
                    <input type="email" className="w-full p-4 bg-white border border-secondary focus:border-accent outline-none transition-colors" placeholder="jean@email.com" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-ink/60 mb-2">Type de demande</label>
                    <select className="w-full p-4 bg-white border border-secondary focus:border-accent outline-none transition-colors">
                      <option>Dépannage d'urgence</option>
                      <option>Ouverture de porte</option>
                      <option>Changement de serrure</option>
                      <option>Métallerie sur mesure</option>
                      <option>Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-ink/60 mb-2">Message / Détails du projet</label>
                    <textarea rows={6} className="w-full p-4 bg-white border border-secondary focus:border-accent outline-none transition-colors" placeholder="Décrivez votre besoin en quelques mots..."></textarea>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink/50">
                    <input type="checkbox" className="accent-accent" id="rgpd" required />
                    <label htmlFor="rgpd">J'accepte que mes données soient traitées pour répondre à ma demande conformément à la politique de confidentialité (RGPD).</label>
                  </div>
                  <button type="submit" className="w-full py-5 bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-widest transition-all transform active:scale-[0.98] shadow-lg shadow-accent/20">
                    Envoyer ma demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-secondary relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.564537482348!2d-0.6766488234140889!3d44.91185857106981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d909565656565%3A0x5656565656565656!2s59%20Av.%20de%20Germignan%2C%2033320%20Le%20Taillan-M%C3%A9doc!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte GT Serrurerie"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
};
