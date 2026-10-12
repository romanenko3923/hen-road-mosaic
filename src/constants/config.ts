import {Dimensions} from 'react-native';

export const SCREEN_W = Dimensions.get('window').width;
export const SCREEN_H = Dimensions.get('window').height;

/**
 * EXACTLY 8000ms (rule #13). Shorter values race the screenshot capture window
 * and the Loader is gone before the first frame is taken.
 */
export const LOADER_DURATION_MS = 8000;

/** Status-bar safe inset used by every header (rule #6). */
export const HEADER_TOP_PAD = 44;
export const HEADER_H = 72;

/** Board geometry — rule #4/#5. BOARD_FRAME = padding + border. */
export const BOARD_PAD = 8;
export const BOARD_BORDER = 3;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER; // 11
/**
 * The board is capped by BOTH axes. GameScreen's fixed chrome (header 116 +
 * stat strip 100 + controls 115) plus the help strip and the goal-chip row take
 * ~430dp, so a width-only cap would let the plank grow past the game area and
 * collide with the stat strip on a short screen (rule #4/#5, Step 6.6).
 * Inert at 360x800dp and 360x780dp, where the width cap is the binding one.
 */
export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380, SCREEN_H - 430);

export function tileSize(cols: number): number {
  return Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / cols);
}
export function boardWidth(cols: number): number {
  return tileSize(cols) * cols + 2 * BOARD_FRAME;
}

/** Animation budget — nothing on any screen may run longer than this. */
export const ANIM = {
  screenFade: 220,
  menuFade: 260,
  rotate: 280,
  commit: 120,
  flash: 200,
  shake: 180,
  pop: 260,
  entry: 420,
};

export const SPRING = {
  entry: {tension: 42, friction: 7},
  press: {tension: 300, friction: 12},
  card: {tension: 46, friction: 8},
};

/**
 * No-input backstop. The round must survive long enough for the capture agent
 * to photograph the board (its first gameplay shot lands ~22s after mount), but
 * it must still resolve so a Result frame exists.
 */
export const IDLE_BACKSTOP_MS = 32000;
export const IDLE_ENGAGED_MS = 12000;
/** Never resolve before this many ms since mount, however early the first tap. */
export const IDLE_FLOOR_MS = 34000;
/** Absolute ceiling from mount — the round always produces a result. */
export const ROUND_MAX_MS = 78000;

export const HINTS_PER_LEVEL = 3;

/** Three bad turns end the round (design doc, Gameplay rule 6). */
export const MAX_MISTAKES = 3;

/**
 * Guided settle. The mosaic turns the next correct marker by itself when the
 * player pauses, so the board always keeps moving toward the picture. Assist
 * turns are free: they cost no move and can never be a mistake.
 */
export const ASSIST_FLOOR_MS = 9000;
export const ASSIST_STEP_MS = 1500;

/** How long the on-board help strip stays up before auto-hiding. */
export const HELP_STRIP_MS = 6000;
