import { useEffect, useRef, useState, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';

type AppState = 'MENU' | 'CREATION' | 'GAME' | 'RULES';

export const useAudio = (appState: AppState) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const { isCombatActive, combatVictory, character } = useGameStore();

  // 1. Initialize and cleanup Audio element on mount/unmount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
        audioRef.current = null;
      }
    };
  }, []);

  // 2. Handle source changes based on game state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let newSrc = '';
    let shouldLoop = true;

    if (appState === 'MENU' || appState === 'RULES' || appState === 'CREATION') {
      newSrc = '/audio/title.wav';
    } else if (appState === 'GAME') {
      if (character && character.endurance <= 0) {
        newSrc = '/audio/death.wav';
        shouldLoop = false;
      } else if (combatVictory) {
        newSrc = '/audio/victory.wav';
        shouldLoop = false;
      } else if (isCombatActive) {
        newSrc = '/audio/combat.wav';
      } else {
        newSrc = '/audio/exploration.wav';
      }
    }

    if (!audio.src.endsWith(newSrc)) {
      audio.src = newSrc;
      audio.loop = shouldLoop;
      audio.muted = isMuted; 
      
      if (!isMuted) {
        audio.play().catch(() => {
          // Autoplay policy expected block
        });
      }
    }
  }, [appState, isCombatActive, combatVictory, character?.endurance, isMuted]);

  // 3. Handle muting specifically
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;
    if (isMuted) {
      audio.pause();
    } else {
      if (audio.src) {
        audio.play().catch(() => {});
      }
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  // 4. Handle manual play on user interaction
  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.paused && !isMuted && audio.src) {
      audio.play().catch(() => {});
    }
  }, [isMuted]);

  return { playAudio, isMuted, toggleMute };
};
