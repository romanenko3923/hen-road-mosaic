import {makeRng, randInt, Rng} from '../utils/rng';

export type Motif =
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

export type Zone = 'SKY' | 'FIELD' | 'BIRDS';
export const ZONES: Zone[] = ['SKY', 'FIELD', 'BIRDS'];

export type Tile = {
  /** home slot index in the solved board — the identity of the piece */
  id: number;
  motif: Motif;
  zone: Zone;
  /** quarter turns clockwise, 0..3 */
  orient: number;
};

const LAYOUT_4: Motif[] = [
  'SKY_PLAIN', 'SKY_CLOUD', 'SUN_TL', 'SUN_TR',
  'SKY_CLOUD', 'BIRD_A', 'SUN_BL', 'SUN_BR',
  'ROAD_BEND', 'FIELD_STRIPE', 'FIELD_FURROW', 'FIELD_STRIPE',
  'BARN_ROOF', 'BARN_WALL', 'HEN', 'BIRD_B',
];

const LAYOUT_5: Motif[] = [
  'SKY_PLAIN', 'SKY_CLOUD', 'SUN_TL', 'SUN_TR', 'SKY_PLAIN',
  'SKY_CLOUD', 'BIRD_A', 'SUN_BL', 'SUN_BR', 'BIRD_B',
  'FIELD_STRIPE', 'ROAD_BEND', 'FIELD_FURROW', 'FIELD_STRIPE', 'FIELD_FURROW',
  'FIELD_FURROW', 'FIELD_STRIPE', 'ROAD_BEND', 'FIELD_FURROW', 'FIELD_STRIPE',
  'BARN_ROOF', 'BARN_WALL', 'HEN', 'BIRD_B', 'HEN',
];

export function zoneOf(index: number, cols: number): Zone {
  const row = Math.floor(index / cols);
  if (cols === 4) {
    if (row <= 1) {
      return 'SKY';
    }
    return row === 2 ? 'FIELD' : 'BIRDS';
  }
  if (row <= 1) {
    return 'SKY';
  }
  return row <= 3 ? 'FIELD' : 'BIRDS';
}

export function buildSolvedBoard(cols: number): Tile[] {
  const layout = cols === 4 ? LAYOUT_4 : LAYOUT_5;
  const out: Tile[] = [];
  for (let i = 0; i < cols * cols; i++) {
    out.push({id: i, motif: layout[i], zone: zoneOf(i, cols), orient: 0});
  }
  return out;
}

/** Number of 2x2 rotation anchors on a cols x cols board. */
export function anchorCount(cols: number): number {
  return (cols - 1) * (cols - 1);
}

/** The four board slots an anchor touches, in TL, TR, BR, BL order. */
export function anchorSlots(anchor: number, cols: number): number[] {
  const span = cols - 1;
  const ar = Math.floor(anchor / span);
  const ac = anchor % span;
  const tl = ar * cols + ac;
  return [tl, tl + 1, tl + cols + 1, tl + cols];
}

/** One quarter-turn clockwise of a 2x2 block. Returns a NEW array. */
export function rotateBlock(tiles: Tile[], cols: number, anchor: number): Tile[] {
  const slots = anchorSlots(anchor, cols);
  const tl = slots[0];
  const tr = slots[1];
  const br = slots[2];
  const bl = slots[3];
  const next = tiles.slice();
  const bump = (t: Tile): Tile => ({id: t.id, motif: t.motif, zone: t.zone, orient: (t.orient + 1) % 4});
  next[tr] = bump(tiles[tl]);
  next[br] = bump(tiles[tr]);
  next[bl] = bump(tiles[br]);
  next[tl] = bump(tiles[bl]);
  return next;
}

/** Counter-clockwise = three clockwise turns. Used only by the scrambler. */
export function rotateBlockCcw(tiles: Tile[], cols: number, anchor: number): Tile[] {
  let out = tiles;
  for (let i = 0; i < 3; i++) {
    out = rotateBlock(out, cols, anchor);
  }
  return out;
}

export function isSolved(tiles: Tile[]): boolean {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].id !== i || tiles[i].orient !== 0) {
      return false;
    }
  }
  return true;
}

export function misplacedCount(tiles: Tile[]): number {
  let n = 0;
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].id !== i || tiles[i].orient !== 0) {
      n++;
    }
  }
  return n;
}

export function isTileCorrect(tiles: Tile[], index: number): boolean {
  const t = tiles[index];
  return t.id === index && t.orient === 0;
}

export function zoneComplete(tiles: Tile[], cols: number, zone: Zone): boolean {
  for (let i = 0; i < tiles.length; i++) {
    if (zoneOf(i, cols) !== zone) {
      continue;
    }
    if (!isTileCorrect(tiles, i)) {
      return false;
    }
  }
  return true;
}

export function zoneFlags(tiles: Tile[], cols: number): boolean[] {
  return ZONES.map(z => zoneComplete(tiles, cols, z));
}

export type Scramble = {tiles: Tile[]; solutionStack: number[]};

/**
 * Scrambles with `depth` COUNTER-clockwise block turns. The inverse of a CCW
 * turn is a single clockwise turn — the only move the player has — so the
 * reversed anchor list is a ready-made solution of exactly `depth` moves.
 * (Scrambling clockwise would need three player moves to undo each step and the
 * move budget could never cover it.)
 */
export function scramble(cols: number, depth: number, seed: number): Scramble {
  const total = anchorCount(cols);
  const solved = buildSolvedBoard(cols);
  const rng: Rng = makeRng(seed);

  for (let attempt = 0; attempt < 24; attempt++) {
    let tiles = solved;
    const steps: number[] = [];
    let prev = -1;
    for (let s = 0; s < depth; s++) {
      let a = randInt(rng, total);
      let guard = 0;
      while (a === prev && total > 1 && guard < 16) {
        a = randInt(rng, total);
        guard++;
      }
      prev = a;
      steps.push(a);
      tiles = rotateBlockCcw(tiles, cols, a);
    }
    if (!isSolved(tiles)) {
      return {tiles, solutionStack: steps.slice().reverse()};
    }
  }

  // Fallback that can never equal the solved board: a single turn.
  return {tiles: rotateBlockCcw(solved, cols, 0), solutionStack: [0]};
}

/**
 * Keeps `stack` a valid solution of the current board after the player turned
 * `anchor` clockwise: either the player walked the first step of the solution,
 * or the move has to be undone by three further clockwise turns.
 */
export function advanceSolution(stack: number[], anchor: number): number[] {
  if (stack.length > 0 && stack[0] === anchor) {
    return stack.slice(1);
  }
  return [anchor, anchor, anchor].concat(stack);
}
