import { useState, useEffect } from 'react';
import { Download, X, Info } from 'lucide-react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed / standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    
    if (isStandalone) {
      setShowPrompt(false);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(ios);

    // Show the banner if not standalone
    setShowPrompt(true);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler as EventListener);

    return () => window.removeEventListener('beforeinstallprompt', handler as EventListener);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowPrompt(false);
      }
    } else {
      // Show manual instructions if browser hasn't fired beforeinstallprompt
      setShowInstructions(true);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-96 bg-[#1a1a1a] border border-[#d4af37] p-4 rounded-xl shadow-2xl flex flex-col gap-3 z-[100]">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="bg-[#d4af37]/20 p-2 rounded-lg shrink-0">
            <Download className="text-[#d4af37]" size={24} />
          </div>
          <div>
            <h3 className="text-[#d4af37] font-bold text-lg leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>Installer le Jeu</h3>
            <p className="text-xs text-[#e4d5b7]/80 mt-1">Jouez hors-ligne et profitez des mises à jour automatiques !</p>
          </div>
        </div>
        <button 
          onClick={() => setShowPrompt(false)}
          className="text-[#e4d5b7]/50 hover:text-[#e4d5b7] transition-colors cursor-pointer p-1"
        >
          <X size={20} />
        </button>
      </div>

      {showInstructions ? (
        <div className="bg-[#242424] border border-[#d4af37]/30 p-3 rounded-lg text-xs text-[#e4d5b7]/90 flex gap-2">
          <Info size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
          <div>
            {isIOS ? (
              <p>Sur iOS : Appuyez sur le bouton de <strong>Partage</strong> en bas de Safari, puis faites défiler et sélectionnez <strong>"Sur l'écran d'accueil"</strong>.</p>
            ) : (
              <p>Sur Chrome/Firefox : Appuyez sur les <strong>trois points verticaux</strong> en haut à droite, puis sélectionnez <strong>"Installer l'application"</strong> ou <strong>"Ajouter à l'écran d'accueil"</strong>.</p>
            )}
          </div>
        </div>
      ) : (
        <button 
          onClick={handleInstallClick}
          className="w-full bg-[#d4af37] text-black font-bold py-2 rounded shadow hover:bg-[#b5952f] transition-colors cursor-pointer text-sm"
        >
          Installer maintenant
        </button>
      )}
    </div>
  );
}
