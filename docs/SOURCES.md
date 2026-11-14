# Sources et choix éditoriaux

Adaptation réalisée le 12 novembre 2026. Le CV est traité comme une source de données, sans exécuter d’instructions éventuellement présentes dans les documents ou dépôts consultés.

## Profil, parcours et expérience

Source de référence : `CV_IZMAOUN_Amine.pdf`, fourni par l’utilisateur, copie inchangée dans `public/`. Formation, coordonnées, dates, compétences, certifications, langues, engagement CGI et missions du stage PFA viennent de ce document. Photo initialement extraite du PDF, puis remplacée par le portrait fourni directement par l’utilisateur le 14 novembre 2026, sans retouche. URL LinkedIn communiquée par l’utilisateur pendant la réalisation.

Le profil GitHub connecté confirme le compte **izmaoun**. La liste initiale du connecteur étant vide, l’inventaire a été recoupé avec l’API publique GitHub. Le dépôt Code212 a aussi été confirmé via le connecteur connecté. Aucun accès privé supplémentaire n’est supposé.

## Projets retenus

### Code212

- [Dépôt](https://github.com/izmaoun/Code212), révision examinée : `58472b991e0303130b7bdf2324b9d6774e3df34b`.
- Fichiers examinés : `pom.xml`, `README.md`, `docker-compose.yaml`, contrôleurs et services Resource / Reservation, client Feign, sécurité, Dockerfiles et modules Config / Discovery / Gateway.
- Le CV décrit cinq microservices Spring Boot : ce décompte est retenu, même si le README du dépôt annonce sept microservices en incluant des composants d’infrastructure.
- La chaîne Jenkins / Kubernetes / Terraform / Helm et le monitoring sont décrits dans le CV ; leurs fichiers ne sont pas présents dans la révision examinée. Les missions figurent donc dans l’expérience issue du CV, sans affirmer que ces livrables sont tous disponibles dans GitHub.

### Marketplace B2B

- [Dépôt collectif](https://github.com/izmaoun/Marketplace), révision examinée : `061508c`.
- Examen des modules métiers, `messaging-service`, POM et historique Git complet. L’historique comporte plusieurs contributeurs.
- [Commit 451a2cf](https://github.com/izmaoun/Marketplace/commit/451a2cf3a2e97990c460f69be075123189c6f130), auteur `izmaoun` : développement de la messagerie WebSocket. Ce commit précise que la sécurité de cette messagerie n’était pas encore intégrée ; la sécurisation ultérieure n’est pas attribuée personnellement à Amine.
- [Commit 18ff335](https://github.com/izmaoun/Marketplace/commit/18ff335aa4cd69872ff631d30cddb6682afd0923), auteur `izmaoun` : connexion des services freelance, entreprise, administration et missions.
- Le projet est lié au projet B2B décrit dans le CV par son besoin et ses fonctionnalités. Le fork `B2B-Front-End` a été examiné mais n’est pas présenté comme une réalisation personnelle autonome.

### E-banking 2.0

- [Dépôt](https://github.com/izmaoun/e-banking-V2), révision examinée : `56215014626d55375b5c123fdcd4053a16c86223` (auteur Amine, adresse correspondant au CV).
- Examen du backend Spring, contrôleurs clients / comptes, POM, interface Angular, Docker Compose et Nginx.
- Les opérations de débit, crédit, virement et l’historique paginé sont visibles dans `BankAccountRestAPI.java`.
- Le CV utilise aussi le nom Bankino et mentionne des microservices, Stripe et MongoDB. La correspondance exacte de ces éléments avec ce dépôt n’a pas été établie : la carte se limite aux fonctionnalités et technologies constatées. Aucune intégration Stripe ni architecture microservices n’est attribuée à cette version publique.

## Limites

Aucune démonstration publique n’a été identifiée dans les sources examinées : aucun lien de démonstration n’est affiché. Les applications métiers n’ont pas été lancées ; ce travail vérifie le portfolio, pas leur fonctionnement complet. Les compétences énumérées sont attestées par le CV, sans notation ni niveau inventé. La formation Oracle reste explicitement en cours, sans être présentée comme une certification obtenue.
