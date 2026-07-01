import { ArrowLeft, Compass, MapPin } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { storyData } from '../data/story';

interface MapScreenProps {
  onBack: () => void;
}

// Coordinates in percentage (%) relative to the map container (x: left, y: top)
const REGION_COORDINATES: Record<string, { x: number; y: number; label: string; description: string }> = {
  prologue: { x: 18, y: 22, label: 'Monastère Kaï', description: 'Le berceau détruit des Seigneurs Kaï' },
  forest: { x: 44, y: 46, label: 'Grande Forêt', description: 'Une forêt dense et hostile infestée de Gloks' },
  river: { x: 28, y: 72, label: 'Rivière Henn', description: 'Un cours d\'eau tumultueux et sinueux' },
  mountains: { x: 74, y: 26, label: 'Monts Durncrag', description: 'Chaîne de montagnes rocheuse et dangereuse' },
  road: { x: 62, y: 56, label: 'Plaines & Routes', description: 'Les chemins menant vers le sud' },
  city: { x: 84, y: 80, label: 'Holmgard', description: 'La capitale fortifiée du Sommerlund' },
};

export function MapScreen({ onBack }: MapScreenProps) {
  const { currentSectionId, history } = useGameStore();

  // Helper to get location key for a section ID
  const getLocationKey = (id: string): string => {
    if (id === 'prologue') return 'prologue';
    const section = storyData[id];
    return section?.location || 'road';
  };

  const currentLocKey = getLocationKey(currentSectionId);
  const currentCoords = REGION_COORDINATES[currentLocKey] || REGION_COORDINATES.road;

  // Build the list of coordinates visited, removing consecutive duplicates
  const visitedKeys: string[] = [];
  [...history, currentSectionId].forEach((id) => {
    const key = getLocationKey(id);
    if (visitedKeys.length === 0 || visitedKeys[visitedKeys.length - 1] !== key) {
      visitedKeys.push(key);
    }
  });

  return (
    <div 
      className="min-h-screen bg-[#121212] flex flex-col items-center p-4 md:p-8"
      style={{
        backgroundImage: "url('/images/title_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1 }}></div>

      <div className="relative w-full max-w-5xl flex flex-col flex-1 h-full pt-2 md:pt-0" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-[#d4af37]/30 pb-3">
          <div className="flex items-center gap-4">
            <Compass size={32} className="text-[#d4af37] animate-spin-slow" />
            <h1 className="text-3xl md:text-5xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 0 10px rgba(212,175,55,0.3)', marginLeft: '12px' }}>
              Carte du Sommerlund
            </h1>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 hover:bg-[#d4af37]/20 border rounded transition-all cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: '#d4af37', color: '#d4af37' }}
          >
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>
        </div>

        {/* Map Container */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* Map Viewer Panel */}
          <div className="flex-1 bg-black/60 border border-[#d4af37]/40 rounded-xl p-4 flex items-center justify-center min-h-[350px]">
            <div 
              className="relative w-full max-w-[600px] aspect-square mx-auto rounded-lg border border-[#d4af37]/20"
              style={{ 
                position: 'relative', 
                aspectRatio: '1/1',
                backgroundImage: 'url(/images/map.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >

              {/* SVG Overlay for Path drawing */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Draw path lines between consecutive visited locations */}
                {visitedKeys.length > 1 && visitedKeys.map((key, index) => {
                  if (index === 0) return null;
                  const start = REGION_COORDINATES[visitedKeys[index - 1]];
                  const end = REGION_COORDINATES[key];
                  if (!start || !end) return null;
                  return (
                    <line
                      key={`path-${index}`}
                      x1={start.x}
                      y1={start.y}
                      x2={end.x}
                      y2={end.y}
                      stroke="#ef4444"
                      strokeWidth="0.6"
                      strokeDasharray="1.5 1.5"
                      className="opacity-90"
                    />
                  );
                })}
              </svg>

              {/* Region Markers */}
              {Object.entries(REGION_COORDINATES).map(([key, coords]) => {
                const isCurrent = key === currentLocKey;
                const isVisited = visitedKeys.includes(key);

                return (
                  <div
                    key={key}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
                  >
                    {/* Pulsing glow for current location */}
                    {isCurrent && (
                      <div className="absolute inset-0 w-10 h-10 -left-2.5 -top-2.5 rounded-full bg-blue-500 animate-ping opacity-75 z-20"></div>
                    )}
                    
                    {/* Marker pin */}
                    <div 
                      className={`w-5 h-5 rounded-full border-2 shadow-lg flex items-center justify-center transition-all cursor-help relative ${
                        isCurrent 
                          ? 'bg-blue-500 border-white scale-150 z-30 animate-pulse' 
                          : isVisited 
                            ? 'bg-[#d4af37] border-black scale-105 z-20' 
                            : 'bg-neutral-800 border-neutral-600 opacity-40 scale-90 hover:opacity-100'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-white' : 'bg-black'}`} />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/95 border border-[#d4af37] px-3 py-1.5 rounded text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none shadow-2xl">
                      <p className="text-[#d4af37] font-bold text-xs leading-none">{coords.label}</p>
                      <p className="text-[10px] text-[#e4d5b7]/70 mt-1 max-w-[150px] text-wrap">{coords.description}</p>
                      {isCurrent && <p className="text-[9px] text-red-400 font-semibold mt-1">Vous êtes ici</p>}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Location Details Sidebar */}
          <div className="w-full lg:w-80 bg-black/70 border border-[#d4af37]/30 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[#d4af37] text-2xl font-bold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                Position Actuelle
              </h2>
              
              <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-4 rounded-lg mb-6">
                <p className="text-lg font-bold text-[#d4af37]">{currentCoords.label}</p>
                <p className="text-sm text-[#e4d5b7]/80 mt-1">{currentCoords.description}</p>
              </div>

              <h3 className="text-[#d4af37] font-bold text-lg mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                Votre Itinéraire
              </h3>
              
              <div className="flex flex-col gap-2 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
                {visitedKeys.map((key, index) => {
                  const region = REGION_COORDINATES[key];
                  const isCurrent = key === currentLocKey;
                  if (!region) return null;
                  return (
                    <div key={`${key}-${index}`} className="flex items-center gap-3 text-sm">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${isCurrent ? 'bg-blue-500 animate-pulse' : 'bg-[#d4af37]'}`} />
                        {index < visitedKeys.length - 1 && <div className="w-0.5 h-6 bg-[#d4af37]/30" />}
                      </div>
                      <span className={isCurrent ? 'text-blue-400 font-semibold' : 'text-[#e4d5b7]/70'}>
                        {region.label} {isCurrent && '(Actuel)'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-[#e4d5b7]/50 text-center">
              Le tracé de votre voyage s'actualise au fur et à mesure de vos choix.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
