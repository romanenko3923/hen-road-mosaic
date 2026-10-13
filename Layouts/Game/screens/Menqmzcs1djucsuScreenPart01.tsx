/* autosetup-split:v1 */

export function qmzcs1djucsGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function qmzcs1djucsGameFoldRange(nuqmzcs1djucsms: number[]): number {
return nuqmzcs1djucsms.reduce((aqmzcs1djucscc, n) => aqmzcs1djucscc + n, 0);
}

export function qmzcs1djucsGameClampSpan(n: number, lqmzcs1djucso: number, hqmzcs1djucsi: number): number {
return n < lqmzcs1djucso ? lqmzcs1djucso : n > hqmzcs1djucsi ? hqmzcs1djucsi : n;
}
/* obfuscation-batch:v17 */
function Menqmzcs1djucsuScreenPart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 219) & 11989;
}
void Menqmzcs1djucsuScreenPart01ObfV17ShiftXor(36, 34);
