import { X, Check } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

interface SettingsModalProps {
  onClose: () => void;
}

export function SettingsModal({ onClose }: SettingsModalProps) {
  const { settings: rawSettings, updateSettings } = useGameStore();
  const settings = rawSettings || { fontSize: 'large', allowCombatRestart: false, allowGoBack: false };

  return (
    <div className="absolute top-0 right-0 w-full md:w-96 h-full bg-[#1e1e1e] border-l border-[#333333] overflow-y-auto z-50 shadow-2xl flex flex-col animate-slide-in-right">
      <div className="p-4 border-b border-[#333333] flex justify-between items-center sticky top-0 bg-[#1e1e1e] z-10">
        <div className="w-8"></div> {/* Spacer */}
        <h2 className="text-xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
          Paramètres
        </h2>
        <div 
          onClick={onClose} 
          className="text-[#d4af37] hover:text-white hover:bg-white/10 p-1.5 rounded transition-colors cursor-pointer w-8 flex items-center justify-center"
          role="button"
        >
          <X size={24} strokeWidth={2} />
        </div>
      </div>

      <div className="flex-1 p-6 space-y-8 overflow-y-auto custom-scrollbar">
        
        {/* Font Size */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold border-b border-[#333333] pb-2 text-gray-300">
            Taille du texte (Récit)
          </h3>
          <div className="grid grid-cols-2 gap-2">
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
          <h3 className="text-lg font-bold border-b border-[#333333] pb-2 text-gray-300">
            Relancer le combat
          </h3>
          <p className="text-sm text-gray-400 mb-2 leading-relaxed">
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
          <h3 className="text-lg font-bold border-b border-[#333333] pb-2 text-gray-300">
            Revenir en arrière
          </h3>
          <p className="text-sm text-gray-400 mb-2 leading-relaxed">
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
  );
}
