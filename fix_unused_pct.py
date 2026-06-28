import os

file_path = r"C:\PROJET\Book Quest\src\components\CombatScreen.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("  const playerHealthPct = Math.max(0, (character.endurance / character.maxEndurance) * 100);\n", "")
content = content.replace("  const enemyHealthPct = Math.max(0, (enemyCurrentEndurance / enemyMaxEndurance) * 100);\n", "")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed unused pct vars")
