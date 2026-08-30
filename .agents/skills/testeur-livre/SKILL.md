---
name: testeur-livre
description: >-
  Audite et valide l'intégrité narrative et technique de n'importe quel livre-jeu du projet Book Quest.
  Détecte les liens brisés (dead links), les sections orphelines, la cohérence des Game Over / morts,
  l'accessibilité du graphe et les anomalies de combats/loots.
---

# Skill : Testeur Livre (Book Quest)

Ce skill guide l'agent pour tester et certifier l'intégrité technique d'un livre-jeu avant ou après son intégration.

---

## 1. Exécution de l'Audit Automatisé

Pour lancer les tests sur un livre spécifique ou l'ensemble des livres :

```powershell
# Tester un livre précis (ex: Livre 2 ou futur Livre 3)
node .agents/skills/testeur-livre/scripts/validate_book.cjs 2

# Tester l'ensemble des livres enregistrés dans src/data/
node .agents/skills/testeur-livre/scripts/validate_book.cjs --all
```

---

## 2. Points de Contrôle Automatisés

Le script effectue automatiquement les vérifications suivantes :

1. **Liens brisés (`Dead links`)** :
   - Vérifie que chaque `targetId` d'un choix pointe vers une section existante dans le livre.
2. **Cohérence des Morts / Game Over** :
   - Repère les sections contenant du texte de mort fatale qui auraient conservé des choix interactifs.
3. **Accessibilité et Graphe de navigation** :
   - Calcule le pourcentage de couverture de l'arbre narratif depuis la section 1 et identifie les sections isolées.
4. **Inventaire des mécaniques** :
   - Recense le nombre de combats déclarés, les butins (`loot`), les dégâts directs (`damage`), et le taux d'illustration.

---

## 3. Protocole de Correction

En cas d'erreurs signalées par le script :
1. Consulter les sections incriminées dans `src/data/book<N>.ts`.
2. Corriger les identifiants cibles ou les choix manquants.
3. Relancer `node .agents/skills/testeur-livre/scripts/validate_book.cjs <N>` jusqu'à obtenir la mention `SUCCÈS : Le Livre <N> est 100% VALIDE`.
