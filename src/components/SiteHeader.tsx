import { useState } from "react";
import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/articles", label: "Articles" },
  { to: "/episodes", label: "Épisodes" },
  { to: "/le-media", label: "Le média" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

          {/* Symbole — aussi grand que la barre le permet */}
          <Link to="/" className="flex items-center group overflow-hidden h-[72px]" onClick={() => setOpen(false)}>
            <img src="/logo-transparent.png" alt="Ciel ouvert" className="h-[144px] w-auto" />
          </Link>

          {/* Navigation desktop */}
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

          <div className="flex items-center gap-3 self-center">
            <Link
              to="/episodes"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              Voir les épisodes
              <span aria-hidden>→</span>
            </Link>

            {/* Hamburger mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-muted transition"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-5">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-border">
            <Link
              to="/episodes"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
              onClick={() => setOpen(false)}
            >
              Voir les épisodes
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
