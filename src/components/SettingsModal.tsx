import { X } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

interface SettingsModalProps {
  onClose: () => void;
}

export function SettingsModal({ onClose }: SettingsModalProps) {
  const { settings: rawSettings, updateSettings } = useGameStore();
  const settings = rawSettings || { fontSize: 'large', allowCombatRestart: false, allowGoBack: false };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4" 
      style={{ zIndex: 999999, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
    >
      <div className="book-panel w-full max-w-lg p-8 relative flex flex-col items-center">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={32} />
        </button>

        <h2 className="text-3xl font-bold text-[#d4af37] mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
          Paramètres
        </h2>

        <div className="w-full space-y-6">
          <div className="p-4 border border-gray-700 rounded bg-black/50">
            <h3 className="text-xl text-white mb-2">Taille du texte</h3>
            <div className="flex gap-2">
              {['small', 'medium', 'large', 'xlarge'].map(size => (
                <button 
                  key={size}
                  onClick={() => updateSettings({ fontSize: size as any })}
                  className={`px-4 py-2 border rounded ${settings.fontSize === size ? 'border-yellow-500 text-yellow-500' : 'border-gray-500 text-white'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border border-gray-700 rounded bg-black/50">
            <h3 className="text-xl text-white mb-2">Relancer le combat</h3>
            <div className="flex gap-2">
              <button onClick={() => updateSettings({ allowCombatRestart: true })} className={`px-4 py-2 border rounded ${settings.allowCombatRestart ? 'border-green-500 text-green-500' : 'border-gray-500 text-white'}`}>OUI</button>
              <button onClick={() => updateSettings({ allowCombatRestart: false })} className={`px-4 py-2 border rounded ${!settings.allowCombatRestart ? 'border-red-500 text-red-500' : 'border-gray-500 text-white'}`}>NON</button>
            </div>
          </div>

          <div className="p-4 border border-gray-700 rounded bg-black/50">
            <h3 className="text-xl text-white mb-2">Revenir en arrière</h3>
            <div className="flex gap-2">
              <button onClick={() => updateSettings({ allowGoBack: true })} className={`px-4 py-2 border rounded ${settings.allowGoBack ? 'border-green-500 text-green-500' : 'border-gray-500 text-white'}`}>OUI</button>
              <button onClick={() => updateSettings({ allowGoBack: false })} className={`px-4 py-2 border rounded ${!settings.allowGoBack ? 'border-red-500 text-red-500' : 'border-gray-500 text-white'}`}>NON</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
