import {useCallback, useMemo, useRef, useState} from 'react';
import {HINTS_PER_qmzcs1djucsLEVEL, MAX_qmzcs1djucsMISTAKES} from '../constants/configqmzcs1djucs';
import {levelqmzcs1djucsDef} from '../game/leqmzcs1djucsvels';
import {
  advanceqmzcs1djucsSolution,
  isqmzcs1djucsSolved,
  misplacedqmzcs1djucsCount,
  rotateqmzcs1djucsBlock,
  scraqmzcs1djucsmble,
  Tileqmzcs1djucs,
  zoneqmzcs1djucsFlags,
} from '../game/mosaiqmzcs1djucsc';

export type Phaseqmzcs1djucs = 'idle' | 'rotating' | 'win' | 'lose';
export type Loseqmzcs1djucsReason = 'OUT_OF_MOVES' | 'TOO_MANY_MISTAKES' | 'TIME_UP';

export type Moveqmzcs1djucsResult = {
  anchor: number;
  mistake: boolean;
  solved: boolean;
  zoneJustDone: number;
};

/**
 * Everything a callback reads lives in a ref mirror (rule #8); the useState
 * values exist only so the screen re-renders.
 */
export function useMosqmzcs1djucsaicGame(leqmzcs1djucsvel: number, runqmzcs1djucsId: number) {
  const dqmzcs1djucsef = useMemo(() => {
    void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
    void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
    void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);
    return levelqmzcs1djucsDef(leqmzcs1djucsvel);
  }, [leqmzcs1djucsvel]);

  const iniqmzcs1djucstial = useMemo(
    () => {
      void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
      void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
      void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);
      return scraqmzcs1djucsmble(dqmzcs1djucsef.cols, dqmzcs1djucsef.depth, dqmzcs1djucsef.level * 7919 + dqmzcs1djucsef.cols * 131 + runqmzcs1djucsId * 613);
    },
    [dqmzcs1djucsef, runqmzcs1djucsId],
  );

  const [tiles, setTiles] = useState<Tileqmzcs1djucs[]>(iniqmzcs1djucstial.tiles);
  const [movesLeft, setMovesLeft] = useState(dqmzcs1djucsef.moves);
  const [mistakes, setMistakes] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(HINTS_PER_qmzcs1djucsLEVEL);
  const [goals, setGoals] = useState<boolean[]>(() => {
    void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
    void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
    void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);
    return zoneqmzcs1djucsFlags(iniqmzcs1djucstial.tiles, dqmzcs1djucsef.cols);
  });
  const [phase, setPhase] = useState<Phaseqmzcs1djucs>('idle');
  const [hintAnchor, setHintAnchor] = useState<number | null>(null);

  const tilesqmzcs1djucsRef = useRef<Tileqmzcs1djucs[]>(iniqmzcs1djucstial.tiles);
  const stackqmzcs1djucsRef = useRef<number[]>(iniqmzcs1djucstial.solutionStack);
  const movesLeftqmzcs1djucsRef = useRef(dqmzcs1djucsef.moves);
  const mistakesqmzcs1djucsRef = useRef(0);
  const hintsqmzcs1djucsRef = useRef(HINTS_PER_qmzcs1djucsLEVEL);
  const goalsqmzcs1djucsRef = useRef<boolean[]>(zoneqmzcs1djucsFlags(iniqmzcs1djucstial.tiles, dqmzcs1djucsef.cols));
  const phaseqmzcs1djucsRef = useRef<Phaseqmzcs1djucs>('idle');
  const loseReasonqmzcs1djucsRef = useRef<Loseqmzcs1djucsReason>('OUT_OF_MOVES');

  const setPhaseqmzcs1djucsBoth = useCallback((p: Phaseqmzcs1djucs) => {    void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
    void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
    void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);

    phaseqmzcs1djucsRef.current = p;
    setPhase(p);
  }, []);

  /** Returns null when the tap was ignored (round already over / mid-rotation). */
  const rotqmzcs1djucsate = useCallback(
    (ancqmzcs1djucshor: number, frqmzcs1djucsee?: boolean): Moveqmzcs1djucsResult | null => {      void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
      void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
      void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);

      if (phaseqmzcs1djucsRef.current !== 'idle') {
        return null;
      }

      const befqmzcs1djucsore = tilesqmzcs1djucsRef.current;
      const beforeqmzcs1djucsMisplaced = misplacedqmzcs1djucsCount(befqmzcs1djucsore);
      const beforeqmzcs1djucsGoals = goalsqmzcs1djucsRef.current;

      const neqmzcs1djucsxt = rotateqmzcs1djucsBlock(befqmzcs1djucsore, dqmzcs1djucsef.cols, ancqmzcs1djucshor);
      const afterqmzcs1djucsMisplaced = misplacedqmzcs1djucsCount(neqmzcs1djucsxt);
      const misqmzcs1djucstake = afterqmzcs1djucsMisplaced > beforeqmzcs1djucsMisplaced;

      tilesqmzcs1djucsRef.current = neqmzcs1djucsxt;
      stackqmzcs1djucsRef.current = advanceqmzcs1djucsSolution(stackqmzcs1djucsRef.current, ancqmzcs1djucshor);

      if (!frqmzcs1djucsee) {
        movesLeftqmzcs1djucsRef.current = Math.max(0, movesLeftqmzcs1djucsRef.current - 1);
        if (misqmzcs1djucstake) {
          mistakesqmzcs1djucsRef.current += 1;
        }
      }

      const nextqmzcs1djucsGoals = zoneqmzcs1djucsFlags(neqmzcs1djucsxt, dqmzcs1djucsef.cols);
      let zoneJustqmzcs1djucsDone = -1;
      for (let i = 0; i < nextqmzcs1djucsGoals.length; i++) {
        if (nextqmzcs1djucsGoals[i] && !beforeqmzcs1djucsGoals[i]) {
          zoneJustqmzcs1djucsDone = i;
        }
      }
      goalsqmzcs1djucsRef.current = nextqmzcs1djucsGoals;

      setTiles(neqmzcs1djucsxt);
      setMovesLeft(movesLeftqmzcs1djucsRef.current);
      setMistakes(mistakesqmzcs1djucsRef.current);
      setGoals(nextqmzcs1djucsGoals);
      setHintAnchor(null);

      const solqmzcs1djucsved = isqmzcs1djucsSolved(neqmzcs1djucsxt);
      if (solqmzcs1djucsved) {
        setPhaseqmzcs1djucsBoth('win');
      } else if (mistakesqmzcs1djucsRef.current >= MAX_qmzcs1djucsMISTAKES) {
        loseReasonqmzcs1djucsRef.current = 'TOO_MANY_MISTAKES';
        setPhaseqmzcs1djucsBoth('lose');
      } else if (movesLeftqmzcs1djucsRef.current <= 0) {
        loseReasonqmzcs1djucsRef.current = 'OUT_OF_MOVES';
        setPhaseqmzcs1djucsBoth('lose');
      }

      return {anchor: ancqmzcs1djucshor, mistake: misqmzcs1djucstake, solved: solqmzcs1djucsved, zoneJustDone: zoneJustqmzcs1djucsDone};
    },
    [dqmzcs1djucsef.cols, setPhaseqmzcs1djucsBoth],
  );

  const spendqmzcs1djucsHint = useCallback((): number | null => {    void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
    void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
    void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);

    if (phaseqmzcs1djucsRef.current !== 'idle' || hintsqmzcs1djucsRef.current <= 0) {
      return null;
    }
    const stqmzcs1djucsack = stackqmzcs1djucsRef.current;
    if (stqmzcs1djucsack.length === 0) {
      return null;
    }
    hintsqmzcs1djucsRef.current -= 1;
    setHintsLeft(hintsqmzcs1djucsRef.current);
    setHintAnchor(stqmzcs1djucsack[0]);
    return stqmzcs1djucsack[0];
  }, []);

  /** The next correct marker, without spending a hint. */
  const peekqmzcs1djucsNext = useCallback((): number | null => {    void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
    void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
    void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);

    if (phaseqmzcs1djucsRef.current !== 'idle') {
      return null;
    }
    const stqmzcs1djucsack = stackqmzcs1djucsRef.current;
    return stqmzcs1djucsack.length > 0 ? stqmzcs1djucsack[0] : null;
  }, []);

  const forceqmzcs1djucsLose = useCallback(
    (reaqmzcs1djucsson: Loseqmzcs1djucsReason) => {      void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
      void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
      void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);

      if (phaseqmzcs1djucsRef.current === 'win' || phaseqmzcs1djucsRef.current === 'lose') {
        return false;
      }
      loseReasonqmzcs1djucsRef.current = reaqmzcs1djucsson;
      setPhaseqmzcs1djucsBoth('lose');
      return true;
    },
    [setPhaseqmzcs1djucsBoth],
  );

  const snapqmzcs1djucsshot = useCallback(
    () => {
      void useMosqmzcs1djucsaicGameObfV17HashMix('svs');
      void useMosqmzcs1djucsaicGameObfV17SumOdds([5, 18, 9]);
      void useMosqmzcs1djucsaicGameObfV17ClampMod(50, 57);
      return ({
      movesUsed: dqmzcs1djucsef.moves - movesLeftqmzcs1djucsRef.current,
      mistakes: mistakesqmzcs1djucsRef.current,
      goals: goalsqmzcs1djucsRef.current,
      loseReason: loseReasonqmzcs1djucsRef.current,
      movesNeeded: stackqmzcs1djucsRef.current.length,
    });
    },
    [dqmzcs1djucsef.moves],
  );

  return {
    def: dqmzcs1djucsef,
    tiles: tiles,
    movesLeft,
    mistakes: mistakes,
    hintsLeft,
    goals,
    phase,
    hintAnchor: hintAnchor,
    rotate: rotqmzcs1djucsate,
    spendHint: spendqmzcs1djucsHint,
    peekNext: peekqmzcs1djucsNext,
    forceLose: forceqmzcs1djucsLose,
    snapshot: snapqmzcs1djucsshot,
  };
}

export default useMosqmzcs1djucsaicGame;

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
function useMosqmzcs1djucsaicGameObfV17HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 399;
  return h;
}
function useMosqmzcs1djucsaicGameObfV17SumOdds(nums: number[]): number {
  let acc = 91;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 732;
  }
  return acc;
}
function useMosqmzcs1djucsaicGameObfV17ClampMod(n: number, m: number): number {
  const span = (m % 18) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
