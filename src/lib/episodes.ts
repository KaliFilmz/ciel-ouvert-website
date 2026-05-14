export type Episode = {
  number: number;
  date: string; // display
  iso: string;
  name: string;
  description: string;
  category: string;
};

export const episodes: Episode[] = [
  { number: 1, date: "20 août 2026", iso: "2026-08-20", name: "Chrome", description: "Ateliers de céramique pour différents publics.", category: "Culturel" },
  { number: 2, date: "20 septembre 2026", iso: "2026-09-20", name: "Reverse Sound", description: "Organisation d’événements musicaux à Genève.", category: "Musique" },
  { number: 3, date: "20 octobre 2026", iso: "2026-10-20", name: "La Liane", description: "Voyages humanitaires à l’étranger.", category: "Solidarité" },
  { number: 4, date: "20 novembre 2026", iso: "2026-11-20", name: "Pervenches", description: "Le sport comme outil d’inclusion sociale.", category: "Sport" },
  { number: 5, date: "20 décembre 2026", iso: "2026-12-20", name: "Contact Seniors", description: "Accompagnement des personnes âgées.", category: "Social" },
  { number: 6, date: "20 janvier 2027", iso: "2027-01-20", name: "Geneva Skate", description: "Apprentissage du skateboard et autres sports.", category: "Sport" },
  { number: 7, date: "20 février 2027", iso: "2027-02-20", name: "L’Enclume", description: "Soutien aux musicien·ne·s et technicien·ne·s genevois·es.", category: "Musique" },
  { number: 8, date: "20 mars 2027", iso: "2027-03-20", name: "Hypnotise", description: "Films et productions audio.", category: "Audiovisuel" },
];
