# Ciel Ouvert — Site web

**Site live :** https://www.ciel-ouvert.ch  
**GitHub :** https://github.com/KaliFilmz/ciel-ouvert-website  
**Dossier local :** `/Users/j.boy/Desktop/CLAUDE CODE/LUMERA/PROJET "CIEL OUVERT"/SITE WEB/Ciel Ouvert/site web/media-heartbeat-builder-main/`

## Stack

- TanStack Start (SSR) + Vite + Nitro
- Tailwind CSS
- TypeScript
- Bun (package manager)

## Déploiement

Push sur `main` → Vercel déploie automatiquement via GitHub App.

```bash
cd "/Users/j.boy/Desktop/CLAUDE CODE/LUMERA/PROJET \"CIEL OUVERT\"/SITE WEB/Ciel Ouvert/site web/media-heartbeat-builder-main"
git add <fichiers>
git commit -m "description"
git push origin main
```

## Structure des routes

```
src/routes/
  index.tsx         — Page d'accueil
  episodes.tsx      — Liste des épisodes
  article.$slug.tsx — Détail d'un article/épisode
  a-propos.tsx      — À propos
  le-media.tsx      — Le média
  contact.tsx       — Contact
  __root.tsx        — Layout racine
```

## Palette officielle

| Couleur    | Hex     | Variable CSS       |
|------------|---------|--------------------|
| Ciel pâle  | #EBF4FF | --co-ciel-pale     |
| Ciel doux  | #A9CFEF | --co-ciel-doux     |
| Bleu vif   | #378ADD | --co-bleu-vif      |
| Bleu nuit  | #0C447C | --co-bleu-nuit     |
| Minuit     | #042C53 | --co-minuit        |
| Soleil     | #F5A623 | --co-soleil        |

Typographie : **Lora** (titres) + **Inter** (corps/UI)
