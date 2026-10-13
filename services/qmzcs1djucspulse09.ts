/* autosetup-decoy:v1 */

export function qmzcs1djucspulse09Touch(seed: number): number {  void qmzcs1djucspulse09ObfV17HashMix('dv');
  void qmzcs1djucspulse09ObfV17SumOdds([27, 8, 28]);

  let x = Math.imul(seed | 0, 97);
  x = (x ^ 8246) % 1118;
  if (x < 0) x += 1118;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucspulse09ObfV17HashMix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 10) % 367;
  return h;
}
function qmzcs1djucspulse09ObfV17SumOdds(nums: number[]): number {
  let acc = 66;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 724;
  }
  return acc;
}
