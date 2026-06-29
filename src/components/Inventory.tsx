import { useGameStore } from '../store/gameStore';

export function Inventory() {
  const { character, updateMeals, heal } = useGameStore();

  if (!character) return null;

  const handleEat = () => {
    if (character.meals > 0) {
      updateMeals(-1);
      heal(3);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex flex-col items-center mb-2">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#d4af37] mb-3 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
          <img src={character.avatar || '/images/avatars/avatar_1.png'} alt={character.name || 'Héros'} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-[#d4af37] text-center" style={{ fontFamily: 'Cinzel, serif' }}>
          {character.name || 'Loup Solitaire'}
        </h2>
      </div>

      <div className="bg-[#121212] p-3 rounded border border-[#333333]">
        <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Statistiques</h3>
        <div className="flex justify-between">
          <span>Habileté:</span>
          <span className="font-bold text-[#d4af37]">{character.combatSkill}</span>
        </div>
        <div className="flex justify-between">
          <span>Endurance:</span>
          <span className="font-bold text-[#d4af37]">{character.endurance} / {character.maxEndurance}</span>
        </div>
        <div className="flex justify-between">
          <span>Couronnes d'Or:</span>
          <span className="font-bold text-[#d4af37]">{character.goldCrowns}</span>
        </div>
      </div>

      <div className="bg-[#121212] p-3 rounded border border-[#333333]">
        <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Disciplines Kaï</h3>
        <ul className="text-sm list-none pl-0">
          {character.disciplines.map(d => (
            <li key={d} className="mb-1 text-[#e4d5b7]">
              • {d} {d === 'Maîtrise des armes' && character.weaponMastery ? `(${character.weaponMastery})` : ''}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#121212] p-3 rounded border border-[#333333]">
        <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Armes (Max 2)</h3>
        <ul className="text-sm list-none pl-0">
          {character.weapons.map((w, idx) => (
            <li key={idx} className="mb-1">• {w}</li>
          ))}
        </ul>
      </div>

      <div className="bg-[#121212] p-3 rounded border border-[#333333]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm text-gray-400 uppercase tracking-wider">Sac à Dos (Max 8)</h3>
          <span className="text-xs">{character.backpack.filter(i => i !== 'Repas').length + character.meals}/8</span>
        </div>
        <ul className="text-sm mb-2 list-none pl-0">
          {character.backpack.filter(i => i !== 'Repas').map((item, idx) => (
            <li key={idx} className="mb-1 flex justify-between">
              <span>• {item}</span>
            </li>
          ))}
        </ul>
        {character.meals > 0 && (
          <div className="flex justify-between items-center bg-[#1e1e1e] p-2 rounded">
            <span>Repas (x{character.meals})</span>
            <button 
              onClick={handleEat}
              className="text-xs bg-[#d4af37] text-black px-2 py-1 rounded hover:bg-[#b38f22]"
            >
              Manger (+3 END)
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#121212] p-3 rounded border border-[#333333]">
        <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Objets Spéciaux</h3>
        <ul className="text-sm list-none pl-0">
          {character.specialItems.map((item, idx) => (
            <li key={idx} className="mb-1 text-[#00ffcc]">• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
