import {makeqmzcs1djucsRng, randqmzcs1djucsInt, Rngqmzcs1djucs} from '../utils/rnqmzcs1djucsg';
// autosetup-split-begin
import { qmzcs1djucsGameMixSeed, qmzcs1djucsGameFoldRange, qmzcs1djucsGameClampSpan } from './mosaiqmzcs1djucscPart01';
// autosetup-split-end

export type Motifqmzcs1djucs =
  | 'SKY_PLAIN'
  | 'SKY_CLOUD'
  | 'SUN_TL'
  | 'SUN_TR'
  | 'SUN_BL'
  | 'SUN_BR'
  | 'BIRD_A'
  | 'BIRD_B'
  | 'FIELD_STRIPE'
  | 'FIELD_FURROW'
  | 'ROAD_BEND'
  | 'BARN_ROOF'
  | 'BARN_WALL'
  | 'HEN';

export type Zoneqmzcs1djucs = 'SKY' | 'FIELD' | 'BIRDS';
export const Zqmzcs1djucsONES: Zoneqmzcs1djucs[] = ['SKY', 'FIELD', 'BIRDS'];

export type Tileqmzcs1djucs = {
  /** home slot index in the solved board — the identity of the piece */
  id: number;
  motif: Motifqmzcs1djucs;
  zone: Zoneqmzcs1djucs;
  /** quarter turns clockwise, 0..3 */
  orient: number;
};

const LAYOUT_qmzcs1djucs4: Motifqmzcs1djucs[] = [
  'SKY_PLAIN', 'SKY_CLOUD', 'SUN_TL', 'SUN_TR',
  'SKY_CLOUD', 'BIRD_A', 'SUN_BL', 'SUN_BR',
  'ROAD_BEND', 'FIELD_STRIPE', 'FIELD_FURROW', 'FIELD_STRIPE',
  'BARN_ROOF', 'BARN_WALL', 'HEN', 'BIRD_B',
];

const LAYOUT_qmzcs1djucs5: Motifqmzcs1djucs[] = [
  'SKY_PLAIN', 'SKY_CLOUD', 'SUN_TL', 'SUN_TR', 'SKY_PLAIN',
  'SKY_CLOUD', 'BIRD_A', 'SUN_BL', 'SUN_BR', 'BIRD_B',
  'FIELD_STRIPE', 'ROAD_BEND', 'FIELD_FURROW', 'FIELD_STRIPE', 'FIELD_FURROW',
  'FIELD_FURROW', 'FIELD_STRIPE', 'ROAD_BEND', 'FIELD_FURROW', 'FIELD_STRIPE',
  'BARN_ROOF', 'BARN_WALL', 'HEN', 'BIRD_B', 'HEN',
];

export function zoneqmzcs1djucsOf(index: number, coqmzcs1djucsls: number): Zoneqmzcs1djucs {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  const rqmzcs1djucsow = Math.floor(index / coqmzcs1djucsls);
  if (coqmzcs1djucsls === 4) {
    if (rqmzcs1djucsow <= 1) {
      return 'SKY';
    }
    return rqmzcs1djucsow === 2 ? 'FIELD' : 'BIRDS';
  }
  if (rqmzcs1djucsow <= 1) {
    return 'SKY';
  }
  return rqmzcs1djucsow <= 3 ? 'FIELD' : 'BIRDS';
}

export function buildSolvedqmzcs1djucsBoard(coqmzcs1djucsls: number): Tileqmzcs1djucs[] {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  const layqmzcs1djucsout = coqmzcs1djucsls === 4 ? LAYOUT_qmzcs1djucs4 : LAYOUT_qmzcs1djucs5;
  const oqmzcs1djucsut: Tileqmzcs1djucs[] = [];
  for (let i = 0; i < coqmzcs1djucsls * coqmzcs1djucsls; i++) {
    oqmzcs1djucsut.push({id: i, motif: layqmzcs1djucsout[i], zone: zoneqmzcs1djucsOf(i, coqmzcs1djucsls), orient: 0});
  }
  return oqmzcs1djucsut;
}

/** Number of 2x2 rotation anchors on a cols x cols board. */
export function anchorqmzcs1djucsCount(coqmzcs1djucsls: number): number {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  return (coqmzcs1djucsls - 1) * (coqmzcs1djucsls - 1);
}

/** The four board slots an anchor touches, in TL, TR, BR, BL order. */
export function anchorqmzcs1djucsSlots(ancqmzcs1djucshor: number, coqmzcs1djucsls: number): number[] {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  const spqmzcs1djucsan = coqmzcs1djucsls - 1;
  const aqmzcs1djucsr = Math.floor(ancqmzcs1djucshor / spqmzcs1djucsan);
  const aqmzcs1djucsc = ancqmzcs1djucshor % spqmzcs1djucsan;
  const tqmzcs1djucsl = aqmzcs1djucsr * coqmzcs1djucsls + aqmzcs1djucsc;
  return [tqmzcs1djucsl, tqmzcs1djucsl + 1, tqmzcs1djucsl + coqmzcs1djucsls + 1, tqmzcs1djucsl + coqmzcs1djucsls];
}

/** One quarter-turn clockwise of a 2x2 block. Returns a NEW array. */
export function rotateqmzcs1djucsBlock(tiqmzcs1djucsles: Tileqmzcs1djucs[], coqmzcs1djucsls: number, ancqmzcs1djucshor: number): Tileqmzcs1djucs[] {
  const slqmzcs1djucsots = anchorqmzcs1djucsSlots(ancqmzcs1djucshor, coqmzcs1djucsls);
  const tqmzcs1djucsl = slqmzcs1djucsots[0];
  const tqmzcs1djucsr = slqmzcs1djucsots[1];
  const bqmzcs1djucsr = slqmzcs1djucsots[2];
  const bqmzcs1djucsl = slqmzcs1djucsots[3];
  const neqmzcs1djucsxt = tiqmzcs1djucsles.slice();
  const buqmzcs1djucsmp = (t: Tileqmzcs1djucs): Tileqmzcs1djucs => {
    void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
    void mosaiqmzcs1djucscObfV17ByteFold('zjk');
    void mosaiqmzcs1djucscObfV17HashMix('3h3w');
    void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);
    return ({id: t.id, motif: t.motif, zone: t.zone, orient: (t.orient + 1) % 4});
  };
  neqmzcs1djucsxt[tqmzcs1djucsr] = buqmzcs1djucsmp(tiqmzcs1djucsles[tqmzcs1djucsl]);
  neqmzcs1djucsxt[bqmzcs1djucsr] = buqmzcs1djucsmp(tiqmzcs1djucsles[tqmzcs1djucsr]);
  neqmzcs1djucsxt[bqmzcs1djucsl] = buqmzcs1djucsmp(tiqmzcs1djucsles[bqmzcs1djucsr]);
  neqmzcs1djucsxt[tqmzcs1djucsl] = buqmzcs1djucsmp(tiqmzcs1djucsles[bqmzcs1djucsl]);
  return neqmzcs1djucsxt;
}

/** Counter-clockwise = three clockwise turns. Used only by the scrambler. */
export function rotateBlockqmzcs1djucsCcw(tiqmzcs1djucsles: Tileqmzcs1djucs[], coqmzcs1djucsls: number, ancqmzcs1djucshor: number): Tileqmzcs1djucs[] {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  let oqmzcs1djucsut = tiqmzcs1djucsles;
  for (let i = 0; i < 3; i++) {
    oqmzcs1djucsut = rotateqmzcs1djucsBlock(oqmzcs1djucsut, coqmzcs1djucsls, ancqmzcs1djucshor);
  }
  return oqmzcs1djucsut;
}

export function isqmzcs1djucsSolved(tiqmzcs1djucsles: Tileqmzcs1djucs[]): boolean {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  for (let i = 0; i < tiqmzcs1djucsles.length; i++) {
    if (tiqmzcs1djucsles[i].id !== i || tiqmzcs1djucsles[i].orient !== 0) {
      return false;
    }
  }
  return true;
}

export function misplacedqmzcs1djucsCount(tiqmzcs1djucsles: Tileqmzcs1djucs[]): number {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  let n = 0;
  for (let i = 0; i < tiqmzcs1djucsles.length; i++) {
    if (tiqmzcs1djucsles[i].id !== i || tiqmzcs1djucsles[i].orient !== 0) {
      n++;
    }
  }
  return n;
}

export function isTileqmzcs1djucsCorrect(tiqmzcs1djucsles: Tileqmzcs1djucs[], index: number): boolean {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  const t = tiqmzcs1djucsles[index];
  return t.id === index && t.orient === 0;
}

export function zoneqmzcs1djucsComplete(tiqmzcs1djucsles: Tileqmzcs1djucs[], coqmzcs1djucsls: number, zoqmzcs1djucsne: Zoneqmzcs1djucs): boolean {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  for (let i = 0; i < tiqmzcs1djucsles.length; i++) {
    if (zoneqmzcs1djucsOf(i, coqmzcs1djucsls) !== zoqmzcs1djucsne) {
      continue;
    }
    if (!isTileqmzcs1djucsCorrect(tiqmzcs1djucsles, i)) {
      return false;
    }
  }
  return true;
}

export function zoneqmzcs1djucsFlags(tiqmzcs1djucsles: Tileqmzcs1djucs[], coqmzcs1djucsls: number): boolean[] {
  return Zqmzcs1djucsONES.map(z => {
    void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
    void mosaiqmzcs1djucscObfV17ByteFold('zjk');
    void mosaiqmzcs1djucscObfV17HashMix('3h3w');
    void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);
    return zoneqmzcs1djucsComplete(tiqmzcs1djucsles, coqmzcs1djucsls, z);
  });
}

export type Scrambleqmzcs1djucs = {tiles: Tileqmzcs1djucs[]; solutionStack: number[]};

/**
 * Scrambles with `depth` COUNTER-clockwise block turns. The inverse of a CCW
 * turn is a single clockwise turn — the only move the player has — so the
 * reversed anchor list is a ready-made solution of exactly `depth` moves.
 * (Scrambling clockwise would need three player moves to undo each step and the
 * move budget could never cover it.)
 */
export function scraqmzcs1djucsmble(coqmzcs1djucsls: number, deqmzcs1djucspth: number, seqmzcs1djucsed: number): Scrambleqmzcs1djucs {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  const toqmzcs1djucstal = anchorqmzcs1djucsCount(coqmzcs1djucsls);
  const solqmzcs1djucsved = buildSolvedqmzcs1djucsBoard(coqmzcs1djucsls);
  const rnqmzcs1djucsg: Rngqmzcs1djucs = makeqmzcs1djucsRng(seqmzcs1djucsed);

  for (let attqmzcs1djucsempt = 0; attqmzcs1djucsempt < 24; attqmzcs1djucsempt++) {
    let tiqmzcs1djucsles = solqmzcs1djucsved;
    const stqmzcs1djucseps: number[] = [];
    let prqmzcs1djucsev = -1;
    for (let s = 0; s < deqmzcs1djucspth; s++) {
      let a = randqmzcs1djucsInt(rnqmzcs1djucsg, toqmzcs1djucstal);
      let guqmzcs1djucsard = 0;
      while (a === prqmzcs1djucsev && toqmzcs1djucstal > 1 && guqmzcs1djucsard < 16) {
        a = randqmzcs1djucsInt(rnqmzcs1djucsg, toqmzcs1djucstal);
        guqmzcs1djucsard++;
      }
      prqmzcs1djucsev = a;
      stqmzcs1djucseps.push(a);
      tiqmzcs1djucsles = rotateBlockqmzcs1djucsCcw(tiqmzcs1djucsles, coqmzcs1djucsls, a);
    }
    if (!isqmzcs1djucsSolved(tiqmzcs1djucsles)) {
      return {tiles: tiqmzcs1djucsles, solutionStack: stqmzcs1djucseps.slice().reverse()};
    }
  }

  // Fallback that can never equal the solved board: a single turn.
  return {tiles: rotateBlockqmzcs1djucsCcw(solqmzcs1djucsved, coqmzcs1djucsls, 0), solutionStack: [0]};
}

/**
 * Keeps `stack` a valid solution of the current board after the player turned
 * `anchor` clockwise: either the player walked the first step of the solution,
 * or the move has to be undone by three further clockwise turns.
 */
export function advanceqmzcs1djucsSolution(stqmzcs1djucsack: number[], ancqmzcs1djucshor: number): number[] {  void mosaiqmzcs1djucscObfV17ShiftXor(28, 3);
  void mosaiqmzcs1djucscObfV17ByteFold('zjk');
  void mosaiqmzcs1djucscObfV17HashMix('3h3w');
  void mosaiqmzcs1djucscObfV17SumOdds([15, 10, 22]);

  if (stqmzcs1djucsack.length > 0 && stqmzcs1djucsack[0] === ancqmzcs1djucshor) {
    return stqmzcs1djucsack.slice(1);
  }
  return [ancqmzcs1djucshor, ancqmzcs1djucshor, ancqmzcs1djucshor].concat(stqmzcs1djucsack);
}

/* autosetup-game-stamp:v1 */
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function mosaiqmzcs1djucscObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 108) & 25619;
}
function mosaiqmzcs1djucscObfV17ByteFold(s: string): number {
  let x = 25;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 166;
  return x & 53078;
}
function mosaiqmzcs1djucscObfV17HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 598;
  return h;
}
function mosaiqmzcs1djucscObfV17SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 562;
  }
  return acc;
}
