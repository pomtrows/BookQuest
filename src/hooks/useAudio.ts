import { useEffect, useState, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';

// Create a single global audio instance outside the React lifecycle
// This guarantees we NEVER have multiple overlapping audio elements
const globalAudio = new Audio();
globalAudio.loop = true;

type AppState = 'MENU' | 'CREATION' | 'GAME' | 'RULES';

export const useAudio = (appState: AppState) => {
  const [isMuted, setIsMuted] = useState(false);
  const { isCombatActive, combatVictory, character } = useGameStore();

  // 1. Handle source changes based on game state
  useEffect(() => {
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

    if (!globalAudio.src.endsWith(newSrc)) {
      globalAudio.src = newSrc;
      globalAudio.loop = shouldLoop;
      globalAudio.muted = isMuted; 
      
      if (!isMuted) {
        globalAudio.play().catch(() => {
          // Autoplay policy expected block
        });
      }
    }
  }, [appState, isCombatActive, combatVictory, character?.endurance, isMuted]);

  // 2. Handle muting specifically
  useEffect(() => {
    globalAudio.muted = isMuted;
    if (isMuted) {
      globalAudio.pause();
    } else {
      if (globalAudio.src) {
        globalAudio.play().catch(() => {});
      }
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  // 3. Handle manual play on user interaction
  const playAudio = useCallback(() => {
    if (globalAudio.paused && !isMuted && globalAudio.src) {
      globalAudio.play().catch(() => {});
    }
  }, [isMuted]);

  return { playAudio, isMuted, toggleMute };
};
