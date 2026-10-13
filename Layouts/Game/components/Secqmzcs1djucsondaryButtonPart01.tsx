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
function Secqmzcs1djucsondaryButtonPart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 54) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Secqmzcs1djucsondaryButtonPart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 163) & 53290;
}
void Secqmzcs1djucsondaryButtonPart01ObfV17ClampMod(35, 5);
void Secqmzcs1djucsondaryButtonPart01ObfV17ShiftXor(51, 31);
