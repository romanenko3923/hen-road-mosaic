import {useCallback, useEffect, useRef} from 'react';
import {
  IDLE_BACKSTOP_MS,
  IDLE_ENGAGED_MS,
  IDLE_FLOOR_MS,
  ROUND_MAX_MS,
} from '../constants/config';

type Options = {
  onFire: (reason: 'IDLE' | 'TIMEOUT') => void;
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
export function useIdleBackstop({onFire, enabled}: Options) {
  const fireRef = useRef(onFire);
  fireRef.current = onFire;

  const mountedAt = useRef<number>(Date.now());
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hardTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doneRef = useRef(false);

  const clearIdle = useCallback(() => {
    if (idleTimer.current !== null) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
  }, []);

  const arm = useCallback(
    (ms: number) => {
      clearIdle();
      if (doneRef.current) {
        return;
      }
      idleTimer.current = setTimeout(() => {
        if (doneRef.current) {
          return;
        }
        doneRef.current = true;
        fireRef.current('IDLE');
      }, ms);
    },
    [clearIdle],
  );

  /** Call on every real board interaction. */
  const engage = useCallback(() => {
    const sinceMount = Date.now() - mountedAt.current;
    const floorLeft = IDLE_FLOOR_MS - sinceMount;
    arm(Math.max(IDLE_ENGAGED_MS, floorLeft));
  }, [arm]);

  /** Call when the round ends for a real reason. */
  const cancel = useCallback(() => {
    doneRef.current = true;
    clearIdle();
    if (hardTimer.current !== null) {
      clearTimeout(hardTimer.current);
      hardTimer.current = null;
    }
  }, [clearIdle]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    mountedAt.current = Date.now();
    doneRef.current = false;
    arm(IDLE_BACKSTOP_MS);
    hardTimer.current = setTimeout(() => {
      if (doneRef.current) {
        return;
      }
      doneRef.current = true;
      fireRef.current('TIMEOUT');
    }, ROUND_MAX_MS);

    return () => {
      if (idleTimer.current !== null) {
        clearTimeout(idleTimer.current);
        idleTimer.current = null;
      }
      if (hardTimer.current !== null) {
        clearTimeout(hardTimer.current);
        hardTimer.current = null;
      }
    };
  }, [enabled, arm]);

  return {engage, cancel};
}

export default useIdleBackstop;
