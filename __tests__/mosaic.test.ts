/**
 * Pure-logic smoke test: no RN renderer, so it cannot be flaked by a native
 * module mock. It proves the thing that actually matters for the round to be
 * playable — every level scrambles away from the solved picture and the stored
 * solution walks it back inside the move budget.
 */
import {
  advanceSolution,
  anchorCount,
  buildSolvedBoard,
  isSolved,
  misplacedCount,
  rotateBlock,
  scramble,
  zoneFlags,
} from '../src/game/mosaic';
import {LEVELS, levelDef, starsFor} from '../src/game/levels';

describe('mosaic engine', () => {
  it('builds a solved board for both grid sizes', () => {
    [4, 5].forEach(cols => {
      const board = buildSolvedBoard(cols);
      expect(board).toHaveLength(cols * cols);
      expect(isSolved(board)).toBe(true);
      expect(zoneFlags(board, cols)).toEqual([true, true, true]);
      expect(anchorCount(cols)).toBe((cols - 1) * (cols - 1));
    });
  });

  it('returns to the solved board after four quarter turns', () => {
    const board = buildSolvedBoard(4);
    let out = board;
    for (let i = 0; i < 4; i++) {
      out = rotateBlock(out, 4, 3);
    }
    expect(isSolved(out)).toBe(true);
  });

  it('scrambles every level away from the picture and solves it in budget', () => {
    LEVELS.forEach(def => {
      const sc = scramble(def.cols, def.depth, def.level * 7919 + def.cols * 131);
      expect(isSolved(sc.tiles)).toBe(false);
      expect(misplacedCount(sc.tiles)).toBeGreaterThan(0);

      let tiles = sc.tiles;
      let stack = sc.solutionStack.slice();
      let steps = 0;
      while (stack.length > 0 && steps < 200) {
        const anchor = stack[0];
        tiles = rotateBlock(tiles, def.cols, anchor);
        stack = advanceSolution(stack, anchor);
        steps++;
      }
      expect(isSolved(tiles)).toBe(true);
      expect(steps).toBeLessThanOrEqual(def.moves);
    });
  });

  it('keeps the solution valid after a wrong turn', () => {
    const def = levelDef(3);
    const sc = scramble(def.cols, def.depth, 42);
    const wrong = (sc.solutionStack[0] + 1) % anchorCount(def.cols);
    let tiles = rotateBlock(sc.tiles, def.cols, wrong);
    let stack = advanceSolution(sc.solutionStack, wrong);
    let steps = 0;
    while (stack.length > 0 && steps < 200) {
      const anchor = stack[0];
      tiles = rotateBlock(tiles, def.cols, anchor);
      stack = advanceSolution(stack, anchor);
      steps++;
    }
    expect(isSolved(tiles)).toBe(true);
  });

  it('awards three stars only for a clean par run', () => {
    expect(starsFor(1, 3, 0)).toBe(3);
    expect(starsFor(1, 3, 1)).toBeLessThan(3);
    expect(starsFor(1, 99, 3)).toBe(1);
  });
});
