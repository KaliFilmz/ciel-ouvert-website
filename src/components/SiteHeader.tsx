import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/articles", label: "Articles" },
  { to: "/episodes", label: "Épisodes" },
  { to: "/le-media", label: "Le média" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo-light.svg"
            alt="Ciel ouvert"
            className="h-9 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/episodes"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
        >
          Voir les épisodes
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
