---
name: regles-mecaniques
description: >-
  Enrichit les sections d'un livre-jeu Book Quest avec les mécaniques de jeu avancées :
  combats (stats, immunités, malus), loots (or, armes, objets, repas), dégâts/soins d'endurance,
  et conditions de choix (disciplines, objets requis).
---

# Skill : Règles & Mécaniques (Book Quest)

Ce skill guide l'agent pour analyser le texte des sections d'un livre et y greffer les propriétés de jeu interactives.

---

## 1. Propriétés Mécaniques Supportées

### A. Combats (`combat`)
Détecte les mentions d'ennemis avec HABILETÉ et ENDURANCE :
```typescript
"combat": {
  "name": "GUERRIER DRAKKAR",
  "combatSkill": 16,
  "endurance": 24,
  "mindblastImmune": false,      // true si insensible à la Puissance Psychique
  "hasMindblast": false,         // true si l'ennemi attaque psychiquement
  "darknessPenalty": false,       // true si combat dans le noir sans torche
  "undead": false                // true si créature morte-vivante
}
```

### B. Objets & Butins (`loot`)
Détecte les trouvailles et gains d'objets :
```typescript
"loot": {
  "gold": 12,                    // Pièces d'Or trouvées
  "meals": 2,                    // Repas trouvés
  "weapons": ["Épée", "Poignard"],// Armes disponibles
  "items": ["Corde", "Potion de Guérison"], // Objets de sac à dos
  "specialItems": ["Clé de Cuivre", "Sceau d'Hammardal"] // Objets spéciaux
}
```

### C. Dégâts & Soins d'Endurance (`damage` / `heal`)
Détecte les pertes et gains de points d'ENDURANCE dans le texte :
- *"vous perdez 3 points d'ENDURANCE"* -> `"damage": 3`
- *"vous récupérez 4 points d'ENDURANCE"* -> `"heal": 4`

### D. Choix Conditionnels (`condition`)
Pour les embranchements réservés à une discipline ou un objet :
```typescript
"choices": [
  {
    "text": "Si vous possédez la Discipline du Sixième Sens, rendez-vous au 142.",
    "targetId": "142",
    "condition": {
      "type": "has_discipline",
      "value": "Sixième Sens"
    }
  },
  {
    "text": "Si vous avez une Corde dans votre Sac à Dos, rendez-vous au 88.",
    "targetId": "88",
    "condition": {
      "type": "has_item",
      "value": "Corde"
    }
  }
]
```

---

## 2. Processus d'Enrichissement

1. Scanner séquentiellement chaque section du fichier `src/data/book<N>.ts`.
2. Extraire et injecter les blocs `combat`, `loot`, `damage`, `heal` et les `condition` dans les `choices`.
3. Conserver impérativement la propreté du texte original et les sauts de ligne.
