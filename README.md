# ❌ Morpion React (Tic-Tac-Toe) ⭕️

Un jeu de Morpion moderne et interactif développé avec **React** et **Vite**. 

Ce projet met en pratique l'utilisation des composants fonctionnels, la gestion d'état globale et locale avec `useState`, la transmission de props, ainsi que l'immutabilité des données pour la gestion d'un historique de jeux.

---

## ✨ Fonctionnalités

* 🎮 **Mode 2 joueurs** : Jouez à deux en alternant automatiquement entre les Symboles **X** et **O**.
* ⏳ **Historique des coups (Time Travel)** : Revenez à n'importe quel coup précédent durant la partie.
* 🏆 **Détection du vainqueur** : L'algorithme vérifie automatiquement les 8 lignes gagnantes possibles.
* 🌟 **Mise en valeur de la ligne gagnante** : Animation CSS verte sur les cases victorieuses.
* 🤝 **Gestion des matchs nuls** : Alerte lorsque le plateau est rempli sans vainqueur.
* 🔄 **Bouton de réinitialisation** : Relancez une partie à tout moment.
* 🎨 **Interface moderne & Responsive** : Style sombre ("Dark Theme") optimisé pour mobile et desktop via CSS Grid.

---

## 🛠️ Technologies utilisées

* [React](https://react.dev/) (Bibliothèque JavaScript)
* [Vite](https://vitejs.dev/) (Outil de build rapide)
* **JavaScript (ES6+)**
* **CSS3** (Flexbox & CSS Grid)

---

## 📂 Structure du Projet

```text
mon-morpion/
├── public/
├── src/
│   ├── components/
│   │   ├── Square.jsx         # Composant représentant une case
│   │   └── Board.jsx          # Composant gérant la grille de 9 cases
│   ├── utils/
│   │   └── calculateWinner.js # Fonction pure calculant la victoire
│   ├── App.jsx                # Composant principal (état global & historique)
│   ├── App.css                # Styles globaux du jeu
│   └── main.jsx               # Point d'entrée React
├── index.html
├── package.json
└── README.md