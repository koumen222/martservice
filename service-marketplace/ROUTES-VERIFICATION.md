# Vérification des routes API - Production

## Configuration actuelle

**URL de production :** `https://martservice-production.up.railway.app`

## Routes du backend (server.js)

```
GET  /api/health              → Health check
POST /api/auth/register       → Inscription
POST /api/auth/login          → Connexion
GET  /api/auth/me             → Profil utilisateur

GET  /api/services            → Liste des services
GET  /api/services/:id        → Service par ID

GET  /api/providers           → Liste des prestataires
GET  /api/providers/:id       → Prestataire par ID
GET  /api/providers/by-service/:serviceId → Prestataires par service

GET  /api/requests            → Liste des demandes
POST /api/requests            → Créer une demande
PUT  /api/requests/:id/status → Mettre à jour statut
PUT  /api/requests/:id/assign → Assigner prestataire
PUT  /api/requests/:id/reassign → Réassigner prestataire
GET  /api/requests/by-provider/:providerId → Demandes par prestataire

GET  /api/stats               → Statistiques
```

## Routes du frontend (api.js)

### Authentification
- `POST /auth/register` → Inscription
- `POST /auth/login` → Connexion  
- `GET /auth/me` → Profil

### Services
- `GET /services` → Liste services
- `GET /services/:id` → Service par ID

### Prestataires
- `GET /providers` → Liste prestataires
- `GET /providers/:id` → Prestataire par ID
- `GET /providers/by-service/:serviceId` → Prestataires par service

### Demandes
- `GET /requests` → Liste demandes
- `POST /requests` → Créer demande
- `PUT /requests/:id/status` → Mettre à jour statut
- `PUT /requests/:id/assign` → Assigner prestataire
- `PUT /requests/:id/reassign` → Réassigner prestataire
- `GET /requests/by-provider/:providerId` → Demandes par prestataire

### Statistiques
- `GET /stats` → Statistiques

## URLs complètes en production

Exemples d'appels qui seront faits :

```
https://martservice-production.up.railway.app/api/health
https://martservice-production.up.railway.app/api/auth/login
https://martservice-production.up.railway.app/api/services
https://martservice-production.up.railway.app/api/providers
https://martservice-production.up.railway.app/api/requests
```

## Test des routes

Pour tester, exécutez :

```bash
# Health check
curl https://martservice-production.up.railway.app/api/health

# Liste des services
curl https://martservice-production.up.railway.app/api/services

# Liste des prestataires
curl https://martservice-production.up.railway.app/api/providers
```

## ✅ Vérification

- ✅ Toutes les routes frontend correspondent aux routes backend
- ✅ L'URL de production est correctement configurée
- ✅ Le préfixe `/api` est ajouté automatiquement
- ✅ Les variables d'environnement sont configurées
