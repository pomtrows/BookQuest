import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useGameStore } from '../store/gameStore';
import { X, Cloud, Save, Download, LogOut, Loader2, RefreshCw } from 'lucide-react';

interface CloudSaveModalProps {
  onClose: () => void;
}

export const CloudSaveModal: React.FC<CloudSaveModalProps> = ({ onClose }) => {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage({ text: "Erreur de connexion. Vérifiez vos identifiants.", type: 'error' });
    setAuthLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage({ text: "Erreur lors de l'inscription. Le mot de passe doit faire au moins 6 caractères.", type: 'error' });
    } else {
      setMessage({ text: "Inscription réussie ! Vous êtes connecté.", type: 'success' });
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMessage({ text: "Déconnecté.", type: 'info' });
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
      addNotification(`Sauvegarde Cloud #${slotIndex + 1} chargée.`, 'success');
      onClose(); // Close modal on successful load
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[200] p-4 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-[#d4af37]/30 rounded-xl max-w-md w-full shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-[#333] flex justify-between items-center bg-[#121212] relative">
          <div className="flex items-center gap-2">
            <Cloud className="text-[#d4af37]" size={20} />
            <h2 className="text-xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif' }}>
              Sauvegardes Cloud
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 p-1.5 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {message && (
            <div className={`p-3 rounded mb-6 text-sm border ${
              message.type === 'success' ? 'bg-green-900/30 border-green-500/50 text-green-300' :
              message.type === 'error' ? 'bg-red-900/30 border-red-500/50 text-red-300' :
              'bg-blue-900/30 border-blue-500/50 text-blue-300'
            }`}>
              {message.text}
            </div>
          )}

          {loading && !session && (
            <div className="flex justify-center p-8">
              <Loader2 className="animate-spin text-[#d4af37]" size={32} />
            </div>
          )}

          {!session && !loading && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-4">
                Connectez-vous pour sauvegarder ou charger votre progression en ligne.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#121212] border border-[#333] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Mot de passe</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#121212] border border-[#333] rounded px-3 py-2 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={handleLogin}
                    disabled={authLoading}
                    className="flex-1 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/50 py-2 rounded font-medium transition-all flex justify-center items-center h-10"
                  >
                    {authLoading ? <Loader2 size={16} className="animate-spin" /> : "Se connecter"}
                  </button>
                  <button 
                    onClick={handleSignup}
                    disabled={authLoading}
                    className="flex-1 bg-[#222] hover:bg-[#333] text-gray-300 border border-[#444] py-2 rounded font-medium transition-all flex justify-center items-center h-10"
                  >
                    S'inscrire
                  </button>
                </div>
              </form>
            </div>
          )}

          {session && (
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-[#121212] p-3 rounded border border-[#333]">
                <div className="text-sm truncate pr-2 text-gray-400">
                  Connecté : <span className="text-white">{session.user.email}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-red-400 p-1"
                  title="Se déconnecter"
                >
                  <LogOut size={18} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm uppercase tracking-wider text-[#d4af37] font-semibold">Emplacements</h3>
                  {loading && <RefreshCw size={14} className="animate-spin text-gray-500" />}
                </div>
                
                {saves.map((save, index) => (
                  <div key={index} className="flex justify-between items-center bg-[#1e1e1e] border border-[#333] p-3 rounded hover:border-[#444] transition-colors">
                    <div className="flex-1">
                      <div className="font-medium text-gray-200">Slot {index + 1}</div>
                      <div className="text-xs text-gray-500">
                        {save ? new Date(save.updated_at).toLocaleString('fr-FR') : 'Vide'}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => saveToSlot(index)}
                        disabled={loading}
                        className="p-2 bg-[#121212] border border-[#333] hover:border-[#d4af37] hover:text-[#d4af37] rounded transition-colors text-gray-400"
                        title="Sauvegarder la partie courante ici"
                      >
                        <Save size={16} />
                      </button>
                      <button 
                        onClick={() => loadFromSlot(index)}
                        disabled={loading || !save}
                        className={`p-2 bg-[#121212] border border-[#333] rounded transition-colors ${save ? 'hover:border-blue-400 hover:text-blue-400 text-gray-400' : 'opacity-30 cursor-not-allowed text-gray-600'}`}
                        title="Charger cette partie"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
