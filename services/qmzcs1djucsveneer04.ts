/* autosetup-decoy:v1 */

export function qmzcs1djucsveneer04Touch(seed: number): number {  void qmzcs1djucsveneer04ObfV17SumOdds([9, 14, 20]);
  void qmzcs1djucsveneer04ObfV17ClampMod(8, 58);
  void qmzcs1djucsveneer04ObfV17ShiftXor(19, 54);

  let x = (seed ^ 34910) | 0;
  x = (x >>> 1) ^ 411;
  x = Math.imul(x, 47) & 0xffff;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsveneer04ObfV17SumOdds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 285;
  }
  return acc;
}
function qmzcs1djucsveneer04ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 25) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function qmzcs1djucsveneer04ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 73) & 51411;
}
