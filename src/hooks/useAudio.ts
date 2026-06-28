import { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

type AppState = 'MENU' | 'CREATION' | 'GAME' | 'RULES';

export const useAudio = (appState: AppState) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isCombatActive, combatVictory, character } = useGameStore();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;
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

    // Only change source if it's different
    if (!audio.src.endsWith(newSrc)) {
      audio.src = newSrc;
      audio.loop = shouldLoop;
      
      // Modern browsers require user interaction before playing audio.
      // This catch block silently ignores the initial auto-play policy error.
      audio.play().catch(e => {
        console.log('Audio autoplay blocked by browser policy. Interaction required.', e);
      });
    }

    return () => {
      // Cleanup is handled by the overall component lifecycle
    };
  }, [appState, isCombatActive, combatVictory, character?.endurance]);

  // Expose a function to manually trigger play (e.g., after first click)
  const playAudio = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
  };

  return { playAudio };
};
