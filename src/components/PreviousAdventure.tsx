import { useGameStore } from '../store/gameStore';

interface PreviousAdventureProps {
  onClose: () => void;
}

export function PreviousAdventure({ onClose }: PreviousAdventureProps) {
  const { previousAdventurePath } = useGameStore();

  return (
    <div className="min-h-screen bg-[#121212] text-[#e4d5b7] p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-[#1a1a1a] border border-[#d4af37]/30 rounded-xl p-6 md:p-10 shadow-2xl">
        <div className="flex justify-between items-center mb-8 border-b border-[#333333] pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
            Historique de l'Ancienne Aventure
          </h1>
        </div>
        
        <div className="prose prose-invert max-w-none text-center">
          <p className="text-gray-300 text-xl mb-8">
            Voici le chemin emprunté lors de votre précédente épopée dans le Sommerlund :
          </p>
          
          <div className="bg-black/60 p-6 rounded-lg border border-[#444] shadow-inner max-h-[50vh] overflow-y-auto custom-scrollbar">
            <p className="text-2xl leading-loose text-center break-words text-[#d4af37] font-semibold tracking-wide">
              {previousAdventurePath && previousAdventurePath.length > 0 
                ? previousAdventurePath.map((id: string) => (id === 'prologue' ? 'P' : id)).join(' → ')
                : 'Aucun historique disponible.'}
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={onClose}
            className="primary-btn px-10 py-3 text-xl"
          >
            Retour au Menu Principal
          </button>
        </div>
      </div>
    </div>
  );
}
