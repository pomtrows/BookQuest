import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameState, CharacterState, Enemy } from '../types/game';

interface GameStore extends GameState {
  // Actions
  startNewGame: (character: CharacterState) => void;
  loadGame: () => void;
  goToSection: (sectionId: string) => void;
  
  // Combat Actions
  startCombat: (enemy: Enemy | Enemy[]) => void;
  playCombatRound: (randomNum: number) => void;
  fleeCombat: (damageTaken: number, targetSectionId: string) => void;
  endCombat: () => void;
  
  // Inventory Actions
  addWeapon: (weapon: any) => void;
  removeWeapon: (weapon: any) => void;
  addBackpackItem: (item: string) => void;
  removeBackpackItem: (item: string) => void;
  addSpecialItem: (item: string) => void;
  removeSpecialItem: (item: string) => void;
  updateGold: (amount: number) => void;
  updateMeals: (amount: number) => void;
  
  // Stats Actions
  heal: (amount: number) => void;
  takeDamage: (amount: number) => void;
}

const initialState: GameState = {
  character: null,
  currentSectionId: '1',
  history: [],
  isCombatActive: false,
  currentEnemyIndex: 0,
  enemyCurrentEndurance: 0,
  combatRounds: [],
  combatVictory: false,
};

// Combat resolution table based on Combat Ratio and Random Number
// Rows are ratios: -11 or less, -10 to -9, -8 to -7, -6 to -5, -4 to -3, -2 to -1, 0, +1 to +2, +3 to +4, +5 to +6, +7 to +8, +9 to +10, +11 or more
// Simplified combat resolution logic is inside playCombatRound

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      ...initialState,

      startNewGame: (character) => {
        set({ ...initialState, character, currentSectionId: '1' });
      },

      loadGame: () => {
        // Zustand persist handles this automatically, this is just a stub if needed
      },

      goToSection: (sectionId) => {
        set((state) => ({
          currentSectionId: sectionId,
          history: [...state.history, state.currentSectionId],
          isCombatActive: false,
          combatRounds: [],
          combatVictory: false
        }));
      },

      startCombat: (enemy) => {
        const firstEnemy = Array.isArray(enemy) ? enemy[0] : enemy;
        set({
          isCombatActive: true,
          currentEnemyIndex: 0,
          enemyCurrentEndurance: firstEnemy.endurance,
          combatRounds: [],
          combatVictory: false
        });
      },

      playCombatRound: (randomNum) => {
        // Implementation of combat math
        // This is a placeholder for the actual combat table logic
        set((state) => {
          if (!state.character) return state;
          
          // Simplified damage calculation for now
          const enemyDamage = Math.floor(randomNum / 2) + 2;
          const playerDamage = Math.floor((9 - randomNum) / 2) + 1;
          
          const newEnemyEndurance = Math.max(0, state.enemyCurrentEndurance - enemyDamage);
          const newPlayerEndurance = Math.max(0, state.character.endurance - playerDamage);
          
          return {
            enemyCurrentEndurance: newEnemyEndurance,
            character: {
              ...state.character,
              endurance: newPlayerEndurance
            },
            combatRounds: [...state.combatRounds, {
              round: state.combatRounds.length + 1,
              randomNum,
              combatRatio: 0, // Placeholder
              enemyDamage,
              playerDamage,
              enemyEndurance: newEnemyEndurance,
              playerEndurance: newPlayerEndurance
            }],
            combatVictory: newEnemyEndurance <= 0
          };
        });
      },

      fleeCombat: (damageTaken, targetSectionId) => {
        set((state) => {
          if (!state.character) return state;
          return {
            character: {
              ...state.character,
              endurance: Math.max(0, state.character.endurance - damageTaken)
            },
            currentSectionId: targetSectionId,
            history: [...state.history, state.currentSectionId],
            isCombatActive: false,
          };
        });
      },

      endCombat: () => {
        set({ isCombatActive: false });
      },

      addWeapon: (weapon) => {
        set((state) => {
          if (!state.character) return state;
          if (state.character.weapons.length >= 2) return state; // Max 2
          return { character: { ...state.character, weapons: [...state.character.weapons, weapon] } };
        });
      },

      removeWeapon: (weapon) => {
        set((state) => {
          if (!state.character) return state;
          return { character: { ...state.character, weapons: state.character.weapons.filter(w => w !== weapon) } };
        });
      },

      addBackpackItem: (item) => {
        set((state) => {
          if (!state.character) return state;
          const totalItems = state.character.backpack.length + state.character.meals;
          if (totalItems >= 8) return state; // Max 8 items
          return { character: { ...state.character, backpack: [...state.character.backpack, item] } };
        });
      },

      removeBackpackItem: (item) => {
        set((state) => {
          if (!state.character) return state;
          const index = state.character.backpack.indexOf(item);
          if (index === -1) return state;
          const newBackpack = [...state.character.backpack];
          newBackpack.splice(index, 1);
          return { character: { ...state.character, backpack: newBackpack } };
        });
      },

      addSpecialItem: (item) => {
        set((state) => {
          if (!state.character) return state;
          return { character: { ...state.character, specialItems: [...state.character.specialItems, item] } };
        });
      },

      removeSpecialItem: (item) => {
        set((state) => {
          if (!state.character) return state;
          return { character: { ...state.character, specialItems: state.character.specialItems.filter(i => i !== item) } };
        });
      },

      updateGold: (amount) => {
        set((state) => {
          if (!state.character) return state;
          return { character: { ...state.character, goldCrowns: Math.max(0, Math.min(50, state.character.goldCrowns + amount)) } };
        });
      },

      updateMeals: (amount) => {
        set((state) => {
          if (!state.character) return state;
          const totalItems = state.character.backpack.length + state.character.meals;
          if (amount > 0 && totalItems >= 8) return state;
          return { character: { ...state.character, meals: Math.max(0, state.character.meals + amount) } };
        });
      },

      heal: (amount) => {
        set((state) => {
          if (!state.character) return state;
          return { character: { ...state.character, endurance: Math.min(state.character.maxEndurance, state.character.endurance + amount) } };
        });
      },

      takeDamage: (amount) => {
        set((state) => {
          if (!state.character) return state;
          return { character: { ...state.character, endurance: Math.max(0, state.character.endurance - amount) } };
        });
      },
    }),
    {
      name: 'book-quest-storage',
    }
  )
);
