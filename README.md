# SiteGameJam1P
The site web for future gamejam of the One Panthéon association

## Installation et lancement
Pour les développeurs, il faut installer [Node.js](https://nodejs.org/en/) et [Git](https://git-scm.com/).
Puis, il faut cloner le dépôt :
```bash
git clone
```
Placer vous dans le dossier GJ1P :
```bash
cd GJ1P
```
Ensuite, il faut installer les dépendances :
```bash
npm install
```
Enfin, il faut lancer le serveur de développement : (le `-- --open` permet d'ouvrir le site dans le navigateur)
```bash
npm run dev -- --open
```
Le site est alors accessible à l'adresse [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

Attention à bien garder à jour les dépendances avec `npm i` dans le dossier GJ1P et à bien commit les changements avec `git commit`.

## Todo
- [ ] Page d'accueil :
  - [ ] Présentation générale
  - [ ] Actualités (dernières news/gamejams avec lien vers la page de la gamejam)
- [ ] Pages par GameJam :
  - avant
    - [ ] Timer avant la gamejam
    - [ ] Présentation de la gamejam
    - [ ] Inscription/Désinscription
    - [ ] Règles et recommandations
  - pendant
    - [ ] Timer restant
    - [ ] Présentation de la gamejam avec le sujet
    - [ ] Liste des participants
  - après
    - [ ] Présentation de la gamejam avec le sujet
    - [ ] Résultats (classement, prix, etc.)
    - [ ] Liste des jeux
    - [ ] Retour sur la gamejam et les jeux
- [ ] Pages de projet :
  - [ ] Présentation du projet
  - [ ] Téléchargement
  - [ ] Screenshots
  - [ ] Vidéos
  - [ ] Liens
  - [ ] Crédits
  - [ ] Commentaires
- [ ] Page de profil (personnel) :
  - [ ] Informations sur l'utilisateur (+photo)
  - [ ] Liste des badges gamejams participées
- [ ] Page d'administration :
  - [ ] Gestion des utilisateurs
  - [ ] Gestion des gamejams (timer, équipes, votes, commentaires, etc.)
  - [ ] Gestion des projets
  - [ ] Gestion des news

- [ ] Page d'inscription/conexion :
  - [ ] Formulaire d'inscription
  - [ ] Formulaire de connexion

- [ ] Base de données :
  - [ ] Utilisateurs
  - [ ] GameJams
  - [ ] Projets
  - [ ] Inscriptions
  - [ ] Votes
  - [ ] Commentaires
  - [ ] News
  - [ ] Pages
  - [ ] Liens
  - [ ] Images
  - [ ] Vidéos
  - [ ] ...

## [Contributeurs](https://github.com/orgs/OnePantheon/teams/gamejam)
- [Abdel-waheb](https://github.com/L4KK4S)
- [Dimitri](https://github.com/goldor8)
- [Vincent](https://github.com/Fefoler01)
- [Valentin](https://github.com/Teravla)

## Liens utiles
- [Svelte](https://svelte.dev/)

## Liens utiles [design]
- [Maquette](https://www.figma.com/file/7YQBeACmTDd5v3JI6q0d9g/Maquette-GameJam?type=design&node-id=0%3A1&mode=design&t=I1gsknrsC2BRi6p0-1)
- [Palette](https://coolors.co/d7fff1-177e89-84c318-031d3a-8cd790)
