import { useEffect, useRef, useState } from 'react';
import { useGameStore } from '../store/gameStore';

type AppState = 'MENU' | 'CREATION' | 'GAME' | 'RULES';

export const useAudio = (appState: AppState) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const { isCombatActive, combatVictory, character } = useGameStore();

  // Handle source changes and global play state
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
      audio.muted = isMuted; // Ensure it stays muted
      
      if (!isMuted) {
        audio.play().catch(e => {
          console.log('Audio autoplay blocked by browser policy. Interaction required.', e);
        });
      }
    }

    return () => {
      // Cleanup is handled by the overall component lifecycle
    };
  }, [appState, isCombatActive, combatVictory, character?.endurance, isMuted]);

  // Handle muting specifically
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (isMuted) {
        audioRef.current.pause();
      } else {
        // Only try to play if it has a source
        if (audioRef.current.src) {
          audioRef.current.play().catch(() => {});
        }
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Expose a function to manually trigger play (e.g., after first click)
  const playAudio = () => {
    if (audioRef.current && audioRef.current.paused && !isMuted) {
      audioRef.current.play().catch(() => {});
    }
  };

  return { playAudio, isMuted, toggleMute };
};
