import {useCallback, useMemo, useRef, useState} from 'react';
import {HINTS_PER_LEVEL, MAX_MISTAKES} from '../constants/config';
import {levelDef} from '../game/levels';
import {
  advanceSolution,
  isSolved,
  misplacedCount,
  rotateBlock,
  scramble,
  Tile,
  zoneFlags,
} from '../game/mosaic';

export type Phase = 'idle' | 'rotating' | 'win' | 'lose';
export type LoseReason = 'OUT_OF_MOVES' | 'TOO_MANY_MISTAKES' | 'TIME_UP';

export type MoveResult = {
  anchor: number;
  mistake: boolean;
  solved: boolean;
  zoneJustDone: number;
};

/**
 * Everything a callback reads lives in a ref mirror (rule #8); the useState
 * values exist only so the screen re-renders.
 */
export function useMosaicGame(level: number, runId: number) {
  const def = useMemo(() => levelDef(level), [level]);

  const initial = useMemo(
    () => scramble(def.cols, def.depth, def.level * 7919 + def.cols * 131 + runId * 613),
    [def, runId],
  );

  const [tiles, setTiles] = useState<Tile[]>(initial.tiles);
  const [movesLeft, setMovesLeft] = useState(def.moves);
  const [mistakes, setMistakes] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(HINTS_PER_LEVEL);
  const [goals, setGoals] = useState<boolean[]>(() => zoneFlags(initial.tiles, def.cols));
  const [phase, setPhase] = useState<Phase>('idle');
  const [hintAnchor, setHintAnchor] = useState<number | null>(null);

  const tilesRef = useRef<Tile[]>(initial.tiles);
  const stackRef = useRef<number[]>(initial.solutionStack);
  const movesLeftRef = useRef(def.moves);
  const mistakesRef = useRef(0);
  const hintsRef = useRef(HINTS_PER_LEVEL);
  const goalsRef = useRef<boolean[]>(zoneFlags(initial.tiles, def.cols));
  const phaseRef = useRef<Phase>('idle');
  const loseReasonRef = useRef<LoseReason>('OUT_OF_MOVES');

  const setPhaseBoth = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  /** Returns null when the tap was ignored (round already over / mid-rotation). */
  const rotate = useCallback(
    (anchor: number, free?: boolean): MoveResult | null => {
      if (phaseRef.current !== 'idle') {
        return null;
      }

      const before = tilesRef.current;
      const beforeMisplaced = misplacedCount(before);
      const beforeGoals = goalsRef.current;

      const next = rotateBlock(before, def.cols, anchor);
      const afterMisplaced = misplacedCount(next);
      const mistake = afterMisplaced > beforeMisplaced;

      tilesRef.current = next;
      stackRef.current = advanceSolution(stackRef.current, anchor);

      if (!free) {
        movesLeftRef.current = Math.max(0, movesLeftRef.current - 1);
        if (mistake) {
          mistakesRef.current += 1;
        }
      }

      const nextGoals = zoneFlags(next, def.cols);
      let zoneJustDone = -1;
      for (let i = 0; i < nextGoals.length; i++) {
        if (nextGoals[i] && !beforeGoals[i]) {
          zoneJustDone = i;
        }
      }
      goalsRef.current = nextGoals;

      setTiles(next);
      setMovesLeft(movesLeftRef.current);
      setMistakes(mistakesRef.current);
      setGoals(nextGoals);
      setHintAnchor(null);

      const solved = isSolved(next);
      if (solved) {
        setPhaseBoth('win');
      } else if (mistakesRef.current >= MAX_MISTAKES) {
        loseReasonRef.current = 'TOO_MANY_MISTAKES';
        setPhaseBoth('lose');
      } else if (movesLeftRef.current <= 0) {
        loseReasonRef.current = 'OUT_OF_MOVES';
        setPhaseBoth('lose');
      }

      return {anchor, mistake, solved, zoneJustDone};
    },
    [def.cols, setPhaseBoth],
  );

  const spendHint = useCallback((): number | null => {
    if (phaseRef.current !== 'idle' || hintsRef.current <= 0) {
      return null;
    }
    const stack = stackRef.current;
    if (stack.length === 0) {
      return null;
    }
    hintsRef.current -= 1;
    setHintsLeft(hintsRef.current);
    setHintAnchor(stack[0]);
    return stack[0];
  }, []);

  /** The next correct marker, without spending a hint. */
  const peekNext = useCallback((): number | null => {
    if (phaseRef.current !== 'idle') {
      return null;
    }
    const stack = stackRef.current;
    return stack.length > 0 ? stack[0] : null;
  }, []);

  const forceLose = useCallback(
    (reason: LoseReason) => {
      if (phaseRef.current === 'win' || phaseRef.current === 'lose') {
        return false;
      }
      loseReasonRef.current = reason;
      setPhaseBoth('lose');
      return true;
    },
    [setPhaseBoth],
  );

  const snapshot = useCallback(
    () => ({
      movesUsed: def.moves - movesLeftRef.current,
      mistakes: mistakesRef.current,
      goals: goalsRef.current,
      loseReason: loseReasonRef.current,
      movesNeeded: stackRef.current.length,
    }),
    [def.moves],
  );

  return {
    def,
    tiles,
    movesLeft,
    mistakes,
    hintsLeft,
    goals,
    phase,
    hintAnchor,
    rotate,
    spendHint,
    peekNext,
    forceLose,
    snapshot,
  };
}

export default useMosaicGame;
