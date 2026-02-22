import React from 'react';

export const Confidentialite = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Politique de <span className="text-accent">Confidentialité</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-ink">
          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">1. Collecte de l'information</h2>
          <p className="mb-8">
            Nous recueillons des informations lorsque vous remplissez notre formulaire de contact sur le site. Les informations recueillies incluent votre nom, votre adresse e-mail, votre numéro de téléphone et les détails de votre demande.
          </p>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">2. Utilisation des informations</h2>
          <p className="mb-4">Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
          <ul className="list-disc pl-6 mb-8">
            <li>Vous contacter par e-mail ou par téléphone suite à votre demande de devis ou de renseignements.</li>
            <li>Améliorer notre service client et vos besoins de prise en charge.</li>
            <li>Améliorer notre site Web.</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">3. Confidentialité du commerce en ligne</h2>
          <p className="mb-8">
            Nous sommes les seuls propriétaires des informations collectées sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quel raison, sans votre consentement.
          </p>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">4. Divulgation à des tiers</h2>
          <p className="mb-8">
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
          </p>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">5. Protection des informations</h2>
          <p className="mb-8">
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.
          </p>

          <h2 className="text-2xl font-display font-bold text-primary uppercase mb-6">6. Consentement</h2>
          <p className="mb-8">
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>
        </div>
      </section>
    </div>
  );
};
