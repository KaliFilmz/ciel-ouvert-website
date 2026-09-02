export type Episode = {
  number: number;
  date: string; // display
  iso: string;
  name: string;
  description: string;
  category: string;
};

export const episodes: Episode[] = [
  { number: 1, date: "15 septembre 2026", iso: "2026-09-15", name: "Reverse Sound", description: "Organisation d'événements musicaux alternatifs à Genève.", category: "Musique" },
  { number: 2, date: "30 septembre 2026", iso: "2026-09-30", name: "ET PK PAS ?", description: "Une association qui questionne, bouscule et fait bouger les lignes.", category: "Culturel" },
  { number: 3, date: "15 octobre 2026", iso: "2026-10-15", name: "YAFFA", description: "Engagement au service de la communauté genevoise.", category: "Solidarité" },
  { number: 4, date: "30 octobre 2026", iso: "2026-10-30", name: "ADEMAG", description: "Accompagnement et défense des intérêts de ses membres.", category: "Social" },
  { number: 5, date: "15 novembre 2026", iso: "2026-11-15", name: "La Manivelle", description: "Cinéma et culture audiovisuelle accessible à tous.", category: "Cinéma" },
  { number: 6, date: "30 novembre 2026", iso: "2026-11-30", name: "MERAKI", description: "Art, créativité et lien social au cœur de Genève.", category: "Culturel" },
  { number: 7, date: "15 décembre 2026", iso: "2026-12-15", name: "Découvrir", description: "Explorer, apprendre et s'ouvrir au monde.", category: "Éducation" },
  { number: 8, date: "30 décembre 2026", iso: "2026-12-30", name: "RCPG", description: "Le sport comme vecteur de cohésion et de dépassement.", category: "Sport" },
];
