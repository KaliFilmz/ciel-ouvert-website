import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getArticleBySlug } from "@/lib/articles";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="eyebrow text-gris-texte">Introuvable</p>
      <h1 className="font-serif text-3xl text-bleu-nuit">Article non trouvé</h1>
      <Link to="/articles" className="mt-2 text-sm text-bleu-vif hover:underline">
        ← Retour aux articles
      </Link>
    </div>
  ),
});

function ArticlePage() {
  const article = Route.useLoaderData();

  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-border/60 bg-ciel-pale py-14">
          <div className="mx-auto max-w-3xl px-6">
            <Link to="/articles" className="eyebrow text-bleu-vif hover:underline">
              ← Articles
            </Link>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-bleu-nuit md:text-4xl">
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gris-texte">
              <span className="eyebrow rounded-full bg-bleu-nuit px-3 py-1 text-[10px] text-white">
                {article.category}
              </span>
              <time dateTime={article.iso}>{article.date}</time>
              <span>Par {article.author}</span>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-gris-texte">{article.excerpt}</p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 py-14">
          <div className="space-y-5 text-base leading-relaxed text-foreground">
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3 key={i} className="font-serif text-xl font-semibold text-bleu-nuit">
                    {para.slice(2, -2)}
                  </h3>
                );
              }
              if (para.startsWith("**")) {
                const match = para.match(/^\*\*(.+?)\*\*(.*)$/s);
                if (match) {
                  return (
                    <p key={i}>
                      <strong className="font-semibold text-bleu-nuit">{match[1]}</strong>
                      {match[2]}
                    </p>
                  );
                }
              }
              if (para.startsWith("1. ") || para.startsWith("- ")) {
                const items = para.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="list-disc space-y-1 pl-6">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^[\d+\.\-]\s*/, "").replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
