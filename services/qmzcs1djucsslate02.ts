/* autosetup-decoy:v1 */

export function qmzcs1djucsslate02Touch(seed: number): number {  void qmzcs1djucsslate02ObfV17HashMix('9j2');

  let x = (seed ^ 34544) | 0;
  x = (x >>> 1) ^ 2474;
  x = Math.imul(x, 41) & 0xffff;
  return x;
}
/* obfuscation-batch:v17 */
function qmzcs1djucsslate02ObfV17HashMix(s: string): number {
  let h = 30;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 10) % 231;
  return h;
}
