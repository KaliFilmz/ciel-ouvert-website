import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { episodes } from "@/lib/episodes";

export const Route = createFileRoute("/episodes")({
  head: () => ({
    meta: [
      { title: "Épisodes — Ciel ouvert" },
      { name: "description", content: "Calendrier des huit épisodes de la saison 01 : huit associations genevoises, de septembre à décembre 2026." },
    ],
  }),
  component: EpisodesPage,
});

function EpisodesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <span className="eyebrow text-bleu-vif">Saison 01 · 8 épisodes</span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-primary md:text-6xl">
            Huit associations, <br />
            <span className="italic text-bleu-vif">huit portraits.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85">
            Deux fois par mois, Ciel Ouvert donne la parole à une association genevoise à travers
            une interview filmée, disponible en entier sur notre chaîne YouTube.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {episodes.map((ep) => (
              <li key={ep.number} className="bg-card transition hover:bg-ciel-pale/60">
                <article className="p-4 md:p-8">

                  {/* ── Mobile layout ── */}
                  <div className="md:hidden">
                    <div className="flex items-center gap-3">
                      <span className="w-8 shrink-0 font-serif text-xl font-semibold text-bleu-vif">
                        0{ep.number}
                      </span>
                      <div className="h-8 w-[64px] shrink-0 flex items-center justify-center">
                        <img
                          src={ep.logo}
                          alt={ep.name}
                          className="h-full w-full object-contain object-center"
                          style={ep.logoInvert ? { filter: "invert(1)" } : undefined}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-sm font-semibold leading-tight text-primary truncate">
                          {ep.name}
                        </h3>
                        <div className="mt-0.5 font-mono text-[10px] text-bleu-vif">{ep.date}</div>
                      </div>
                      <span className="shrink-0 rounded-full bg-ciel-pale px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-bleu-nuit">
                        {ep.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {ep.description}
                    </p>
                  </div>

                  {/* ── Desktop layout ── */}
                  <div className="hidden md:grid md:grid-cols-[60px_120px_1fr_120px_auto] md:items-center md:gap-6">
                    <div className="font-serif text-3xl font-semibold text-bleu-vif">
                      0{ep.number}
                    </div>
                    <div className="h-10 w-[120px] flex items-center justify-center flex-shrink-0">
                      <img
                        src={ep.logo}
                        alt={ep.name}
                        className="h-full w-full object-contain object-center"
                        style={ep.logoInvert ? { filter: "invert(1)" } : undefined}
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-primary">{ep.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {ep.description}
                      </p>
                      <div className="mt-1 font-mono text-xs text-bleu-vif">{ep.date}</div>
                    </div>
                    <span className="justify-self-center rounded-full bg-ciel-pale px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bleu-nuit">
                      {ep.category}
                    </span>
                    <span className="text-sm font-medium text-bleu-vif">À venir →</span>
                  </div>

                </article>
              </li>
            ))}
          </ol>

          <div className="mt-16 rounded-2xl bg-soleil/15 p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
              <div>
                <span className="eyebrow text-bleu-nuit">Vous représentez une association ?</span>
                <h3 className="mt-3 font-serif text-3xl text-primary">
                  Proposez votre association pour la saison 02.
                </h3>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-minuit px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Nous écrire →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
