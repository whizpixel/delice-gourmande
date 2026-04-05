# 🌸 Délice Gourmande — Site Vitrine

Site vitrine pour **Délice Gourmande**, une boutique artisanale proposant des compositions florales et des douceurs maison. One-pager responsive conçu pour présenter les créations et faciliter la prise de contact.

## Aperçu

Le site présente quatre gammes de produits (Bouquets, Pâtisserie, Coffrets, Saison), les valeurs de la boutique, et une section de contact avec un appel à l'action par email.

## Stack technique

- **React 18** + **TypeScript**
- **Vite** — bundler
- **Tailwind CSS** — styles
- **shadcn/ui** — composants UI (Radix UI)
- **React Router v6** — routing
- **TanStack Query** — gestion des requêtes
- **Vitest** + **Playwright** — tests unitaires et e2e

## Lancer le projet

```bash
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:8080`.

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Linter ESLint |
| `npm run test` | Tests unitaires (Vitest) |

## Structure du projet

```
src/
├── assets/          # Images (hero, bouquet, pâtisserie, coffret, saison)
├── components/
│   ├── ui/          # Composants shadcn/ui
│   └── NavLink.tsx
└── pages/
    ├── Index.tsx    # Page principale (one-pager)
    └── NotFound.tsx
```

## Contact

Pour toute commande ou création sur mesure : **bonjour@delicegourmande.fr**
