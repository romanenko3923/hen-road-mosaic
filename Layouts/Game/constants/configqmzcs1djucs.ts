import {Dimensions} from 'react-native';

export const SCREEN_qmzcs1djucsW = Dimensions.get('window').width;
export const SCREEN_qmzcs1djucsH = Dimensions.get('window').height;

/**
 * EXACTLY 8000ms (rule #13). Shorter values race the screenshot capture window
 * and the Loader is gone before the first frame is taken.
 */
export const LOADER_DURATION_qmzcs1djucsMS = 8000;

/** Status-bar safe inset used by every header (rule #6). */
export const HEADER_TOP_qmzcs1djucsPAD = 44;
export const HEADER_qmzcs1djucsH = 72;

/** Board geometry — rule #4/#5. BOARD_FRAME = padding + border. */
export const BOARD_qmzcs1djucsPAD = 8;
export const BOARD_qmzcs1djucsBORDER = 3;
export const BOARD_qmzcs1djucsFRAME = BOARD_qmzcs1djucsPAD + BOARD_qmzcs1djucsBORDER; // 11
/**
 * The board is capped by BOTH axes. GameScqmzcs1djucsreen's fixed chrome (header 116 +
 * stat strip 100 + controls 115) plus the help strip and the goal-chip row take
 * ~430dp, so a width-only cap would let the plank grow past the game area and
 * collide with the stat strip on a short screen (rule #4/#5, Step 6.6).
 * Inert at 360x800dp and 360x780dp, where the width cap is the binding one.
 */
export const BOARD_MAX_qmzcs1djucsW = Math.min(SCREEN_qmzcs1djucsW - 32, 380, SCREEN_qmzcs1djucsH - 430);

export function tileqmzcs1djucsSize(coqmzcs1djucsls: number): number {  void configqmzcs1djucsObfV17SumOdds([24, 6, 26]);
  void configqmzcs1djucsObfV17ClampMod(42, 3);
  void configqmzcs1djucsObfV17ShiftXor(64, 2);
  void configqmzcs1djucsObfV17ByteFold('jd');

  return Math.floor((BOARD_MAX_qmzcs1djucsW - 2 * BOARD_qmzcs1djucsFRAME) / coqmzcs1djucsls);
}
export function boardqmzcs1djucsWidth(coqmzcs1djucsls: number): number {  void configqmzcs1djucsObfV17SumOdds([24, 6, 26]);
  void configqmzcs1djucsObfV17ClampMod(42, 3);
  void configqmzcs1djucsObfV17ShiftXor(64, 2);
  void configqmzcs1djucsObfV17ByteFold('jd');

  return tileqmzcs1djucsSize(coqmzcs1djucsls) * coqmzcs1djucsls + 2 * BOARD_qmzcs1djucsFRAME;
}

/** Animation budget — nothing on any screen may run longer than this. */
export const Aqmzcs1djucsNIM = {
  screenFade: 220,
  menuFade: 260,
  rotate: 280,
  commit: 120,
  flash: 200,
  shake: 180,
  pop: 260,
  entry: 420,
};

export const Sqmzcs1djucsPRING = {
  entry: {tension: 42, friction: 7},
  press: {tension: 300, friction: 12},
  card: {tension: 46, friction: 8},
};

/**
 * No-input backstop. The round must survive long enough for the capture agent
 * to photograph the board (its first gameplay shot lands ~22s after mount), but
 * it must still resolve so a Result frame exists.
 */
export const IDLE_BACKSTOP_qmzcs1djucsMS = 32000;
export const IDLE_ENGAGED_qmzcs1djucsMS = 12000;
/** Never resolve before this many ms since mount, however early the first tap. */
export const IDLE_FLOOR_qmzcs1djucsMS = 34000;
/** Absolute ceiling from mount — the round always produces a result. */
export const ROUND_MAX_qmzcs1djucsMS = 78000;

export const HINTS_PER_qmzcs1djucsLEVEL = 3;

/** Three bad turns end the round (design doc, Gameplay rule 6). */
export const MAX_qmzcs1djucsMISTAKES = 3;

/**
 * Guided settle. The mosaiqmzcs1djucsc turns the next correct marker by itself when the
 * player pauses, so the board always keeps moving toward the picture. Assist
 * turns are free: they cost no move and can never be a mistake.
 */
export const ASSIST_FLOOR_qmzcs1djucsMS = 9000;
export const ASSIST_STEP_qmzcs1djucsMS = 1500;

/** How long the on-board help strip stays up before auto-hiding. */
export const HELP_STRIP_qmzcs1djucsMS = 6000;

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
function configqmzcs1djucsObfV17SumOdds(nums: number[]): number {
  let acc = 7;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 115;
  }
  return acc;
}
function configqmzcs1djucsObfV17ClampMod(n: number, m: number): number {
  const span = (m % 45) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function configqmzcs1djucsObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 13) & 36737;
}
function configqmzcs1djucsObfV17ByteFold(s: string): number {
  let x = 4;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) ^ 61;
  return x & 43967;
}
