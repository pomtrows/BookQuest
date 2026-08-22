import { useState, useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';


const HealthBar = ({ current, max }: { current: number, max: number }) => {
  const pct = Math.max(0, (current / max) * 100);

  return (
    <div className="flex items-center w-full my-2 relative">
      <div style={{ width: '28px', height: '28px', flexShrink: 0, zIndex: 10, marginRight: '-6px' }}>
        <svg viewBox="0 0 11 11" style={{ width: '100%', height: '100%', imageRendering: 'pixelated', filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))' }} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 1h2v1h1v1h1V2h2V1h2v3h1v2h-1v2h-1v1h-1v1h-1v1H5v-1H4v-1H3V8H2V6H1V4h1V1z" fill="#000"/>
          <path d="M3 2h1v1h2V2h1v2h1v2h-1v1h-1v1H5V7H4V6H3V4H2V2h1z" fill="#FF0000"/>
          <rect x="3" y="3" width="1" height="1" fill="#FFFFFF"/>
        </svg>
      </div>
      <div className="flex-1 rounded-r-md overflow-hidden relative" style={{ height: '20px', backgroundColor: '#ffffff', border: '2px solid #000000', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
        <div 
          className="transition-all duration-500 ease-out"
          style={{ height: '100%', width: `${pct}%`, backgroundColor: '#dc2626', boxShadow: 'inset 0 -3px 0 rgba(0,0,0,0.2), inset 0 3px 0 rgba(255,255,255,0.3)' }}
        ></div>
      </div>
    </div>
  );
};

const D10Icon = ({ number, rolling }: { number: number | string, rolling: boolean }) => (
  <div className={`relative mb-4 sm:mb-8 flex items-center justify-center ${rolling ? 'animate-dice-tumble' : ''} w-20 h-20 sm:w-32 sm:h-32`} style={rolling ? { transformStyle: 'preserve-3d' } : {}}>
    <svg viewBox="0 0 100 100" className={`absolute inset-0 w-full h-full text-[#d4af37] ${rolling ? '' : 'drop-shadow-2xl'}`} style={!rolling ? { filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' } : {}}>
      <polygon points="50,5 95,40 50,95 5,40" stroke="currentColor" strokeWidth="4" fill="#1e1e1e" />
      <polygon points="50,5 50,95 95,40" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
      <polygon points="50,5 5,40 50,95" stroke="currentColor" strokeWidth="2" fill="rgba(0,0,0,0.2)"/>
      <polygon points="50,5 75,35 50,85 25,35" stroke="currentColor" strokeWidth="3" fill="#2a2a2a" />
    </svg>
    <span className="relative z-10 text-3xl sm:text-5xl font-bold text-white mt-1 sm:mt-2" style={{ fontFamily: 'Cinzel, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
      {number}
    </span>
  </div>
);

export function CombatScreen() {
  const { 
    character, 
    enemyCurrentEndurance, 
    combatRounds, 
    playCombatRound,
    combatVictory,
    settings,
    restartCombat,
    currentEnemies,
    currentEnemyIndex
  } = useGameStore();

  const enemy = currentEnemies && currentEnemies.length > currentEnemyIndex 
    ? currentEnemies[currentEnemyIndex] 
    : null;

  const [diceRolling, setDiceRolling] = useState(false);
  const [currentFace, setCurrentFace] = useState(0);
  const [showDamage, setShowDamage] = useState(false);
  const [playerShake, setPlayerShake] = useState(false);
  const [enemyShake, setEnemyShake] = useState(false);
  
  const lastRoundCount = useRef(combatRounds.length);

  // Floating damage effect when a new round is added
  useEffect(() => {
    if (combatRounds.length > lastRoundCount.current) {
      setShowDamage(true);
      const timer = setTimeout(() => setShowDamage(false), 1500);
      
      const lastRound = combatRounds[combatRounds.length - 1];
      if (lastRound.playerDamage > 0) {
        setPlayerShake(true);
        setTimeout(() => setPlayerShake(false), 300);
      }
      if (lastRound.enemyDamage > 0) {
        setEnemyShake(true);
        setTimeout(() => setEnemyShake(false), 300);
      }
      
      lastRoundCount.current = combatRounds.length;
      return () => clearTimeout(timer);
    }
  }, [combatRounds]);

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
    if (n.includes('drakkarim')) return 'drakkarim.png';
    if (n.includes('garde')) return 'garde.png';
    if (n.includes('gluâtre')) return 'gluatre.png';
    if (n.includes('ours')) return 'ours.png';
    if (n.includes('serpent')) return 'serpent.png';
    if (n.includes('fou')) return 'fou.png';
    if (n.includes('vipère')) return 'vipere.png';
    if (n.includes('voleur')) return 'voleur.png';
    if (n.includes('crypte')) return 'crypte.png';
    return 'generic.png';
  };

  const enemySprite = getEnemySprite(enemy.name);
  
  // Since we don't have enemy max endurance natively stored if it drops, we use the initial endurance as max.
  const enemyMaxEndurance = enemy.endurance;

  const latestRound = combatRounds.length > 0 ? combatRounds[combatRounds.length - 1] : null;
  const isPlayerDead = character.endurance <= 0;

  return (
    <div className="book-panel p-2 sm:p-6 mb-8 relative overflow-hidden bg-[#1a0a0a] border border-red-900 rounded-lg shadow-2xl">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('/images/title_bg.png')", backgroundSize: 'cover' }}></div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-center text-red-500 mb-2 sm:mb-6" style={{ fontFamily: 'Cinzel, serif' }}>COMBAT !</h3>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-1 sm:gap-x-4 gap-y-2 relative z-10 items-start">
        
        {/* ROW 1: Avatars & VS */}
        <div className="flex justify-center items-start">
          <div className="relative">
            <div className={`w-32 h-32 sm:w-48 sm:h-48 rounded border-2 border-[#d4af37] mx-auto overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all ${playerShake ? 'animate-damage-shake' : ''}`}>
              <img src={character.avatar || '/images/avatars/avatar_1.png'} alt="Player" className="w-full h-full object-cover" />
            </div>
            {showDamage && latestRound && latestRound.playerDamage > 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl font-bold text-red-500 drop-shadow-md animate-float-up z-20">
                -{latestRound.playerDamage}
              </div>
            )}
            {showDamage && latestRound && latestRound.playerDamage === 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold text-gray-400 drop-shadow-md animate-float-up z-20">
                Esquive
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-end items-center h-full pb-2">
          <div className="text-xl sm:text-3xl font-bold text-gray-300" style={{ fontFamily: 'Cinzel, serif' }}>VS</div>
        </div>

        <div className="flex justify-center items-start">
          <div className="relative">
            <div className={`w-32 h-32 sm:w-48 sm:h-48 rounded border-2 border-red-700 mx-auto overflow-hidden shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all ${enemyShake ? 'animate-damage-shake' : ''}`}>
              <img src={`/images/enemies/${enemySprite}`} alt={enemy.name} className="w-full h-full object-cover rendering-pixelated" style={{ imageRendering: 'pixelated', backgroundColor: 'white' }} />
            </div>
            {showDamage && latestRound && latestRound.enemyDamage > 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl font-bold text-red-500 drop-shadow-md animate-float-up z-20">
                {latestRound.enemyDamage >= 100 ? 'MORT' : `-${latestRound.enemyDamage}`}
              </div>
            )}
             {showDamage && latestRound && latestRound.enemyDamage === 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold text-gray-400 drop-shadow-md animate-float-up z-20">
                Esquive
              </div>
            )}
          </div>
        </div>

        {/* ROW 2: Stats & Dice */}
        <div className="flex flex-col items-center pt-2">
          <h4 className="font-bold text-[#d4af37] text-sm sm:text-xl text-center leading-tight sm:leading-normal mb-2" style={{ fontFamily: 'Cinzel, serif' }}>{character.name || 'Loup Solitaire'}</h4>
          <p className="text-sm sm:text-base text-gray-300 mb-3">Habileté: {character.combatSkill}</p>
          
          <HealthBar current={character.endurance} max={character.maxEndurance} />
          <p className="text-xs sm:text-sm mt-1 text-gray-300">{character.endurance} / {character.maxEndurance} PE</p>
        </div>

        <div className="flex flex-col items-center justify-start relative -top-4 sm:-top-8">
          <D10Icon number={currentFace} rolling={diceRolling} />

          {isPlayerDead && (
            <div className="text-center mt-2 animate-fade-in flex flex-col items-center justify-center gap-2 w-full relative z-30">
              <div className="text-red-600 font-bold text-xl mb-2" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 0 10px rgba(220, 38, 38, 0.8)' }}>Mort...</div>
              
              {settings?.allowCombatRestart && (
                <button 
                  onClick={restartCombat}
                  className="w-full whitespace-nowrap rounded-md font-bold px-4 py-2 text-sm border-2 border-green-500 hover:bg-green-900 transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                  style={{ backgroundColor: 'rgba(20, 60, 20, 0.8)', color: '#4ade80' }}
                >
                  Relancer
                </button>
              )}

              <button 
                onClick={() => {
                  useGameStore.getState().saveAndResetGame();
                  window.location.reload();
                }}
                className="primary-btn w-full whitespace-nowrap px-4 py-2 text-sm bg-red-900 text-white hover:bg-red-800 border-2 border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              >
                Recommencer
              </button>
            </div>
          )}

          {!combatVictory && !isPlayerDead && (
            <button 
              onClick={handleRoll}
              disabled={diceRolling}
              className={`primary-btn px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg mt-0 ${diceRolling ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} transition-transform relative z-30`}
            >
              {diceRolling ? 'Tirage...' : 'Assaut'}
            </button>
          )}

          {combatVictory && (
            <div className="text-green-500 font-bold text-lg mt-2 animate-pulse relative z-30">Victoire !</div>
          )}
        </div>

        <div className="flex flex-col items-center pt-2">
          <h4 className="font-bold text-[#d4af37] text-sm sm:text-xl text-center leading-tight sm:leading-normal mb-2 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>{enemy.name}</h4>
          <p className="text-sm sm:text-base text-gray-300 mb-3">Habileté: {enemy.combatSkill}</p>

          <HealthBar current={enemyCurrentEndurance} max={enemyMaxEndurance} />
          <p className="text-xs sm:text-sm mt-1 text-gray-300">{enemyCurrentEndurance} PE</p>
        </div>

      </div>

      {combatRounds.length > 0 && (
        <div className="mt-4 border-t border-gray-800 pt-3 relative z-10 animate-fade-in">
          <h4 className="text-[#d4af37] text-lg mb-2 text-center" style={{ fontFamily: 'Cinzel, serif' }}>Historique du Combat</h4>
          <div className="bg-black/50 rounded-lg p-4 max-h-48 overflow-y-auto border border-gray-800 shadow-inner">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="pb-2 px-1 sm:px-2 font-normal">Assaut</th>
                  <th className="pb-2 px-1 sm:px-2 font-normal text-center">Tirage</th>
                  <th className="pb-2 px-1 sm:px-2 font-normal text-center text-red-400 leading-tight">Dégâts<br className="block sm:hidden" /> subis<br className="block sm:hidden" /> (Vous)</th>
                  <th className="pb-2 px-1 sm:px-2 font-normal text-center text-red-600 leading-tight">Dégâts<br className="block sm:hidden" /> subis<br className="block sm:hidden" /> ({enemy.name})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {[...combatRounds].reverse().map((round) => (
                  <tr key={round.round} className="text-gray-300">
                    <td className="py-2 px-1 sm:px-2 text-[#d4af37]">#{round.round}</td>
                    <td className="py-2 px-1 sm:px-2 text-center font-bold text-white text-base sm:text-lg">{round.randomNum}</td>
                    <td className="py-2 px-1 sm:px-2 text-center">
                      {round.playerDamage === 0 ? <span className="text-gray-500">Esquive</span> : <span className="text-red-400 font-bold">-{round.playerDamage}</span>}
                    </td>
                    <td className="py-2 px-1 sm:px-2 text-center">
                      {round.enemyDamage === 0 ? <span className="text-gray-500">Esquive</span> : <span className="text-red-600 font-bold">{round.enemyDamage >= 100 ? 'MORT' : `-${round.enemyDamage}`}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

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
