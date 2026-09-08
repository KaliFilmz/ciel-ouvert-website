import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Une erreur est survenue
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Quelque chose s'est mal passé. Essayez de rafraîchir la page ou revenez à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://www.ciel-ouvert.ch";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ciel Ouvert",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description: "Média associatif numérique genevois. Portraits vidéo des associations du Canton de Genève.",
  foundingLocation: { "@type": "Place", name: "Genève, Suisse" },
  sameAs: [
    "https://www.youtube.com/@cielouvert",
    "https://www.instagram.com/cielouvert",
  ],
  parentOrganization: { "@type": "Organization", name: "Association Lumera" },
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ciel Ouvert — Média associatif genevois" },
      {
        name: "description",
        content:
          "Ciel Ouvert est un média associatif numérique genevois. Portraits vidéo des associations du Canton de Genève — culture, sport, social, citoyenneté. 8 épisodes, de septembre à décembre 2026.",
      },
      {
        name: "keywords",
        content:
          "Ciel Ouvert, média associatif, Genève, associations genevoises, Canton de Genève, portrait association, vidéo associations, Lumera, La Ruche, tissu associatif, bénévolat Genève, engagement citoyen Genève, culture Genève, sport Genève",
      },
      { name: "author", content: "Association Lumera" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "fr" },
      { name: "google-site-verification", content: "aRHhZfukLLeFlQMTqwTqgqmm8XIrjLVCCCaLid9z7KI" },
      // Open Graph
      { property: "og:title", content: "Ciel Ouvert — Média associatif genevois" },
      {
        property: "og:description",
        content:
          "Portraits vidéo des associations du Canton de Genève — culture, sport, social, citoyenneté. 8 épisodes, de septembre à décembre 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "fr_CH" },
      { property: "og:site_name", content: "Ciel Ouvert" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ciel Ouvert — Média associatif genevois" },
      {
        name: "twitter:description",
        content:
          "Portraits vidéo des associations du Canton de Genève. 8 épisodes, de septembre à décembre 2026.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
      // JSON-LD
      { "script:ld+json": jsonLd } as never,
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "canonical", href: SITE_URL },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
