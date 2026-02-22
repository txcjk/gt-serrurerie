import React from 'react';
import { Clock, DoorOpen, Lock, ShieldCheck, Hammer, Wrench } from 'lucide-react';

export const SERVICES = [
  {
    id: 'urgence',
    title: 'Dépannage d\'urgence',
    description: 'Intervention en moins de 30 minutes pour vos urgences de serrurerie 24h/7j.',
    icon: <Clock className="w-8 h-8" />,
  },
  {
    id: 'ouverture',
    title: 'Ouverture de porte',
    description: 'Porte claquée ou verrouillée, nous intervenons sans dégradation de votre matériel.',
    icon: <DoorOpen className="w-8 h-8" />,
  },
  {
    id: 'serrure',
    title: 'Changement de serrure',
    description: 'Remplacement de cylindres et serrures toutes marques pour votre sécurité.',
    icon: <Lock className="w-8 h-8" />,
  },
  {
    id: 'blindage',
    title: 'Porte blindée',
    description: 'Installation de blocs-portes blindés certifiés A2P pour une protection optimale.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    id: 'metallerie',
    title: 'Métallerie sur mesure',
    description: 'Conception et pose d\'escaliers, garde-corps, verrières et portails en métal.',
    icon: <Hammer className="w-8 h-8" />,
  },
  {
    id: 'rideaux',
    title: 'Rideaux métalliques',
    description: 'Pose, entretien et dépannage de rideaux métalliques pour commerces et garages.',
    icon: <Wrench className="w-8 h-8" />,
  },
];

export const PROJECTS = [
  { id: 1, title: 'Escalier hélicoïdal acier', category: 'Métallerie', image: 'https://picsum.photos/seed/stairs/600/400' },
  { id: 2, title: 'Garde-corps industriel', category: 'Sécurité', image: 'https://picsum.photos/seed/rail/600/400' },
  { id: 3, title: 'Verrière style atelier', category: 'Aménagement', image: 'https://picsum.photos/seed/glass/600/400' },
  { id: 4, title: 'Portail motorisé', category: 'Extérieur', image: 'https://picsum.photos/seed/gate/600/400' },
  { id: 5, title: 'Porte blindée A2P***', category: 'Sécurité', image: 'https://picsum.photos/seed/door/600/400' },
  { id: 6, title: 'Mobilier métal & bois', category: 'Design', image: 'https://picsum.photos/seed/furniture/600/400' },
];

export const REVIEWS = [
  { id: 1, author: 'Jean-Pierre M.', rating: 5, text: 'Intervention rapide un dimanche soir pour une porte claquée. Artisan honnête et prix transparent.', date: 'Il y a 2 semaines' },
  { id: 2, author: 'Sophie L.', rating: 5, text: 'Magnifique garde-corps réalisé pour ma terrasse. Un vrai travail de métallier passionné.', date: 'Il y a 1 mois' },
  { id: 3, author: 'Cabinet Immo Pro', rating: 4, text: 'Réactif pour le changement des serrures de nos locaux. Travail propre et soigné.', date: 'Il y a 3 mois' },
];

export const FAQS = [
  { q: "Quels sont vos délais d'intervention en urgence ?", a: "Nous intervenons en moyenne sous 30 minutes à Bordeaux et ses environs pour les dépannages urgents." },
  { q: "Le devis est-il gratuit ?", a: "Oui, tous nos devis sont gratuits et sans engagement, que ce soit pour un dépannage ou un projet de métallerie." },
  { q: "Êtes-vous agréé par les assurances ?", a: "Oui, nos tarifs sont étudiés pour être pris en charge par la plupart des contrats d'assurance habitation." },
  { q: "Travaillez-vous aussi pour les professionnels ?", a: "Absolument. Nous accompagnons les commerces, syndics et entreprises pour leur sécurité et leurs aménagements métalliques." },
];

export const ZONES = ["Bordeaux Centre", "Mérignac", "Pessac", "Talence", "Le Bouscat", "Eysines", "Bruges", "Lormont", "Cenon", "Floirac", "Bègles", "Gradignan"];
