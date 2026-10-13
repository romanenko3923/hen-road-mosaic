/* autosetup-decoy:v1 */

export function qmzcs1djucsloam10Touch(seed: number): number {  void qmzcs1djucsloam10ObfV17HashMix('vr26');
  void qmzcs1djucsloam10ObfV17SumOdds([23, 6, 3]);
  void qmzcs1djucsloam10ObfV17ClampMod(12, 61);
  void qmzcs1djucsloam10ObfV17ShiftXor(59, 36);

  const tag = "qmzcs1djucsloam10Touch";
  let x = (seed ^ 38376) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 41) & 0xffff;
  }
  return x ^ 724;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsloam10ObfV17HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 333;
  return h;
}
function qmzcs1djucsloam10ObfV17SumOdds(nums: number[]): number {
  let acc = 20;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 199;
  }
  return acc;
}
function qmzcs1djucsloam10ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 5) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function qmzcs1djucsloam10ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 20) & 23990;
}
