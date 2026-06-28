export type CombatResult = [enemyDamage: number, playerDamage: number];

// K represents Kill (Instant Death), which we set to a very high number
export const K = 999;

export const combatResultsTable: CombatResult[][] = [
  // Ratio <= -11
  [[0,K], [0,K], [0,8], [0,8], [1,7], [1,7], [2,6], [2,6], [3,5], [3,5]],
  // -10 to -9
  [[0,K], [0,8], [0,7], [1,7], [1,6], [2,6], [2,5], [3,5], [3,4], [4,4]],
  // -8 to -7
  [[0,8], [0,7], [1,6], [1,6], [2,5], [2,5], [3,4], [3,4], [4,3], [4,3]],
  // -6 to -5
  [[0,6], [1,6], [1,5], [2,5], [2,4], [3,4], [3,3], [4,3], [4,2], [5,2]],
  // -4 to -3
  [[1,6], [1,5], [2,5], [2,4], [3,4], [3,3], [4,3], [4,2], [5,2], [5,0]],
  // -2 to -1
  [[1,5], [2,5], [2,4], [3,4], [3,3], [4,3], [4,2], [5,2], [5,0], [6,0]],
  // 0
  [[2,5], [2,4], [3,4], [3,3], [4,3], [4,2], [5,2], [5,0], [6,0], [7,0]],
  // +1 to +2
  [[2,5], [3,4], [3,3], [4,3], [4,2], [5,2], [6,0], [7,0], [8,0], [9,0]],
  // +3 to +4
  [[3,4], [3,3], [4,3], [4,2], [5,2], [6,0], [7,0], [8,0], [9,0], [10,0]],
  // +5 to +6
  [[3,4], [4,3], [4,2], [5,2], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0]],
  // +7 to +8
  [[4,3], [4,2], [5,2], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0]],
  // +9 to +10
  [[4,3], [5,2], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0], [14,0]],
  // +11 or more
  [[5,2], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0], [14,0], [18,0]]
];

export function getCombatResult(ratio: number, randomNum: number): CombatResult {
  let rowIndex = 0;
  if (ratio <= -11) rowIndex = 0;
  else if (ratio <= -9) rowIndex = 1;
  else if (ratio <= -7) rowIndex = 2;
  else if (ratio <= -5) rowIndex = 3;
  else if (ratio <= -3) rowIndex = 4;
  else if (ratio <= -1) rowIndex = 5;
  else if (ratio === 0) rowIndex = 6;
  else if (ratio <= 2) rowIndex = 7;
  else if (ratio <= 4) rowIndex = 8;
  else if (ratio <= 6) rowIndex = 9;
  else if (ratio <= 8) rowIndex = 10;
  else if (ratio <= 10) rowIndex = 11;
  else rowIndex = 12;
  
  // Dans Loup Solitaire, la table des nombres aléatoires va de 0 à 9,
  // mais la colonne "0" compte comme 10 (la meilleure issue pour le joueur).
  // Ordre des colonnes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
  const colIndex = randomNum === 0 ? 9 : randomNum - 1;
  
  return combatResultsTable[rowIndex][colIndex];
}
