---
name: integrateur-livre
description: >-
  Automatise l'intégration complète d'un nouveau livre-jeu (texte brut, markdown ou JSON)
  dans src/data/book<N>.ts. Découpe n'importe quel nombre de sections (sans limite à 350),
  aère le texte avec des paragraphes fluides, extrait les choix interactifs,
  et enregistre le livre dans src/data/books.ts.
  Déclenche ensuite automatiquement 'interpreteur-regles', puis 'regles-mecaniques'.
---

# Skill : Intégrateur Livre (Book Quest)

Ce skill guide l'agent pour intégrer proprement n'importe quel nouveau livre-jeu dans l'application Book Quest.

---

## 1. Principes Clés

1. **Aucune limite rigide de sections** : Le nombre de sections s'adapte automatiquement au livre (350, 400, 500 ou plus).
2. **Aération du texte (Confort de lecture maximal)** :
   - Découper les longs blocs de texte en paragraphes distincts dans le tableau `text: [ "...", "..." ]`.
   - Insérer un nouveau paragraphe à chaque changement d'action, description de lieu, dialogue marquant ou transition narrative.
   - Préfixer les titres de chapitres ou d'actes par `[TITLE]` (ex: `"[TITLE] Chapitre 1"`).
3. **Extraction rigoureuse des Choix (`choices`)** :
   - Détecter les formulations : *"Si vous souhaitez..., rendez-vous au X"*, *"Rendez-vous au X"*, *"Tournez la page vers le X"*.
   - Extraire chaque option avec son intitulé propre `text` et sa destination `targetId`.
4. **Enregistrement dans le Registre Global** :
   - Exporter `export const storyDataBook<N>: Record<string, Section> = { ... };` dans `src/data/book<N>.ts`.
   - Enregistrer le livre dans `src/data/books.ts`.

---

## 2. Structure Standard d'une Section

```typescript
"42": {
  "id": "42",
  "text": [
    "Vous avancez prudemment le long du couloir sombre.",
    "Soudain, une porte dérobée s'ouvre sur votre droite et une silhouette encapuchonnée surgit dans l'obscurité.",
    "« Qui va là ? » chuchote l'inconnu d'une voix rauque."
  ],
  "choices": [
    {
      "text": "Si vous souhaitez lui répondre calmement, rendez-vous au 105.",
      "targetId": "105"
    },
    {
      "text": "Si vous préférez dégainer votre épée et attaquer, rendez-vous au 210.",
      "targetId": "210"
    }
  ]
}
```

---

## 3. Chaîne d'Exécution & Enchaînement des Skills

Dès que le texte du livre est intégré dans `src/data/book<N>.ts` et référencé dans `src/data/books.ts`, la chaîne suivante s'exécute dans l'ordre strict :

1. **`interpreteur-regles`** : Analyse des règles du livre, mise à jour du menu "Règles du jeu" (`src/data/rules.ts`) et ajustement éventuel des types / moteurs de combat.
2. **`regles-mecaniques`** : Enrichissement section par section (combats, loots, dégâts/soins, conditions de choix).
3. **`testeur-livre`** : Audit de cohérence globale, vérification zéro lien mort et accessibilité du graphe.
4. **`illustrateur`** : Génération des visuels, compression WebP et stockage sur le bucket Supabase `loupsolitaire`.
