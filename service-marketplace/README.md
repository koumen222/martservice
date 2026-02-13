# Mart Service Client

Application frontend React pour Mart Business - Marketplace de services au Cameroun.

## 🚀 Fonctionnalités

- Catalogue de services avec filtres
- Fiches détaillées des prestataires
- Formulaire de demande de service
- Dashboard administrateur complet
- Devenir prestataire (inscription)
- Interface responsive mobile-first

## 📦 Installation

```bash
npm install
```

## ⚙️ Configuration

Créer un fichier `.env.local` à la racine:

```env
VITE_API_URL=http://localhost:5000/api
```

Pour la production, remplacez par l'URL de votre API déployée.

## 🛠️ Scripts disponibles

```bash
npm run dev                # Démarrer le serveur de développement (port 5173)
npm run build              # Construire pour la production
npm run preview            # Prévisualiser la build localement
npm run build:cloudflare   # Build optimisé pour Cloudflare Pages
```

## 📡 Connexion au Backend

Cette application frontend communique avec l'API **mart-service-api**. Assurez-vous que:

1. Le backend est démarré (voir [mart-service-api](../mart-service-api))
2. La variable `VITE_API_URL` pointe vers la bonne URL

### Structure du projet

```
src/
├── api/           # Fonctions d'appel API
├── assets/        # Images et ressources statiques
├── components/    # Composants React réutilisables
├── pages/         # Pages de l'application
│   ├── Home.jsx
│   ├── ServicesPage.jsx
│   ├── ServiceDetailPage.jsx
│   ├── ProviderDetailPage.jsx
│   ├── AdminDashboardPage.jsx
│   ├── BecomeProviderPage.jsx
│   └── ContactPage.jsx
├── App.jsx        # Composant principal avec routes
└── main.jsx       # Point d'entrée
```

## 🛠️ Technologies

- **React 19** - Framework UI
- **Vite 7** - Build tool
- **React Router 6** - Navigation
- **Tailwind CSS 3** - Styling
- **Lucide React** - Icônes

## 🚀 Déploiement

### Cloudflare Pages (recommandé)

1. Construire le projet:
```bash
npm run build:cloudflare
```

2. Déployer le dossier `dist/` sur Cloudflare Pages.

### Autres plateformes

- Vercel
- Netlify
- GitHub Pages

## 📝 Notes

- Ce projet est maintenant **séparé** du backend
- Voir le dossier `mart-service-api/` pour l'API backend
- L'architecture est modulaire et maintenable

## 📄 Licence

Ce projet est sous licence MIT.
