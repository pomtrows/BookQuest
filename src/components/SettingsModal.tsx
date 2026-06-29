import { X, Check } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

interface SettingsModalProps {
  onClose: () => void;
}

export function SettingsModal({ onClose }: SettingsModalProps) {
  const { settings, updateSettings } = useGameStore();

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] backdrop-blur-sm p-4">
      <div className="book-panel w-full max-w-lg p-6 relative flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#d4af37] transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-center text-[#d4af37] mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
          Paramètres
        </h2>

        <div className="flex-1 overflow-y-auto space-y-8 pr-2">
          
          {/* Font Size */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-[#333333] pb-2 text-gray-300">
              Taille du texte (Récit)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'small', label: 'Petit', class: 'text-sm' },
                { id: 'medium', label: 'Moyen', class: 'text-base' },
                { id: 'large', label: 'Grand', class: 'text-lg' },
                { id: 'xlarge', label: 'Très Grand', class: 'text-xl' }
              ].map((size) => (
                <button
                  key={size.id}
                  onClick={() => updateSettings({ fontSize: size.id as any })}
                  className={`p-3 border rounded transition-all flex flex-col items-center justify-center gap-2
                    ${settings.fontSize === size.id 
                      ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]' 
                      : 'border-[#333333] hover:border-gray-500 text-gray-400 hover:text-gray-200'}`}
                >
                  <span className={size.class}>Aa</span>
                  <span className="text-xs uppercase tracking-wider">{size.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Combat Restart */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-[#333333] pb-2 text-gray-300">
              Relancer le combat
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Permet de recommencer un combat perdu (restaure vos points de vie d'avant combat).
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => updateSettings({ allowCombatRestart: true })}
                className={`flex-1 py-2 rounded border flex justify-center items-center gap-2 transition-colors
                  ${settings.allowCombatRestart ? 'border-green-500 bg-green-500/10 text-green-400' : 'border-[#333333] text-gray-500 hover:border-gray-500'}`}
              >
                {settings.allowCombatRestart && <Check size={18} />} OUI
              </button>
              <button
                onClick={() => updateSettings({ allowCombatRestart: false })}
                className={`flex-1 py-2 rounded border flex justify-center items-center gap-2 transition-colors
                  ${!settings.allowCombatRestart ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-[#333333] text-gray-500 hover:border-gray-500'}`}
              >
                {!settings.allowCombatRestart && <Check size={18} />} NON
              </button>
            </div>
          </div>

          {/* Go Back */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-[#333333] pb-2 text-gray-300">
              Revenir en arrière
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Affiche un bouton pour annuler votre dernier choix et revenir à la section précédente.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => updateSettings({ allowGoBack: true })}
                className={`flex-1 py-2 rounded border flex justify-center items-center gap-2 transition-colors
                  ${settings.allowGoBack ? 'border-green-500 bg-green-500/10 text-green-400' : 'border-[#333333] text-gray-500 hover:border-gray-500'}`}
              >
                {settings.allowGoBack && <Check size={18} />} OUI
              </button>
              <button
                onClick={() => updateSettings({ allowGoBack: false })}
                className={`flex-1 py-2 rounded border flex justify-center items-center gap-2 transition-colors
                  ${!settings.allowGoBack ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-[#333333] text-gray-500 hover:border-gray-500'}`}
              >
                {!settings.allowGoBack && <Check size={18} />} NON
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
