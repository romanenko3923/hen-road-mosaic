/* autosetup-decoy:v1 */

export function qmzcs1djucsplait03Touch(seed: number): number {  void qmzcs1djucsplait03ObfV17ShiftXor(55, 65);

  let x = (seed ^ 32638) | 0;
  x = (x >>> 6) ^ 3849;
  x = Math.imul(x, 75) & 0xffff;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsplait03ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 223) & 64276;
}
