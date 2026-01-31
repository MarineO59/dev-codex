
🚀 DevCodex

DevCodex est une bibliothèque personnelle de snippets de code, conçue pour être simple, rapide et minimaliste. Le projet est inspiré par l'esthétique et la clarté de sites comme MDN et comprendre-git.com.
🛠️ Évolution du Projet : Du Prototype au Pro

Initialement conçu avec Tailwind CSS, ce projet a été entièrement refactorisé pour atteindre un niveau de contrôle supérieur :

    Migration vers TypeScript : Sécurisation totale des données de snippets (interfaces rigoureuses).

    CSS Natif : Abandon de Tailwind au profit d'un design système en CSS pur, organisé par composants.

    Architecture Modulaire : Chaque composant possède désormais son propre dossier avec son style et ses types dédiés.

✨ Fonctionnalités

    Gestion de Snippets : Ajout, recherche en temps réel et suppression de commandes.

    Tableau de Bord : Visualisation des statistiques de votre bibliothèque via des graphiques dynamiques.

    Persistance Locale : Sauvegarde automatique de vos données dans le navigateur via le localStorage.

    Navigation Fluide : Système multi-pages géré par React Router.

📂 Structure du Code (Refactorisé)

L'arborescence suit désormais une logique de composants isolés :
Plaintext

src/
├── components/      # Header, Sidebar, SnippetCard (TSX + CSS + Types)
├── pages/           # Home, Stats, Settings
├── layouts/         # MainLayout pour la structure globale
├── data/            # Source de données initiale
└── types/           # Définitions TypeScript globales

🚀 Installation

    Installer les dépendances
    Bash

    npm install

    Lancer le serveur de développement
    Bash

    npm run dev

💡 Pourquoi cette approche ?

Le choix du TypeScript et du CSS pur permet de garantir que l'application reste légère et facile à faire évoluer sans dépendances lourdes, tout en offrant une auto-complétion parfaite durant le développement.