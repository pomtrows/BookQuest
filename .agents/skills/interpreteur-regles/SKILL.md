---
name: interpreteur-regles
description: >-
  Analyse et intègre les règles spécifiques de chaque livre-jeu Book Quest.
  Détecte les nouvelles disciplines Kaï/Magnakaï, les évolutions du système de combat,
  les règles d'inventaire et d'équipement propres au livre. Met à jour src/data/rules.ts
  (menu Règles du jeu) et adapte les types/moteurs de jeu si nécessaire.
  Doit être déclenché par 'integrateur-livre' avant 'regles-mecaniques'.
---

# Skill : Interpréteur de Règles (Book Quest)

Ce skill est responsable de l'analyse, de l'adaptation et de l'intégration des règles spécifiques à chaque nouveau tome de livre-jeu.

---

## 1. Rôle dans la Chaîne d'Intégration

Ce skill s'intercale automatiquement entre la structuration du texte et l'enrichissement des mécaniques :

```
[integrateur-livre]  -->  [interpreteur-regles]  -->  [regles-mecaniques]  -->  [testeur-livre]  -->  [illustrateur]
```

---

## 2. Étapes d'Exécution

### Étape 1 : Analyse Comparative des Règles du Livre
Lors de la réception du nouveau livre (ex: Livre 3, Livre 4, etc.) :
1. **Évolution des Disciplines** :
   - Le personnage gagne-t-il une nouvelle discipline supplémentaire (ex: 6e discipline au Livre 2, 7e au Livre 3) ?
   - De nouveaux rangs ou disciplines (Magnakaï, Grand Maître) apparaissent-ils ?
2. **Règles Spéciales d'Environnement & Survie** :
   - Froid extrême (ex: Kalte, besoin de parkas/vêtements chauds sous peine de dégâts par section).
   - Rations / Chasse restreinte (zones où la Chasse ne fonctionne pas).
3. **Objets Spéciaux & Armes Légendaires** :
   - Bonus d'armes spécifiques (ex: Glaive de Sommer : +8 Habileté, dégâts doublés sur morts-vivants).
   - Encombrement d'inventaire spécifique ou objets de quête obligatoires.
4. **Modifications du Moteur de Combat** :
   - Règles d'assaut à distance (Arc), bonus de rang Kaï, immunités spécifiques.

---

### Étape 2 : Mise à jour du Menu "Règles du Jeu" (`src/data/rules.ts`)

Créer et exporter l'objet de règles correspondant au livre :

```typescript
export const rulesDataBook<N>: RuleSection[] = [
  { id: 'generale', title: 'Règles Générales', content: `...` },
  { id: 'disciplines', title: 'Disciplines Kaï', content: `...` },
  { id: 'equipement', title: 'Équipement & Inventaire', content: `...` },
  { id: 'combat', title: 'Règles de Combat', content: `...\n[COMBAT_TABLE]` },
  { id: 'specifiques', title: 'Règles Spéciales du Livre <N>', content: `...` }
];
```

Enregistrer le nouveau jeu de règles dans la fonction `getRulesData(bookId)` de `src/data/rules.ts` :
```typescript
export const getRulesData = (bookId: number): RuleSection[] => {
  if (bookId === <N>) return rulesDataBook<N>;
  // ...
};
```

---

### Étape 3 : Ajustements Moteur & Typage (`src/types/game.ts` / Stores)

Si le livre introduit une nouvelle mécanique (ex: un nouveau type d'arme, un type de condition d'inventaire ou une règle de combat inédite) :
1. Déclarer les nouveaux types dans `src/types/game.ts`.
2. Ajuster `src/store/gameStore.ts` ou `src/components/CombatScreen.tsx` si des modificateurs permanents doivent s'appliquer.
3. Transmettre les spécificités au skill `regles-mecaniques` pour le taggage des sections.
