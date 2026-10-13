/* autosetup-split:v1 */

export function qmzcs1djucsSignalHarvestObfV14SumOdds(nums: number[]): number {
let acc = 76;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 16) % 573;
}
return acc;
}

export function qmzcs1djucsSignalHarvestObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 163) & 4216;
}

export function qmzcs1djucsSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function qmzcs1djucsSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsSignalHarvestObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function qmzcs1djucsSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function qmzcs1djucsSignalHarvestPart03ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function qmzcs1djucsSignalHarvestObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function qmzcs1djucsSignalHarvestPart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV13ClampMod(n: number, m: number): number {
const span = (m % 64) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsSignalHarvestPart01ObfV14HashMix(s: string): number {
let h = 42;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 157;
return h;
}

export function qmzcs1djucsSignalHarvestObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function qmzcs1djucsSignalHarvestObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function qmzcs1djucsSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function qmzcs1djucsSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function qmzcs1djucsSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function qmzcs1djucsSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function qmzcs1djucsSignalHarvestPart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function qmzcs1djucsSignalHarvestPart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsSignalHarvestObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function qmzcs1djucsSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsSignalHarvestPart02ObfV14SumOdds(nums: number[]): number {
let acc = 50;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 32) % 757;
}
return acc;
}

export function qmzcs1djucsSignalHarvestObfV16SumOdds(nums: number[]): number {
let acc = 48;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 29) % 454;
}
return acc;
}

export function qmzcs1djucsSignalHarvestObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 149) & 23102;
}
/* obfuscation-batch:v17 */
function SignalHarvesqmzcs1djucstPart02ObfV17SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 275;
  }
  return acc;
}
function SignalHarvesqmzcs1djucstPart02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 54) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvesqmzcs1djucstPart02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 79) & 52080;
}
function SignalHarvesqmzcs1djucstPart02ObfV17ByteFold(s: string): number {
  let x = 73;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 184;
  return x & 32021;
}
void SignalHarvesqmzcs1djucstPart02ObfV17SumOdds([28, 23, 7]);
void SignalHarvesqmzcs1djucstPart02ObfV17ClampMod(2, 2);
void SignalHarvesqmzcs1djucstPart02ObfV17ShiftXor(55, 21);
void SignalHarvesqmzcs1djucstPart02ObfV17ByteFold('5h');
