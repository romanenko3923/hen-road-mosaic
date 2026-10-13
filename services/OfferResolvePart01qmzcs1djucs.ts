/* autosetup-split:v1 */

export function qmzcs1djucsOfferResolveObfV15HashMix(s: string): number {
let h = 67;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 632;
return h;
}

export function qmzcs1djucsOfferResolveObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function qmzcs1djucsOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function qmzcs1djucsOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function qmzcs1djucsOfferResolvePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolvePart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsOfferResolveObfV13HashMix(s: string): number {
let h = 88;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 539;
return h;
}

export function qmzcs1djucsOfferResolveObfV14SumOdds(nums: number[]): number {
let acc = 49;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 36) % 335;
}
return acc;
}

export function qmzcs1djucsOfferResolvePart01ObfV15ByteFold(s: string): number {
let x = 80;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 133;
return x & 13916;
}

export function qmzcs1djucsOfferResolvePart01ObfV15SumOdds(nums: number[]): number {
let acc = 70;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 269;
}
return acc;
}

export function qmzcs1djucsOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function qmzcs1djucsOfferResolveObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function qmzcs1djucsOfferResolvePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function qmzcs1djucsOfferResolvePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function qmzcs1djucsOfferResolveObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function qmzcs1djucsOfferResolveObfV14ByteFold(s: string): number {
let x = 71;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 143;
return x & 39056;
}

export function qmzcs1djucsOfferResolvePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 44) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsOfferResolveObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function qmzcs1djucsOfferResolvePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function qmzcs1djucsOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function qmzcs1djucsOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolvePart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV13ClampMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsOfferResolvePart03ObfV15ClampMod(n: number, m: number): number {
const span = (m % 54) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsOfferResolveObfV16SumOdds(nums: number[]): number {
let acc = 90;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 34) % 294;
}
return acc;
}

export function qmzcs1djucsOfferResolveObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 129) & 6985;
}
/* obfuscation-batch:v17 */
function OfferResolvePart01qmzcs1djucsObfV17SumOdds(nums: number[]): number {
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 206;
  }
  return acc;
}
function OfferResolvePart01qmzcs1djucsObfV17ClampMod(n: number, m: number): number {
  const span = (m % 38) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void OfferResolvePart01qmzcs1djucsObfV17SumOdds([30, 27, 29]);
void OfferResolvePart01qmzcs1djucsObfV17ClampMod(74, 15);
