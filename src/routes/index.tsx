import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { episodes } from "@/lib/episodes";
import geneveHero from "@/assets/geneve-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciel ouvert — Média associatif genevois" },
      { name: "description", content: "Portraits vidéo des associations du Canton de Genève. Un épisode par mois, dès août 2026." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const next = episodes[0];
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO — photo Genève floutée en fond */}
        <section className="relative overflow-hidden">
          {/* Image Genève — légèrement floutée */}
          <div className="absolute inset-0 -z-10">
            <img
              src={geneveHero}
              alt=""
              className="h-full w-full object-cover scale-105 blur-[3px]"
            />
            {/* Overlay sombre — laisse voir la photo, textes en blanc */}
            <div className="absolute inset-0 bg-minuit/55" />
          </div>
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-36">
            <div className="text-center">
              <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
                Le ciel s’ouvre <br />
                <span className="italic text-ciel-doux">sur Genève.</span>
              </h1>
              <p className="mt-8 mx-auto max-w-xl text-lg leading-relaxed text-white/80">
                Un média associatif numérique qui met en lumière les associations du Canton de
                Genève — celles qui font vivre la culture, le sport, la solidarité et l’engagement
                citoyen.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/episodes"
                  className="inline-flex items-center gap-2 rounded-full bg-soleil px-6 py-3 text-sm font-semibold text-minuit hover:opacity-90 transition"
                >
                  Découvrir les 8 épisodes
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/le-media"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  Notre démarche
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / 3 colonnes */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <span className="eyebrow text-bleu-vif">Notre mission</span>
              <h2 className="mt-4 text-4xl font-semibold text-primary">
                Donner la parole à ceux qui agissent.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                À Genève, il n’existe aucun média exclusivement dédié aux associations. Pourtant,
                elles tissent le quotidien — culture, sport, social, environnement, éducation,
                soutien aux plus vulnérables.
              </p>
              <p>
                <em className="font-serif">Ciel ouvert</em> propose huit portraits filmés sur le
                terrain, conçus pour être professionnels, accessibles et durables. Une série
                pensée comme un outil de référence pour le tissu associatif genevois.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
            {[
              { k: "8", l: "épisodes mensuels", d: "Une association portraitée chaque mois, d’août 2026 à mars 2027." },
              { k: "25–40k", l: "vues cumulées visées", d: "Sur YouTube et les réseaux, en relais avec les associations." },
              { k: "100%", l: "diffusion gratuite", d: "Accessible à tous — YouTube, Instagram, TikTok, Facebook." },
            ].map((s) => (
              <div key={s.l} className="bg-card p-8">
                <div className="font-serif text-5xl font-semibold text-primary">{s.k}</div>
                <div className="eyebrow mt-3 text-bleu-vif">{s.l}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCHAIN ÉPISODE */}
        <section className="bg-ciel-pale py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-10 rounded-3xl bg-minuit p-10 md:flex-row md:items-end md:justify-between md:p-16">
              <div>
                <span className="eyebrow text-soleil">Premier épisode</span>
                <div className="mt-3 font-mono text-sm text-ciel-doux">{next.date}</div>
                <h3 className="mt-4 font-serif text-5xl font-semibold text-white md:text-6xl">
                  {next.name}
                </h3>
                <p className="mt-4 max-w-md text-ciel-doux">{next.description}</p>
              </div>
              <Link
                to="/episodes"
                className="inline-flex items-center gap-2 self-start rounded-full bg-soleil px-6 py-3 text-sm font-semibold text-minuit hover:opacity-90 transition md:self-end"
              >
                Calendrier complet
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* APERÇU ÉPISODES */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between">
            <div>
              <span className="eyebrow text-bleu-vif">Saison 01</span>
              <h2 className="mt-3 text-4xl font-semibold text-primary">Huit associations, huit regards.</h2>
            </div>
            <Link to="/episodes" className="hidden md:inline text-sm font-medium text-bleu-vif hover:underline">
              Tout voir →
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {episodes.slice(0, 4).map((ep) => (
              <article key={ep.number} className="group rounded-xl border border-border bg-card p-6 transition hover:border-bleu-vif">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">EP.0{ep.number}</span>
                  <span className="rounded-full bg-ciel-pale px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-bleu-nuit">
                    {ep.category}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-primary">{ep.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ep.description}</p>
                <div className="mt-6 font-mono text-xs text-bleu-vif">{ep.date}</div>
              </article>
            ))}
          </div>
        </section>

        {/* CITATION */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <blockquote className="font-serif text-3xl italic leading-snug text-primary md:text-5xl">
            « La transparence est une forme d’engagement. »
          </blockquote>
          <div className="eyebrow mt-8 text-bleu-vif">Association Lumera</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
