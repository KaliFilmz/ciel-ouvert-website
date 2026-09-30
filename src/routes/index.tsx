import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { episodes } from "@/lib/episodes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciel Ouvert — Média associatif genevois" },
      { name: "description", content: "Ciel Ouvert donne la parole aux associations du Canton de Genève. 8 portraits vidéo filmés sur le terrain, de septembre à décembre 2026. Culture, sport, social, citoyenneté." },
      { property: "og:title", content: "Ciel Ouvert — Média associatif genevois" },
      { property: "og:description", content: "8 portraits vidéo d'associations genevoises. Culture, sport, social, citoyenneté — de septembre à décembre 2026." },
      { property: "og:url", content: "https://www.ciel-ouvert.ch" },
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
        {/* HERO — vidéo drone Jet d'Eau en fond */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <video
              src="/hero-drone.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
            {/* Overlay sombre — textes en blanc lisibles */}
            <div className="absolute inset-0 bg-minuit/60" />
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

        {/* MISSION */}
        <section className="mx-auto max-w-6xl px-6 py-16">
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
                <em className="font-serif">Ciel Ouvert</em> propose huit interviews filmées
                directement sur le terrain, à la rencontre des associations genevoises. Une série
                conçue pour être professionnelle, accessible et durable, et pensée comme un outil
                de référence pour mettre en lumière le tissu associatif genevois.
              </p>

            </div>
          </div>
        </section>

        {/* PREMIER ÉPISODE */}
        <section className="bg-ciel-pale py-16">
          <div className="mx-auto max-w-6xl px-6">
            <span className="eyebrow text-bleu-vif">
              {next.videoUrl ? "Premier épisode — maintenant disponible" : "Premier épisode"}
            </span>
            <div className="mt-6 overflow-hidden rounded-3xl bg-minuit">
              {next.videoUrl ? (
                <div className="flex flex-col md:flex-row">
                  {/* Thumbnail YouTube cliquable */}
                  <a
                    href={next.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-video md:w-[58%]"
                  >
                    <img
                      src={`https://img.youtube.com/vi/oUUOKrjHtv8/maxresdefault.jpg`}
                      alt={`Épisode 01 — ${next.name}`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-minuit/30 transition-colors duration-300 group-hover:bg-minuit/10">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-soleil shadow-xl transition-transform duration-300 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-0.5 fill-minuit">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  {/* Infos épisode */}
                  <div className="flex flex-col justify-center p-8 md:w-[42%] md:p-12">
                    <div className="font-mono text-sm text-ciel-doux">{next.date}</div>
                    <div className="mt-4 h-10 flex items-center">
                      <img
                        src={next.logo}
                        alt={next.name}
                        className="max-h-full max-w-[180px] w-auto object-contain"
                      />
                    </div>
                    <h3 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
                      {next.name}
                    </h3>
                    <p className="mt-4 text-ciel-doux leading-relaxed">{next.description}</p>
                    <a
                      href={next.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-soleil px-6 py-3 text-sm font-semibold text-minuit hover:opacity-90 transition"
                    >
                      Regarder sur YouTube ↗
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-10 p-10 md:flex-row md:items-end md:justify-between md:p-16">
                  <div>
                    <span className="eyebrow text-soleil">Premier épisode</span>
                    <div className="mt-3 font-mono text-sm text-ciel-doux">{next.date}</div>
                    <div className="mt-4 h-12 flex items-center">
                      <img src={next.logo} alt={next.name} className="max-h-12 max-w-[200px] w-auto object-contain" />
                    </div>
                    <h3 className="mt-3 font-serif text-5xl font-semibold text-white md:text-6xl">{next.name}</h3>
                    <p className="mt-4 max-w-md text-ciel-doux">{next.description}</p>
                  </div>
                  <Link
                    to="/episodes"
                    className="inline-flex items-center gap-2 self-start rounded-full bg-soleil px-6 py-3 text-sm font-semibold text-minuit hover:opacity-90 transition md:self-end"
                  >
                    Calendrier complet <span aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* APERÇU ÉPISODES */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between">
            <div>
              <span className="eyebrow text-bleu-vif">Saison 01</span>
              <h2 className="mt-3 text-4xl font-semibold text-primary">Huit associations, huit histoires.</h2>
            </div>
            <Link to="/episodes" className="hidden md:inline text-sm font-medium text-bleu-vif hover:underline">
              Tout voir →
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {episodes.slice(0, 4).map((ep) => (
              <article key={ep.number} className="group rounded-xl border border-border bg-card p-6 transition hover:border-bleu-vif flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">EP.0{ep.number}</span>
                  <span className="rounded-full bg-ciel-pale px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-bleu-nuit">
                    {ep.category}
                  </span>
                </div>
                {/* Logo association — hauteur fixe, largeur auto plafonnée */}
                <div className="mt-5 h-12 w-full flex items-center justify-center">
                  <img
                    src={ep.logo}
                    alt={ep.name}
                    className="h-full w-auto object-contain"
                    style={{ maxWidth: ep.logoMaxW ?? "150px", ...(ep.logoInvert ? { filter: "invert(1)" } : {}) }}
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl text-primary">{ep.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ep.description}</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-bleu-vif">{ep.date}</span>
                  {ep.videoUrl && (
                    <a
                      href={ep.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-soleil px-3 py-1 text-xs font-semibold text-minuit hover:opacity-90 transition"
                    >
                      Regarder ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COULISSES — photos tournage */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <span className="eyebrow text-bleu-vif">Dans les coulisses</span>
            <h2 className="mt-3 text-3xl font-semibold text-primary">Le tournage, de l'intérieur.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img src="/images/tournage/tournage-1.jpg" alt="Tournage Ciel ouvert" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img src="/images/tournage/tournage-2.jpg" alt="Tournage Ciel ouvert" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img src="/images/tournage/tournage-3.jpg" alt="Tournage Ciel ouvert" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </section>

        {/* CITATION */}
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <blockquote className="font-serif text-3xl italic leading-snug text-primary md:text-5xl">
            « Chaque association a une histoire à raconter. »
          </blockquote>
          <div className="eyebrow mt-8 text-bleu-vif">Association Lumera</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
