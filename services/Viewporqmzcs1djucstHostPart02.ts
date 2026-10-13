/* autosetup-split:v1 */

export function qmzcs1djucsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function qmzcs1djucsViewportHostObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function qmzcs1djucsViewportHostObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function qmzcs1djucsVieObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsVieObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function qmzcs1djucsViewportHosObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function qmzcs1djucsViewportHosObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function qmzcs1djucsViewportHostObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsViewportHostObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function qmzcs1djucsViewportHostObfV13HashMix(s: string): number {
let h = 83;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 724;
return h;
}

export function qmzcs1djucsViewportHostPart01ObfV14SumOdds(nums: number[]): number {
let acc = 59;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 13) % 534;
}
return acc;
}

export function qmzcs1djucsViewportHostObfV15ClampMod(n: number, m: number): number {
const span = (m % 52) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsViewportHostObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 70) & 6927;
}
/* obfuscation-batch:v17 */
function Viewporqmzcs1djucstHostPart02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 14) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Viewporqmzcs1djucstHostPart02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 236) & 53086;
}
function Viewporqmzcs1djucstHostPart02ObfV17ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 88;
  return x & 1721;
}
void Viewporqmzcs1djucstHostPart02ObfV17ClampMod(77, 6);
void Viewporqmzcs1djucstHostPart02ObfV17ShiftXor(47, 14);
void Viewporqmzcs1djucstHostPart02ObfV17ByteFold('33v');
