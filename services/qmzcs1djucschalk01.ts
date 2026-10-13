/* autosetup-decoy:v1 */

export function qmzcs1djucschalk01Touch(seed: number): number {  void qmzcs1djucschalk01ObfV17SumOdds([2, 18, 16]);
  void qmzcs1djucschalk01ObfV17ClampMod(59, 78);
  void qmzcs1djucschalk01ObfV17ShiftXor(8, 41);
  void qmzcs1djucschalk01ObfV17ByteFold('7h');

  let x = (seed + 30786) | 0;
  x = (x << 6) | 0;
  x = (x ^ 3565) & 0xffff;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucschalk01ObfV17SumOdds(nums: number[]): number {
  let acc = 50;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 327;
  }
  return acc;
}
function qmzcs1djucschalk01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 47) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function qmzcs1djucschalk01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 111) & 35216;
}
function qmzcs1djucschalk01ObfV17ByteFold(s: string): number {
  let x = 51;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) ^ 4;
  return x & 32880;
}
