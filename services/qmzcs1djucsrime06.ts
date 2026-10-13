/* autosetup-decoy:v1 */

export function qmzcs1djucsrime06Touch(seed: number): number {  void qmzcs1djucsrime06ObfV17ByteFold('8zm8');

  let x = (seed + 36633) | 0;
  x = (x << 2) | 0;
  x = (x ^ 1288) & 0xffff;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsrime06ObfV17ByteFold(s: string): number {
  let x = 86;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) ^ 18;
  return x & 58245;
}
