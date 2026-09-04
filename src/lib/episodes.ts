export type Episode = {
  number: number;
  date: string;
  iso: string;
  name: string;
  description: string;
  category: string;
  logo: string;         // chemin depuis /public/images/logos/
  logoInvert?: boolean; // true si le logo est blanc → afficher en noir via CSS
};

export const episodes: Episode[] = [
  {
    number: 1,
    date: "15 septembre 2026",
    iso: "2026-09-15",
    name: "Reverse Sound",
    description: "Reverse Sound est une association qui réunit des ingénieurs du son autour de la scène musicale genevoise. Ils mettent leur expertise technique et leur exigence artistique au service de chaque projet, qu'il s'agisse d'un enregistrement, d'une sonorisation événementielle ou d'une installation.",
    category: "Musique",
    logo: "/images/logos/reverse-sound.png",
    logoInvert: true, // texte blanc → invert pour fond clair
  },
  {
    number: 2,
    date: "30 septembre 2026",
    iso: "2026-09-30",
    name: "ET PK PAS ?",
    description: "ET PK PAS ? est une association apartisane à but non lucratif dont l'objectif principal est de promouvoir et de soutenir la participation citoyenne et démocratique des jeunes en Suisse. Son action vise à encourager l'engagement civique et à renforcer la conscience démocratique au sein de la jeunesse, en facilitant leur implication dans les processus décisionnels.",
    category: "Citoyenneté",
    logo: "/images/logos/et-pk-pas.png",
  },
  {
    number: 3,
    date: "15 octobre 2026",
    iso: "2026-10-15",
    name: "YAFFA",
    description: "YAFFA promeut une vision de l'intervention psychosociale fondée sur la cohésion sociale autour des valeurs humaines de coopération, de respect et de dignité. L'association développe une approche pluridisciplinaire réunissant travailleurs sociaux, psychologues, physiothérapeutes et artistes, en Palestine et en Suisse.",
    category: "Solidarité",
    logo: "/images/logos/yaffa.png",
  },
  {
    number: 4,
    date: "30 octobre 2026",
    iso: "2026-10-30",
    name: "ADEMAG",
    description: "Depuis 2018, ADEMAG accompagne les femmes migrantes confrontées aux violences à Genève. L'association crée des espaces sûrs et multilingues pour reconstruire avec elles, à leur rythme. Leur mission : être là, vraiment.",
    category: "Social",
    logo: "/images/logos/ademag.png",
  },
  {
    number: 5,
    date: "15 novembre 2026",
    iso: "2026-11-15",
    name: "La Manivelle",
    description: "Besoin d'un objet pour un projet ou une occasion spéciale ? Pas besoin d'acheter — venez l'emprunter à La Manivelle, coopérative à but non lucratif de Genève. Plus de 4 500 objets accessibles avec un Pass annuel ou à l'emprunt. Mieux que la location, l'emprunt !",
    category: "Économie sociale",
    logo: "/images/logos/la-manivelle.png",
  },
  {
    number: 6,
    date: "30 novembre 2026",
    iso: "2026-11-30",
    name: "MERAKI",
    description: "L'association MERAKI propose des cours sportifs gratuits, encadrés par des professionnels, pour les jeunes et les personnes vulnérables du Canton de Genève. Une approche inclusive, éducative et préventive — plus qu'un club, un mouvement où le sport devient un outil de transformation individuelle et collective.",
    category: "Sport",
    logo: "/images/logos/meraki.png",
  },
  {
    number: 7,
    date: "15 décembre 2026",
    iso: "2026-12-15",
    name: "Découvrir",
    description: "Découvrir est une association à but non lucratif qui accompagne les personnes migrantes qualifiées, principalement les femmes, résidant en Suisse (Genève, Neuchâtel, Vaud et Valais) dans leurs démarches d'insertion professionnelle.",
    category: "Insertion",
    logo: "/images/logos/decouvrir.svg",
  },
  {
    number: 8,
    date: "30 décembre 2026",
    iso: "2026-12-30",
    name: "RCPG",
    description: "Association e-sport basée à Carouge, Genève. Leur but : permettre aux joueurs et joueuses de progresser et partir en compétition.",
    category: "E-sport",
    logo: "/images/logos/rcpg.png",
  },
];
