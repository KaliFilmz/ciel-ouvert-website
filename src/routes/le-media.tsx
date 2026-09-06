import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/le-media")({
  head: () => ({
    meta: [
      { title: "Le média — Ciel ouvert" },
      { name: "description", content: "Notre démarche : valoriser les associations genevoises avec une série de portraits filmés sur le terrain." },
    ],
  }),
  component: MediaPage,
});

const objectifs = [
  { t: "Visibilité", d: "Offrir aux associations un espace de présentation professionnel, durable et réutilisable pour leur propre communication." },
  { t: "Engagement", d: "Encourager l’engagement citoyen, en particulier chez les jeunes, en montrant concrètement l’importance du bénévolat." },
  { t: "Diversité", d: "Refléter fidèlement la pluralité du tissu associatif genevois — culture, sport, social, environnement, éducation." },
  { t: "Durabilité", d: "Poser les bases d’un média de référence inscrit dans la durée, avec une production régulière et un calendrier clair." },
];

function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-12">
          <span className="eyebrow text-bleu-vif">Le média</span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-primary md:text-6xl">
            Un regard frais sur l’actualité associative genevoise.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85">
            <em className="font-serif">Ciel ouvert</em> est un média associatif numérique porté
            par l’association <strong>Lumera</strong>, un collectif de jeunes passionnés
            d’audiovisuel et de communication. Notre mission : valoriser les associations qui
            font vivre la cohésion sociale, la culture et l’engagement citoyen à Genève.
          </p>
        </section>

        {/* OBJECTIFS */}
        <section className="bg-ciel-pale py-24">
          <div className="mx-auto max-w-6xl px-6">
            <span className="eyebrow text-bleu-vif">Nos objectifs</span>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl font-semibold text-primary">
              Quatre intentions qui guident chaque épisode.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {objectifs.map((o, i) => (
                <div key={o.t} className="rounded-2xl bg-card p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-bleu-vif">0{i + 1}</span>
                    <h3 className="font-serif text-2xl text-primary">{o.t}</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{o.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTOS TERRAIN */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
            <div className="overflow-hidden rounded-2xl aspect-[3/2]">
              <img src="/images/tournage/tournage-4.jpg" alt="Sur le terrain — Ciel ouvert" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-2xl aspect-[3/2] md:aspect-auto">
              <img src="/images/tournage/tournage-5.jpg" alt="Sur le terrain — Ciel ouvert" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </section>

        {/* CALENDRIER */}
        <section className="bg-minuit py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="eyebrow text-soleil">Calendrier</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Deux épisodes par mois, de septembre à décembre.
            </h2>
            <p className="mt-6 text-ciel-doux">
              La diffusion débute le 15 septembre 2026, avec un épisode le 15 et le 30 de chaque mois.
              Chaque épisode est consacré à une association genevoise différente.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
