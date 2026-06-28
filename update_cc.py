import os
import re

file_path = r"C:\PROJET\Book Quest\src\components\CharacterCreation.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add state variables
state_vars = """  const [selectedDisciplines, setSelectedDisciplines] = useState<Discipline[]>([]);
  const [weaponskillChoice, setWeaponskillChoice] = useState<Weapon | null>(null);
  
  const [characterName, setCharacterName] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('avatar_1.png');"""
content = content.replace(
    "  const [selectedDisciplines, setSelectedDisciplines] = useState<Discipline[]>([]);\n  const [weaponskillChoice, setWeaponskillChoice] = useState<Weapon | null>(null);",
    state_vars
)

# 2. Update startNewGame call
old_startNewGame = """    startNewGame({
      combatSkill,
      endurance: finalEndurance,
      maxEndurance: finalEndurance,"""
new_startNewGame = """    startNewGame({
      name: characterName.trim() || 'Loup Solitaire',
      avatar: `/images/avatars/${selectedAvatar}`,
      combatSkill,
      endurance: finalEndurance,
      maxEndurance: finalEndurance,"""
content = content.replace(old_startNewGame, new_startNewGame)

# 3. Add Identity section in UI
identity_section = """
      <div className="book-panel p-6 mb-6">
        <h3 className="text-xl mb-4">0. Identité</h3>
        
        <div className="mb-6">
          <label className="block text-[#d4af37] mb-2 font-semibold">Nom de votre Héros :</label>
          <input 
            type="text" 
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            placeholder="Ex: Loup Solitaire, Aragorn..."
            className="w-full bg-[#121212] border border-[#d4af37]/50 rounded p-3 text-[#e4d5b7] placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        <div>
          <label className="block text-[#d4af37] mb-2 font-semibold">Choisissez votre Portrait :</label>
          <div className="grid grid-cols-5 gap-3">
            {Array.from({length: 10}).map((_, i) => {
              const avatarFile = `avatar_${i+1}.png`;
              const isSelected = selectedAvatar === avatarFile;
              return (
                <img 
                  key={avatarFile}
                  src={`/images/avatars/${avatarFile}`}
                  alt={`Avatar ${i+1}`}
                  onClick={() => setSelectedAvatar(avatarFile)}
                  className={`w-full aspect-square object-cover rounded cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-[#d4af37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'opacity-60 hover:opacity-100 hover:ring-1 hover:ring-gray-500'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
"""

# Insert before "1. Statistiques"
content = content.replace(
    """      <div className="book-panel p-6 mb-6">
        <h3 className="text-xl mb-4">1. Statistiques</h3>""",
    identity_section + """      <div className="book-panel p-6 mb-6">
        <h3 className="text-xl mb-4">1. Statistiques</h3>"""
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("CharacterCreation updated")
