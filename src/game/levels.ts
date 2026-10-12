export type Difficulty = 'EASY' | 'STEADY' | 'HARD';

export type LevelDef = {
  level: number;
  cols: number;
  depth: number;
  moves: number;
  difficulty: Difficulty;
};

function make(level: number, cols: number, depth: number, difficulty: Difficulty): LevelDef {
  return {level, cols, depth, moves: depth * 2 + 10, difficulty};
}

export const LEVELS: LevelDef[] = [
  make(1, 4, 2, 'EASY'),
  make(2, 4, 3, 'EASY'),
  make(3, 4, 4, 'EASY'),
  make(4, 4, 5, 'STEADY'),
  make(5, 4, 6, 'STEADY'),
  make(6, 5, 6, 'STEADY'),
  make(7, 5, 7, 'STEADY'),
  make(8, 5, 8, 'HARD'),
  make(9, 5, 9, 'HARD'),
  make(10, 5, 10, 'HARD'),
  make(11, 5, 11, 'HARD'),
  make(12, 5, 12, 'HARD'),
];

export const TOTAL_LEVELS = LEVELS.length;

export function levelDef(level: number): LevelDef {
  const idx = Math.min(Math.max(level, 1), TOTAL_LEVELS) - 1;
  return LEVELS[idx];
}

export function starsFor(level: number, movesUsed: number, mistakes: number): number {
  const def = levelDef(level);
  if (movesUsed <= def.depth + 1 && mistakes === 0) {
    return 3;
  }
  if (movesUsed <= Math.floor(def.moves * 0.75) && mistakes <= 1) {
    return 2;
  }
  return 1;
}

export function difficultyColor(d: Difficulty): string {
  if (d === 'EASY') {
    return '#62BA6A';
  }
  return d === 'STEADY' ? '#4C9ED1' : '#EC8248';
}
