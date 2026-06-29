import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import type { Discipline, Weapon } from '../types/game';
import { DisciplinesHelp } from './DisciplinesHelp';

const ALL_DISCIPLINES: Discipline[] = [
  'Camouflage', 'Chasse', 'Sixième Sens', 'Orientation', 'Guérison', 
  'Maîtrise des armes', 'Bouclier psychique', 'Puissance psychique', 
  'Communication Animale', 'Maîtrise Psychique de la Matière'
];

const WEAPONS: Weapon[] = [
  'Poignard', 'Lance', 'Masse d\'armes', 'Sabre', 'Marteau de guerre', 
  'Épée', 'Hache', 'Épée', 'Bâton', 'Glaive'
];

interface CharacterCreationProps {
  onComplete: () => void;
  onCancel: () => void;
}

export const CharacterCreation: React.FC<CharacterCreationProps> = ({ onComplete, onCancel }) => {
  const { startNewGame } = useGameStore();
  const [combatSkill, setCombatSkill] = useState<number | null>(null);
  const [endurance, setEndurance] = useState<number | null>(null);
  const [gold, setGold] = useState<number | null>(null);
  const [initialItem, setInitialItem] = useState<string | null>(null);
  
  const [selectedDisciplines, setSelectedDisciplines] = useState<Discipline[]>([]);
  const [weaponskillChoice, setWeaponskillChoice] = useState<Weapon | null>(null);
  
  const [selectedAvatar, setSelectedAvatar] = useState<string>('avatar_1.png');
  const [showDisciplinesHelp, setShowDisciplinesHelp] = useState(false);

  if (showDisciplinesHelp) {
    return <DisciplinesHelp onBack={() => setShowDisciplinesHelp(false)} />;
  }

  const rollStats = () => {
    setCombatSkill(10 + Math.floor(Math.random() * 10));
    setEndurance(20 + Math.floor(Math.random() * 10));
    setGold(Math.floor(Math.random() * 10));
    
    // Initial item roll (0-9)
    const itemRoll = Math.floor(Math.random() * 10);
    const items = [
      'Glaive', 'Épée', 'Casque (+2 ENDURANCE)', '2 Repas', 
      'Cotte de mailles (+4 ENDURANCE)', 'Masse d\'armes', 
      'Potion de Guérison', 'Bâton', 'Lance', '12 Couronnes'
    ];
    setInitialItem(items[itemRoll]);
  };

  const toggleDiscipline = (d: Discipline) => {
    if (selectedDisciplines.includes(d)) {
      setSelectedDisciplines(selectedDisciplines.filter(x => x !== d));
    } else if (selectedDisciplines.length < 5) {
      setSelectedDisciplines([...selectedDisciplines, d]);
    }
  };

  const handleStart = () => {
    if (!combatSkill || !endurance || selectedDisciplines.length < 5) return;
    
    let finalGold = gold || 0;
    const backpack = ['Repas'];
    const weapons: Weapon[] = ['Hache'];
    const specialItems = ['Carte Géographique'];
    let finalEndurance = endurance;
    
    if (initialItem === '12 Couronnes') {
      finalGold += 12;
    } else if (initialItem === '2 Repas') {
      backpack.push('Repas', 'Repas');
    } else if (initialItem === 'Casque (+2 ENDURANCE)') {
      specialItems.push('Casque');
      finalEndurance += 2;
    } else if (initialItem === 'Cotte de mailles (+4 ENDURANCE)') {
      specialItems.push('Cotte de mailles');
      finalEndurance += 4;
    } else if (initialItem === 'Potion de Guérison') {
      backpack.push('Potion de Guérison');
    } else if (initialItem) {
      weapons.push(initialItem as Weapon);
    }

    startNewGame({
      name: 'Loup Solitaire',
      avatar: `/images/avatars/${selectedAvatar}`,
      combatSkill,
      endurance: finalEndurance,
      maxEndurance: finalEndurance,
      disciplines: selectedDisciplines,
      weaponMastery: selectedDisciplines.includes('Maîtrise des armes') ? weaponskillChoice || 'Épée' : undefined,
      weapons,
      backpack,
      meals: backpack.filter(i => i === 'Repas').length,
      goldCrowns: finalGold,
      specialItems
    });
    onComplete();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>Création de Personnage</h2>
      

      <div className="book-panel p-6 mb-6">
        <h3 className="text-xl mb-4">0. Identité</h3>
        
        {/* Nom du héros fixé à Loup Solitaire */}

        <div>
          <label className="block text-[#d4af37] font-semibold" style={{ marginBottom: '1rem' }}>Choisissez votre Portrait :</label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4" style={{ paddingTop: '0.5rem' }}>
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
      <div className="book-panel p-6 mb-6">
        <h3 className="text-xl mb-4">1. Statistiques</h3>
        {!combatSkill ? (
          <button onClick={rollStats} className="primary-btn">Tirer les statistiques</button>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-lg">
              <div>Habileté: <span className="text-[#d4af37] font-bold">{combatSkill}</span></div>
              <div>Endurance: <span className="text-[#d4af37] font-bold">{endurance}</span></div>
              <div>Couronnes d'or: <span className="text-[#d4af37] font-bold">{gold}</span></div>
              <div>Objet initial: <span className="text-[#d4af37] font-bold">{initialItem}</span></div>
            </div>
            <button 
              onClick={rollStats} 
              className="choice-btn px-6 py-2 text-sm whitespace-nowrap"
            >
              Relancer les statistiques
            </button>
          </div>
        )}
      </div>

      <div className="book-panel p-6 mb-6 relative">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="text-xl">2. Disciplines Kaï (Choisissez-en 5)</h3>
          <button 
            type="button"
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation();
              setShowDisciplinesHelp(true); 
            }}
            className="text-[#d4af37] hover:text-white transition-colors bg-black p-1.5 rounded-full border border-[#d4af37]/50 hover:border-[#d4af37] hover:bg-[#d4af37]/20 shadow-md flex items-center justify-center cursor-pointer"
            title="Voir les descriptions des disciplines"
          >
            <HelpCircle size={22} />
          </button>
        </div>
        <p className="mb-4 text-sm text-gray-400">Sélectionné: {selectedDisciplines.length} / 5</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ALL_DISCIPLINES.map(d => (
            <div key={d}>
              <button 
                onClick={() => toggleDiscipline(d)}
                className={`w-full text-left p-3 rounded border transition-colors ${selectedDisciplines.includes(d) ? 'bg-[#d4af37] text-black border-[#d4af37]' : 'bg-[#121212] text-[#e4d5b7] border-[#333333] hover:border-[#d4af37]'}`}
              >
                {d}
              </button>
              {d === 'Maîtrise des armes' && selectedDisciplines.includes(d) && (
                <div className="mt-2 pl-4">
                  <label className="text-sm">Choisissez votre arme de prédilection:</label>
                  <select 
                    className="ml-2 bg-[#121212] text-[#e4d5b7] border border-[#333333] p-1 rounded"
                    value={weaponskillChoice || ''}
                    onChange={(e) => setWeaponskillChoice(e.target.value as Weapon)}
                  >
                    <option value="" disabled>Sélectionner...</option>
                    {Array.from(new Set(WEAPONS)).map(w => <option key={w} value={w}>{w}</option>)}
                  </select>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onCancel} className="choice-btn max-w-[200px] text-center">Annuler</button>
        <button 
          onClick={handleStart} 
          disabled={!combatSkill || selectedDisciplines.length < 5 || (selectedDisciplines.includes('Maîtrise des armes') && !weaponskillChoice)}
          className="primary-btn text-xl px-8"
        >
          Commencer l'Aventure
        </button>
      </div>
    </div>
  );
}
