import os

file_path = r"C:\PROJET\Book Quest\src\components\StoryViewer.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Import CombatScreen
content = content.replace(
    "import { storyData } from '../data/story';",
    "import { storyData } from '../data/story';\nimport { CombatScreen } from './CombatScreen';"
)

# 2. Add CombatScreen rendering and remove old inline combat UI
old_combat_ui = """      {isCombatActive && character && section.combat && (
        <div className="book-panel p-6 mb-8 border-red-900 bg-[#1a0a0a]">
          <div className="flex justify-between items-center mb-6">
            <div className="text-center">
              <h4 className="font-bold text-[#d4af37]">Loup Solitaire</h4>
              <p>Habileté: {character.combatSkill}</p>
              <p className="text-green-500 font-bold">Endurance: {character.endurance}</p>
            </div>
            <div className="text-center text-3xl font-bold text-red-600">VS</div>
            <div className="text-center">
              <h4 className="font-bold text-red-500">
                {Array.isArray(section.combat) ? section.combat[0].name : section.combat.name}
              </h4>
              <p>Habileté: {Array.isArray(section.combat) ? section.combat[0].combatSkill : section.combat.combatSkill}</p>
              <p className="text-red-400 font-bold">Endurance: {enemyCurrentEndurance}</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-2">Historique des Assauts :</h4>
            <div className="max-h-40 overflow-y-auto bg-black p-2 rounded text-sm">
              {combatRounds.length === 0 ? <p className="text-gray-500 italic">Le combat n'a pas encore commencé...</p> : null}
              {combatRounds.map((r, idx) => (
                <div key={idx} className="mb-2 border-b border-gray-800 pb-1">
                  Assaut {r.round} : Chiffre tiré = {r.randomNum}.
                  Loup Solitaire perd <span className="text-red-400">{r.playerDamage}</span> PE. 
                  L'ennemi perd <span className="text-green-400">{r.enemyDamage}</span> PE.
                </div>
              ))}
            </div>
          </div>

          {!combatVictory && character.endurance > 0 ? (
            <button onClick={handleCombatRound} className="primary-btn w-full bg-red-700 hover:bg-red-600 text-white">
              Livrer un assaut
            </button>
          ) : character.endurance <= 0 ? (
            <div className="text-center text-red-500 font-bold text-xl mt-4">Vous êtes mort...</div>
          ) : (
            <div className="text-center text-green-500 font-bold text-xl mt-4">Victoire !</div>
          )}
        </div>
      )}"""

content = content.replace(old_combat_ui, "")

# Remove handleCombatRound from StoryViewer as it's no longer used
handle_combat_round = """  const handleCombatRound = () => {
    const roll = Math.floor(Math.random() * 10);
    playCombatRound(roll);
  };"""
content = content.replace(handle_combat_round, "")

# If combat is active and not won, show ONLY the CombatScreen
return_statement_replacement = """  if (isCombatActive && !combatVictory) {
    return (
      <div className="max-w-4xl mx-auto pt-8 pb-20">
        <CombatScreen />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pb-20">"""
    
content = content.replace("  return (\n    <div className=\"max-w-2xl mx-auto pb-20\">", return_statement_replacement)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("StoryViewer.tsx updated")
