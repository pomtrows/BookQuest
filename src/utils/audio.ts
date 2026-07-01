// Utilitaire de synthèse sonore procédurale (Web Audio API)

let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// Vérifie si le jeu est muté via localStorage
const isMuted = () => {
  try {
    const storage = localStorage.getItem('book-quest-storage');
    if (storage) {
      const data = JSON.parse(storage);
      return data?.state?.settings?.isMuted === true;
    }
  } catch (e) {
    console.error(e);
  }
  return false;
};

// Génère un buffer de bruit blanc (pour le son de papier ou d'épée)
const getWhiteNoiseBuffer = (ctx: AudioContext, duration: number) => {
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
};

export const playPageTurn = () => {
  if (isMuted()) return;
  const ctx = initAudio();
  if (!ctx) return;

  const duration = 0.4;
  
  // Oscillateur très bas pour donner de l'épaisseur au frottement
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(40, ctx.currentTime);
  
  // Bruit blanc pour simuler le grain du papier
  const noise = ctx.createBufferSource();
  noise.buffer = getWhiteNoiseBuffer(ctx, duration);
  
  // Filtre passe-bas pour étouffer le son
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + duration);

  // Enveloppe de volume
  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05); // Attaque douce
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

  // Connexions
  osc.connect(gainNode);
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(ctx.currentTime);
  noise.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
};

export const playSwordClash = () => {
  if (isMuted()) return;
  const ctx = initAudio();
  if (!ctx) return;

  const duration = 0.6;
  
  // Création du son d'impact (FM synthesis basique)
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  
  osc1.type = 'square';
  osc2.type = 'sawtooth';
  
  // Fréquences métalliques
  osc1.frequency.setValueAtTime(800, ctx.currentTime);
  osc1.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
  
  osc2.frequency.setValueAtTime(1200, ctx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.2);

  // Bruit d'impact
  const noise = ctx.createBufferSource();
  noise.buffer = getWhiteNoiseBuffer(ctx, 0.1);
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.setValueAtTime(2000, ctx.currentTime);

  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.02); // Impact sec
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

  osc1.connect(gainNode);
  osc2.connect(gainNode);
  noise.connect(noiseFilter);
  noiseFilter.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc1.start(ctx.currentTime);
  osc2.start(ctx.currentTime);
  noise.start(ctx.currentTime);
  
  osc1.stop(ctx.currentTime + duration);
  osc2.stop(ctx.currentTime + duration);
};

export const playDiceRoll = () => {
  if (isMuted()) return;
  const ctx = initAudio();
  if (!ctx) return;

  // Un petit clic très court (10ms)
  const duration = 0.05;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + duration);

  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
};
