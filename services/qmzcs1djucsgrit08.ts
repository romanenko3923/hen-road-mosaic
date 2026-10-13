/* autosetup-decoy:v1 */

export function qmzcs1djucsgrit08Touch(seed: number): number {  void qmzcs1djucsgrit08ObfV17SumOdds([24, 20, 29]);
  void qmzcs1djucsgrit08ObfV17ClampMod(16, 24);

  let x = (seed ^ 64921) & 0xffff;
  x = (x * 43 + 463) % 65521;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsgrit08ObfV17SumOdds(nums: number[]): number {
  let acc = 5;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 150;
  }
  return acc;
}
function qmzcs1djucsgrit08ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 20) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
