# Guide de Style Graphique pour les Illustrations (Book Quest)

Toutes les images générées pour les sections de livre doivent respecter rigoureusement l'esthétique "couverture de livre-jeu / jeu de rôle des années 90".

---

## 1. Prompt de Base (Standard)

```text
classic 90s role-playing game book cover illustration, highly detailed oil painting style, rich colors, dramatic lighting, masterpiece... NO TEXT, NO LETTERS, NO WORDS, NO TYPOGRAPHY, NO TITLE.
```

---

## 2. Règles Négatives Strictes

Les mentions négatives suivantes doivent impérativement être respectées :
- **AUCUN TEXTE** : Aucun mot, lettre, rune alphabétique, chiffre ou titre.
- **PAS DE BORDURES ARTIFICIELLES OU DE CADRES** (sauf si expressément demandé).
- **PAS DE STYLE BANAL OU FLAT 2D** : Privilégier la peinture à l'huile riche et texturée avec éclairage dramatique (chiaroscuro / heroic fantasy).

---

## 3. Conventions de Nommage et Chemins

- **Livre 1** :
  - Nom du fichier généré : `sect<ID>.jpg`
  - Chemin : `public/images/sections/sect<ID>.jpg`
  - Entrée TS : `"image": "/images/sections/sect<ID>.jpg",`

- **Livre N ($N \ge 2$)** :
  - Nom du fichier généré : `book<N>_sect<ID>.jpg`
  - Chemin : `public/images/sections/book<N>_sect<ID>.jpg`
  - Entrée TS : `"image": "/images/sections/book<N>_sect<ID>.jpg",`
