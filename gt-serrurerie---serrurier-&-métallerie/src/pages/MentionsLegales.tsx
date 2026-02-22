import React from 'react';

export const MentionsLegales = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Mentions <span className="text-accent">Légales</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-ink">
          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">1. Présentation du site</h2>
          <p className="mb-8">
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site gt-serrurerie.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">Propriétaire</h3>
          <p className="mb-8">
            GT SERRURERIE METALLERIE<br />
            SIRET : 977 846 922<br />
            Adresse : 59 C Avenue de Germignan, 33320 Le Taillan-Médoc<br />
            Téléphone : 06 40 70 92 62<br />
            Email : contact@gt-serrurerie.fr
          </p>

          <h3 className="text-xl font-bold text-primary mb-4">Responsable de publication</h3>
          <p className="mb-8">
            Le responsable de la publication est une personne physique ou une personne morale.
          </p>

          <h3 className="text-xl font-bold text-primary mb-4">Hébergeur</h3>
          <p className="mb-8">
            Le site est hébergé par Google Cloud Platform (GCP).
          </p>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">2. Conditions générales d’utilisation du site et des services proposés</h2>
          <p className="mb-8">
            L’utilisation du site gt-serrurerie.fr implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
          </p>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">3. Description des services fournis</h2>
          <p className="mb-8">
            Le site gt-serrurerie.fr a pour objet de fournir une information concernant l’ensemble des activités de la société. GT SERRURERIE s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">4. Propriété intellectuelle et contrefaçons</h2>
          <p className="mb-8">
            GT SERRURERIE est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : GT SERRURERIE.
          </p>
        </div>
      </section>
    </div>
  );
};
