# Mart Service API

API backend pour Mart Business - Marketplace de services au Cameroun.

## Structure du projet

```
├── models/         # Modèles Mongoose (Service, Provider, Request)
├── routes/         # Routes Express API
├── server.js       # Point d'entrée du serveur
├── seed.js         # Script de seeding pour la base de données
└── .env            # Variables d'environnement
```

## Installation

```bash
npm install
```

## Configuration

Créer un fichier `.env`:

```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/mart_service?retryWrites=true&w=majority
PORT=5000
```

## Scripts disponibles

```bash
npm run start    # Démarrer le serveur en production
npm run dev      # Démarrer avec nodemon (développement)
npm run seed     # Peupler la base de données avec des données de test
```

## API Endpoints

| Route | Description |
|-------|-------------|
| `GET /api/health` | Vérification du serveur |
| `GET /api/services` | Liste des services |
| `GET /api/services/categories` | Catégories disponibles |
| `GET /api/services/featured` | Services en vedette |
| `GET /api/providers` | Liste des prestataires |
| `GET /api/requests` | Liste des demandes |
| `GET /api/stats` | Statistiques dashboard |

## Technologies

- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

## Déploiement

L'API peut être déployée sur:
- Render
- Railway
- Heroku
- VPS cloud

Assurez-vous de configurer les variables d'environnement sur votre plateforme de déploiement.
