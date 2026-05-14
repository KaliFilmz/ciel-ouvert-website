import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/a-propos")({
  component: AProposPage,
});

const valeurs = [
  {
    titre: "Transparence",
    description:
      "Nous rendons nos processus, nos finances et nos choix éditoriaux accessibles. La confiance se construit dans la clarté.",
  },
  {
    titre: "Engagement local",
    description:
      "Nous sommes genevois et nous parlons de Genève. Pas de contenu générique — chaque épisode, chaque article part du terrain.",
  },
  {
    titre: "Accessibilité",
    description:
      "Tout ce que nous produisons est gratuit, en ligne, sans inscription. La culture et l'information associative ne devraient pas avoir de barrière d'entrée.",
  },
  {
    titre: "Respect des acteurs",
    description:
      "Les associations ne sont pas des objets d'étude. Nous travaillons avec elles, pas sur elles. Chaque portrait est co-construit.",
  },
];

function AProposPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="bg-bleu-nuit text-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow text-soleil">L'association</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
              À propos de Lumera
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ciel-doux">
              Lumera est une association genevoise à but non lucratif fondée en 2025. Elle porte le
              projet Ciel ouvert avec la conviction que les associations du Canton méritent une
              meilleure visibilité.
            </p>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="eyebrow text-bleu-vif">Notre histoire</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-bleu-nuit">
                Qui sommes-nous ?
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gris-texte">
                <p>
                  Lumera est née d'une observation simple : Genève abrite des milliers d'associations
                  qui transforment la vie de leurs membres et de leurs quartiers, mais qui restent
                  largement inconnues du grand public.
                </p>
                <p>
                  Fondée par une poignée de bénévoles passionnés par les médias, la culture et le
                  tissu associatif local, l'association s'est donné pour mission de combler ce déficit
                  de visibilité — sans sensationnalisme, sans simplification, avec respect et
                  curiosité.
                </p>
                <p>
                  Ciel ouvert est notre première production : un média associatif numérique qui
                  combine portraits vidéo, articles de fond et données sur le secteur associatif
                  genevois.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-ciel-pale p-8">
              <p className="eyebrow text-bleu-vif">En chiffres</p>
              <ul className="mt-6 space-y-6">
                {[
                  { val: "2025", label: "Année de fondation" },
                  { val: "8", label: "Épisodes en saison 01" },
                  { val: "100%", label: "Contenu gratuit et libre" },
                  { val: "GE", label: "Canton de Genève" },
                ].map(({ val, label }) => (
                  <li key={label} className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl font-semibold text-bleu-nuit">{val}</span>
                    <span className="text-sm text-gris-texte">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="bg-ciel-pale py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow text-bleu-vif">Ce qui nous guide</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-bleu-nuit">Nos valeurs</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {valeurs.map(({ titre, description }) => (
                <div key={titre} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold text-bleu-nuit">{titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gris-texte">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold text-bleu-nuit">
            Vous voulez nous rejoindre ou nous contacter ?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-gris-texte">
            Que vous souhaitiez proposer votre association, devenir bénévole ou simplement en savoir
            plus, nous sommes à votre écoute.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-bleu-nuit px-6 py-3 text-sm font-medium text-white hover:bg-minuit transition"
            >
              Nous écrire
            </Link>
            <Link
              to="/le-media"
              className="rounded-full border border-bleu-nuit px-6 py-3 text-sm font-medium text-bleu-nuit hover:bg-ciel-pale transition"
            >
              Le projet Ciel ouvert
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
