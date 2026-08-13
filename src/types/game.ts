export type Discipline = 
  | 'Camouflage' 
  | 'Chasse' 
  | 'Sixième Sens' 
  | 'Orientation' 
  | 'Guérison' 
  | 'Maîtrise des armes' 
  | 'Bouclier psychique' 
  | 'Puissance psychique' 
  | 'Communication Animale' 
  | 'Maîtrise Psychique de la Matière';

export type Weapon = 
  | 'Poignard' 
  | 'Lance' 
  | 'Masse d\'armes' 
  | 'Sabre' 
  | 'Marteau de guerre' 
  | 'Épée' 
  | 'Hache' 
  | 'Glaive'
  | 'Bâton';

export interface CharacterState {
  name: string;
  avatar: string;
  combatSkill: number;
  endurance: number;
  maxEndurance: number;
  disciplines: Discipline[];
  weaponMastery?: Weapon;
  weapons: Weapon[];
  backpack: string[];
  meals: number;
  goldCrowns: number;
  specialItems: string[];
}

export interface Enemy {
  name: string;
  combatSkill: number;
  endurance: number;
  mindblastImmune?: boolean;
  hasMindblast?: boolean;
  darknessPenalty?: boolean;
  csModifier?: number;
  firstRoundCsModifier?: number;
  maxRounds?: number;
  maxRoundsTargetId?: string;
  escapeRound?: number;
  undead?: boolean;
}

export interface Choice {
  text: string;
  targetId: string;
  condition?: {
    type: 'has_item' | 'has_discipline' | 'has_weapon';
    value: string;
  };
  requiredDiscipline?: Discipline;
  isFlee?: boolean;
}

export type LocationType = 'ruins' | 'forest' | 'mountains' | 'river' | 'road' | 'cemetery' | 'city';

export interface Section {
  id: string;
  text: string | string[];
  choices: Choice[];
  combat?: Enemy | Enemy[];
  location?: LocationType;
  loot?: {
    gold?: number;
    items?: string[];
    specialItems?: string[];
    weapons?: Weapon[];
    meals?: number;
  };
  requiresMeal?: boolean;
  autoDamage?: number;
  damage?: number;
  heal?: number;
  loseAllGold?: boolean;
  lostItems?: string[];
  permanentCsLoss?: number;
  loseAllWeapons?: boolean;
  gameOver?: boolean;
  image?: string;
}

export interface Settings {
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  allowCombatRestart: boolean;
  allowGoBack: boolean;
}

export interface GameState {
  currentBookId: number;
  character: CharacterState | null;
  currentSectionId: string;
  history: string[];
  previousAdventurePath?: string[];
  isCombatActive: boolean;
  currentEnemies: Enemy[];
  currentEnemyIndex: number;
  enemyCurrentEndurance: number;
  preCombatEndurance: number;
  combatRoundNumber: number;
  combatRounds: {
    round: number;
    randomNum: number;
    combatRatio: number;
    enemyDamage: number;
    playerDamage: number;
    enemyEndurance: number;
    playerEndurance: number;
  }[];
  combatVictory: boolean;
  settings: Settings;
}
