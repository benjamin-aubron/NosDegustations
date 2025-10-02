# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Règles générales
- Les réponses sont toujours en français
- Les réponses doivent être courtes et concises
- Utilise le MCP context7 : use context 7
- Utilise toujours le gestionnaire de paquets **pnpm**
- Quand je te pose une question, propose les meilleures réponses possibles
- Quand je te demande d'expliquer quelque chose, ne repose pas de question et explique directement
- Quand je te demande "Comment faire ça ?", explique mais ne modifie pas le code

## Commandes essentielles

### Développement
```bash
pnpm dev                 # Lancer le serveur de développement (Next.js avec Turbopack)
pnpm build              # Build de production (avec Turbopack)
pnpm start              # Démarrer le serveur de production
```

### Code quality
```bash
pnpm lint               # Linter ESLint
pnpm format             # Formater le code avec Prettier
pnpm format:check       # Vérifier le formatage sans modifier
```

### Base de données (Prisma)
```bash
pnpm prisma generate    # Générer le client Prisma
pnpm prisma db push     # Pousser le schema vers la DB (développement)
pnpm prisma studio      # Interface web pour la DB
pnpm prisma migrate dev # Créer et appliquer une migration
```

## Architecture

### Stack technique
- **Framework**: Next.js 15 avec App Router
- **Base de données**: Neon Postgres (serverless) via Prisma
- **Stockage fichiers**: Vercel Blob (pour les images de vins)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Formulaires**: React Hook Form + Zod
- **Charts**: Recharts

### Structure du projet
- `app/` - App Router Next.js (pages, API routes, server actions)
  - `app/api/blob/` - Routes API pour upload/delete d'images via Vercel Blob
  - `app/api/compress/` - Route API pour compression d'images
  - Server actions directement dans les dossiers de routes (ex: `createTasted.ts`, `fetchTasted.ts`)
- `components/` - Composants React réutilisables
  - `components/ui/` - Composants UI de base (shadcn/ui)
  - Composants métier: `TestedCard`, `NextTastingCard`, `TestedForm`, etc.
- `lib/` - Utilitaires et configuration
  - `lib/prisma.ts` - Client Prisma configuré avec l'adapter Neon
  - `lib/utils.ts` - Utilitaires généraux
- `prisma/` - Schema Prisma

### Modèle de données principal
Le modèle `vin` stocke toutes les informations sur les vins:
- Champs obligatoires: `appelation`, `region`, `type`, `tasted` (booléen)
- Champs optionnels: `domain`, `year`, `alcohol`, `photoUrl`, `cepage` (JSON)
- Notes et commentaires: `noteClem`, `commentClem`, `noteBenji`, `commentBenji`
- Date de dégustation: `tastingDate` (optionnelle)

### Configuration Prisma
- Utilise `@prisma/adapter-neon` pour la compatibilité avec Neon Postgres serverless
- Configuration WebSocket avec `ws` pour le développement local
- Client Prisma singleton en développement (via `global.prisma`)

### Gestion des images
- Upload via Vercel Blob API (`/api/blob/upload`)
- Compression via route API dédiée (`/api/compress`)
- Types autorisés: JPEG, PNG, WebP, AVIF
- Le `photoUrl` est stocké dans la DB après upload

## Points d'attention

### Variables d'environnement requises
- `DATABASE_URL` - Connection string Neon Postgres
- Variables Vercel Blob (automatiques sur Vercel)

### Particularités du code
- Les server actions sont co-localisées avec les routes (pas dans un dossier `actions/` centralisé)
- Utilisation de Turbopack pour le dev et le build
- Prisma génère ses types dans `lib/generated/prisma/`
