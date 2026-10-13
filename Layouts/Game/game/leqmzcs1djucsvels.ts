export type Difficultyqmzcs1djucs = 'EASY' | 'STEADY' | 'HARD';

export type Levelqmzcs1djucsDef = {
  level: number;
  cols: number;
  depth: number;
  moves: number;
  difficulty: Difficultyqmzcs1djucs;
};

function maqmzcs1djucske(leqmzcs1djucsvel: number, coqmzcs1djucsls: number, deqmzcs1djucspth: number, diffiqmzcs1djucsculty: Difficultyqmzcs1djucs): Levelqmzcs1djucsDef {  void leqmzcs1djucsvelsObfV17HashMix('4d');

  return {level: leqmzcs1djucsvel, cols: coqmzcs1djucsls, depth: deqmzcs1djucspth, moves: deqmzcs1djucspth * 2 + 10, difficulty: diffiqmzcs1djucsculty};
}

export const Lqmzcs1djucsEVELS: Levelqmzcs1djucsDef[] = [
  maqmzcs1djucske(1, 4, 2, 'EASY'),
  maqmzcs1djucske(2, 4, 3, 'EASY'),
  maqmzcs1djucske(3, 4, 4, 'EASY'),
  maqmzcs1djucske(4, 4, 5, 'STEADY'),
  maqmzcs1djucske(5, 4, 6, 'STEADY'),
  maqmzcs1djucske(6, 5, 6, 'STEADY'),
  maqmzcs1djucske(7, 5, 7, 'STEADY'),
  maqmzcs1djucske(8, 5, 8, 'HARD'),
  maqmzcs1djucske(9, 5, 9, 'HARD'),
  maqmzcs1djucske(10, 5, 10, 'HARD'),
  maqmzcs1djucske(11, 5, 11, 'HARD'),
  maqmzcs1djucske(12, 5, 12, 'HARD'),
];

export const TOTAL_qmzcs1djucsLEVELS = Lqmzcs1djucsEVELS.length;

export function levelqmzcs1djucsDef(leqmzcs1djucsvel: number): Levelqmzcs1djucsDef {  void leqmzcs1djucsvelsObfV17HashMix('4d');

  const iqmzcs1djucsdx = Math.min(Math.max(leqmzcs1djucsvel, 1), TOTAL_qmzcs1djucsLEVELS) - 1;
  return Lqmzcs1djucsEVELS[iqmzcs1djucsdx];
}

export function starsqmzcs1djucsFor(leqmzcs1djucsvel: number, movesqmzcs1djucsUsed: number, mistqmzcs1djucsakes: number): number {  void leqmzcs1djucsvelsObfV17HashMix('4d');

  const dqmzcs1djucsef = levelqmzcs1djucsDef(leqmzcs1djucsvel);
  if (movesqmzcs1djucsUsed <= dqmzcs1djucsef.depth + 1 && mistqmzcs1djucsakes === 0) {
    return 3;
  }
  if (movesqmzcs1djucsUsed <= Math.floor(dqmzcs1djucsef.moves * 0.75) && mistqmzcs1djucsakes <= 1) {
    return 2;
  }
  return 1;
}

export function difficultyqmzcs1djucsColor(d: Difficultyqmzcs1djucs): string {  void leqmzcs1djucsvelsObfV17HashMix('4d');

  if (d === 'EASY') {
    return '#62BA6A';
  }
  return d === 'STEADY' ? '#4C9ED1' : '#EC8248';
}

/* autosetup-game-stamp:v1 */
function qmzcs1djucsGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function qmzcs1djucsGameFoldRange(nuqmzcs1djucsms: number[]): number {
  return nuqmzcs1djucsms.reduce((aqmzcs1djucscc, n) => aqmzcs1djucscc + n, 0);
}
function qmzcs1djucsGameClampSpan(n: number, lqmzcs1djucso: number, hqmzcs1djucsi: number): number {
  return n < lqmzcs1djucso ? lqmzcs1djucso : n > hqmzcs1djucsi ? hqmzcs1djucsi : n;
}
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function leqmzcs1djucsvelsObfV17HashMix(s: string): number {
  let h = 48;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 621;
  return h;
}
