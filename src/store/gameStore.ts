import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameState, CharacterState, Enemy, Settings } from '../types/game';
import { storyData } from '../data/story';
import { getCombatResult, K } from '../data/combatTable';

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'warning' | 'danger' | 'info';
}

interface GameStore extends GameState {
  notifications: Notification[];
  addNotification: (message: string, type?: Notification['type']) => void;
  removeNotification: (id: string) => void;
  
  // Settings Actions
  updateSettings: (newSettings: Partial<Settings>) => void;

  // Actions
  startNewGame: (character: CharacterState) => void;
  saveAndResetGame: () => void;
  loadGame: () => void;
  goToSection: (sectionId: string) => void;
  goBackInHistory: () => void;
  
  // Combat Actions
  startCombat: (enemy: Enemy | Enemy[]) => void;
  playCombatRound: (randomNum: number) => void;
  fleeCombat: (damageTaken: number, targetSectionId: string) => void;
  endCombat: () => void;
  restartCombat: () => void;
  
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

const initialState = {
  character: null,
  currentSectionId: 'prologue',
  history: [],
  previousAdventurePath: undefined,
  isCombatActive: false,
  currentEnemies: [],
  currentEnemyIndex: 0,
  enemyCurrentEndurance: 0,
  preCombatEndurance: 0,
  combatRounds: [],
  combatVictory: false,
  notifications: [],
  settings: {
    fontSize: 'large' as const,
    allowCombatRestart: false,
    allowGoBack: false
  }
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      updateSettings: (newSettings) => {
        set((state) => ({
          settings: { ...state.settings, ...newSettings }
        }));
      },

      addNotification: (message, type = 'info') => {
        const id = Math.random().toString(36).substring(2, 9);
        set((state) => ({
          notifications: [...state.notifications, { id, message, type }]
        }));
        setTimeout(() => {
          get().removeNotification(id);
        }, 4000);
      },

      removeNotification: (id) => {
        set((state) => ({
          notifications: state.notifications.filter(n => n.id !== id)
        }));
      },

      startNewGame: (character) => {
        set((state) => {
          let prevPath = state.previousAdventurePath;
          if (state.character && state.history.length > 0) {
            prevPath = [...state.history, state.currentSectionId];
          }
          return {
            ...initialState,
            character,
            previousAdventurePath: prevPath,
            settings: state.settings
          };
        });
      },

      saveAndResetGame: () => {
        set((state) => {
          let prevPath = state.previousAdventurePath;
          if (state.character && state.history.length > 0) {
            prevPath = [...state.history, state.currentSectionId];
          }
          return {
            ...initialState,
            previousAdventurePath: prevPath,
            settings: state.settings
          };
        });
      },

      loadGame: () => {},

      goToSection: (sectionId) => {
        const state = get();
        if (!state.character) return;
        
        let newEndurance = state.character.endurance;
        let newMeals = state.character.meals;
        const notificationsToAdd: {msg: string, type: 'success' | 'warning' | 'danger' | 'info'}[] = [];

        // Check Healing (Guérison)
        if (state.character.disciplines.includes('Guérison') && !state.isCombatActive && state.currentSectionId !== sectionId) {
          if (newEndurance < state.character.maxEndurance) {
            newEndurance += 1;
            notificationsToAdd.push({msg: "Guérison : +1 Endurance", type: 'success'});
          }
        }

        // Apply automatic damage or heal from section
        const section = storyData[sectionId];
        if (section) {
          if (section.damage) {
            newEndurance = Math.max(0, newEndurance - section.damage);
            notificationsToAdd.push({msg: `Vous avez perdu ${section.damage} point(s) d'Endurance.`, type: 'danger'});
          }
          if (section.heal) {
            const actualHeal = Math.min(state.character.maxEndurance - newEndurance, section.heal);
            if (actualHeal > 0) {
              newEndurance += actualHeal;
              notificationsToAdd.push({msg: `Vous avez récupéré ${actualHeal} point(s) d'Endurance.`, type: 'success'});
            }
          }
        }

        // The manual meal check is handled in StoryViewer using requiresMeal property

        set((state) => ({
          character: {
            ...state.character!,
            endurance: newEndurance,
            meals: newMeals
          },
          currentSectionId: sectionId,
          history: [...state.history, state.currentSectionId],
          isCombatActive: false,
          combatRounds: [],
          combatVictory: false
        }));

        notificationsToAdd.forEach(n => get().addNotification(n.msg, n.type));
      },

      goBackInHistory: () => {
        set((state) => {
          if (state.history.length === 0) return state;
          const newHistory = [...state.history];
          const previousSection = newHistory.pop()!;
          return {
            currentSectionId: previousSection,
            history: newHistory,
            isCombatActive: false,
            combatVictory: false,
            combatRounds: []
          };
        });
      },

      startCombat: (enemy) => {
        const state = get();
        const enemiesArray = Array.isArray(enemy) ? enemy : [enemy];
        set({
          isCombatActive: true,
          currentEnemies: enemiesArray,
          currentEnemyIndex: 0,
          enemyCurrentEndurance: enemiesArray[0].endurance,
          preCombatEndurance: state.character?.endurance || 0,
          combatRounds: [],
          combatVictory: false
        });
      },

      restartCombat: () => {
        set((state) => {
          if (!state.character || state.currentEnemies.length === 0) return state;
          const initialEnemy = state.currentEnemies[0];
          return {
            character: { ...state.character, endurance: state.preCombatEndurance },
            currentEnemyIndex: 0,
            enemyCurrentEndurance: initialEnemy.endurance,
            combatRounds: [],
            combatVictory: false
          };
        });
      },

      playCombatRound: (randomNum) => {
        set((state) => {
          if (!state.character || state.currentEnemies.length === 0) return state;
          
          const currentEnemy = state.currentEnemies[state.currentEnemyIndex];
          
          let playerCS = state.character.combatSkill;
          
          // Apply Unarmed Penalty or Mastery Bonus
          if (state.character.weapons.length === 0) {
            playerCS -= 4; // Mains nues
            get().addNotification("Combat à mains nues (-4 Habileté)", "warning");
          } else if (state.character.weaponMastery && state.character.weapons.includes(state.character.weaponMastery)) {
            playerCS += 2; // Maîtrise des armes
          }
          
          // Mindblast Bonus
          if (state.character.disciplines.includes('Puissance psychique') && !currentEnemy.mindblastImmune) {
            playerCS += 2; // Puissance psychique
          }

          // Enemy Mindblast Penalty
          if (currentEnemy.hasMindblast && !state.character.disciplines.includes('Bouclier psychique')) {
            playerCS -= 2;
          }
          
          const enemyCS = currentEnemy.combatSkill;
          const combatRatio = playerCS - enemyCS;
          
          const [eDmg, pDmg] = getCombatResult(combatRatio, randomNum);
          
          let actualEnemyDamage = eDmg;
          let actualPlayerDamage = pDmg;
          
          let newEnemyEndurance = state.enemyCurrentEndurance;
          if (actualEnemyDamage === K) newEnemyEndurance = 0;
          else newEnemyEndurance = Math.max(0, newEnemyEndurance - actualEnemyDamage);
          
          let newPlayerEndurance = state.character.endurance;
          if (actualPlayerDamage === K) newPlayerEndurance = 0;
          else newPlayerEndurance = Math.max(0, newPlayerEndurance - actualPlayerDamage);
          
          const isEnemyDead = newEnemyEndurance <= 0;
          let newEnemyIndex = state.currentEnemyIndex;
          let nextEnemyEndurance = newEnemyEndurance;
          let isVictory = false;
          
          if (isEnemyDead) {
            if (newEnemyIndex + 1 < state.currentEnemies.length) {
              newEnemyIndex += 1;
              nextEnemyEndurance = state.currentEnemies[newEnemyIndex].endurance;
            } else {
              isVictory = true;
            }
          }
          
          return {
            enemyCurrentEndurance: nextEnemyEndurance,
            currentEnemyIndex: newEnemyIndex,
            character: {
              ...state.character,
              endurance: newPlayerEndurance
            },
            combatRounds: [...state.combatRounds, {
              round: state.combatRounds.length + 1,
              randomNum,
              combatRatio,
              enemyDamage: actualEnemyDamage,
              playerDamage: actualPlayerDamage,
              enemyEndurance: newEnemyEndurance,
              playerEndurance: newPlayerEndurance
            }],
            combatVictory: isVictory
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
          if (state.character.weapons.length >= 2) {
             get().addNotification("Vous ne pouvez pas porter plus de 2 armes.", "warning");
             return state;
          }
          return { character: { ...state.character, weapons: [...state.character.weapons, weapon] } };
        });
      },

      removeWeapon: (weapon) => {
        set((state) => {
          if (!state.character) return state;
          const index = state.character.weapons.indexOf(weapon);
          if (index === -1) return state;
          const newWeapons = [...state.character.weapons];
          newWeapons.splice(index, 1);
          return { character: { ...state.character, weapons: newWeapons } };
        });
      },

      addBackpackItem: (item) => {
        set((state) => {
          if (!state.character) return state;
          const totalItems = state.character.backpack.filter(i => i !== 'Repas').length + state.character.meals;
          if (totalItems >= 8) {
            get().addNotification("Votre sac à dos est plein (8 objets max).", "warning");
            return state;
          }
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
          const index = state.character.specialItems.indexOf(item);
          if (index === -1) return state;
          const newSpecialItems = [...state.character.specialItems];
          newSpecialItems.splice(index, 1);
          return { character: { ...state.character, specialItems: newSpecialItems } };
        });
      },

      updateGold: (amount) => {
        set((state) => {
          if (!state.character) return state;
          const newGold = Math.max(0, Math.min(50, state.character.goldCrowns + amount));
          if (newGold === 50 && amount > 0) {
            get().addNotification("Bourse pleine (50 Couronnes max).", "warning");
          }
          return { character: { ...state.character, goldCrowns: newGold } };
        });
      },

      updateMeals: (amount) => {
        set((state) => {
          if (!state.character) return state;
          const totalItems = state.character.backpack.filter(i => i !== 'Repas').length + state.character.meals;
          if (amount > 0 && totalItems >= 8) {
             get().addNotification("Votre sac à dos est plein.", "warning");
             return state;
          }
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
