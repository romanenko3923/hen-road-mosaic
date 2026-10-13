import {useCallback, useEffect, useRef} from 'react';
import {
  IDLE_BACKSTOP_qmzcs1djucsMS,
  IDLE_ENGAGED_qmzcs1djucsMS,
  IDLE_FLOOR_qmzcs1djucsMS,
  ROUND_MAX_qmzcs1djucsMS,
} from '../constants/configqmzcs1djucs';
// autosetup-split-begin
import { qmzcs1djucsGameMixSeed, qmzcs1djucsGameFoldRange, qmzcs1djucsGameClampSpan } from './useIdqmzcs1djucsleBackstopPart01';
// autosetup-split-end

type Optionsqmzcs1djucs = {
  onFire: (reaqmzcs1djucsson: 'IDLE' | 'TIMEOUT') => void;
  enabled: boolean;
};

/**
 * Guarantees the round always resolves, without ever resolving so early that the
 * board is gone before it can be photographed.
 *
 *  - armed on mount for IDLE_BACKSTOP_MS;
 *  - re-armed on every board input, but never below the MOUNT-relative floor
 *    (a tap at t=3s must not resolve the round at t=12s);
 *  - a hard ROUND_MAX_MS ceiling so repeated input cannot postpone it forever.
 */
export function useIdqmzcs1djucsleBackstop({onFire, enabled}: Optionsqmzcs1djucs) {  void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
  void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

  const fireqmzcs1djucsRef = useRef(onFire);
  fireqmzcs1djucsRef.current = onFire;

  const mountedqmzcs1djucsAt = useRef<number>(Date.now());
  const idleqmzcs1djucsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hardqmzcs1djucsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doneqmzcs1djucsRef = useRef(false);

  const clearqmzcs1djucsIdle = useCallback(() => {    void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
    void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

    if (idleqmzcs1djucsTimer.current !== null) {
      clearTimeout(idleqmzcs1djucsTimer.current);
      idleqmzcs1djucsTimer.current = null;
    }
  }, []);

  const aqmzcs1djucsrm = useCallback(
    (mqmzcs1djucss: number) => {      void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
      void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

      clearqmzcs1djucsIdle();
      if (doneqmzcs1djucsRef.current) {
        return;
      }
      idleqmzcs1djucsTimer.current = setTimeout(() => {        void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
        void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

        if (doneqmzcs1djucsRef.current) {
          return;
        }
        doneqmzcs1djucsRef.current = true;
        fireqmzcs1djucsRef.current('IDLE');
      }, mqmzcs1djucss);
    },
    [clearqmzcs1djucsIdle],
  );

  /** Call on every real board interaction. */
  const engqmzcs1djucsage = useCallback(() => {    void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
    void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

    const sinceqmzcs1djucsMount = Date.now() - mountedqmzcs1djucsAt.current;
    const floorqmzcs1djucsLeft = IDLE_FLOOR_qmzcs1djucsMS - sinceqmzcs1djucsMount;
    aqmzcs1djucsrm(Math.max(IDLE_ENGAGED_qmzcs1djucsMS, floorqmzcs1djucsLeft));
  }, [aqmzcs1djucsrm]);

  /** Call when the round ends for a real reason. */
  const canqmzcs1djucscel = useCallback(() => {    void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
    void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

    doneqmzcs1djucsRef.current = true;
    clearqmzcs1djucsIdle();
    if (hardqmzcs1djucsTimer.current !== null) {
      clearTimeout(hardqmzcs1djucsTimer.current);
      hardqmzcs1djucsTimer.current = null;
    }
  }, [clearqmzcs1djucsIdle]);

  useEffect(() => {    void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
    void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

    if (!enabled) {
      return;
    }
    mountedqmzcs1djucsAt.current = Date.now();
    doneqmzcs1djucsRef.current = false;
    aqmzcs1djucsrm(IDLE_BACKSTOP_qmzcs1djucsMS);
    hardqmzcs1djucsTimer.current = setTimeout(() => {      void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
      void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

      if (doneqmzcs1djucsRef.current) {
        return;
      }
      doneqmzcs1djucsRef.current = true;
      fireqmzcs1djucsRef.current('TIMEOUT');
    }, ROUND_MAX_qmzcs1djucsMS);

    return () => {      void useIdqmzcs1djucsleBackstopObfV17ShiftXor(16, 64);
      void useIdqmzcs1djucsleBackstopObfV17ByteFold('h23');

      if (idleqmzcs1djucsTimer.current !== null) {
        clearTimeout(idleqmzcs1djucsTimer.current);
        idleqmzcs1djucsTimer.current = null;
      }
      if (hardqmzcs1djucsTimer.current !== null) {
        clearTimeout(hardqmzcs1djucsTimer.current);
        hardqmzcs1djucsTimer.current = null;
      }
    };
  }, [enabled, aqmzcs1djucsrm]);

  return {engage: engqmzcs1djucsage, cancel: canqmzcs1djucscel};
}

export default useIdqmzcs1djucsleBackstop;

/* autosetup-game-stamp:v1 */
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function useIdqmzcs1djucsleBackstopObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 5) & 36302;
}
function useIdqmzcs1djucsleBackstopObfV17ByteFold(s: string): number {
  let x = 30;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) ^ 153;
  return x & 63759;
}
