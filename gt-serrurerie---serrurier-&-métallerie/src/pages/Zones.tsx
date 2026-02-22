import React from 'react';
import { MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { ZONES } from '../constants';

export const Zones = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Zones d'<span className="text-accent">Intervention</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Nous intervenons rapidement dans toute la métropole bordelaise et ses environs pour vos urgences et vos projets.
          </p>
        </div>
      </section>

      {/* Map & List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-tight">Où nous trouver ?</h2>
              <p className="text-lg text-ink/70 mb-10 leading-relaxed">
                Retrouvez-nous à notre atelier au <strong>59 C Avenue de Germignan, 33320 Le Taillan-Médoc</strong>. 
                Nous nous déplaçons dans un rayon de 40km pour assurer un service de proximité et de qualité dans toute la Gironde.
              </p>
              
              <div className="bg-background p-8 border border-secondary rounded-sm mb-12">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <MapPin className="text-accent" /> Villes desservies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
                  {ZONES.map((zone) => (
                    <div key={zone} className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      {zone}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary text-white rounded-sm"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary uppercase tracking-wider text-sm mb-1">Délai d'intervention</h4>
                    <p className="text-ink/60">Moins de 30 minutes sur la métropole bordelaise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary text-white rounded-sm"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary uppercase tracking-wider text-sm mb-1">Disponibilité</h4>
                    <p className="text-ink/60">Service d'urgence disponible 24h/24 et 7j/7.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sticky top-32">
              <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden border border-secondary shadow-2xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.564537482348!2d-0.6766488234140889!3d44.91185857106981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d909565656565%3A0x5656565656565656!2s59%20Av.%20de%20Germignan%2C%2033320%20Le%20Taillan-M%C3%A9doc!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation GT Serrurerie"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Text */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-primary mb-8 uppercase tracking-tight">Votre serrurier de confiance en Gironde</h2>
          <p className="text-ink/70 leading-relaxed mb-6">
            GT Serrurerie intervient pour tous vos besoins de serrurerie à Bordeaux, Mérignac, Pessac, Talence, et dans toute la CUB. 
            Nous sommes spécialisés dans l'ouverture de porte en urgence, le remplacement de serrure après effraction et la pose de porte blindée.
          </p>
          <p className="text-ink/70 leading-relaxed">
            Besoin d'un métallier pour un garde-corps à Arcachon ou une verrière à Libourne ? Nous nous déplaçons également dans tout le département pour vos projets de métallerie sur mesure.
          </p>
        </div>
      </section>
    </div>
  );
};
