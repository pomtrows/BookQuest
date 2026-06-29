import { useGameStore } from '../store/gameStore';
import { storyData } from '../data/story';
import { CombatScreen } from './CombatScreen';
import { useEffect, useState } from 'react';
import { RotateCcw, Utensils, AlertTriangle } from 'lucide-react';

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

  useEffect(() => {
    setMealResolved(!storyData[currentSectionId]?.requiresMeal);
  }, [currentSectionId]);

  if (!section) {
    return <div className="p-8 text-center text-red-500">Section {currentSectionId} introuvable !</div>;
  }

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

  return (
    <div className="max-w-2xl mx-auto pb-20 relative">
      <div className="mb-8 border-b border-[#333333] pb-2">
        <h2 className="text-3xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
          Section {section.id}
        </h2>
      </div>

      {section.image && (
        <div className="w-full mb-8 rounded-md overflow-hidden border border-[#333333]">
          <img 
            src={section.image} 
            alt={`Illustration for section ${section.id}`} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="book-panel p-6 mb-8" style={fontSizeStyle}>
        {Array.isArray(section.text) 
          ? section.text.map((paragraph, idx) => {
              if (paragraph.startsWith('[IMG]')) {
                return (
                  <div key={idx} className="my-6 flex justify-center">
                    <img src={paragraph.substring(5)} alt="" className="max-w-full h-auto rounded-lg shadow-lg border-2 border-[#d4af37]" />
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
          {section.choices && section.choices.length > 0 ? (
            section.choices.map((choice, idx) => (
              <button 
                key={idx}
                onClick={() => handleChoice(choice.targetId, !section.combat)}
                className="choice-btn"
              >
                {choice.text}
              </button>
            ))
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
