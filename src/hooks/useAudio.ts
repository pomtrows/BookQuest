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
      newSrc = '/audio/title.wav';
    } else if (appState === 'GAME') {
      if (character && character.endurance <= 0) {
        newSrc = '/audio/jost/20 - Game Over.ogg';
        shouldLoop = false;
      } else if (combatVictory) {
        newSrc = '/audio/jost/17 - Victory.ogg';
        shouldLoop = false;
      } else if (isCombatActive) {
        const combatTracks = ['/audio/combat.wav', '/audio/jost/13 - Danger.ogg'];
        const sectionNum = parseInt(currentSectionId) || 1;
        newSrc = combatTracks[sectionNum % combatTracks.length];
      } else {
        const section = storyData[currentSectionId];
        const biome = section?.location || 'forest';
        const biomeMusicMap: Record<string, string[]> = {
          'forest': [
            '/audio/jost/04 - Sanctuary.ogg',
            '/audio/jost/02 - BWV 1007 - Prelude.ogg',
            '/audio/jost/05 - Reunion.ogg'
          ],
          'road': [
            '/audio/jost/08 - Overworld.ogg',
            '/audio/jost/11 - Ostrich!.ogg',
            '/audio/jost/22 - A New Comrade.ogg'
          ],
          'city': [
            '/audio/jost/07 - Town.ogg',
            '/audio/jost/19 - Courtesan.ogg',
            '/audio/jost/09 - Z 339 - Here the Deities approve.ogg'
          ],
          'mountains': [
            '/audio/jost/12 - Timeworn Pagoda.ogg',
            '/audio/jost/06 - Rebels Be.ogg'
          ],
          'ruins': [
            '/audio/jost/15 - Dungeon.ogg',
            '/audio/jost/24 - RV 610 - Fecit potentiam.ogg',
            '/audio/jost/10 - The Empire.ogg'
          ],
          'cemetery': [
            '/audio/jost/15 - Dungeon.ogg',
            '/audio/jost/18 - Nighttide Waltz.ogg',
            '/audio/jost/03 - HWV 56 - Why do the nations so furiously rage together.ogg'
          ],
          'river': [
            '/audio/jost/23 - Inn.ogg',
            '/audio/jost/25 - Finale.ogg'
          ]
        };
        const tracks = biomeMusicMap[biome] || biomeMusicMap['road'];
        const sectionNum = parseInt(currentSectionId) || 1;
        newSrc = tracks[sectionNum % tracks.length];
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
