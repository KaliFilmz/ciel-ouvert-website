import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Ciel ouvert" },
      { name: "description", content: "L'histoire de Ciel Ouvert : un média associatif genevois porté par Lumera pour donner de la visibilité aux associations du Canton." },
    ],
  }),
  component: AProposPage,
});

function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* HERO */}
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-12">
          <span className="eyebrow text-bleu-vif">Le projet</span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-primary md:text-6xl">
            À propos de <span className="italic text-bleu-vif">Ciel Ouvert</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85">
            <strong>Ciel Ouvert</strong> est né d'une volonté simple : donner davantage de
            visibilité aux associations qui font vivre Genève.
          </p>
        </section>

        {/* HISTOIRE */}
        <section className="bg-ciel-pale py-16">
          <div className="mx-auto max-w-4xl px-6">
            <span className="eyebrow text-bleu-vif">Notre histoire</span>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-primary">
              Comment est né le projet ?
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                Porté par <strong>Lumera</strong>, un collectif de jeunes passionnés par
                l'audiovisuel et la communication numérique, et développé en collaboration avec{" "}
                <strong>La Ruche</strong>, le projet est parti d'un constat : malgré leur rôle
                essentiel dans la vie sociale, culturelle et citoyenne du canton, les associations
                genevoises restent souvent peu visibles auprès du grand public.
              </p>
              <p>
                Ciel Ouvert souhaite ainsi créer un espace médiatique entièrement consacré au monde
                associatif genevois. À travers des rencontres et des contenus audiovisuels, le média
                met en lumière celles et ceux qui s'engagent au quotidien, dans des domaines aussi
                variés que la culture, le sport, le social, l'environnement ou l'éducation.
              </p>
            </div>

            {/* Logos porteurs */}
            <div className="mt-10 pt-8 border-t border-bleu-vif/20">
              <p className="text-xs font-semibold uppercase tracking-widest text-bleu-vif mb-5">
                Une initiative de
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <img
                  src="/images/logos/lumera.png"
                  alt="Lumera Association"
                  className="h-8 w-auto object-contain"
                />
                <img
                  src="/images/logos/la-ruche.png"
                  alt="La Ruche Association"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTIF */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <span className="eyebrow text-bleu-vif">Notre objectif</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary">
            Rendre le monde associatif accessible.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            Notre ambition est de <strong>rendre le monde associatif genevois plus visible, plus
            accessible et mieux représenté</strong>. Ciel Ouvert veut créer des contenus de qualité
            qui permettent de découvrir les associations, de comprendre leurs actions et de mettre
            en avant les personnes qui les font vivre.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { val: "8", label: "associations en saison 01" },
              { val: "100 %", label: "contenu gratuit et libre" },
              { val: "GE", label: "Canton de Genève" },
            ].map(({ val, label }) => (
              <div key={label} className="rounded-2xl bg-ciel-pale p-8 text-center">
                <div className="font-serif text-5xl font-semibold text-bleu-vif">{val}</div>
                <div className="mt-2 text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-minuit py-16 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Vous représentez une association ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ciel-doux">
              Contactez-nous pour proposer votre association pour la saison 02 ou simplement pour
              en savoir plus sur le projet.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-soleil px-6 py-3 text-sm font-semibold text-minuit hover:opacity-90 transition"
              >
                Nous écrire →
              </Link>
              <Link
                to="/le-media"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Le média en détail
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
