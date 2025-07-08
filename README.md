# Landing Page - Sylvain VIZZINI

## 🚀 Vue d'ensemble

Cette landing page a été optimisée pour maximiser le taux de conversion (CRO) en utilisant les meilleures pratiques du web design et du marketing digital.

## 📁 Structure des fichiers

```
├── index.html      # Structure HTML de la page
├── styles.css      # Feuille de style CSS
├── script.js       # JavaScript pour l'interactivité
└── README.md       # Documentation (ce fichier)
```

## 🛠️ Configuration rapide

### 1. Mettre à jour le nombre de places disponibles

Ouvrez `script.js` et modifiez la première ligne :

```javascript
const REMAINING_SEATS = 9; // Changez ce nombre
```

### 2. Ajouter votre lien Calendly

Dans `index.html`, recherchez `VOTRE_LIEN_CALENDLY` et remplacez-le par votre lien :

```html
<a href="https://calendly.com/votre-lien" class="btn btn-primary btn-extra-large" target="_blank">
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `styles.css` au début du fichier :

```css
:root {
    --primary-blue: #1e3a8a;      /* Bleu principal */
    --secondary-green: #10b981;    /* Vert secondaire */
    --accent-orange: #f97316;      /* Orange pour les CTA */
    /* ... */
}
```

### Contenu

Tous les textes sont directement modifiables dans `index.html`. Les sections principales :

- **Hero** : Titre principal et proposition de valeur
- **Problèmes** : Points de douleur de vos clients
- **Bénéfices** : Vos solutions
- **Résultats** : Cas client Garric Danse Club
- **Processus** : Étapes de votre méthode
- **FAQ** : Questions fréquentes

## 📱 Responsive Design

La page est entièrement responsive avec :
- Design mobile-first
- Menu hamburger sur mobile
- Grilles adaptatives
- Typographie fluide

## 🚀 Déploiement sur GitHub Pages

1. Créez un nouveau repository sur GitHub
2. Ajoutez les fichiers :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/votre-repo.git
   git push -u origin main
   ```
3. Dans les paramètres du repository :
   - Allez dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main / root
   - Cliquez sur Save

Votre site sera disponible à : `https://votre-username.github.io/votre-repo/`

## 🔍 SEO

La page est optimisée pour le référencement avec :
- Meta descriptions
- Balises Open Graph
- Structure sémantique HTML5
- Mots-clés ciblés pour le marché français

### Mots-clés principaux
- "application web sur mesure PME Rhône-Alpes"
- "automatisation facturation Make Airtable"
- "créer application gestion entreprise sans code Lyon"

## 📊 Tracking et Analytics

Pour ajouter Google Analytics, ajoutez ce code avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ⚡ Performance

- Chargement optimisé avec CSS critique
- JavaScript minimal et efficace
- Animations CSS pour fluidité
- Lazy loading prêt pour les images

## 🔧 Fonctionnalités avancées

### Compteur dynamique
Le nombre de places s'affiche en rouge si ≤ 3 places restantes

### Countdown timer
S'active automatiquement si ≤ 5 places restantes

### Animations au scroll
Les éléments apparaissent progressivement lors du défilement

## 📧 Prochaines étapes

1. **Ajouter votre lien Calendly**
2. **Configurer un nom de domaine** (optionnel)
3. **Installer Google Analytics**
4. **Créer des variantes pour A/B testing**
5. **Ajouter des témoignages clients**

## 💡 Conseils CRO

- Mettez à jour régulièrement le nombre de places
- Ajoutez des témoignages quand vous en avez
- Testez différents textes de CTA
- Surveillez vos analytics pour optimiser

## 🤝 Support

Pour toute question sur l'utilisation de cette landing page, n'hésitez pas à me contacter.

---

**Bonne chance pour le lancement de votre nouvelle offre !** 🚀