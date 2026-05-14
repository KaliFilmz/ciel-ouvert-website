import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/articles")({
  component: ArticlesPage,
});

const categoryColors: Record<string, string> = {
  Éditorial: "bg-bleu-nuit text-white",
  Culturel: "bg-soleil/20 text-bleu-nuit",
  Données: "bg-ciel-pale text-bleu-nuit",
  Pratique: "bg-ciel-doux/30 text-bleu-nuit",
};

function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-border/60 bg-ciel-pale py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow text-bleu-vif">Le média</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-bleu-nuit md:text-5xl">
              Articles
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gris-texte">
              Éditoriaux, portraits d'associations, données et ressources pratiques — tout ce qui
              nourrit le projet Ciel ouvert.
            </p>
          </div>
        </section>

        {/* Article grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to="/article/$slug"
                params={{ slug: article.slug }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md hover:border-bleu-vif/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`eyebrow rounded-full px-3 py-1 text-[10px] ${categoryColors[article.category] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {article.category}
                  </span>
                  <time className="text-xs text-gris-texte" dateTime={article.iso}>
                    {article.date}
                  </time>
                </div>

                <h2 className="mt-4 font-serif text-xl font-semibold leading-snug text-bleu-nuit group-hover:text-bleu-vif transition-colors">
                  {article.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-gris-texte">
                  {article.excerpt}
                </p>

                <span className="mt-5 text-sm font-medium text-bleu-vif group-hover:underline">
                  Lire l'article →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
