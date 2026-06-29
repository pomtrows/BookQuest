import { useEffect, useState, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';
import { storyData } from '../data/story';

// Attach to window to survive Vite HMR (Hot Module Replacement)
// This strictly guarantees only one audio object ever exists even if the file is recompiled.
const getGlobalAudio = (): HTMLAudioElement => {
  if (typeof window !== 'undefined') {
    const win = window as any;
    if (!win.__globalAudio) {
      win.__globalAudio = new Audio();
      win.__globalAudio.loop = true;
    }
    return win.__globalAudio;
  }
  const fallback = new Audio();
  fallback.loop = true;
  return fallback;
};

const globalAudio = getGlobalAudio();

type AppState = 'MENU' | 'CREATION' | 'GAME' | 'RULES' | 'HISTORY';

export const useAudio = (appState: AppState) => {
  const [isMuted, setIsMuted] = useState(false);
  const { isCombatActive, combatVictory, character, currentSectionId } = useGameStore();

  // 1. Handle source changes based on game state
  useEffect(() => {
    let newSrc = '';
    let shouldLoop = true;

    if (appState === 'MENU' || appState === 'RULES' || appState === 'CREATION') {
      newSrc = '/audio/jost/01 - Opening.ogg';
    } else if (appState === 'GAME') {
      if (character && character.endurance <= 0) {
        newSrc = '/audio/jost/20 - Game Over.ogg';
        shouldLoop = false;
      } else if (combatVictory) {
        newSrc = '/audio/jost/17 - Victory.ogg';
        shouldLoop = false;
      } else if (isCombatActive) {
        newSrc = '/audio/jost/13 - Danger.ogg';
      } else {
        const section = storyData[currentSectionId];
        const biome = section?.location || 'forest';
        const biomeMusicMap: Record<string, string> = {
          'forest': '/audio/jost/04 - Sanctuary.ogg',
          'road': '/audio/jost/08 - Overworld.ogg',
          'city': '/audio/jost/07 - Town.ogg',
          'mountains': '/audio/jost/12 - Timeworn Pagoda.ogg',
          'ruins': '/audio/jost/15 - Dungeon.ogg',
          'cemetery': '/audio/jost/15 - Dungeon.ogg',
          'river': '/audio/jost/23 - Inn.ogg'
        };
        newSrc = biomeMusicMap[biome] || '/audio/jost/08 - Overworld.ogg';
      }
    }

    if (newSrc && !globalAudio.src.endsWith(newSrc)) {
      globalAudio.src = newSrc;
      globalAudio.loop = shouldLoop;
      globalAudio.muted = isMuted;
      globalAudio.volume = isMuted ? 0 : 1;
      
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
    globalAudio.volume = isMuted ? 0 : 1;
    
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
