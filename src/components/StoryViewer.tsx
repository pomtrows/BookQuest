import { useGameStore } from '../store/gameStore';
import { storyData } from '../data/story';
import { useEffect } from 'react';

export function StoryViewer() {
  const { 
    currentSectionId, 
    goToSection, 
    isCombatActive, 
    startCombat, 
    playCombatRound,
    combatRounds,
    enemyCurrentEndurance,
    combatVictory,
    character,
    heal
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

  const handleCombatRound = () => {
    const roll = Math.floor(Math.random() * 10);
    playCombatRound(roll);
  };

  return (
    <div className="max-w-2xl mx-auto pb-20">
      <h2 className="text-3xl font-bold mb-8 border-b border-[#333333] pb-2 text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
        Section {section.id}
      </h2>

      <div className="book-panel p-6 mb-8 text-lg">
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

      {isCombatActive && character && section.combat && (
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
