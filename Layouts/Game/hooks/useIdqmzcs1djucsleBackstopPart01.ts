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
function useIdqmzcs1djucsleBackstopPart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 219) & 50364;
}
function useIdqmzcs1djucsleBackstopPart01ObfV17ByteFold(s: string): number {
  let x = 2;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) ^ 67;
  return x & 13287;
}
function useIdqmzcs1djucsleBackstopPart01ObfV17HashMix(s: string): number {
  let h = 38;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 421;
  return h;
}
function useIdqmzcs1djucsleBackstopPart01ObfV17SumOdds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 646;
  }
  return acc;
}
void useIdqmzcs1djucsleBackstopPart01ObfV17ShiftXor(50, 9);
void useIdqmzcs1djucsleBackstopPart01ObfV17ByteFold('dvb');
void useIdqmzcs1djucsleBackstopPart01ObfV17HashMix('ndg');
void useIdqmzcs1djucsleBackstopPart01ObfV17SumOdds([23, 6, 7]);
