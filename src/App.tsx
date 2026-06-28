import { useState } from 'react';
import { CharacterCreation } from './components/CharacterCreation';
import { StoryViewer } from './components/StoryViewer';
import { Inventory } from './components/Inventory';
import { useGameStore } from './store/gameStore';
import { Menu, X, Volume2, VolumeX, Home, BookOpen, ScrollText } from 'lucide-react';
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl" style={{ fontFamily: 'Cinzel, serif', color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)', transform: 'translateY(-180px)', display: 'block' }}>Book Quest</h1>
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
              className="choice-btn text-center text-xl transition-all"
              style={{ backgroundColor: '#121212', borderColor: '#d4af37', color: '#d4af37', opacity: 0.95, textAlign: 'center' }}
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
              <div 
                onClick={() => setShowDropdownMenu(!showDropdownMenu)} 
                className="text-[#d4af37] hover:text-white hover:bg-black/30 p-2 rounded transition-all flex items-center justify-center border border-transparent hover:border-[#d4af37]/30 cursor-pointer"
                role="button"
              >
                <Menu size={24} />
              </div>
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
              <div className="p-4 border-b border-[#333333] flex justify-end items-center sticky top-0 bg-[#1e1e1e] z-10 relative">
                 <h2 className="text-xl font-bold text-[#d4af37] absolute left-1/2 -translate-x-1/2" style={{ fontFamily: 'Cinzel, serif' }}>Feuille d'Aventure</h2>
                 <div 
                   onClick={() => setShowInventory(false)} 
                   className="text-[#d4af37] hover:text-white hover:bg-white/10 p-1.5 rounded transition-colors cursor-pointer relative z-10"
                   role="button"
                 >
                   <X size={24} strokeWidth={2} />
                 </div>
              </div>
              <Inventory />
            </div>
          )}

          {showDropdownMenu && (
            <>
              <div 
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in" 
                onClick={() => setShowDropdownMenu(false)}
              ></div>
              <div className="fixed top-0 left-0 bottom-0 w-72 bg-[#0a0a0c] border-r border-gray-800 shadow-[10px_0_30px_rgba(0,0,0,0.9)] z-[110] flex flex-col animate-slide-in-left">
                
                {/* Header */}
                <div className="flex items-center justify-center h-20 px-6 border-b border-gray-800/60 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent pointer-events-none"></div>
                  <h2 className="text-2xl font-bold text-[#d4af37] tracking-wider drop-shadow-md relative z-10" style={{ fontFamily: 'Cinzel, serif' }}>
                    Book Quest
                  </h2>
                </div>
                
                {/* Main Menu Items */}
                <div className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                  <button 
                    onClick={() => { setShowInventory(true); setShowDropdownMenu(false); }} 
                    className="sidebar-btn group"
                  >
                    <ScrollText size={22} className="group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="font-medium text-[15px] tracking-wide">Feuille d'Aventure</span>
                  </button>
                  
                  <button 
                    onClick={() => { handleStateChange('RULES'); setShowDropdownMenu(false); }} 
                    className="sidebar-btn group"
                  >
                    <BookOpen size={22} className="group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="font-medium text-[15px] tracking-wide">Règles du jeu</span>
                  </button>
                  
                  <button 
                    onClick={() => { handleStateChange('MENU'); setShowDropdownMenu(false); }} 
                    className="sidebar-btn group"
                  >
                    <Home size={22} className="group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="font-medium text-[15px] tracking-wide">Menu Principal</span>
                  </button>
                </div>

                {/* Bottom Settings */}
                <div className="p-4 border-t border-gray-800/60 bg-[#0d0d10] mt-auto">
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleMute(); }} 
                    className="sidebar-btn group rounded-xl border-l-0 hover:border-l-0 hover:bg-white/5"
                    style={{ borderRadius: '0.75rem' }}
                  >
                    {isMuted ? <VolumeX size={20} strokeWidth={1.5} /> : <Volume2 size={20} strokeWidth={1.5} />} 
                    <span className="font-medium text-[15px] tracking-wide">{isMuted ? "Activer le son" : "Couper le son"}</span>
                  </button>
                </div>
              </div>
            </>
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
