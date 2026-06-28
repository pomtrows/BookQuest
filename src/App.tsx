import { useState } from 'react';
import { CharacterCreation } from './components/CharacterCreation';
import { StoryViewer } from './components/StoryViewer';
import { Inventory } from './components/Inventory';
import { useGameStore } from './store/gameStore';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from './hooks/useAudio';
import { Rules } from './components/Rules';
import { Notifications } from './components/Notifications';

type AppState = 'MENU' | 'CREATION' | 'GAME' | 'RULES';

function App() {
  const [appState, setAppState] = useState<AppState>('MENU');
  const [showInventory, setShowInventory] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const { character } = useGameStore();
  const { playAudio, isMuted, toggleMute } = useAudio(appState);

  // Helper to ensure audio starts on user interaction
  const handleStateChange = (newState: AppState) => {
    playAudio();
    setAppState(newState);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e4d5b7] font-sans" onClick={playAudio}>
      <Notifications />
      
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
          
          <button 
            onClick={(e) => { e.stopPropagation(); toggleMute(); }} 
            className="z-50 text-gray-300 hover:text-[#d4af37] bg-black/50 p-3 rounded-full transition-all border border-gray-600 hover:border-[#d4af37]"
            style={{ position: 'absolute', top: '20px', right: '20px' }}
            title={isMuted ? "Activer le son" : "Couper le son"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          
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
          <div className="flex items-center bg-[#1e1e1e] p-4 border-b border-[#333333] shadow-md z-10 relative">
            <div className="relative z-50">
              <button 
                onClick={() => setShowDropdownMenu(!showDropdownMenu)} 
                className="text-[#d4af37] hover:text-white hover:bg-black/30 p-2 rounded transition-all flex items-center justify-center border border-transparent hover:border-[#d4af37]/30"
              >
                <Menu size={24} />
              </button>
              
              {showDropdownMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowDropdownMenu(false)}></div>
                  <div className="absolute top-12 left-0 bg-[#1e1e1e] border border-[#333333] rounded-md shadow-2xl py-2 w-56 z-50 animate-fade-in">
                    <button 
                      onClick={() => { setShowInventory(true); setShowDropdownMenu(false); }} 
                      className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-[#333] hover:text-[#d4af37] transition-colors border-b border-gray-800"
                    >
                      Feuille d'Aventure
                    </button>
                    <button 
                      onClick={() => { handleStateChange('MENU'); setShowDropdownMenu(false); }} 
                      className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-[#333] hover:text-[#d4af37] transition-colors border-b border-gray-800"
                    >
                      Menu Principal
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleMute(); setShowDropdownMenu(false); }} 
                      className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-[#333] hover:text-[#d4af37] transition-colors flex items-center gap-3"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />} 
                      {isMuted ? "Activer le son" : "Couper le son"}
                    </button>
                  </div>
                </>
              )}
            </div>
            
            <h1 className="text-2xl font-bold text-[#d4af37] absolute left-1/2 -translate-x-1/2" style={{ fontFamily: 'Cinzel, serif' }}>
              Book Quest
            </h1>
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
        <Rules onBack={() => handleStateChange('MENU')} />
      )}
    </div>
  );
}

export default App;
