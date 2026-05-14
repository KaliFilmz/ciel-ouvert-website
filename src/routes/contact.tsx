import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ciel ouvert" },
      { name: "description", content: "Contactez l’équipe de Ciel ouvert et l’association Lumera à Genève." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-24 pb-24 md:grid-cols-[3fr_2fr]">
          <div>
            <span className="eyebrow text-bleu-vif">Contact</span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-primary md:text-6xl">
              Parlons de votre association.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/85">
              Une question, un partenariat, une candidature pour la saison 02 ? Écrivez-nous —
              nous lisons et répondons à chaque message.
            </p>

            <form className="mt-12 grid gap-5">
              <label className="grid gap-2">
                <span className="eyebrow text-muted-foreground">Nom</span>
                <input
                  type="text"
                  className="rounded-md border border-input bg-card px-4 py-3 text-base focus:border-bleu-vif focus:outline-none focus:ring-2 focus:ring-bleu-vif/30"
                  placeholder="Votre nom complet"
                />
              </label>
              <label className="grid gap-2">
                <span className="eyebrow text-muted-foreground">Email</span>
                <input
                  type="email"
                  className="rounded-md border border-input bg-card px-4 py-3 text-base focus:border-bleu-vif focus:outline-none focus:ring-2 focus:ring-bleu-vif/30"
                  placeholder="vous@exemple.ch"
                />
              </label>
              <label className="grid gap-2">
                <span className="eyebrow text-muted-foreground">Association</span>
                <input
                  type="text"
                  className="rounded-md border border-input bg-card px-4 py-3 text-base focus:border-bleu-vif focus:outline-none focus:ring-2 focus:ring-bleu-vif/30"
                  placeholder="Nom de votre association (facultatif)"
                />
              </label>
              <label className="grid gap-2">
                <span className="eyebrow text-muted-foreground">Message</span>
                <textarea
                  rows={6}
                  className="rounded-md border border-input bg-card px-4 py-3 text-base focus:border-bleu-vif focus:outline-none focus:ring-2 focus:ring-bleu-vif/30"
                  placeholder="Dites-nous tout…"
                />
              </label>
              <button
                type="button"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                Envoyer le message →
              </button>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl bg-ciel-pale p-8">
              <span className="eyebrow text-bleu-vif">Association Lumera</span>
              <p className="mt-4 font-serif text-2xl text-primary">
                Collectif de jeunes passionnés d’audiovisuel et de communication numérique.
              </p>
              <div className="mt-6 space-y-2 text-sm text-bleu-nuit/80">
                <div>Genève, Suisse</div>
                <div>contact@cielouvert.ch</div>
              </div>
            </div>
            <div className="rounded-2xl bg-minuit p-8 text-white">
              <span className="eyebrow text-soleil">Nous suivre</span>
              <ul className="mt-4 space-y-2 text-ciel-doux">
                <li>YouTube — Ciel ouvert</li>
                <li>Instagram @cielouvert</li>
                <li>TikTok @cielouvert</li>
                <li>Facebook — Ciel ouvert</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
