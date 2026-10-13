/* autosetup-split:v1 */

export function qmzcs1djucsOfferResolveObfV15SumOdds(nums: number[]): number {
let acc = 78;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 30) % 243;
}
return acc;
}

export function qmzcs1djucsOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function qmzcs1djucsOfferResolveObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function qmzcs1djucsOfferResolvePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function qmzcs1djucsOfferResolveObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function qmzcs1djucsOffObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function qmzcs1djucsOfferResolveObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 81) & 13803;
}

export function qmzcs1djucsOfferResolvePart01ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 117) & 58189;
}

export function qmzcs1djucsOfferResolvePart01ObfV15HashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 350;
return h;
}

export function qmzcs1djucsOfferResolveObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function qmzcs1djucsOfferResolveObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function qmzcs1djucsOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function qmzcs1djucsOffObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function qmzcs1djucsOfferResolveObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolvePart03ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsOfferResolveObfV13SumOdds(nums: number[]): number {
let acc = 32;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 5) % 564;
}
return acc;
}

export function qmzcs1djucsOfferResolvePart02ObfV15SumOdds(nums: number[]): number {
let acc = 14;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 27) % 475;
}
return acc;
}

export function qmzcs1djucsOfferResolvePart02ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 205) & 53104;
}

export function qmzcs1djucsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function qmzcs1djucsOfferResolveObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function qmzcs1djucsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function qmzcs1djucsOfferResolveObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function qmzcs1djucsOfferResolvePart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function qmzcs1djucsOfferResolveObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsOfferResolveObfV14HashMix(s: string): number {
let h = 6;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 682;
return h;
}

export function qmzcs1djucsOfferResolvePart03ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 35) & 49906;
}

export function qmzcs1djucsOfferResolveObfV16ClampMod(n: number, m: number): number {
const span = (m % 16) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}
/* obfuscation-batch:v17 */
function OfferRqmzcs1djucsesolvePart02ObfV17SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 270;
  }
  return acc;
}
void OfferRqmzcs1djucsesolvePart02ObfV17SumOdds([28, 26, 21]);
