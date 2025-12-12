# 🧪 Guide de Test - MedLBH Solutions

## 📋 Checklist de Test Complète

### 🏠 Page d'Accueil

- [ ] Hero section s'affiche correctement
- [ ] Titre et sous-titre sont visibles
- [ ] Boutons CTA fonctionnent
- [ ] Section engagements s'affiche (4 cartes)
- [ ] Icons s'affichent correctement
- [ ] Pôles de services visibles (4 sections)
- [ ] Section contact avec infos MedLBH
- [ ] Footer s'affiche en bas
- [ ] Design responsive (mobile/tablet/desktop)

### 🔐 Inscription

1. Aller sur http://localhost:5173/register
2. Tester avec ces données:

```
Email: test@medlbh.fr
Nom: Test User
Mot de passe: TestPass123!
Rôle: Clinique
Clinique: Clinique Test
```

- [ ] Formulaire valide
- [ ] Validation des champs
- [ ] Mot de passe requis
- [ ] Email unique (teste avec email existant)
- [ ] Redirect vers login après inscription
- [ ] Message d'erreur pour email dupliqué

### 🔑 Connexion

1. Aller sur http://localhost:5173/login
2. Utiliser les credentials créés précédemment

```
Email: test@medlbh.fr
Mot de passe: TestPass123!
```

- [ ] Connexion réussie
- [ ] Redirect vers home après connexion
- [ ] Token stocké dans localStorage
- [ ] Navbar montre le nom de l'utilisateur
- [ ] Bouton "Déconnexion" visible

### 📊 Dashboard

1. Après connexion, cliquer sur "Dashboard"
2. Ou aller sur http://localhost:5173/dashboard

- [ ] 4 cartes de statistiques visibles
- [ ] Onglet "Aperçu" par défaut
- [ ] Onglet "Historique" fonctionne
- [ ] Onglet "Profil" affiche les infos
- [ ] Nom de l'utilisateur affiché
- [ ] Email correct
- [ ] Rôle correct
- [ ] Bouton "Modifier le profil" visible

### 📰 Actualités

1. Aller sur http://localhost:5173/news

- [ ] Articles s'affichent en grille
- [ ] Catégories visibles
- [ ] Dates affichées
- [ ] Images placeholder visibles
- [ ] Design responsive
- [ ] Articles cliquables (hover effect)

### 🤖 Chatbot

1. Chercher l'icône chat en bas à droite

```
Messages à tester:
- "Bonjour"
- "Qu'est-ce que le recrutement?"
- "Comment vous contacter?"
- "Parlez-moi de vos services"
```

- [ ] Chatbot s'ouvre/se ferme
- [ ] Messages apparaissent
- [ ] Réponses du bot visibles
- [ ] Historique des messages
- [ ] Bouton send fonctionne
- [ ] Indicateur de frappe (typing)
- [ ] Responsive design

### 📱 Responsive Design

**Mobile (375px):**
- [ ] Navbar mobile menu hamburger
- [ ] Texte lisible
- [ ] Boutons cliquables
- [ ] Images adaptées
- [ ] Pas de débordement

**Tablette (768px):**
- [ ] Layout 2 colonnes
- [ ] Navbar horizontal
- [ ] Cartes bien alignées

**Desktop (1920px):**
- [ ] Layout complet
- [ ] Espacement correct
- [ ] Animations fluides

### 🎨 Design & Couleurs

- [ ] Bleu primaire (#0052CC) utilisé
- [ ] Bleu secondaire (#0066FF) utilisé
- [ ] Orange accent (#FF6B35) visible
- [ ] Fond léger (#F0F4F8)
- [ ] Texte sombre lisible
- [ ] Contraste suffisant
- [ ] Hover effects visibles

### 🔌 API Backend

**Tester avec Postman ou VS Code REST Client:**

#### Inscription
```
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "name": "Dr. Test",
  "email": "dr.test@medlbh.fr",
  "password": "Password123!",
  "role": "doctor",
  "specialization": "Cardiology"
}
```
- [ ] Retourne token
- [ ] User créé dans MongoDB

#### Connexion
```
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "dr.test@medlbh.fr",
  "password": "Password123!"
}
```
- [ ] Retourne token
- [ ] User data correct

#### Récupérer l'utilisateur
```
GET http://localhost:3000/api/auth/me
Authorization: Bearer {TOKEN}
```
- [ ] Retourne données utilisateur
- [ ] Sans mot de passe

#### Vérifier token
```
GET http://localhost:3000/api/auth/verify
Authorization: Bearer {TOKEN}
```
- [ ] Valide le token
- [ ] Retourne user si valide

#### Créer une clinique
```
POST http://localhost:3000/api/clinics
Authorization: Bearer {TOKEN}
Content-Type: application/json

{
  "name": "Clinique MedLBH Test",
  "founder": "Dr. Test",
  "email": "contact@clinic.fr",
  "phone": "+212600000000",
  "specialties": ["Cardiologie", "Neurologie"],
  "beds": 50,
  "staff": 25
}
```
- [ ] Clinique créée
- [ ] ID retourné

### 🛡️ Sécurité

- [ ] Token valide requiert pour protected routes
- [ ] Routes sans token retournent 401
- [ ] Mots de passe hachés en BD
- [ ] CORS fonctionne
- [ ] Validation des entrées
- [ ] Injection SQL impossible

### 🐛 Gestion d'Erreurs

**Tester les cas d'erreur:**

```
Scénarios d'erreur:
1. Inscription avec email existant → Message d'erreur
2. Connexion avec mauvais mdp → "Email ou mdp incorrect"
3. Sans token sur route protégée → 401
4. Token expiré → Redirect login
5. Donnée invalide → Validation error
6. Chatbot sans réponse → Fallback message
```

- [ ] Messages d'erreur clairs
- [ ] Pas de crash du site
- [ ] Redirection appropriée
- [ ] Logs utiles en console

---

## 🔍 Tests Spécifiques MedLBH

### Pôles de Services

Vérifier que les 4 pôles sont présents:

- [ ] Pôle 1 - Recrutement & Mobilité Médicale
- [ ] Pôle 2 - Accompagnement Structuration
- [ ] Pôle 3 - Conseil Stratégique
- [ ] Pôle 4 - Recouvrement & Gestion

### Engagements Qualité

Vérifier les 4 engagements:

- [ ] Excellence et transparence
- [ ] Éthique et confidentialité
- [ ] Réactivité et proximité
- [ ] Innovation et durabilité

### Informations Contact

Vérifier les infos MedLBH:

- [ ] Nom: Nadia Labhilil (Fondatrice)
- [ ] Email: llabhilil@yahoo.fr
- [ ] Téléphone: +212 6 90 40 52 69
- [ ] Lieu: Casablanca - Grenoble
- [ ] Site: www.medlbhsolutions.com

---

## 📊 Tests de Performance

- [ ] Page d'accueil charge < 3s
- [ ] Dashboard < 2s
- [ ] Pas de lag au scroll
- [ ] Chatbot répond < 2s
- [ ] Images chargent rapidement
- [ ] Pas d'erreur en console

---

## ✅ Validation Finale

Avant de déployer, vérifier:

- [ ] Tous les tests passent
- [ ] Pas d'erreurs console
- [ ] Responsive sur tous les écrans
- [ ] Chatbot fonctionne
- [ ] BD synced
- [ ] Variables d'environnement configurées
- [ ] Documentation à jour

---

## 🚀 Commandes Utiles

```bash
# Lancer les tests
npm test

# Build pour production
npm run build

# Lancer le serveur backend seul
npm run server

# Lancer le frontend seul
npm run dev:frontend

# Nettoyer node_modules
rm -r node_modules && npm install

# Voir les logs MongoDB
db.getCollection('users').find()

# Voir les process actifs
lsof -i :3000
lsof -i :5173
lsof -i :27017
```

---

## 📸 Captures d'Écran à Générer

1. Homepage
2. Page d'inscription
3. Page de connexion
4. Dashboard
5. Page actualités
6. Chatbot en action
7. Mobile view
8. Erreur handling

---

## 🎯 Résumé

Après avoir complété tous ces tests, vous pouvez être sûr que:

✅ Le site fonctionne correctement  
✅ Sécurité validée  
✅ Performance acceptable  
✅ UX fluide et responsive  
✅ Prêt pour production  

Bon testing! 🧪
