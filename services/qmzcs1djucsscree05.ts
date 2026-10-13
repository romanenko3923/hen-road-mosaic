/* autosetup-decoy:v1 */

export function qmzcs1djucsscree05Touch(seed: number): number {  void qmzcs1djucsscree05ObfV17HashMix('qwz');
  void qmzcs1djucsscree05ObfV17SumOdds([27, 16, 3]);
  void qmzcs1djucsscree05ObfV17ClampMod(56, 52);

  let x = Math.imul(seed | 0, 53);
  x = (x ^ 56524) % 2211;
  if (x < 0) x += 2211;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsscree05ObfV17HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 23) % 387;
  return h;
}
function qmzcs1djucsscree05ObfV17SumOdds(nums: number[]): number {
  let acc = 89;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 253;
  }
  return acc;
}
function qmzcs1djucsscree05ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 49) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
