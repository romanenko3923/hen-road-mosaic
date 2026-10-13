/* autosetup-split:v1 */

export function qmzcs1djucsSignalHarvestObfV14HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 551;
return h;
}

export function qmzcs1djucsSignalHarvestObfV14ClampMod(n: number, m: number): number {
const span = (m % 12) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsSignalHarvestObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function qmzcs1djucsSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function qmzcs1djucsSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestPart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function qmzcs1djucsSignalHarvestObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function qmzcs1djucsSignalHarvestObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function qmzcs1djucsSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function qmzcs1djucsSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestPart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV13ByteFold(s: string): number {
let x = 38;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 207;
return x & 5952;
}

export function qmzcs1djucsSignalHarvestPart01ObfV14SumOdds(nums: number[]): number {
let acc = 26;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 607;
}
return acc;
}

export function qmzcs1djucsSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function qmzcs1djucsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function qmzcs1djucsSignalHarvestPart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsSignalHarvestObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function qmzcs1djucsSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function qmzcs1djucsSignalHarvestObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function qmzcs1djucsSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function qmzcs1djucsSignalHarvestObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 164) & 51888;
}

export function qmzcs1djucsSignalHarvestObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 130) & 32633;
}

export function qmzcs1djucsSignalHarvestObfV16ClampMod(n: number, m: number): number {
const span = (m % 32) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsSignalHarvestObfV16ByteFold(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 92;
return x & 34561;
}
/* obfuscation-batch:v17 */
function SignalHarvestParqmzcs1djucst01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 44) & 20582;
}
void SignalHarvestParqmzcs1djucst01ObfV17ShiftXor(66, 12);
