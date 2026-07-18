import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useGameStore } from '../store/gameStore';
import { ArrowLeft, Cloud, Save, Download, LogOut, Loader2, RefreshCw } from 'lucide-react';

interface CloudSaveScreenProps {
  onBack: () => void;
  onLoadComplete?: () => void;
}

export const CloudSaveScreen: React.FC<CloudSaveScreenProps> = ({ onBack, onLoadComplete }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  
  const [saves, setSaves] = useState<any[]>(Array(5).fill(null));
  
  const { addNotification } = useGameStore.getState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) fetchSaves(session.user.id);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchSaves(session.user.id);
      } else {
        setSaves(Array(5).fill(null));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchSaves = async (userId: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('game_saves')
      .select('slot_index, updated_at')
      .eq('user_id', userId)
      .order('slot_index', { ascending: true });

    if (error) {
      console.error('Error fetching saves:', error);
      setMessage({ text: "Erreur lors de la récupération des sauvegardes.", type: 'error' });
    } else {
      const newSaves = Array(5).fill(null);
      data?.forEach((save) => {
        newSaves[save.slot_index - 1] = save;
      });
      setSaves(newSaves);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const saveToSlot = async (slotIndex: number) => {
    if (!session) return;
    setLoading(true);
    
    // Get full zustand state minus functions
    const state = useGameStore.getState();
    const stateToSave = JSON.parse(JSON.stringify(state)); // Remove functions/proxies

    const { error } = await supabase.from('game_saves').upsert(
      {
        user_id: session.user.id,
        slot_index: slotIndex + 1,
        state: stateToSave,
        updated_at: new Date().toISOString()
      },
      { onConflict: 'user_id, slot_index' }
    );

    if (error) {
      console.error('Error saving:', error);
      setMessage({ text: "Erreur lors de la sauvegarde.", type: 'error' });
    } else {
      setMessage({ text: `Partie sauvegardée sur l'emplacement ${slotIndex + 1}.`, type: 'success' });
      addNotification(`Sauvegarde Cloud #${slotIndex + 1} réussie.`, 'success');
      await fetchSaves(session.user.id);
    }
    setLoading(false);
  };

  const loadFromSlot = async (slotIndex: number) => {
    if (!session) return;
    setLoading(true);
    
    const { data, error } = await supabase
      .from('game_saves')
      .select('state')
      .eq('user_id', session.user.id)
      .eq('slot_index', slotIndex + 1)
      .single();

    if (error || !data) {
      console.error('Error loading:', error);
      setMessage({ text: "Erreur lors du chargement.", type: 'error' });
    } else {
      // Replace state
      useGameStore.setState(data.state);
      
      setMessage({ text: `Partie chargée depuis l'emplacement ${slotIndex + 1}.`, type: 'success' });
      setTimeout(() => {
        setMessage(null);
        if (onLoadComplete) {
          onLoadComplete();
        }
      }, 1500);
      addNotification(`Sauvegarde Cloud #${slotIndex + 1} chargée.`, 'success');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center p-4 md:p-8"
      style={{
        backgroundImage: "url('/images/title_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1 }}></div>
      
      <div className="relative w-full max-w-4xl flex flex-col flex-1 h-full pt-2 md:pt-0" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-[#d4af37]/30 pb-4">
          <div className="flex items-center gap-4">
            <Cloud size={32} className="text-[#d4af37]" />
            <h1 className="text-3xl md:text-5xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 0 10px rgba(212,175,55,0.3)', marginLeft: '24px' }}>
              Sauvegardes Cloud
            </h1>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 hover:bg-[#d4af37]/20 border rounded transition-all"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: '#d4af37', color: '#d4af37' }}
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Retour</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 overflow-y-auto custom-scrollbar p-6 rounded-lg shadow-2xl border"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            borderColor: 'rgba(212, 175, 55, 0.3)'
          }}
        >
          {message && (
            <div className={`p-4 rounded mb-6 text-lg border ${
              message.type === 'success' ? 'bg-green-900/30 border-green-500/50 text-green-300' :
              message.type === 'error' ? 'bg-red-900/30 border-red-500/50 text-red-300' :
              'bg-blue-900/30 border-blue-500/50 text-blue-300'
            }`}>
              {message.text}
            </div>
          )}

          {loading && !session && (
            <div className="flex justify-center p-12">
              <Loader2 className="animate-spin text-[#d4af37]" size={48} />
            </div>
          )}

          {session && (
            <div className="space-y-8">
              <div className="flex justify-between items-center bg-[#121212] p-4 rounded-lg border border-[#333]">
                <div className="text-lg text-gray-400">
                  Connecté en tant que : <span className="text-white font-semibold">{session.user.email}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-500 hover:text-red-400 p-2 transition-colors"
                  title="Se déconnecter"
                >
                  <LogOut size={20} />
                  <span>Déconnexion</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                  <h3 className="text-xl uppercase tracking-wider text-[#d4af37] font-semibold">Vos emplacements</h3>
                  {loading && <RefreshCw size={20} className="animate-spin text-gray-500" />}
                </div>
                
                {saves.map((save, index) => (
                  <div key={index} className="flex justify-between items-center bg-[#1e1e1e] border border-[#333] p-5 rounded-lg hover:border-[#555] transition-colors shadow-inner">
                    <div className="flex-1">
                      <div className="font-bold text-xl text-gray-200 mb-1">Emplacement {index + 1}</div>
                      <div className="text-sm text-gray-500">
                        {save ? `Dernière sauvegarde : ${new Date(save.updated_at).toLocaleString('fr-FR')}` : 'Vide'}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      {/* Note: we omit the save button if we are just loading, but for completeness we keep both */}
                      <button 
                        onClick={() => saveToSlot(index)}
                        disabled={loading}
                        className="p-3 bg-[#222] border border-[#555] hover:border-[#d4af37] transition-colors rounded-lg flex items-center gap-2"
                        style={{ color: '#d4af37' }}
                        title="Écraser cette sauvegarde avec la partie courante"
                      >
                        <Save size={20} />
                        <span className="hidden sm:inline font-semibold">Sauvegarder</span>
                      </button>
                      <button 
                        onClick={() => loadFromSlot(index)}
                        disabled={loading || !save}
                        className={`p-3 bg-[#222] border border-[#555] transition-colors rounded-lg flex items-center gap-2 ${save ? 'hover:border-blue-400' : 'opacity-30 cursor-not-allowed'}`}
                        style={{ color: save ? '#3b82f6' : '#555555' }}
                        title="Charger cette partie"
                      >
                        <Download size={20} />
                        <span className="hidden sm:inline font-semibold">Charger</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.5);
        }
      `}} />
    </div>
  );
};
