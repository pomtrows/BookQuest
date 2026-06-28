import { useState, useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';
import { storyData } from '../data/story';

export function CombatScreen() {
  const { 
    currentSectionId, 
    character, 
    enemyCurrentEndurance, 
    combatRounds, 
    playCombatRound,
    combatVictory
  } = useGameStore();

  const section = storyData[currentSectionId];
  const enemy = section?.combat ? (Array.isArray(section.combat) ? section.combat[0] : section.combat) : null;

  const [diceRolling, setDiceRolling] = useState(false);
  const [currentFace, setCurrentFace] = useState(0);
  const [showDamage, setShowDamage] = useState(false);
  
  const lastRoundCount = useRef(combatRounds.length);

  // Floating damage effect when a new round is added
  useEffect(() => {
    if (combatRounds.length > lastRoundCount.current) {
      setShowDamage(true);
      const timer = setTimeout(() => setShowDamage(false), 1500);
      lastRoundCount.current = combatRounds.length;
      return () => clearTimeout(timer);
    }
  }, [combatRounds.length]);

  if (!character || !enemy) return null;

  const handleRoll = () => {
    if (diceRolling || combatVictory) return;
    
    setDiceRolling(true);
    setShowDamage(false);
    let rollCount = 0;
    const finalRoll = Math.floor(Math.random() * 10);
    
    const interval = setInterval(() => {
      setCurrentFace(Math.floor(Math.random() * 10));
      rollCount++;
      if (rollCount >= 20) {
        clearInterval(interval);
        setCurrentFace(finalRoll);
        setTimeout(() => {
          playCombatRound(finalRoll);
          setDiceRolling(false);
        }, 500);
      }
    }, 50);
  };

  const getEnemySprite = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('glok')) return 'glok.png';
    if (n.includes('loup')) return 'loup.png';
    if (n.includes('kraan')) return 'kraan.png';
    if (n.includes('vordak')) return 'vordak.png';
    if (n.includes('gourgaz')) return 'gourgaz.png';
    return 'generic.png';
  };

  const enemySprite = getEnemySprite(enemy.name);
  const playerHealthPct = Math.max(0, (character.endurance / character.maxEndurance) * 100);
  
  // Since we don't have enemy max endurance natively stored if it drops, we use the initial endurance as max.
  const enemyMaxEndurance = enemy.endurance;
  const enemyHealthPct = Math.max(0, (enemyCurrentEndurance / enemyMaxEndurance) * 100);

  const latestRound = combatRounds.length > 0 ? combatRounds[combatRounds.length - 1] : null;

  return (
    <div className="book-panel p-6 mb-8 relative overflow-hidden bg-[#1a0a0a] border border-red-900 rounded-lg shadow-2xl">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('/images/title_bg.png')", backgroundSize: 'cover' }}></div>
      
      <h3 className="text-2xl font-bold text-center text-red-500 mb-6" style={{ fontFamily: 'Cinzel, serif' }}>COMBAT !</h3>

      <div className="flex justify-between items-end relative z-10">
        
        {/* Player Side */}
        <div className="w-1/3 flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded border-2 border-[#d4af37] overflow-hidden mb-4 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <img src={character.avatar || '/images/avatars/avatar_1.png'} alt="Player" className="w-full h-full object-cover" />
            </div>
            {showDamage && latestRound && latestRound.playerDamage > 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-red-500 drop-shadow-md animate-float-up">
                -{latestRound.playerDamage}
              </div>
            )}
            {showDamage && latestRound && latestRound.playerDamage === 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 drop-shadow-md animate-float-up">
                Esquive
              </div>
            )}
          </div>
          <h4 className="font-bold text-[#d4af37] text-xl" style={{ fontFamily: 'Cinzel, serif' }}>{character.name || 'Loup Solitaire'}</h4>
          <p className="text-sm text-gray-400 mb-2">Habileté: {character.combatSkill}</p>
          
          <div className="w-full h-4 bg-gray-900 border border-gray-700 rounded overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-500 ease-out"
              style={{ width: `${playerHealthPct}%` }}
            ></div>
          </div>
          <p className="text-xs mt-1 font-bold">{character.endurance} / {character.maxEndurance} PE</p>
        </div>

        {/* Center / Dice */}
        <div className="w-1/3 flex flex-col items-center justify-center pb-8">
          <div className="text-4xl font-bold text-red-600 mb-6" style={{ fontFamily: 'Cinzel, serif' }}>VS</div>
          
          <div className={`w-24 h-24 bg-gray-800 border-4 border-[#d4af37] rounded-xl flex items-center justify-center shadow-2xl mb-4 ${diceRolling ? 'animate-shake' : ''}`}>
            <span className="text-5xl font-bold text-white drop-shadow-md" style={{ fontFamily: 'Cinzel, serif' }}>{currentFace}</span>
          </div>

          {!combatVictory && (
            <button 
              onClick={handleRoll}
              disabled={diceRolling}
              className={`primary-btn px-8 py-3 text-lg ${diceRolling ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} transition-transform`}
            >
              {diceRolling ? 'Tirage...' : 'Assaut'}
            </button>
          )}

          {combatVictory && (
            <div className="text-green-500 font-bold text-xl mt-4 animate-pulse">Victoire !</div>
          )}
        </div>

        {/* Enemy Side */}
        <div className="w-1/3 flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded border-2 border-red-700 overflow-hidden mb-4 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              <img src={`/images/enemies/${enemySprite}`} alt={enemy.name} className="w-full h-full object-cover rendering-pixelated" style={{ imageRendering: 'pixelated' }} />
            </div>
            {showDamage && latestRound && latestRound.enemyDamage > 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-red-500 drop-shadow-md animate-float-up">
                {latestRound.enemyDamage >= 100 ? 'MORT' : `-${latestRound.enemyDamage}`}
              </div>
            )}
             {showDamage && latestRound && latestRound.enemyDamage === 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 drop-shadow-md animate-float-up">
                Esquive
              </div>
            )}
          </div>
          <h4 className="font-bold text-red-500 text-xl" style={{ fontFamily: 'Cinzel, serif' }}>{enemy.name}</h4>
          <p className="text-sm text-gray-400 mb-2">Habileté: {enemy.combatSkill}</p>

          <div className="w-full h-4 bg-gray-900 border border-gray-700 rounded overflow-hidden">
            <div 
              className="h-full bg-red-600 transition-all duration-500 ease-out"
              style={{ width: `${enemyHealthPct}%` }}
            ></div>
          </div>
          <p className="text-xs mt-1 font-bold text-red-400">{enemyCurrentEndurance} PE</p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        .animate-shake {
          animation: shake 0.2s infinite;
        }
        @keyframes floatUp {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -150%) scale(1.5); }
        }
        .animate-float-up {
          animation: floatUp 1.5s ease-out forwards;
        }
      `}} />
    </div>
  );
}
