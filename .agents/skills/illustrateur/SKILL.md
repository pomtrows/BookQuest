---
name: illustrateur
description: >-
  Automatise la détection, la génération et l'intégration des illustrations de sections
  pour n'importe quel livre-jeu du projet Book Quest (Livre 1, Livre 2 et futurs livres 3, 4, etc.).
  Déclenché dès que l'utilisateur tape "/illustrateur", demande d'illustrer un livre, de compléter les images manquantes,
  ou de lancer un batch d'illustrations.
---

# Skill : Illustrateur de Sections (Book Quest)

Ce skill guide l'agent pour automatiser l'illustration complète des sections de n'importe quel livre de jeu présent dans `src/data/book<N>.ts`.
Il est activé dès que l'utilisateur invoque la commande `/illustrateur` ou demande d'illustrer un livre.

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

## 3. Pipeline Technique d'Intégration

Pour chaque image générée avec succès :

1. **Copie du fichier d'image** :
   - Depuis l'artefact généré (dossier temporaire) vers :
     - Pour le Livre 1 : `public/images/sections/sect<ID>.jpg`
     - Pour le Livre N ($N \ge 2$) : `public/images/sections/book<N>_sect<ID>.jpg`
   - Commande PowerShell type :
     ```powershell
     Copy-Item "C:\Users\Pomito\.gemini\antigravity\brain\<conv_id>\book<N>_sect<ID>_*.jpg" -Destination "C:\PROJET\Book Quest\public\images\sections\book<N>_sect<ID>.jpg"
     ```

2. **Mise à jour du fichier source TypeScript (`src/data/book<N>.ts`)** :
   - Ajouter le champ d'image dans la section correspondante :
     - Livre 1 : `"image": "/images/sections/sect<ID>.jpg",`
     - Livre N : `"image": "/images/sections/book<N>_sect<ID>.jpg",`
   - Placer cette ligne juste sous `"id": "<ID>",`.

3. **Sauvegarde Git par lot (toutes les 3 à 5 images)** :
   ```powershell
   git add "src/data/book<N>.ts" "public/images/sections/"
   git commit -m "feat(book<N>): add images for sections <debut>-<fin>"
   git push
   ```

---

## 4. Gestion des Quotas API (Erreur 429)

Si l'outil `generate_image` renvoie une erreur `429 Too Many Requests` (`RESOURCE_EXHAUSTED`) :
1. Sauvegarder immédiatement les images déjà produites (mise à jour TS, commit & push).
2. Extraire le délai d'attente indiqué dans la réponse d'erreur (`quotaResetDelay` ou `quotaResetTimeStamp`).
3. Informer clairement l'utilisateur du nombre d'images générées et de l'heure exacte à laquelle le quota sera rechargé.
4. Si l'utilisateur a demandé une reprise automatique, programmer ou réactiver le déclencheur planifié.
