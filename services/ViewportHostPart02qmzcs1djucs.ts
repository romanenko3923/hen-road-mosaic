/* autosetup-split:v1 */

export function qmzcs1djucsVieObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function qmzcs1djucsViewportHosObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function qmzcs1djucsViewportHosObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV15ByteFold(s: string): number {
let x = 29;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 170;
return x & 5709;
}
/* obfuscation-batch:v17 */
function ViewportHostPart02qmzcs1djucsObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 127) & 43319;
}
void ViewportHostPart02qmzcs1djucsObfV17ShiftXor(2, 3);
