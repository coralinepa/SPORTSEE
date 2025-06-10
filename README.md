SportSee – Tableau de bord sportif en React

SportSee est un tableau de bord pour sportifs permettant de visualiser leurs performances via une interface en React, avec intégration de graphes dynamiques via la librairie Recharts.
L'objectif principal est d'interagir avec une API (fournie ou mockée) pour construire une application front-end SPA avec visualisation de données.

Compétences mises en œuvre
- Intégrer des librairies de data visualisation (Recharts)
- Récupérer des données via une API REST
- Gérer les erreurs et chargements
- Structurer une application React avec composants réutilisables
- Optimiser les performances d’affichage
- Créer une interface utilisateur dynamique et responsive

Fonctionnalités principales
- Page tableau de bord (/user/:id) avec :
- Activité quotidienne (bar chart)
- Durée moyenne des sessions (line chart)
- Score journalier (radial bar)
- Objectifs nutritionnels (calories, glucides, protéines…)
- Données dynamiques depuis l’API (mock ou réelle)
- Navigation via React Router
- Gestion d’erreurs (id utilisateur, appel API)
- Design responsive

Technologies utilisées
- React 18
- React Router DOM v6+
- Axios
- Recharts
- SCSS / CSS Modules
- Node.js (pour l'API mock)
- Git & GitHub

Installation
1. Cloner le projet
```git clone https://github.com/coralinepa/SPORTSEE.git```
```cd SPORTSEE```
2. Installer les dépendances
```npm install```
3. Lancer le serveur de développement
```npm start```
L’application sera disponible sur :
``` http://localhost:3000```

