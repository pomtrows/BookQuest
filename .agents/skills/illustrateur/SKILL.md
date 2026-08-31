---
name: illustrateur
description: >-
  Automatise la détection, la génération et l'intégration des illustrations de sections
  pour n'importe quel livre-jeu du projet Book Quest (Livre 1, Livre 2 et futurs livres 3 à 28).
  Déclenché dès que l'utilisateur tape "/illustrateur", demande d'illustrer un livre, de compléter les images manquantes,
  ou de lancer un batch d'illustrations. Reprend automatiquement en boucle toutes les 5h30 après épuisement de quota sans intervention utilisateur.
---

# Skill : Illustrateur de Sections (Book Quest)

Ce skill guide l'agent pour automatiser l'illustration complète des sections de n'importe quel livre de jeu présent dans `src/data/book<N>.ts`.
Les illustrations générées sont **directement et exclusivement stockées dans le bucket Supabase `loupsolitaire`** (version originale et version WebP compressée), sans alourdir le dépôt Git.

---

## 1. Audit des sections manquantes

Avant de générer, toujours vérifier l'état d'avancement des illustrations à l'aide du script d'audit universel :

```powershell
# Pour auditer un livre spécifique (ex: livre 2 ou livre 3)
node .agents/skills/illustrateur/scripts/audit_missing.cjs 2

# Pour scanner l'ensemble des livres existants dans src/data/
node .agents/skills/illustrateur/scripts/audit_missing.cjs --all
```

Ce script liste les identifiants de sections qui ne possèdent pas encore de clé `"image"`.

---

## 2. Règles Stylistiques et Prompt de Génération

Pour chaque section à illustrer, appeler l'outil `generate_image` en respectant strictement le gabarit de prompt suivant :

- **ImageName** : `book<N>_sect<ID>` (ou `sect<ID>` pour le Livre 1).
- **Prompt** :
  ```text
  classic 90s role-playing game book cover illustration, highly detailed oil painting style, rich colors, dramatic lighting, masterpiece... NO TEXT, NO LETTERS, NO WORDS, NO TYPOGRAPHY, NO TITLE.
  ```
  *(Voir aussi `.agents/skills/illustrateur/references/style_guide.md` pour des variations thématiques si nécessaire tout en conservant l'interdiction absolue de texte).*

---

## 3. Pipeline Technique d'Intégration & Stockage Cloud Supabase

Pour chaque image générée avec succès :

1. **Upload direct dans le bucket Supabase `loupsolitaire`** :
   - Exécuter le script `upload_image.cjs` en lui passant le chemin de l'artefact généré (ou du fichier local) :
     ```powershell
     node .agents/skills/illustrateur/scripts/upload_image.cjs "C:\Users\Pomito\.gemini\antigravity\brain\<conv_id>\book<N>_sect<ID>_*.jpg" "book<N>_sect<ID>.jpg"
     ```
   - Le script crée automatiquement :
     - `loupsolitaire/full/book<N>_sect<ID>.jpg` (haute fidélité)
     - `loupsolitaire/compressed/book<N>_sect<ID>.webp` (WebP léger pour l'affichage)

2. **Mise à jour du fichier source TypeScript (`src/data/book<N>.ts`)** :
   - Ajouter le chemin de référence dans la section correspondante :
     - Livre 1 : `"image": "/images/sections/sect<ID>.jpg",`
     - Livre N ($N \ge 2$) : `"image": "/images/sections/book<N>_sect<ID>.jpg",`
   - Placer cette ligne juste sous `"id": "<ID>",`.
   *(L'application résout automatiquement cette référence vers `loupsolitaire/compressed/<name>.webp` via la fonction `getImageUrl()` de `src/lib/supabase.ts`)*.

3. **Sauvegarde Git du code uniquement** :
   - Seul le fichier de données TypeScript `src/data/book<N>.ts` est versionné sur Git (les images binaires restent sur le bucket Supabase) :
     ```powershell
     git add "src/data/book<N>.ts"
     git commit -m "feat(book<N>): add illustrations for sections <debut>-<fin>"
     git push
     ```

---

## 4. Gestion Autonome des Quotas API (Reprise Automatique en Boucle Toutes les 5h30)

Lorsqu'un lot d'images atteint la limite de quota de l'outil `generate_image` (erreur `429 Too Many Requests` / `RESOURCE_EXHAUSTED`) :
1. **Sauvegarder immédiatement les progrès** :
   - Finaliser l'upload Supabase et mettre à jour `src/data/book<N>.ts`.
   - Effectuer le commit et le `git push`.
2. **Programmer la reprise automatique** :
   - Utiliser impérativement l'outil `schedule` avec `DurationSeconds: 19800` (5 heures et 30 minutes, soit 19 800 secondes) ou selon le délai indiqué par l'API pour déclencher un réveil automatique.
   - Prompt de notification : `"Reprendre automatiquement la génération des illustrations pour le Livre <N> à partir de la section manquante suivante jusqu'à nouvel épuisement du quota."`
3. **Poursuite autonome** :
   - Au réveil du timer, reprendre immédiatement la génération d'images pour le livre en cours sans demander de confirmation à l'utilisateur.
   - Répéter ce cycle en boucle jusqu'à ce que 100% des sections du livre soient illustrées.
