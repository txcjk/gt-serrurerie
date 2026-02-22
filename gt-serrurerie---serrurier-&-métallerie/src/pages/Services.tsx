import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Nos <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Une gamme complète de solutions pour votre sécurité et vos projets de métallerie sur mesure en Gironde.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 -z-10 rounded-full"></div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-primary mb-6 uppercase tracking-tight">{service.title}</h2>
                  <p className="text-lg text-ink/70 mb-8 leading-relaxed">
                    {service.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {["Intervention rapide", "Devis gratuit", "Garantie décennale", "Matériel certifié"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-primary font-medium">
                        <CheckCircle2 size={18} className="text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                    Demander un devis <ArrowRight size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 uppercase tracking-tight">Besoin d'un service spécifique ?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Nous étudions toute demande personnalisée de serrurerie ou de métallerie. Contactez-nous pour en discuter.
          </p>
          <a href="tel:0640709262" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold text-xl rounded-sm hover:scale-105 transition-transform shadow-xl">
            06 40 70 92 62
          </a>
        </div>
      </section>
    </div>
  );
};
