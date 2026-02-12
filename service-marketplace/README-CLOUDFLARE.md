# Déploiement sur Cloudflare Pages

## Instructions de déploiement

### Méthode 1: Via l'interface Cloudflare Pages

1. Connectez-vous à votre dashboard Cloudflare
2. Allez dans "Pages" > "Create a project"
3. Connectez votre compte GitHub
4. Sélectionnez le repository `koumen222/martservice`
5. Configurez les paramètres de build :
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/service-marketplace`

6. Cliquez sur "Save and Deploy"

### Méthode 2: Via Wrangler CLI

1. Installez Wrangler :
   ```bash
   npm install -g wrangler
   ```

2. Authentifiez-vous :
   ```bash
   wrangler login
   ```

3. Déployez :
   ```bash
   cd service-marketplace
   wrangler pages deploy dist
   ```

## Fichiers de configuration

- `vite.config.js` : Configuré pour le déploiement statique
- `_redirects` : Gère le routing SPA pour React Router
- `_headers` : Optimisations de cache
- `wrangler.toml` : Configuration Cloudflare Workers

## Fonctionnalités optimisées

- ✅ Routing SPA (React Router)
- ✅ Cache statique optimisé
- ✅ Build optimisé pour la production
- ✅ Support des assets statiques
- ✅ Compression gzip

## Variables d'environnement

Ajoutez des variables d'environnement dans le dashboard Cloudflare Pages si nécessaire.

## Déploiement automatique

Configurez le déploiement automatique sur chaque push vers la branche `main`.
