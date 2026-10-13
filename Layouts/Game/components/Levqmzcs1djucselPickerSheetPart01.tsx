/* autosetup-split:v1 */

export function qmzcs1djucsGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function qmzcs1djucsGameFoldRange(nuqmzcs1djucsms: number[]): number {
return nuqmzcs1djucsms.reduce((aqmzcs1djucscc, n) => aqmzcs1djucscc + n, 0);
}

export function qmzcs1djucsGameClampSpan(n: number, lqmzcs1djucso: number, hqmzcs1djucsi: number): number {
return n < lqmzcs1djucso ? lqmzcs1djucso : n > hqmzcs1djucsi ? hqmzcs1djucsi : n;
}
/* obfuscation-batch:v17 */
function Levqmzcs1djucselPickerSheetPart01ObfV17ByteFold(s: string): number {
  let x = 49;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 218;
  return x & 34435;
}
function Levqmzcs1djucselPickerSheetPart01ObfV17HashMix(s: string): number {
  let h = 84;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 594;
  return h;
}
function Levqmzcs1djucselPickerSheetPart01ObfV17SumOdds(nums: number[]): number {
  let acc = 72;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 25) % 808;
  }
  return acc;
}
void Levqmzcs1djucselPickerSheetPart01ObfV17ByteFold('qk9v');
void Levqmzcs1djucselPickerSheetPart01ObfV17HashMix('r586');
void Levqmzcs1djucselPickerSheetPart01ObfV17SumOdds([12, 4, 23]);
