import { useGameStore } from '../store/gameStore';
import { storyData } from '../data/story';
import { CombatScreen } from './CombatScreen';
import { useEffect, useState } from 'react';
import { RotateCcw, Utensils, AlertTriangle, Dices } from 'lucide-react';

export function StoryViewer() {
  const { 
    currentSectionId, 
    goToSection, 
    isCombatActive, 
    startCombat, 
    combatVictory,
    character,
    heal,
    settings,
    history,
    goBackInHistory,
    updateMeals,
    takeDamage,
    addNotification
  } = useGameStore();

  const section = storyData[currentSectionId];
  const [mealResolved, setMealResolved] = useState(!section?.requiresMeal);
  const [randomRoll, setRandomRoll] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    setMealResolved(!storyData[currentSectionId]?.requiresMeal);
    setRandomRoll(null);
    setIsRolling(false);
  }, [currentSectionId]);

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

  const handleChoice = (targetId: string, healing?: boolean) => {
    if (healing && character && character.disciplines.includes('Guérison')) {
      heal(1);
    }
    goToSection(targetId);
  };



  if (isCombatActive && !combatVictory) {
    return (
      <div className="max-w-4xl mx-auto pt-8 pb-20">
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
    /tirez/i.test(c.text) || 
    /entre \d+ et \d+/i.test(c.text) ||
    /inférieur à \d+/i.test(c.text)
  ) || false;

  return (
    <div className="max-w-2xl mx-auto pb-20 relative">
      <div className="mb-8 border-b border-[#333333] pb-2">
        <h2 className="text-3xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
          Section {section.id}
        </h2>
      </div>

      {section.image && (
        <div className="w-full mb-8 flex justify-center bg-black/20 rounded-md overflow-hidden border border-[#333333]">
          <img 
            src={section.image} 
            alt={`Illustration for section ${section.id}`} 
            className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain"
          />
        </div>
      )}

      <div className="book-panel p-6 mb-8" style={fontSizeStyle}>
        {Array.isArray(section.text) 
          ? section.text.map((paragraph, idx) => {
              if (paragraph.startsWith('[IMG]')) {
                return (
                  <div key={idx} className="my-6 flex justify-center">
                    <img src={paragraph.substring(5)} alt="" className="max-w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-lg border-2 border-[#d4af37]" />
                  </div>
                );
              }
              if (paragraph.startsWith('[TITLE]')) {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl text-center text-[#d4af37] mb-6 mt-4" style={{ fontFamily: 'Cinzel, serif' }}>
                    {paragraph.substring(7)}
                  </h2>
                );
              }
              return <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>;
            })
          : <p className="mb-4 leading-relaxed whitespace-pre-wrap">{section.text}</p>
        }
      </div>

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
              const isRandomChoice = /tirez|entre \d+ et \d+|inférieur à/i.test(choice.text);
              let isMatched = false;
              let isLocked = false;
              
              if (hasRandomChoices && isRandomChoice) {
                if (randomRoll === null || isRolling) {
                  isLocked = true;
                } else {
                  isMatched = isChoiceMatchingRoll(randomRoll, choice.text);
                  // If it doesn't match, we lock it. But to prevent soft-locks if regex fails,
                  // we could keep it unlocked. But the user can just cheat.
                  // Let's lock it to make it a game!
                  isLocked = !isMatched;
                }
              }

              return (
                <button 
                  key={idx}
                  onClick={() => handleChoice(choice.targetId, !section.combat)}
                  disabled={isLocked}
                  className={`choice-btn transition-all duration-300 ${isMatched ? '!border-green-500 !shadow-[0_0_15px_rgba(34,197,94,0.3)]' : ''} ${isLocked ? 'opacity-40 cursor-not-allowed hover:!bg-black/40 hover:!text-[#e4d5b7] hover:!border-[#d4af37]/30' : ''}`}
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
  );
}
