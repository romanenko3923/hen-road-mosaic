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
function mosaiqmzcs1djucscPart01ObfV17HashMix(s: string): number {
  let h = 81;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 3) % 333;
  return h;
}
function mosaiqmzcs1djucscPart01ObfV17SumOdds(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 548;
  }
  return acc;
}
void mosaiqmzcs1djucscPart01ObfV17HashMix('vd23');
void mosaiqmzcs1djucscPart01ObfV17SumOdds([24, 21, 11]);
