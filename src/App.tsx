import { useState } from 'react';
import { CharacterCreation } from './components/CharacterCreation';
import { StoryViewer } from './components/StoryViewer';
import { Inventory } from './components/Inventory';
import { useGameStore } from './store/gameStore';
import { Menu, X } from 'lucide-react';
import { useAudio } from './hooks/useAudio';

type AppState = 'MENU' | 'CREATION' | 'GAME' | 'RULES';

function App() {
  const [appState, setAppState] = useState<AppState>('MENU');
  const [showInventory, setShowInventory] = useState(false);
  const { character } = useGameStore();
  const { playAudio } = useAudio(appState);

  // Helper to ensure audio starts on user interaction
  const handleStateChange = (newState: AppState) => {
    playAudio();
    setAppState(newState);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e4d5b7] font-sans" onClick={playAudio}>
      {appState === 'MENU' && (
        <div 
          className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          style={{
            backgroundImage: "url('/images/title_bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay gradient to darken the background and make text readable */}
          <div className="absolute inset-0 bg-black bg-opacity-60 bg-gradient-to-t from-black via-transparent to-black"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl" style={{ fontFamily: 'Cinzel, serif', color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}>Book Quest</h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 drop-shadow-xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Loup Solitaire: Les Maîtres des Ténèbres</h2>
          </div>

          <div className="relative z-10 flex flex-col gap-4 w-full max-w-md backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-[#d4af37]/30 shadow-2xl">
            <button 
              onClick={() => handleStateChange('CREATION')}
              className="primary-btn text-xl py-3 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              Nouvelle Partie
            </button>
            {character && (
              <button 
                onClick={() => handleStateChange('GAME')}
                className="primary-btn text-xl py-3 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                style={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', color: '#d4af37', borderColor: '#d4af37' }}
              >
                Continuer l'Aventure
              </button>
            )}
            <button 
              onClick={() => handleStateChange('RULES')}
              className="choice-btn text-center text-xl bg-black/50"
            >
              Règles du Jeu
            </button>
          </div>
        </div>
      )}

      {appState === 'CREATION' && (
        <CharacterCreation onComplete={() => handleStateChange('GAME')} onCancel={() => handleStateChange('MENU')} />
      )}

      {appState === 'GAME' && (
        <div className="flex flex-col h-screen relative">
          <div className="flex justify-between items-center bg-[#1e1e1e] p-4 border-b border-[#333333] shadow-md z-10">
            <h1 className="text-xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>Book Quest</h1>
            <div className="flex gap-3 items-center">
              <button onClick={() => handleStateChange('MENU')} className="choice-btn !mt-0 !py-1 !px-3 text-sm">Menu</button>
              <button onClick={() => setShowInventory(!showInventory)} className="primary-btn !py-1 !px-3 text-sm flex items-center gap-2">
                <Menu size={16} /> Feuille d'Aventure
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <StoryViewer />
          </div>

          {showInventory && (
            <div className="absolute top-0 right-0 w-full md:w-96 h-full bg-[#1e1e1e] border-l border-[#333333] overflow-y-auto z-50 shadow-2xl flex flex-col">
              <div className="p-4 border-b border-[#333333] flex justify-between items-center sticky top-0 bg-[#1e1e1e] z-10">
                 <h2 className="text-xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>Feuille d'Aventure</h2>
                 <button onClick={() => setShowInventory(false)} className="text-gray-400 hover:text-white bg-[#333] hover:bg-[#444] p-1 rounded">
                   <X size={20} />
                 </button>
              </div>
              <Inventory />
            </div>
          )}
        </div>
      )}

      {appState === 'RULES' && (
        <div className="p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl mb-6">Règles du Jeu</h1>
          <p className="mb-4">Au cours de l'initiation qui vous a permis de devenir un Seigneur Kaï, vous avez acquis une force exceptionnelle ; les deux éléments essentiels de cette force sont représentés par votre HABILETÉ AU COMBAT et VOTRE ENDURANCE.</p>
          <p className="mb-4">Pour générer vos statistiques, l'application utilise une "Table de Hasard" (un nombre aléatoire de 0 à 9). Votre Habileté est de 10 + le nombre aléatoire. Votre Endurance est de 20 + le nombre aléatoire.</p>
          <button onClick={() => setAppState('MENU')} className="primary-btn mt-8">Retour au Menu</button>
        </div>
      )}
    </div>
  );
}

export default App;
