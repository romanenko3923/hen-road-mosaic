/* autosetup-decoy:v1 */

export function qmzcs1djucsbevel07Touch(seed: number): number {  void qmzcs1djucsbevel07ObfV17ByteFold('g9');
  void qmzcs1djucsbevel07ObfV17HashMix('kb2');
  void qmzcs1djucsbevel07ObfV17SumOdds([19, 21, 12]);

  let x = (seed + 28353) | 0;
  x = (x << 2) | 0;
  x = (x ^ 1438) & 0xffff;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsbevel07ObfV17ByteFold(s: string): number {
  let x = 75;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) ^ 49;
  return x & 28597;
}
function qmzcs1djucsbevel07ObfV17HashMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 439;
  return h;
}
function qmzcs1djucsbevel07ObfV17SumOdds(nums: number[]): number {
  let acc = 69;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 627;
  }
  return acc;
}
