import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2 } from 'lucide-react';

export const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error("Supabase login error:", error);
      setMessage({ text: `Erreur de connexion : ${error.message}`, type: 'error' });
    }
    setLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Supabase signup error:", error);
      setMessage({ text: `Erreur d'inscription : ${error.message}`, type: 'error' });
    } else {
      setMessage({ text: "Inscription réussie ! Connexion en cours...", type: 'success' });
    }
    setLoading(false);
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4 relative"
      style={{
        backgroundImage: "url('/images/title_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 bg-gradient-to-t from-black via-[#121212]/80 to-black"></div>
      
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl" style={{ fontFamily: 'Cinzel, serif', color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}>
          Loup Solitaire
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 drop-shadow-xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
          Authentification Requise
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-md backdrop-blur-md bg-black/50 p-8 rounded-xl border border-[#d4af37]/30 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
        {message && (
          <div className={`p-4 rounded mb-6 text-sm border ${
            message.type === 'error' ? 'bg-red-900/40 border-red-500/50 text-red-200' : 'bg-green-900/40 border-green-500/50 text-green-200'
          }`}>
            {message.text}
          </div>
        )}

        <form className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#121212]/80 border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-all shadow-inner"
              style={{ color: '#ffffff' }}
              placeholder="votre@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#d4af37] mb-2 font-semibold">Mot de passe</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#121212]/80 border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-all shadow-inner"
              style={{ color: '#ffffff' }}
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button 
              onClick={handleLogin}
              disabled={loading || !email || !password}
              className="primary-btn flex-1 py-3 text-lg flex justify-center items-center"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : "Se Connecter"}
            </button>
            <button 
              onClick={handleSignup}
              disabled={loading || !email || !password}
              className="choice-btn flex-1 py-3 text-center text-lg m-0 mt-0 flex justify-center items-center"
              style={{ marginTop: 0, color: '#ffffff', borderColor: '#444' }}
            >
              Créer un compte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
