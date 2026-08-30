import { useGameStore } from '../store/gameStore';
import { getStoryData } from '../data/books';
import { CombatScreen } from './CombatScreen';
import { useEffect, useState } from 'react';
import { Dices, AlertTriangle, Utensils, RotateCcw } from 'lucide-react';
import { supabase, getImageUrl } from '../lib/supabase';
import { useGalleryStore } from '../store/galleryStore';

export function StoryViewer() {
  const { 
    currentSectionId, 
    goToSection, 
    isCombatActive, 
    startCombat, 
    combatVictory,
    combatRoundNumber,
    character,
    currentBookId,
    settings,
    history,
    goBackInHistory,
    updateMeals,
    takeDamage,
    addNotification,
    addSpecialItem,
    addBackpackItem,
    addWeapon,
    updateGold
  } = useGameStore();

  const storyDataObj = getStoryData(currentBookId);
  const section = storyDataObj[currentSectionId];
  const { unlockIllustration } = useGalleryStore();
  const [mealResolved, setMealResolved] = useState(!section?.requiresMeal);
  const [randomRoll, setRandomRoll] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [turningToSection, setTurningToSection] = useState<string | null>(null);
  const [lootedItems, setLootedItems] = useState<Record<string, boolean>>({});
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    setMealResolved(!storyDataObj[currentSectionId]?.requiresMeal);
    setRandomRoll(null);
    setIsRolling(false);
    setTurningToSection(null);
    setLootedItems({});

    // Sauvegarde Automatique
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const state = useGameStore.getState();
        const stateToSave = JSON.parse(JSON.stringify(state)); // Clone pur
        delete stateToSave.notifications; // Do not save notifications state to the cloud
        supabase.from('game_saves').upsert(
          {
            user_id: session.user.id,
            book_id: currentBookId,
            slot_index: 0,
            state: stateToSave,
            updated_at: new Date().toISOString()
          },
          { onConflict: 'user_id, book_id, slot_index' }
        ).then(({ error }) => {
          if (error) {
            console.error('Erreur autosave:', error);
            useGameStore.getState().addNotification('Erreur Autosave: ' + error.message, 'danger');
          }
        });

        // Débloquer l'illustration si elle existe
        if (storyDataObj[currentSectionId]?.image) {
          unlockIllustration(session.user.id, currentBookId, currentSectionId);
        }
      }
    });
  }, [currentSectionId, currentBookId, storyDataObj, unlockIllustration]);

  if (!section) {
    return <div className="p-8 text-center text-red-500">Section {currentSectionId} introuvable !</div>;
  }

  const handleRoll = () => {
    setIsRolling(true);
    let counter = 0;
    const interval = setInterval(() => {
      setRandomRoll(Math.floor(Math.random() * 10));
      counter++;
      if (counter > 15) {
        clearInterval(interval);
        const finalRoll = Math.floor(Math.random() * 10);
        setRandomRoll(finalRoll);
        setIsRolling(false);
      }
    }, 60);
  };

  const isChoiceMatchingRoll = (roll: number, text: string): boolean => {
    const lower = text.toLowerCase();
    
    // "entre X et Y"
    const entreMatch = lower.match(/entre (\d+) et (\d+)/);
    if (entreMatch && roll >= parseInt(entreMatch[1]) && roll <= parseInt(entreMatch[2])) return true;
    
    // "X ou Y"
    const ouMatch = lower.match(/(\d+) ou (\d+)/);
    if (ouMatch && (roll === parseInt(ouMatch[1]) || roll === parseInt(ouMatch[2]))) return true;
    
    // "le X" or "tirez X"
    const exactMatch = lower.match(/(?:le|tirez) (\d+)/);
    if (exactMatch && roll === parseInt(exactMatch[1])) return true;
    
    // "inférieur à X"
    const infMatch = lower.match(/inférieur à (\d+)/);
    if (infMatch) {
      const val = parseInt(infMatch[1]);
      if (lower.includes('égal ou') && roll <= val) return true;
      if (!lower.includes('égal ou') && roll < val) return true;
    }
    
    return false;
  };

  const getRequiredDiscipline = (text: string): string | null => {
    const lower = text.toLowerCase();
    if (!lower.includes('discipline kaï') && !lower.includes('maîtrisez la discipline')) return null;
    
    if (lower.includes('orientation')) return 'Orientation';
    if (lower.includes('sixième sens') || lower.includes('sixieme sens')) return 'Sixième Sens';
    if (lower.includes('camouflage')) return 'Camouflage';
    if (lower.includes('chasse')) return 'Chasse';
    if (lower.includes('guérison') || lower.includes('guerison')) return 'Guérison';
    if (lower.includes('armes') || lower.includes('maîtrise des armes')) return 'Maîtrise des armes';
    if (lower.includes('bouclier psychique')) return 'Bouclier psychique';
    if (lower.includes('puissance psychique')) return 'Puissance psychique';
    if (lower.includes('communication animale')) return 'Communication Animale';
    if (lower.includes('matière') || lower.includes('matiere')) return 'Maîtrise Psychique de la Matière';

    return null;
  };

  const handleChoice = (targetId: string) => {
    
    // Si on est déjà en train de tourner la page, on ignore les autres clics
    if (turningToSection) return;
    
    setTurningToSection(targetId);
    setTimeout(() => {
      goToSection(targetId);
      const scrollContainer = document.querySelector('.overflow-y-auto');
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      } else {
        window.scrollTo(0, 0);
      }
    }, 600);
  };



  if (isCombatActive && !combatVictory) {
    return (
      <div className="max-w-4xl mx-auto pt-0 pb-20">
        <CombatScreen />
      </div>
    );
  }

  const getFontSize = () => {
    switch(settings?.fontSize) {
      case 'small': return '14px';
      case 'medium': return '16px';
      case 'large': return '20px';
      case 'xlarge': return '26px';
      default: return '20px';
    }
  };
  const fontSizeStyle = { fontSize: getFontSize() };
  
  const hasRandomChoices = section?.choices?.some(c => 
    /\btirez\b/i.test(c.text) || 
    /entre \d+ et \d+/i.test(c.text) ||
    /inférieur à \d+/i.test(c.text)
  ) || false;

  const handleLootItem = (type: 'gold' | 'meal' | 'special' | 'item' | 'weapon', value: any, id: string) => {
    if (!character) return;

    if (type === 'weapon' && character.weapons.length >= 2) {
      addNotification("Vous ne pouvez pas porter plus de 2 armes.", "warning");
      return;
    }

    if (type === 'item' || type === 'meal') {
      const totalItems = character.backpack.filter(i => i !== 'Repas').length + character.meals;
      if (totalItems >= 8) {
        addNotification("Votre sac à dos est plein (8 objets max).", "warning");
        return;
      }
    }

    if (type === 'gold') updateGold(value as number);
    if (type === 'meal') updateMeals(value as number);
    if (type === 'special') addSpecialItem(value as string);
    if (type === 'item') addBackpackItem(value as string);
    if (type === 'weapon') addWeapon(value as any);
    
    setLootedItems(prev => ({ ...prev, [id]: true }));
    addNotification("Objet récupéré", "success");
  };

  const hasUnlootedItems = () => {
    if (!section.loot) return false;
    
    const allGold = !section.loot.gold || lootedItems['gold'];
    const allMeals = !section.loot.meals || lootedItems['meals'];
    const allSpecial = !section.loot.specialItems || section.loot.specialItems.every((_, i) => lootedItems[`special-${i}`]);
    const allItems = !section.loot.items || section.loot.items.every((_, i) => lootedItems[`item-${i}`]);
    const allWeapons = !section.loot.weapons || section.loot.weapons.every((_, i) => lootedItems[`weapon-${i}`]);
    
    return !(allGold && allMeals && allSpecial && allItems && allWeapons);
  };

  return (
    <div className={`story-container min-h-screen ${turningToSection ? 'perspective-[1200px]' : ''}`}>
      {/* 3D turning page element */}
      {turningToSection && storyDataObj[turningToSection] && (
        <div className="absolute inset-0 max-w-2xl mx-auto bg-[#0a0a0c] z-0 px-4 py-8 border-r-2 border-[#d4af37]/30 shadow-2xl origin-left animate-page-turn-under">
           <div className="mb-2 border-b border-[#333333] pb-1">
             <h2 className="text-3xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
               Section {turningToSection}
             </h2>
           </div>
           {storyDataObj[turningToSection].image && (
             <div className="w-full mb-2 flex justify-center bg-black/20 rounded-md overflow-hidden border border-[#333333]">
               <img 
                 src={getImageUrl(storyDataObj[turningToSection].image)} 
                 className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain filter grayscale cursor-pointer" 
                 alt="" 
                 onClick={() => setFullscreenImage(getImageUrl(storyDataObj[turningToSection!].image, 'full') || null)}
               />
             </div>
           )}
           <div className="prose prose-invert max-w-none text-[#e4d5b7] text-xl leading-tight">
             <p>{storyDataObj[turningToSection].text[0]}</p>
           </div>
        </div>
      )}

      <div className={`max-w-2xl mx-auto pb-20 relative bg-[#0a0a0c] min-h-full ${turningToSection ? 'animate-page-turn' : 'animate-fade-in z-10'}`}>
        <div className="mb-2 border-b border-[#333333] pb-1">
          <h2 className="text-3xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
            Section {section.id}
          </h2>
        </div>

      {section.image && (
        <div className="w-full mb-2 flex justify-center bg-black/20 rounded-md overflow-hidden border border-[#333333]">
          <img 
            src={getImageUrl(section.image)} 
            alt={`Illustration for section ${section.id}`} 
            className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain cursor-pointer"
            onClick={() => setFullscreenImage(getImageUrl(section.image, 'full') || null)}
          />
        </div>
      )}

      <div className="book-panel p-3 md:p-4 mb-4" style={fontSizeStyle}>
        {Array.isArray(section.text) 
          ? section.text.map((paragraph, idx) => {
              if (paragraph.startsWith('[IMG]')) {
                const rawSrc = paragraph.substring(5);
                const imgSrc = getImageUrl(rawSrc);
                return (
                  <div key={idx} className="my-6 flex justify-center">
                    <img 
                      src={imgSrc} 
                      alt="" 
                      className="max-w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-lg border-2 border-[#d4af37] cursor-pointer" 
                      onClick={() => setFullscreenImage(getImageUrl(rawSrc, 'full'))}
                    />
                  </div>
                );
              }
              if (paragraph.startsWith('[TITLE]')) {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl text-center text-[#d4af37] mb-3 mt-1" style={{ fontFamily: 'Cinzel, serif' }}>
                    {paragraph.substring(7)}
                  </h2>
                );
              }
              return <p key={idx} className="mb-2 leading-tight">{paragraph}</p>;
            })
          : <p className="mb-2 leading-tight whitespace-pre-wrap">{section.text}</p>
        }
      </div>

      {hasUnlootedItems() && (
        <div className="book-panel p-6 mb-8 border-[#d4af37]/50 bg-[#1a1505]">
          <h3 className="text-xl font-bold text-[#d4af37] mb-2 flex items-center gap-2">
            Objets trouvés
          </h3>
          <ul className="space-y-3 text-[#e4d5b7]">
            {section.loot!.gold && !lootedItems['gold'] && (
              <li className="flex justify-between items-center bg-[#2a220a] p-2 rounded border border-[#d4af37]/30">
                <span>{section.loot!.gold} Couronnes d'Or</span>
                <button onClick={() => handleLootItem('gold', section.loot!.gold, 'gold')} className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37] rounded hover:bg-[#d4af37]/40 transition-colors text-sm font-bold">Prendre</button>
              </li>
            )}
            {section.loot!.meals && !lootedItems['meals'] && (
              <li className="flex justify-between items-center bg-[#2a220a] p-2 rounded border border-[#d4af37]/30">
                <span>{section.loot!.meals} Repas</span>
                <button onClick={() => handleLootItem('meal', section.loot!.meals, 'meals')} className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37] rounded hover:bg-[#d4af37]/40 transition-colors text-sm font-bold">Prendre</button>
              </li>
            )}
            {section.loot!.specialItems?.map((item, idx) => !lootedItems[`special-${idx}`] && (
              <li key={`special-${idx}`} className="flex justify-between items-center bg-[#2a220a] p-2 rounded border border-[#d4af37]/30">
                <span>{item} (Objet Spécial)</span>
                <button onClick={() => handleLootItem('special', item, `special-${idx}`)} className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37] rounded hover:bg-[#d4af37]/40 transition-colors text-sm font-bold">Prendre</button>
              </li>
            ))}
            {section.loot!.items?.map((item, idx) => !lootedItems[`item-${idx}`] && (
              <li key={`item-${idx}`} className="flex justify-between items-center bg-[#2a220a] p-2 rounded border border-[#d4af37]/30">
                <span>{item}</span>
                <button onClick={() => handleLootItem('item', item, `item-${idx}`)} className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37] rounded hover:bg-[#d4af37]/40 transition-colors text-sm font-bold">Prendre</button>
              </li>
            ))}
            {section.loot!.weapons?.map((weapon, idx) => !lootedItems[`weapon-${idx}`] && (
              <li key={`weapon-${idx}`} className="flex justify-between items-center bg-[#2a220a] p-2 rounded border border-[#d4af37]/30">
                <span>{weapon}</span>
                <button onClick={() => handleLootItem('weapon', weapon, `weapon-${idx}`)} className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37] rounded hover:bg-[#d4af37]/40 transition-colors text-sm font-bold">Prendre</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.combat && !isCombatActive && !combatVictory && (
        <div className="book-panel p-6 mb-8 border-red-900 bg-[#2a1010]">
          <h3 className="text-xl font-bold text-red-500 mb-2">Combat !</h3>
          <p>Un ennemi vous attaque : {Array.isArray(section.combat) ? section.combat.map(e => e.name).join(', ') : section.combat.name}</p>
          <button 
            onClick={() => startCombat(section.combat!)}
            className="primary-btn bg-red-700 hover:bg-red-600 text-white mt-4"
          >
            Engager le combat
          </button>
        </div>
      )}



      {(!section.combat || combatVictory) && !mealResolved && (
        <div className="book-panel p-6 mb-8 border-yellow-900 bg-[#2a2010]">
          <h3 className="text-xl font-bold text-yellow-500 mb-2 flex items-center gap-2">
            <Utensils size={24} /> Repas Requis
          </h3>
          <p className="mb-4 text-gray-300">Vous devez prendre un repas avant de poursuivre.</p>
          <div className="flex flex-col gap-3">
            {character?.disciplines.includes('Chasse') && (
              <button 
                onClick={() => {
                  setMealResolved(true);
                  addNotification('Votre discipline (Chasse) vous permet de vous nourrir.', 'success');
                }}
                className="choice-btn !border-green-600 !text-green-500 hover:!bg-green-900/30"
              >
                Utiliser la discipline : Chasse
              </button>
            )}
            
            {(character?.meals ?? 0) > 0 && (
              <button 
                onClick={() => {
                  updateMeals(-1);
                  setMealResolved(true);
                  addNotification('Vous avez consommé un Repas.', 'success');
                }}
                className="choice-btn hover:!bg-yellow-900/20"
              >
                Consommer un Repas (En stock : {character?.meals})
              </button>
            )}
            
            <button 
              onClick={() => {
                takeDamage(3);
                setMealResolved(true);
                addNotification("Vous avez perdu 3 points d'Endurance à cause de la faim.", 'danger');
              }}
              className="choice-btn !border-red-800 !text-red-500 hover:!bg-red-900/30 flex items-center gap-2"
            >
              <AlertTriangle size={18} /> Ne pas manger (-3 Endurance)
            </button>
          </div>
        </div>
      )}

      {(!section.combat || combatVictory) && mealResolved && (
        <div className="flex flex-col gap-3">
          {hasRandomChoices && (
            <div className="book-panel p-6 mb-6 flex flex-col items-center border-[#d4af37]/30 bg-black/40">
              {randomRoll === null && !isRolling && (
                <button 
                  onClick={handleRoll}
                  className="primary-btn flex items-center gap-3 text-xl px-8 py-4 bg-indigo-900/80 hover:bg-indigo-800 border-indigo-500"
                >
                  <Dices size={28} /> Utiliser la Table de Hasard
                </button>
              )}
              {isRolling && (
                <div className="text-7xl font-bold text-[#d4af37] animate-pulse">
                  {randomRoll}
                </div>
              )}
              {!isRolling && randomRoll !== null && (
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Vous avez tiré le chiffre</div>
                  <div className="text-7xl font-bold text-[#d4af37] border-4 border-[#d4af37] rounded-xl w-32 h-32 flex items-center justify-center bg-black/80 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    {randomRoll}
                  </div>
                </div>
              )}
            </div>
          )}

          {section.choices && section.choices.length > 0 ? (
            section.choices.map((choice, idx) => {
              const isRandomChoice = /\btirez\b|entre \d+ et \d+|inférieur à/i.test(choice.text);
              const requiredDiscipline = getRequiredDiscipline(choice.text);
              const hasRequiredDiscipline = requiredDiscipline ? character?.disciplines.includes(requiredDiscipline as any) : true;
              
              let isMatched = false;
              let isLocked = false;
              
              if (requiredDiscipline && !hasRequiredDiscipline) {
                isLocked = true;
              }

              if (choice.condition) {
                if (choice.condition.type === 'has_item') {
                  const hasItem = character?.backpack.some(i => i.toLowerCase() === choice.condition!.value.toLowerCase()) || 
                                  character?.specialItems.some(i => i.toLowerCase() === choice.condition!.value.toLowerCase());
                  if (!hasItem) {
                    isLocked = true;
                  }
                } else if (choice.condition.type === 'has_discipline') {
                  const hasDisc = character?.disciplines.some(d => d.toLowerCase() === choice.condition!.value.toLowerCase());
                  if (!hasDisc) {
                    isLocked = true;
                  }
                } else if (choice.condition.type === 'has_weapon') {
                  const hasWeapon = character?.weapons.some(w => w.toLowerCase() === choice.condition!.value.toLowerCase());
                  if (!hasWeapon) {
                    isLocked = true;
                  }
                }
              }
              
              if (hasRandomChoices && isRandomChoice) {
                if (randomRoll === null || isRolling) {
                  isLocked = true;
                } else {
                  isMatched = isChoiceMatchingRoll(randomRoll, choice.text);
                  isLocked = !isMatched;
                }
              }

              if (choice.isFlee && isCombatActive) {
                const combatEnemy = Array.isArray(section.combat) ? section.combat[0] : section.combat;
                const escapeRound = combatEnemy?.escapeRound || 0;
                if (combatRoundNumber <= escapeRound) {
                  isLocked = true;
                }
              }

              return (
                <button 
                  key={idx}
                  onClick={() => handleChoice(choice.targetId)}
                  disabled={isLocked}
                  className={`choice-btn transition-all duration-300 relative ${isMatched ? '!border-green-500 !shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-pulse' : ''} ${isLocked ? 'opacity-40 cursor-not-allowed hover:!bg-black/40 hover:!text-[#e4d5b7] hover:!border-[#d4af37]/30' : ''}`}
                >
                  {choice.text}
                </button>
              );
            })
          ) : (
            <div className="mt-8 text-center animate-fade-in flex flex-col items-center gap-4">
              <div className="border-t border-[#d4af37]/30 w-full mb-4"></div>
              <h3 className="text-3xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                Fin de l'Aventure
              </h3>
              <button 
                onClick={() => {
                  useGameStore.getState().saveAndResetGame();
                  window.location.reload();
                }}
                className="primary-btn px-8 py-3 w-full sm:w-auto mt-4"
              >
                Retour au Menu Principal
              </button>
            </div>
          )}
        </div>
      )}

      {settings?.allowGoBack && history.length > 0 && currentSectionId !== 'prologue' && (
        <div style={{ marginTop: '5rem', paddingTop: '2rem' }} className="border-t border-[#333333]/50 flex justify-center">
          <button 
            onClick={goBackInHistory}
            className="flex items-center gap-2 transition-colors border border-gray-600 hover:border-[#d4af37] px-6 py-3 rounded-full text-sm bg-black/40 text-gray-400 hover:text-[#d4af37]"
          >
            <RotateCcw size={18} /> Revenir en arrière
          </button>
        </div>
      )}
      </div>
      
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <img 
            src={fullscreenImage} 
            alt="Fullscreen View" 
            className="max-w-full max-h-full object-contain shadow-2xl rounded"
          />
        </div>
      )}
    </div>
  );
}
