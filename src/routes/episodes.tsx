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
            Chaque mois, un nouvel épisode dédié à une association genevoise. Diffusion sur
            YouTube et déclinaison courte sur Instagram, TikTok et Facebook.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {episodes.map((ep) => (
              <li key={ep.number} className="bg-card transition hover:bg-ciel-pale/60">
                <article className="grid items-center gap-6 p-6 md:grid-cols-[80px_140px_1fr_120px_auto] md:p-8">
                  <div className="font-serif text-4xl font-semibold text-bleu-vif">
                    0{ep.number}
                  </div>
                  <div className="font-mono text-sm text-muted-foreground">{ep.date}</div>
                  <div>
                    <h3 className="font-serif text-2xl text-primary">{ep.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{ep.description}</p>
                  </div>
                  <span className="justify-self-start rounded-full bg-ciel-pale px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bleu-nuit md:justify-self-center">
                    {ep.category}
                  </span>
                  <span className="text-sm font-medium text-bleu-vif">À venir →</span>
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
