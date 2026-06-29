import { useGameStore } from '../store/gameStore';
import { storyData } from '../data/story';
import { CombatScreen } from './CombatScreen';
import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

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
    goBackInHistory
  } = useGameStore();

  const section = storyData[currentSectionId];
  // Play random background music or ambient sound logic could go here
  useEffect(() => {
    // E.g., if section.id === '1', play forest theme
    // We would have an audio element ref here
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

  const fontSizeClass = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  }[settings.fontSize] || 'text-lg';

  return (
    <div className="max-w-2xl mx-auto pb-20 relative">
      {settings.allowGoBack && history.length > 0 && currentSectionId !== 'prologue' && (
        <button 
          onClick={goBackInHistory}
          className="absolute right-0 top-0 mt-2 text-gray-400 hover:text-[#d4af37] flex items-center gap-2 transition-colors border border-gray-800 hover:border-[#d4af37] px-3 py-1.5 rounded-full text-sm bg-[#121212]"
        >
          <RotateCcw size={16} /> Revenir en arrière
        </button>
      )}

      <h2 className="text-3xl font-bold mb-8 border-b border-[#333333] pb-2 text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
        Section {section.id}
      </h2>

      {section.image && (
        <div className="w-full mb-8 rounded-md overflow-hidden border border-[#333333]">
          <img 
            src={section.image} 
            alt={`Illustration for section ${section.id}`} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className={`book-panel p-6 mb-8 ${fontSizeClass}`}>
        {Array.isArray(section.text) 
          ? section.text.map((paragraph, idx) => (
              <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
            ))
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



      {(!section.combat || combatVictory) && (
        <div className="flex flex-col gap-3">
          {section.choices.map((choice, idx) => {
            // Optional : evaluate choice.condition here
            return (
              <button 
                key={idx}
                onClick={() => handleChoice(choice.targetId, !section.combat)}
                className="choice-btn"
              >
                {choice.text}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
