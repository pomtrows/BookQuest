import React, { useState, useEffect } from 'react';
import { HelpCircle, Trash2 } from 'lucide-react';
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
  'Épée', 'Hache', 'Bâton', 'Glaive'
];

type ArsenalItemDef = {
  id: string;
  name: string;
  type: 'weapon' | 'backpack' | 'special';
  count?: number; 
  effect?: string;
};

const ARSENAL_ITEMS: ArsenalItemDef[] = [
  { id: 'epee', name: 'Épée', type: 'weapon' },
  { id: 'sabre', name: 'Sabre', type: 'weapon' },
  { id: 'repas', name: '2 Repas', type: 'backpack', count: 2 },
  { id: 'cotte', name: 'Cotte de mailles', type: 'special', effect: '+4 END' },
  { id: 'masse', name: 'Masse d\'armes', type: 'weapon' },
  { id: 'potion', name: 'Potion de Guérison', type: 'backpack' },
  { id: 'baton', name: 'Bâton', type: 'weapon' },
  { id: 'lance', name: 'Lance', type: 'weapon' },
  { id: 'glaive', name: 'Glaive', type: 'weapon' },
  { id: 'bouclier', name: 'Bouclier', type: 'special', effect: '+2 HAB' }
];

const DISCIPLINE_DESCRIPTIONS: Record<string, string> = {
  'Camouflage': 'Permet de se fondre dans le décor et de passer inaperçu, très utile pour échapper à des ennemis ou pour se cacher.',
  'Chasse': 'Permet de trouver de la nourriture en milieu sauvage. Vous n\'avez pas besoin de consommer de Repas quand on vous le demande en milieu naturel.',
  'Sixième Sens': 'Permet de pressentir un danger imminent, de deviner la véritable nature d\'un inconnu ou de détecter des ennemis cachés.',
  'Orientation': 'Assure au Seigneur Kaï de toujours retrouver son chemin, de s\'orienter dans les ténèbres ou de suivre des pistes invisibles.',
  'Guérison': 'Permet de récupérer 1 point d\'Endurance pour chaque paragraphe de l\'aventure franchi sans combattre, jusqu\'à retrouver son score maximum.',
  'Maîtrise des armes': 'Permet de devenir expert dans le maniement d\'une arme spécifique. L\'utilisation de cette arme au combat octroie un bonus de +2 en Habileté.',
  'Bouclier psychique': 'Protège l\'esprit contre les attaques mentales. Sans cette discipline, une attaque mentale vous fera perdre des points d\'Endurance.',
  'Puissance psychique': 'Permet d\'attaquer l\'esprit de votre ennemi pendant un combat, ajoutant +2 à votre Quotient d\'Attaque (sauf si l\'ennemi est immunisé).',
  'Communication Animale': 'Permet de comprendre et de parler avec la plupart des animaux, ou de deviner leurs intentions.',
  'Maîtrise Psychique de la Matière': 'Permet de déplacer de petits objets par la simple force de la pensée (télékinésie).'
};

interface CharacterCreationProps {
  onComplete: () => void;
  onCancel: () => void;
  importedCharacter?: any;
  bookId?: number;
}

export const CharacterCreation: React.FC<CharacterCreationProps> = ({ onComplete, onCancel, importedCharacter, bookId = 1 }) => {
  const { startNewGame } = useGameStore();
  const [combatSkill, setCombatSkill] = useState<number | null>(importedCharacter?.combatSkill || null);
  const [endurance, setEndurance] = useState<number | null>(importedCharacter?.maxEndurance || null);
  const [gold, setGold] = useState<number | null>(importedCharacter?.goldCrowns || null);
  const [initialItem, setInitialItem] = useState<string | null>(importedCharacter ? 'Importé' : null);
  
  const [selectedDisciplines, setSelectedDisciplines] = useState<Discipline[]>([]);
  const [newDiscipline, setNewDiscipline] = useState<Discipline | null>(null);
  const [weaponskillChoice, setWeaponskillChoice] = useState<Weapon | null>(importedCharacter?.weaponMastery || null);
  
  const [selectedAvatar, setSelectedAvatar] = useState<string>(importedCharacter ? importedCharacter.avatar.replace('/images/avatars/', '') : 'avatar_1.png');
  const [showDisciplinesHelp, setShowDisciplinesHelp] = useState(false);
  const [activeHelp, setActiveHelp] = useState<string | null>(null);

  // Inventaire interactif pour le Livre 2
  const [book2Weapons, setBook2Weapons] = useState<Weapon[]>(importedCharacter?.weapons || (bookId === 2 ? ['Hache'] : []));
  const [book2Backpack, setBook2Backpack] = useState<string[]>(importedCharacter?.backpack || []);
  const [book2Meals, setBook2Meals] = useState<number>(importedCharacter?.meals ?? (bookId === 2 ? 1 : 0));
  const [book2SpecialItems, setBook2SpecialItems] = useState<string[]>(importedCharacter?.specialItems || (bookId === 2 ? ['Carte du Sommerlund et de Durenor'] : []));
  const [arsenalSelections, setArsenalSelections] = useState<string[]>([]);
  const [goldRolled, setGoldRolled] = useState(false);

  useEffect(() => {
    if (bookId === 2 && importedCharacter && !goldRolled) {
      const extraGold = 10 + Math.floor(Math.random() * 10);
      setGold(Math.min(50, (importedCharacter.goldCrowns || 0) + extraGold));
      setGoldRolled(true);
    }
  }, [bookId, importedCharacter, goldRolled]);

  if (showDisciplinesHelp) {
    return <DisciplinesHelp onBack={() => setShowDisciplinesHelp(false)} />;
  }

  const rollStats = () => {
    setCombatSkill(10 + Math.floor(Math.random() * 10));
    setEndurance(20 + Math.floor(Math.random() * 10));
    
    if (bookId === 2) {
      setGold(10 + Math.floor(Math.random() * 10));
      setInitialItem('Livre 2');
      // Pour un nouveau personnage
      if (!importedCharacter) {
        setBook2Weapons(['Hache']);
        setBook2Backpack([]);
        setBook2Meals(1);
        setBook2SpecialItems(['Carte du Sommerlund et de Durenor']);
      }
    } else {
      setGold(Math.floor(Math.random() * 10));
      // Initial item roll (0-9)
      const itemRoll = Math.floor(Math.random() * 10);
      const items = [
        'Glaive', 'Épée', 'Casque (+2 ENDURANCE)', '2 Repas', 
        'Cotte de mailles (+4 ENDURANCE)', 'Masse d\'armes', 
        'Potion de Guérison', 'Bâton', 'Lance', '12 Couronnes'
      ];
      setInitialItem(items[itemRoll]);
    }
  };

  const toggleDiscipline = (d: Discipline) => {
    if (importedCharacter) {
      if (importedCharacter.disciplines.includes(d)) return; // Already known
      if (newDiscipline === d) {
        setNewDiscipline(null);
      } else {
        setNewDiscipline(d);
      }
    } else {
      const limit = bookId === 2 ? 6 : 5;
      if (selectedDisciplines.includes(d)) {
        setSelectedDisciplines(selectedDisciplines.filter(x => x !== d));
      } else if (selectedDisciplines.length < limit) {
        setSelectedDisciplines([...selectedDisciplines, d]);
      }
    }
  };

  const toggleArsenal = (itemDef: ArsenalItemDef) => {
    if (arsenalSelections.includes(itemDef.id)) {
      setArsenalSelections(prev => prev.filter(id => id !== itemDef.id));
    } else {
      if (arsenalSelections.length < 2) {
        setArsenalSelections(prev => [...prev, itemDef.id]);
      }
    }
  };

  // Computes the projected inventory based on drops and arsenal selections
  const projectedWeapons = [...book2Weapons];
  const projectedBackpack = [...book2Backpack];
  let projectedMeals = book2Meals;
  const projectedSpecial = [...book2SpecialItems];

  for (const selId of arsenalSelections) {
    const item = ARSENAL_ITEMS.find(i => i.id === selId);
    if (item) {
      if (item.type === 'weapon') projectedWeapons.push(item.name as Weapon);
      else if (item.type === 'special') projectedSpecial.push(item.name);
      else if (item.type === 'backpack') {
        if (item.name === '2 Repas') projectedMeals += 2;
        else projectedBackpack.push(item.name);
      }
    }
  }

  const isArsenalValid = () => {
    if (bookId !== 2) return true;
    if (arsenalSelections.length !== 2) return false;
    if (projectedWeapons.length > 2) return false;
    if (projectedBackpack.length + projectedMeals > 8) return false;
    return true;
  };

  const handleStart = () => {
    let finalEndurance = endurance || 0;
    
    if (importedCharacter) {
      if (!newDiscipline) return;
      const allDisciplines = [...importedCharacter.disciplines, newDiscipline];
      
      let startState: any = {
        ...importedCharacter,
        avatar: `/images/avatars/${selectedAvatar}`,
        disciplines: allDisciplines,
        weaponMastery: allDisciplines.includes('Maîtrise des armes') ? (weaponskillChoice || importedCharacter.weaponMastery || 'Épée') : undefined,
      };

      if (bookId === 2) {
        if (projectedSpecial.includes('Casque') || projectedSpecial.includes('Casque (+2 ENDURANCE)')) finalEndurance += 2;
        let addedEndurance = 0;
        if (projectedSpecial.includes('Cotte de mailles')) {
           if (!importedCharacter.specialItems.includes('Cotte de mailles')) addedEndurance += 4;
        }
        startState = {
           ...startState,
           weapons: projectedWeapons,
           backpack: projectedBackpack,
           meals: projectedMeals,
           specialItems: projectedSpecial,
           goldCrowns: gold || 0,
           maxEndurance: importedCharacter.maxEndurance + addedEndurance,
           endurance: importedCharacter.endurance + addedEndurance,
        };
      }
      
      startNewGame(startState, bookId);
      onComplete();
      return;
    }

    const limit = bookId === 2 ? 6 : 5;
    if (!combatSkill || !endurance || selectedDisciplines.length < limit) return;
    
    let finalGold = gold || 0;
    const backpack = bookId === 2 ? [...projectedBackpack] : ['Repas'];
    const weapons: Weapon[] = bookId === 2 ? [...projectedWeapons] : ['Hache'];
    const specialItems = bookId === 2 ? [...projectedSpecial] : ['Carte Géographique'];
    let meals = bookId === 2 ? projectedMeals : 1;
    
    if (bookId === 1) {
      if (initialItem === '12 Couronnes') {
        finalGold += 12;
      } else if (initialItem === '2 Repas') {
        meals += 2;
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
    } else {
      if (projectedSpecial.includes('Cotte de mailles')) finalEndurance += 4;
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
      meals: meals,
      goldCrowns: finalGold,
      specialItems
    }, bookId);
    onComplete();
  };

  const removeWeapon = (index: number) => {
    setBook2Weapons(prev => prev.filter((_, i) => i !== index));
  };
  const removeBackpack = (index: number) => {
    setBook2Backpack(prev => prev.filter((_, i) => i !== index));
  };
  const removeMeal = () => {
    setBook2Meals(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>Création de Personnage</h2>
      
      <div className="book-panel p-4 sm:p-6 mb-6">
        <h3 className="text-xl mb-4">0. Identité</h3>
        <div>
          <label className="block text-[#d4af37] font-semibold" style={{ marginBottom: '1rem' }}>Choisissez votre Portrait :</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4" style={{ paddingTop: '0.5rem' }}>
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
      <div className="book-panel p-4 sm:p-6 mb-6">
        <h3 className="text-xl mb-4">1. Statistiques</h3>
        {!combatSkill && !importedCharacter ? (
          <button onClick={rollStats} className="primary-btn">Tirer les statistiques</button>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-lg">
              <div>Habileté: <span className="text-[#d4af37] font-bold">{combatSkill}</span></div>
              <div>Endurance: <span className="text-[#d4af37] font-bold">{endurance}</span></div>
              <div>Couronnes d'or: <span className="text-[#d4af37] font-bold">{gold}</span></div>
              {bookId === 1 && <div>Objet initial: <span className="text-[#d4af37] font-bold">{initialItem}</span></div>}
            </div>
            {!importedCharacter && (
              <button 
                onClick={rollStats} 
                className="choice-btn px-6 py-2 text-sm whitespace-nowrap"
              >
                Relancer les statistiques
              </button>
            )}
          </div>
        )}
      </div>

      <div className="book-panel p-4 sm:p-6 mb-6 relative">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="text-xl">2. Disciplines Kaï ({importedCharacter ? 'Choisissez 1 nouvelle discipline' : (bookId === 2 ? 'Choisissez-en 6' : 'Choisissez-en 5')})</h3>
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
        <p className="mb-4 text-sm text-gray-400">
          {importedCharacter ? `Sélectionné: ${newDiscipline ? 1 : 0} / 1` : `Sélectionné: ${selectedDisciplines.length} / ${bookId === 2 ? 6 : 5}`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {ALL_DISCIPLINES.map(d => {
            const isAlreadyKnown = importedCharacter?.disciplines.includes(d);
            const isSelected = importedCharacter ? newDiscipline === d : selectedDisciplines.includes(d);
            return (
              <div key={d} className="flex flex-col">
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => toggleDiscipline(d)}
                    disabled={isAlreadyKnown}
                    className={`flex-1 text-left py-2 px-3 rounded border transition-colors ${
                      isAlreadyKnown ? 'bg-gray-800 text-gray-500 border-gray-700 opacity-50 cursor-not-allowed' :
                      isSelected ? 'bg-[#d4af37] text-black border-[#d4af37]' : 'bg-[#121212] text-[#e4d5b7] border-[#333333] hover:border-[#d4af37]'
                    }`}
                  >
                    {d} {isAlreadyKnown && '(Déjà acquise)'}
                  </button>
                  <button
                    onClick={(e) => { 
                      e.preventDefault(); 
                      e.stopPropagation(); 
                      setActiveHelp(activeHelp === d ? null : d); 
                    }}
                    className="p-2 px-3 border border-[#333333] bg-[#121212] text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] rounded flex items-center justify-center transition-colors"
                    title="Voir l'explication"
                  >
                    <HelpCircle size={20} />
                  </button>
                </div>
                {activeHelp === d && (
                  <div className="mt-2 p-3 bg-[#1a1a1a] border border-[#333333] rounded text-sm text-gray-300 shadow-inner animate-fade-in-down">
                    {DISCIPLINE_DESCRIPTIONS[d]}
                  </div>
                )}
                {d === 'Maîtrise des armes' && isSelected && !importedCharacter?.weaponMastery && (
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
            );
          })}
        </div>
      </div>

      {bookId === 2 && (combatSkill || importedCharacter) && (
        <div className="book-panel p-4 sm:p-6 mb-6">
          <h3 className="text-xl mb-4">3. L'Arsenal (Choisissez 2 objets)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-2 text-[#d4af37] font-semibold">Objets disponibles ({arsenalSelections.length}/2)</p>
              <div className="space-y-2">
                {ARSENAL_ITEMS.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => toggleArsenal(item)}
                    className={`w-full text-left p-2 rounded border transition-colors flex justify-between ${
                      arsenalSelections.includes(item.id) ? 'bg-[#d4af37] text-black border-[#d4af37]' : 'bg-[#121212] text-[#e4d5b7] border-[#333333] hover:border-[#d4af37]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.effect && <span className="text-xs opacity-80 mt-1">{item.effect}</span>}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[#d4af37] font-semibold">Votre Inventaire Actuel</p>
              
              <div className="bg-[#1a1a1a] p-3 rounded mb-3 border border-[#333333]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">Armes ({projectedWeapons.length}/2)</span>
                </div>
                {projectedWeapons.length > 2 && <p className="text-red-500 text-xs mb-1">Attention: Maximum 2 armes ! Jetez-en une.</p>}
                <ul className="text-sm space-y-1">
                  {book2Weapons.map((w, i) => (
                    <li key={`w-${i}`} className="flex justify-between items-center bg-[#222] p-1 rounded">
                      <span>{w}</span>
                      <button onClick={() => removeWeapon(i)} className="text-red-400 hover:text-red-300" title="Jeter"><Trash2 size={14} /></button>
                    </li>
                  ))}
                  {arsenalSelections.map(id => {
                    const item = ARSENAL_ITEMS.find(i => i.id === id);
                    if (item?.type === 'weapon') return <li key={id} className="text-[#d4af37] italic flex justify-between items-center p-1">+ {item.name} (Arsenal)</li>;
                    return null;
                  })}
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-3 rounded mb-3 border border-[#333333]">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">Sac à Dos ({projectedBackpack.length + projectedMeals}/8)</span>
                </div>
                {(projectedBackpack.length + projectedMeals) > 8 && <p className="text-red-500 text-xs mb-1">Attention: Maximum 8 objets ! Jetez-en un.</p>}
                <ul className="text-sm space-y-1">
                  {Array.from({length: book2Meals}).map((_, i) => (
                    <li key={`meal-${i}`} className="flex justify-between items-center bg-[#222] p-1 rounded">
                      <span>Repas</span>
                      <button onClick={removeMeal} className="text-red-400 hover:text-red-300" title="Jeter"><Trash2 size={14} /></button>
                    </li>
                  ))}
                  {book2Backpack.map((item, i) => (
                    <li key={`bp-${i}`} className="flex justify-between items-center bg-[#222] p-1 rounded">
                      <span>{item}</span>
                      <button onClick={() => removeBackpack(i)} className="text-red-400 hover:text-red-300" title="Jeter"><Trash2 size={14} /></button>
                    </li>
                  ))}
                  {arsenalSelections.map(id => {
                    const item = ARSENAL_ITEMS.find(i => i.id === id);
                    if (item?.type === 'backpack') return <li key={id} className="text-[#d4af37] italic flex justify-between items-center p-1">+ {item.name} (Arsenal)</li>;
                    return null;
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between gap-4" style={{ marginTop: '3rem', paddingBottom: '2rem' }}>
        <button 
          onClick={onCancel} 
          className="choice-btn max-w-[200px] text-center text-lg"
          style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: '0.5rem 1rem' }}
        >
          Annuler
        </button>
        <button 
          onClick={handleStart} 
          disabled={importedCharacter ? (!newDiscipline || (newDiscipline === 'Maîtrise des armes' && !weaponskillChoice && !importedCharacter.weaponMastery) || !isArsenalValid()) : (!combatSkill || selectedDisciplines.length < (bookId === 2 ? 6 : 5) || (selectedDisciplines.includes('Maîtrise des armes') && !weaponskillChoice) || !isArsenalValid())}
          className="primary-btn text-lg px-4 sm:px-8 disabled:opacity-50 disabled:cursor-not-allowed flex-1 max-w-[300px]"
          style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: '0.5rem 1rem' }}
        >
          {importedCharacter ? 'Continuer l\'Aventure' : 'Commencer l\'Aventure'}
        </button>
      </div>
    </div>
  );
}
