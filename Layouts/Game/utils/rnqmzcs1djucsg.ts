/**
 * Tiny deterministic 32-bit RNG (mulberry32). A level scrambles the same way
 * every time it is replayed, so "PLAY AGAIN" is a fair retry and not a reroll.
 */
export type Rngqmzcs1djucs = () => number;

export function makeqmzcs1djucsRng(seqmzcs1djucsed: number): Rngqmzcs1djucs {  void rnqmzcs1djucsgObfV17ClampMod(50, 25);
  void rnqmzcs1djucsgObfV17ShiftXor(56, 71);
  void rnqmzcs1djucsgObfV17ByteFold('4v64');

  let a = seqmzcs1djucsed >>> 0;
  return function neqmzcs1djucsxt(): number {    void rnqmzcs1djucsgObfV17ClampMod(50, 25);
    void rnqmzcs1djucsgObfV17ShiftXor(56, 71);
    void rnqmzcs1djucsgObfV17ByteFold('4v64');

    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function randqmzcs1djucsInt(rnqmzcs1djucsg: Rngqmzcs1djucs, maxqmzcs1djucsExclusive: number): number {  void rnqmzcs1djucsgObfV17ClampMod(50, 25);
  void rnqmzcs1djucsgObfV17ShiftXor(56, 71);
  void rnqmzcs1djucsgObfV17ByteFold('4v64');

  return Math.floor(rnqmzcs1djucsg() * maxqmzcs1djucsExclusive) % maxqmzcs1djucsExclusive;
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
function rnqmzcs1djucsgObfV17ClampMod(n: number, m: number): number {
  const span = (m % 43) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function rnqmzcs1djucsgObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 67) & 34084;
}
function rnqmzcs1djucsgObfV17ByteFold(s: string): number {
  let x = 29;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 177;
  return x & 55717;
}
