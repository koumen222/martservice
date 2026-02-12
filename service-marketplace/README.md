# ServiceHub - Marketplace de Services

Une plateforme moderne de mise en relation entre clients et prestataires de services professionnels, construite avec React, Vite et Tailwind CSS.

## 🚀 Fonctionnalités

### Frontend
- **Navbar moderne** avec menu responsive et logo personnalisé
- **Section Hero** avec design attractif et CTA clairs
- **Présentation** avec 4 cards illustratives des avantages
- **Services** avec cards réutilisables et données mockées
- **Avantages** double colonne (clients/prestataires)
- **Footer** complet avec contact et réseaux sociaux

### Caractéristiques Techniques
- React 19 avec Vite
- React Router pour la navigation
- Tailwind CSS pour le design moderne
- Architecture propre et maintenable
- Responsive mobile-first
- Composants réutilisables

## 📦 Installation

1. Clonez le projet :
```bash
git clone <repository-url>
cd service-marketplace
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur sur `http://localhost:5173`

## 🛠️ Technologies Utilisées

- **React 19** - Framework JavaScript
- **Vite 7** - Build tool et serveur de développement
- **React Router 6** - Gestion des routes
- **Tailwind CSS 3** - Framework CSS
- **PostCSS** - Processing CSS
- **Autoprefixer** - Compatibilité navigateurs

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx      # Barre de navigation
│   ├── Hero.jsx        # Section hero
│   ├── Features.jsx    # Section présentation
│   ├── Services.jsx    # Section services
│   ├── ServiceCard.jsx # Card de service réutilisable
│   ├── Advantages.jsx  # Section avantages
│   └── Footer.jsx      # Pied de page
├── pages/              # Pages de l'application
│   └── Home.jsx        # Page d'accueil
├── assets/             # Assets statiques
├── App.jsx             # Composant principal
└── index.css           # Styles globaux
```

## 🎨 Design

- **Palette de couleurs** : Bleu primaire avec tons secondaires
- **Typographie** : Inter pour une lisibilité optimale
- **Responsive** : Mobile-first avec breakpoints modernes
- **Animations** : Transitions douces et hover effects
- **UI/UX** : Design moderne type SaaS

## 🚀 Déploiement

Pour construire la version de production :

```bash
npm run build
```

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 🔄 Prochaines Étapes

- [ ] Intégration avec une API backend
- [ ] Système d'authentification
- [ ] Dashboard client et prestataire
- [ ] Système de paiements
- [ ] Notifications en temps réel
- [ ] Tests unitaires et E2E

## 📝 Notes

- Ce projet est actuellement une démo frontend
- Les données sont mockées pour la démonstration
- L'architecture est préparée pour l'intégration backend
- Le code suit les meilleures pratiques React

## 🤝 Contribuer

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.
