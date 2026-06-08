import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-minuit text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src="/logo-transparent.png" alt="Ciel ouvert" className="h-14 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-ciel-doux">
              Média associatif numérique porté par l’association Lumera. Mise en lumière des
              associations du Canton de Genève.
            </p>
          </div>
          <div>
            <div className="eyebrow text-soleil">Navigation</div>
            <ul className="mt-4 space-y-2 text-sm text-ciel-doux">
              <li><Link to="/articles" className="hover:text-white">Articles</Link></li>
              <li><Link to="/episodes" className="hover:text-white">Épisodes</Link></li>
              <li><Link to="/le-media" className="hover:text-white">Le média</Link></li>
              <li><Link to="/a-propos" className="hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-soleil">Suivre</div>
            <ul className="mt-4 space-y-2 text-sm text-ciel-doux">
              <li>YouTube — Ciel ouvert</li>
              <li>Instagram · TikTok · Facebook</li>
              <li>Genève, Suisse</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ciel-doux md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Association Lumera — Tous droits réservés.</span>
          <span className="font-mono">Charte v1.0 · Genève</span>
        </div>
      </div>
    </footer>
  );
}
