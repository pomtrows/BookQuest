import os

CONTENT = """import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameState, CharacterState, Enemy } from '../types/game';
import { getCombatResult, K } from '../data/combatTable';
import { story } from '../data/story';

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'warning' | 'danger' | 'info';
}

interface GameStore extends GameState {
  notifications: Notification[];
  addNotification: (message: string, type?: Notification['type']) => void;
  removeNotification: (id: string) => void;
  
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

const initialState = {
  character: null,
  currentSectionId: '1',
  history: [],
  isCombatActive: false,
  currentEnemies: [],
  currentEnemyIndex: 0,
  enemyCurrentEndurance: 0,
  combatRounds: [],
  combatVictory: false,
  notifications: [],
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialState,

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
        set({ ...initialState, character, currentSectionId: '1' });
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

        // Check Meals requirement
        const sectionData = story[sectionId];
        if (sectionData) {
          const textStr = Array.isArray(sectionData.text) ? sectionData.text.join(' ') : sectionData.text;
          const mealTriggers = [
            'prendre un Repas', 'prendre rapidement un Repas', 'faire un Repas', 'faire un somptueux repas'
          ];
          if (mealTriggers.some(t => textStr.includes(t))) {
            if (state.character.disciplines.includes('Chasse')) {
              notificationsToAdd.push({msg: "Chasse : Vous trouvez de quoi vous nourrir.", type: 'success'});
            } else if (newMeals > 0) {
              newMeals -= 1;
              notificationsToAdd.push({msg: "Repas consommé.", type: 'info'});
            } else {
              newEndurance = Math.max(0, newEndurance - 3);
              notificationsToAdd.push({msg: "Faim ! Vous perdez 3 points d'Endurance.", type: 'danger'});
            }
          }
        }

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

      startCombat: (enemy) => {
        const enemiesArray = Array.isArray(enemy) ? enemy : [enemy];
        set({
          isCombatActive: true,
          currentEnemies: enemiesArray,
          currentEnemyIndex: 0,
          enemyCurrentEndurance: enemiesArray[0].endurance,
          combatRounds: [],
          combatVictory: false
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
          return { character: { ...state.character, weapons: state.character.weapons.filter(w => w !== weapon) } };
        });
      },

      addBackpackItem: (item) => {
        set((state) => {
          if (!state.character) return state;
          const totalItems = state.character.backpack.length + state.character.meals;
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
          return { character: { ...state.character, specialItems: state.character.specialItems.filter(i => i !== item) } };
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
          const totalItems = state.character.backpack.length + state.character.meals;
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
"""

with open(r'C:\PROJET\Book Quest\src\store\gameStore.ts', 'w', encoding='utf-8') as f:
    f.write(CONTENT)
