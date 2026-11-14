# Portfolio d’Amine Izmaoun

Portfolio React en français pour une recherche de stage PFE en génie logiciel et DevOps. Adapté du template [DeveloperFolio](https://github.com/saadpasta/developerFolio), en conservant sa mise en page, ses illustrations d’origine, sa signature, ses grandes sections et ses cartes. La couleur violette est légèrement ajustée. La photo fournie directement par Amine remplace l’illustration d’accueil et figure aussi dans le contact.

## Installation et lancement

Prérequis : **Node.js 24 LTS et npm**. Le projet déclare Node.js ≥ 22.12 ; la version testée est 24.22.1. Aucun compte, jeton, fichier `.env` ni service externe n’est requis.

```bash
cd /home/amine/Desktop/developerFolio
npm ci
npm run dev
```

Ouvrir l’adresse indiquée par Vite, normalement `http://127.0.0.1:5173/`. `npm start` est également disponible. Arrêter le serveur avec `Ctrl+C`.

## Compilation et aperçu de production

```bash
npm run build
npm run preview
```

Le résultat complet est dans `dist/`. L’aperçu est normalement disponible sur `http://127.0.0.1:4173/`. Servir le dossier `dist/` avec un hébergement statique ; ne pas ouvrir directement `index.html` en `file://`. La base relative configurée dans `vite.config.js` permet aussi un hébergement sous un sous-répertoire. Le déploiement Sites est configuré dans `.openai/hosting.json`. La version publique utilise le même build statique ; aucun secret n’est injecté dans le frontend.

Option Docker :

```bash
docker build -t amine-portfolio .
docker run --rm -p 8080:80 amine-portfolio
```

Ouvrir `http://localhost:8080/`. Cette option n’a pas été exécutée pendant la vérification.

## Personnalisation

- `src/portfolio.js` : nom, présentation, coordonnées, liens, compétences, expériences, projets, formation, engagements et langues.
- `src/App.jsx` : assemblage des sections. Les composants se trouvent dans `src/components/` et `src/containers/`, comme dans DeveloperFolio. Les liens de démonstration ne s’affichent que si `demo` contient une URL vérifiée.
- `src/_globalColor.scss` : palette du template. Les styles SCSS des composants d’origine sont réutilisés. `src/personalization.scss` regroupe les ajustements de contenu, de responsive, de thème et d’accessibilité ; `src/index.css` conserve les polices et styles de base. Les éléments apparaissent progressivement au défilement via `src/hooks/useScrollReveal.js` et la préférence de réduction des animations est respectée.
- `public/CV_IZMAOUN_Amine.pdf` : CV original téléchargeable ; remplacer le fichier ou mettre à jour son nom dans la configuration.
- `public/images/amine-izmaoun-portrait.jpg` : photo fournie par l’utilisateur, affichée à l’accueil et dans le contact.
- `public/icons/technologies/` : logos Devicon locaux, licence MIT incluse ; `TechnologyIcon.jsx` associe les compétences à leurs icônes. Les symboles sécurité, réseau et base de données sont génériques ; JavaFX et Docker Compose utilisent les icônes de Java et Docker.
- `index.html` : titre, description, langue et métadonnées ; les actualiser si le profil change.

## Modifications du template

- Rendu corrigé le 14 novembre 2026 pour rester fidèle à DeveloperFolio : accueil en deux colonnes avec illustration, icônes circulaires, grands titres, cartes d’expérience, formation avec séparateurs et thème clair/sombre.
- Contenu entièrement rédigé en français à partir du CV et de dépôts examinés ; trois projets retenus : Code212, Marketplace B2B et E-banking 2.0.
- Contributions au projet B2B distinguées du travail collectif et recoupées avec les commits d’`izmaoun`.
- Suppression des exemples, témoignages, blogs, podcasts, compteurs, pourcentages de compétences, écrans d’attente et intégrations sans contenu réel.
- Migration React 16 / Create React App vers **React 19.3.1 / Vite 8.3.8** ; suppression des bibliothèques anciennes inutilisées et de leurs conflits de dépendances. Versions verrouillées dans `package-lock.json`.
- Suppression de `fetch.js`, de l’ancienne variable `REACT_APP_GITHUB_TOKEN`, des appels GitHub au lancement et des scripts tiers de suivi. Aucun secret nécessaire dans le frontend.
- Menu mobile accessible, navigation par ancres, lien d’évitement, focus clavier visible, structure sémantique et préférences de mouvement réduit prises en compte.
- CI GitHub simplifiée : installation reproductible et compilation sous Node 24, sans déploiement automatique ni accès en écriture.

## Navigation et animations

Le menu reste visible au défilement, indique la section active et affiche une barre de progression de lecture. Un bouton flottant ramène en haut. Les sections apparaissent progressivement ; les compétences, cartes et boutons réagissent au survol. Les préférences de réduction des animations sont respectées. Les interactions restent utilisables au clavier et sur mobile.

## Vérifications et limites

Vérification initiale le 12 novembre, puis contrôles de la mise en page corrigée le 14 novembre 2026 :

- `npm ci` puis `npm run build` réussis ; `npm audit` effectué pendant l’installation : aucune vulnérabilité signalée.
- Versions installées cohérentes avec `npm ls --depth=0`.
- Tests sur le serveur de développement puis sur le build de production avec Chrome headless, aux largeurs **320, 390, 768, 1024 et 1440 px** : absence de débordement horizontal, images chargées, trois projets, ancres valides menu mobile et bascule clair/sombre fonctionnels.
- Téléchargement du CV par le bouton vérifié ; son empreinte SHA-256 est identique au fichier fourni. Licence accessible et aucune erreur JavaScript / console pendant ces parcours.
- Captures ordinateur et mobile examinées visuellement.
- Profil, dépôts GitHub et lien du template : réponse HTTP 200. LinkedIn refuse la vérification automatisée (HTTP 999) ; l’URL affichée est celle fournie par l’utilisateur.

L’ouverture des liens `mailto:` et `tel:` dépend des applications configurées sur l’appareil ; aucun message ni appel n’a été envoyé. Firefox, Safari, lecteurs d’écran et appareils physiques n’ont pas été testés. Les applications métiers présentées n’ont pas été lancées. La CI distante et le conteneur Docker n’ont pas été exécutés.

Le détail des sources, des révisions Git examinées et des différences entre CV et dépôts figure dans [docs/SOURCES.md](docs/SOURCES.md). Aucun lien de démonstration publique n’a été identifié dans les sources examinées.

## Licence et attributions

La licence **GNU GPL version 3** du template est conservée dans `LICENSE`, également disponible depuis la page « Mentions et crédits ». Le projet original est crédité dans la page « Mentions et crédits » et dans `NOTICE`. Le [README original](docs/README-DeveloperFolio-original.md) conserve ses attributions et sa liste de contributeurs ; ses anciennes instructions techniques ne s’appliquent plus à cette version.

Les modifications sont identifiées dans `NOTICE`. Le logiciel est fourni sans garantie ; toute redistribution doit respecter la GPL et fournir les sources correspondantes. Le CV et la photo restent les documents personnels de leur titulaire.

## Sources distribuées

La page « Mentions et crédits » permet de télécharger `public/portfolio-source.zip`, contenant les sources correspondantes sous GPL-3.0. Avant une nouvelle publication, régénérer cette archive avec `python3 scripts/export-source.py`, puis compiler. Les dossiers Git, dépendances, builds et fichiers `.env` sont exclus.

Le favicon utilise une icône de code </> violette : SVG pour les navigateurs modernes, PNG 48 px en alternative et icône Apple 180 px.

## Déploiement Vercel (Hobby)

`vercel.json` configure Vite, `npm run build` et le dossier `dist`. Pour déployer depuis ce dossier avec un compte Vercel déjà créé :

```bash
npx vercel login
python3 scripts/export-source.py
npx vercel --prod
```

Choisir l’espace personnel Hobby. Vercel attribue une adresse en `.vercel.app` ; un domaine acheté n’est pas nécessaire. `.vercel/` et les fichiers `.env` sont exclus de l’archive des sources.

## Publication actuelle sur Vercel

Portfolio public : https://amine-izmaoun-portfolio.vercel.app/

Publié le 14 novembre 2026 sur l’offre Hobby, par envoi manuel des fichiers compilés. L’application GitHub Vercel n’est pas installée et aucun déploiement automatique n’est activé. Les `git push` ne modifient donc pas le site en ligne.

Pour publier une nouvelle version :

```bash
npm ci
npm run build
```

Dans Vercel, utiliser l’envoi de fichiers (« Drop to Deploy »), sélectionner le contenu de `dist/` et choisir le projet existant `amine-izmaoun-portfolio`. Le lien public reste associé à ce projet. Le dépôt GitHub fournit le code source depuis la page « Mentions et crédits ».

Vérifications après publication : accueil public chargé et téléchargement du CV testé ; le PDF téléchargé est identique au fichier local (SHA-256).
