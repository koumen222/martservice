# Configuration des variables d'environnement

## Fichier .env (développement)

Ouvrez le fichier `.env` et configurez :

```env
# Configuration de l'API pour le développement
VITE_API_BASE_URL=http://localhost:3000/api

# Configuration de l'API pour la production Railway
VITE_API_BASE_URL=https://martservice-production.up.railway.app/api
```

## Configuration pour Cloudflare Pages

Dans votre dashboard Cloudflare Pages → Settings → Environment variables :

- **Nom** : `VITE_API_BASE_URL`
- **Valeur** : `https://martservice-production.up.railway.app/api`
- **Environnement** : Production

## Test de l'API

Vérifiez que votre API est accessible :

```bash
curl https://martservice-production.up.railway.app/api/health
```

## URLs configurées

- **Développement** : `http://localhost:3000/api`
- **Production** : `https://martservice-production.up.railway.app/api`
