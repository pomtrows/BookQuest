import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler as EventListener);

    return () => window.removeEventListener('beforeinstallprompt', handler as EventListener);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-96 bg-[#1a1a1a] border border-[#d4af37] p-4 rounded-xl shadow-2xl flex flex-col gap-3 z-[100]">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="bg-[#d4af37]/20 p-2 rounded-lg">
            <Download className="text-[#d4af37]" size={24} />
          </div>
          <div>
            <h3 className="text-[#d4af37] font-bold text-lg" style={{ fontFamily: 'Cinzel, serif' }}>Installer le Jeu</h3>
            <p className="text-sm text-[#e4d5b7]/80">Jouez hors-ligne et recevez les mises à jour automatiquement !</p>
          </div>
        </div>
        <button 
          onClick={() => setShowPrompt(false)}
          className="text-[#e4d5b7]/50 hover:text-[#e4d5b7] transition-colors cursor-pointer p-1"
        >
          <X size={20} />
        </button>
      </div>
      <button 
        onClick={handleInstallClick}
        className="w-full bg-[#d4af37] text-black font-bold py-2 rounded shadow hover:bg-[#b5952f] transition-colors mt-2 cursor-pointer"
      >
        Installer maintenant
      </button>
    </div>
  );
}
