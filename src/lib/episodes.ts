export type Episode = {
  number: number;
  date: string;
  iso: string;
  name: string;
  description: string;
  category: string;
  logo: string;         // chemin depuis /public/images/logos/
  logoInvert?: boolean; // true si le logo est blanc → afficher en noir via CSS
  logoMaxW?: string;    // override largeur max (ex: "100px")
};

export const episodes: Episode[] = [
  {
    number: 1,
    date: "15 septembre 2026",
    iso: "2026-09-15",
    name: "Reverse Sound",
    description: "Reverse Sound est une association genevoise qui réunit des ingénieurs du son passionnés par la scène musicale locale.",
    category: "Musique",
    logo: "/images/logos/reverse-sound.png",
    logoInvert: true, // texte blanc → invert pour fond clair
  },
  {
    number: 2,
    date: "30 septembre 2026",
    iso: "2026-09-30",
    name: "ET PK PAS ?",
    description: "ET PK PAS ? est une association apartisane qui promeut et soutient la participation citoyenne et démocratique des jeunes en Suisse.",
    category: "Citoyenneté",
    logo: "/images/logos/et-pk-pas.png",
    logoMaxW: "110px",
  },
  {
    number: 3,
    date: "15 octobre 2026",
    iso: "2026-10-15",
    name: "YAFFA",
    description: "YAFFA conçoit, coordonne et soutient des projets d'intervention psychosociale, culturelle et artistique en Palestine et en Suisse.",
    category: "Solidarité",
    logo: "/images/logos/yaffa.png",
  },
  {
    number: 4,
    date: "30 octobre 2026",
    iso: "2026-10-30",
    name: "ADEMAG",
    description: "Depuis 2018, ADEMAG accompagne les femmes migrantes confrontées aux violences à Genève.",
    category: "Social",
    logo: "/images/logos/ademag.png",
  },
  {
    number: 5,
    date: "15 novembre 2026",
    iso: "2026-11-15",
    name: "La Manivelle",
    description: "La Manivelle est une coopérative genevoise à but non lucratif qui propose l'emprunt de plus de 4 500 objets du quotidien.",
    category: "Économie sociale",
    logo: "/images/logos/la-manivelle.png",
  },
  {
    number: 6,
    date: "30 novembre 2026",
    iso: "2026-11-30",
    name: "MERAKI",
    description: "MERAKI propose des cours sportifs gratuits, encadrés par des professionnels, pour les jeunes et les personnes vulnérables du Canton de Genève.",
    category: "Sport",
    logo: "/images/logos/meraki.png",
  },
  {
    number: 7,
    date: "15 décembre 2026",
    iso: "2026-12-15",
    name: "Découvrir",
    description: "Découvrir accompagne les personnes migrantes qualifiées — principalement des femmes — dans leurs démarches d'insertion professionnelle en Suisse.",
    category: "Insertion",
    logo: "/images/logos/decouvrir.svg",
  },
  {
    number: 8,
    date: "30 décembre 2026",
    iso: "2026-12-30",
    name: "RCPG",
    description: "Le RCPG est une association e-sport basée à Carouge dont le but est de permettre aux joueurs et joueuses de progresser et partir en compétition.",
    category: "E-sport",
    logo: "/images/logos/rcpg.png",
  },
];
