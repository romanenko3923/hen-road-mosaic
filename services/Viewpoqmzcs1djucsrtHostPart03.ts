/* autosetup-split:v1 */

export function qmzcs1djucsVieObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function qmzcs1djucsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function qmzcs1djucsViewportHosObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function qmzcs1djucsViewportHostObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostPart01ObfV14HashMix(s: string): number {
let h = 9;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 393;
return h;
}
/* obfuscation-batch:v17 */
function Viewpoqmzcs1djucsrtHostPart03ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 45) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Viewpoqmzcs1djucsrtHostPart03ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 64) & 15723;
}
void Viewpoqmzcs1djucsrtHostPart03ObfV17ClampMod(40, 41);
void Viewpoqmzcs1djucsrtHostPart03ObfV17ShiftXor(38, 15);
