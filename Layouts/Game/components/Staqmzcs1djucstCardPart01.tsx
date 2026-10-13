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
function Staqmzcs1djucstCardPart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 17) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Staqmzcs1djucstCardPart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 90) & 60780;
}
function Staqmzcs1djucstCardPart01ObfV17ByteFold(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 37) ^ 159;
  return x & 41542;
}
function Staqmzcs1djucstCardPart01ObfV17HashMix(s: string): number {
  let h = 54;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 23) % 775;
  return h;
}
void Staqmzcs1djucstCardPart01ObfV17ClampMod(74, 20);
void Staqmzcs1djucstCardPart01ObfV17ShiftXor(71, 31);
void Staqmzcs1djucstCardPart01ObfV17ByteFold('bg');
void Staqmzcs1djucstCardPart01ObfV17HashMix('vs');
