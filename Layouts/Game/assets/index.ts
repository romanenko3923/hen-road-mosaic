/**
 * Asset re-exports. The pipeline writes every PNG below (FLUX, or the
 * procedural gradient fallback) before the build, so each require() resolves.
 */
export const appqmzcs1djucsIcon = require('../../../assets/icon_1024.png');
export const bgqmzcs1djucsLoader = require('../../../assets/bg_loader.png');
export const bgqmzcs1djucsMenu = require('../../../assets/bg_menu.png');
export const bgqmzcs1djucsGame = require('../../../assets/bg_game.png');
export const bgqmzcs1djucsResult = require('../../../assets/bg_result.png');
export const spriteqmzcs1djucsHen = require('../../../assets/sprite_hen.png');
/* obfuscation-batch:v17 */
function qmzcs1djucsIndexObfV17SumOdds(nums: number[]): number {
  let acc = 58;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 148;
  }
  return acc;
}
function qmzcs1djucsIndexObfV17ClampMod(n: number, m: number): number {
  const span = (m % 63) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function qmzcs1djucsIndexObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 120) & 22039;
}
function qmzcs1djucsIndexObfV17ByteFold(s: string): number {
  let x = 53;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 121;
  return x & 13060;
}
void qmzcs1djucsIndexObfV17SumOdds([4, 22, 23]);
void qmzcs1djucsIndexObfV17ClampMod(63, 8);
void qmzcs1djucsIndexObfV17ShiftXor(39, 46);
void qmzcs1djucsIndexObfV17ByteFold('w75');
