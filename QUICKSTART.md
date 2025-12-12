# 🚀 Guide de Démarrage Rapide - MedLBH Solutions

## ⚡ Installation Rapide (5 minutes)

### Option 1: Avec npm (Recommandé pour le développement)

```bash
# 1. Cloner/Ouvrir le projet
cd c:\Users\HP\MedlbH

# 2. Installer les dépendances
npm install
cd server
npm install
cd ..

# 3. Configurer MongoDB
# - Installer MongoDB Community Edition
# - Ou utiliser MongoDB Atlas (cloud)

# 4. Lancer le projet
npm run dev
```

**Le serveur démarre sur:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

### Option 2: Avec Docker

```bash
# 1. Installer Docker Desktop
# https://www.docker.com/products/docker-desktop

# 2. Lancer les containers
docker-compose up

# 3. Accéder au site
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

---

## 🔧 Configuration des Services

### MongoDB

**Locale:**
```bash
# Windows - via installer
mongod

# Ou via WSL2/Docker
docker run -d -p 27017:27017 --name mongodb mongo
```

**Atlas (Cloud):**
1. Créer un compte sur https://www.mongodb.com/cloud
2. Créer un cluster gratuit
3. Copier la chaîne de connexion dans `.env`

### Phi 3 Chatbot

**Installation locale (optionnel):**
```bash
# 1. Installer Ollama
# https://ollama.ai/download

# 2. Télécharger le modèle Phi
ollama pull phi

# 3. Lancer Ollama
ollama serve
```

Le chatbot utilisera automatiquement le modèle local si disponible.

---

## 📱 Utilisation du Site

### Créer un compte

1. Aller à http://localhost:5173/register
2. Remplir le formulaire:
   - Nom complet
   - Email
   - Rôle (Clinique ou Médecin)
   - Mot de passe

### Se connecter

1. Aller à http://localhost:5173/login
2. Utiliser les identifiants créés

### Accéder au Dashboard

- Une fois connecté, cliquer sur "Dashboard" dans la barre de navigation
- Voir les statistiques, historique et profil personnel

### Utiliser le Chatbot

- Cliquer sur l'icône de chat en bas à droite
- Poser des questions sur MedLBH ou les services médicaux

---

## 🎨 Personnaliser le Site

### Changer les couleurs

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: '#0052CC',      // ← Changer le bleu
  secondary: '#0066FF',    // ← Bleu secondaire
  accent: '#FF6B35',       // ← Orange accent
  light: '#F0F4F8',        // ← Arrière-plan
  dark: '#1A1F2E',         // ← Texte sombre
}
```

### Ajouter le logo

**File:** `src/assets/icons/Icons.jsx`

```jsx
export const MedLbhLogo = () => (
  // Remplacer le SVG par votre logo
);
```

### Modifier les textes

**Sections principales:**
- `src/components/HeroSection.jsx` - Bannière d'accueil
- `src/components/QualityCommitments.jsx` - Engagements qualité
- `src/components/ServicePoles.jsx` - Pôles de services
- `src/components/ContactSection.jsx` - Contact

---

## 🗄️ Base de Données

### Collections MongoDB

```
medlbh/
├── users (Utilisateurs)
│   ├── name, email, password, role, etc.
│
├── clinics (Cliniques)
│   ├── name, founder, specialties, staff, etc.
│
├── news (Actualités)
│   ├── title, content, author, category, etc.
│
└── chathistory (Historique chat)
    ├── userId, userMessage, botResponse, etc.
```

### Requêtes utiles

```bash
# Voir les utilisateurs
db.users.find()

# Voir les cliniques
db.clinics.find()

# Supprimer tous les chats
db.chathistory.deleteMany({})
```

---

## 🐛 Dépannage

### "Cannot find module" Error

```bash
# Réinstaller les dépendances
rm -r node_modules package-lock.json
npm install
```

### MongoDB Connection Error

```bash
# Vérifier que MongoDB est lancé
mongod

# Ou utiliser l'URI du cloud
# MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/medlbh
```

### Chatbot ne répond pas

```bash
# Le fallback intelligent s'active automatiquement
# Pour Phi 3 local:
ollama serve
# Puis relancer le backend
```

### Port déjà utilisé

```bash
# Changer le port dans vite.config.js ou server/.env
PORT=3001  # Backend
# ou
npm run dev -- --port 5174  # Frontend
```

---

## 📚 Structure des Dossiers

```
medlbh/
├── src/
│   ├── components/      # Composants React
│   ├── pages/          # Pages du site
│   ├── services/       # API calls
│   ├── context/        # Auth context
│   ├── assets/         # Images & icônes
│   └── App.jsx         # Composant principal
├── server/
│   ├── routes/         # API routes
│   ├── models/         # MongoDB schemas
│   ├── ai/             # Phi 3 integration
│   └── index.js        # Serveur principal
├── public/             # Fichiers statiques
└── package.json        # Dépendances
```

---

## 🚀 Déploiement

### Frontend (Vercel)

```bash
npm run build
# Déployer le dossier dist/ sur Vercel
```

### Backend (Render/Railway)

```bash
# Pousser le code sur git
git push heroku main
# Ou sur Render/Railway
```

---

## 💡 Astuces

- Utiliser `npm run dev` pour le mode développement avec rechargement automatique
- Consulter `README.md` pour la documentation complète
- Vérifier les logs du terminal pour les erreurs
- Utiliser les outils de développement du navigateur (F12)

---

## 📞 Support

**Contact MedLBH:**
- Email: llabhilil@yahoo.fr
- Téléphone: +212 6 90 40 52 69
- Site: www.medlbhsolutions.com

**Besoin d'aide?**
- Consulter la documentation: `README.md`
- Vérifier les erreurs dans la console
- Réinstaller les dépendances

Bon développement! 🎉
