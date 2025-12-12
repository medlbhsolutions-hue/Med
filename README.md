# MedLBH Solutions - Website

Une plateforme web moderne et complète pour **MedLBH Solutions**, spécialisée dans les solutions intégrées pour les établissements de santé privés.

## 🏥 Fonctionnalités

### Frontend (React + Vite)
- **Page d'accueil**: Hero section, engagements qualité, pôles de services, contact
- **Espace Client**: Dashboard avec statistiques, historique, profil personnel
- **Inscription/Connexion**: Formulaires sécurisés avec authentification JWT
- **Actualités**: Section des actualités et informations
- **Chatbot IA**: Assistant Phi 3 intégré pour répondre aux questions
- **Design Responsif**: Optimisé pour desktop et mobile
- **Couleurs**: Bleu et blanc (design professionnel)

### Backend (Node.js + Express)
- **Authentification**: Système complet d'authentification JWT
- **Gestion des cliniques**: CRUD complet avec autorisation
- **Base de données**: MongoDB pour la persistance des données
- **API REST**: Endpoints sécurisés et bien documentés
- **Chatbot IA**: Intégration Phi 3 avec fallback intelligent

### IA & Chatbot
- **Phi 3 Model**: Connecté à Ollama pour les réponses intelligentes
- **Contexte médical**: Réponses adaptées au secteur sanitaire
- **Base de données**: Historique des conversations stocké

## 📋 Structure du Projet

```
medlbh/
├── src/                    # Code React
│   ├── pages/             # Pages (Home, Login, Register, Dashboard, News)
│   ├── components/        # Composants réutilisables
│   ├── assets/            # Images et icônes SVG
│   ├── services/          # Appels API
│   ├── context/           # Context API (Auth)
│   ├── App.jsx
│   └── main.jsx
├── server/                # Backend Node.js
│   ├── routes/            # Routes API
│   ├── models/            # Schémas MongoDB
│   ├── controllers/       # Logique métier
│   ├── ai/                # Integration Phi 3
│   └── index.js
├── index.html             # Fichier HTML principal
├── vite.config.js         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind CSS
└── package.json           # Dépendances
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (v16+)
- MongoDB (local ou Atlas)
- Ollama avec Phi 3 (optionnel, pour le chatbot local)

### 1. Installation des dépendances

```bash
# Frontend
npm install

# Backend
cd server
npm install
```

### 2. Configuration

**Frontend (.env)**
```
VITE_API_URL=http://localhost:3000/api
```

**Backend (server/.env)**
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/medlbh
JWT_SECRET=medlbh_secret_key_2024_secure
PHI3_API_URL=http://localhost:11434/api/generate
PHI3_MODEL=phi
NODE_ENV=development
```

### 3. Démarrage

```bash
# Mode développement (frontend + backend)
npm run dev

# Ou séparément:
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:server
```

### 4. Accès

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000
- **API**: http://localhost:3000/api

## 🤖 Configuration du Chatbot Phi 3

### Avec Ollama (Recommandé)

```bash
# Installer Ollama depuis https://ollama.ai
# Télécharger le modèle Phi
ollama pull phi

# Lancer Ollama
ollama serve
```

Le chatbot utilise ensuite automatiquement le modèle local.

### Sans Ollama
Le chatbot utilise un système de réponses basées sur les mots-clés (fallback intelligent).

## 📝 Formulaires

Le site supporte l'intégration des trois formulaires MEDLBH:
- `formulaire_lancement_activite.html`
- `formulaire_medecin_international.html`
- `formulaire_recrutement_clinique.html`

Ces formulaires peuvent être intégrés dans la page `/register` via des tabs supplémentaires.

## 🎨 Personnalisation

### Couleurs (Tailwind)
```javascript
// tailwind.config.js
colors: {
  primary: '#0052CC',      // Bleu principal
  secondary: '#0066FF',    // Bleu secondaire
  accent: '#FF6B35',       // Orange (accent)
  light: '#F0F4F8',        // Arrière-plan léger
  dark: '#1A1F2E',         // Texte sombre
}
```

### Logo
Remplacez le logo SVG dans `src/assets/icons/Icons.jsx` pour ajouter votre propre logo.

## 📚 API Endpoints

### Authentification
- `POST /api/auth/register` - Créer un compte
- `POST /api/auth/login` - Se connecter
- `GET /api/auth/verify` - Vérifier le token
- `GET /api/auth/me` - Récupérer l'utilisateur actuel

### Cliniques
- `GET /api/clinics` - Lister les cliniques
- `GET /api/clinics/:id` - Détails d'une clinique
- `POST /api/clinics` - Créer une clinique (protégé)
- `PUT /api/clinics/:id` - Modifier une clinique (protégé)
- `DELETE /api/clinics/:id` - Supprimer une clinique (protégé)

### Chatbot
- `POST /api/chat/message` - Envoyer un message
- `GET /api/chat/history` - Récupérer l'historique
- `DELETE /api/chat/history` - Effacer l'historique

### Actualités
- `GET /api/news` - Lister les articles
- `GET /api/news/:id` - Détails d'un article
- `POST /api/news` - Créer un article (protégé)
- `PUT /api/news/:id` - Modifier un article (protégé)
- `DELETE /api/news/:id` - Supprimer un article (protégé)

## 🔐 Sécurité

- ✅ Authentification JWT
- ✅ Hachage des mots de passe (bcrypt)
- ✅ CORS configuré
- ✅ Validation des entrées
- ✅ Routes protégées

## 📱 Responsive Design

- ✅ Mobile-first
- ✅ Breakpoints: sm, md, lg
- ✅ Navigation mobile avec menu hamburger
- ✅ Optimisé pour tous les appareils

## 🌍 Déploiement

### Frontend (Vercel/Netlify)
```bash
npm run build
# Déployer le dossier dist/
```

### Backend (Heroku/Railway/Render)
```bash
# Pousser le code
git push heroku main
```

## 📞 Support

**Contact MedLBH Solutions**
- Email: llabhilil@yahoo.fr
- Téléphone: +212 6 90 40 52 69
- Web: www.medlbhsolutions.com
- Localisation: Casablanca - Grenoble

## 📄 Licence

Propriétaire - MedLBH Solutions 2024

---

**Note**: Ce projet est conçu pour la plateforme MedLBH Solutions. Pour la personnalisation avancée ou le support, contactez l'équipe MedLBH.
