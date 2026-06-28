import os

# Fix CombatScreen
cs_path = r"C:\PROJET\Book Quest\src\components\CombatScreen.tsx"
with open(cs_path, "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("import React, { useState, useEffect, useRef } from 'react';", "import { useState, useEffect, useRef } from 'react';")
with open(cs_path, "w", encoding="utf-8") as f:
    f.write(content)

# Fix StoryViewer
sv_path = r"C:\PROJET\Book Quest\src\components\StoryViewer.tsx"
with open(sv_path, "r", encoding="utf-8") as f:
    content = f.read()
    
# Remove unused destructured vars from useGameStore in StoryViewer
to_remove = ["\n    playCombatRound,", "\n    combatRounds,", "\n    enemyCurrentEndurance,"]
for r in to_remove:
    content = content.replace(r, "")
    
with open(sv_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed unused vars")
