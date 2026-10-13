/* autosetup-split:v1 */

export function Cryqmzcs1djucsptoServiceObfV15ByteFold(s: string): number {
let x = 62;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 11;
return x & 33422;
}

export function qmzcs1djucsCrypbchlipsoqiyrodObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function CryptoServiceObqmzcs1djucsfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function CryptoServicqmzcs1djucsePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsCrypbchlipsoqiyrodObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function Cryptqmzcs1djucsoServicePart02ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function Crypqmzcs1djucstoServiceObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function qmzcs1djucsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function qmzcs1djucsCrypbchlipsoqiyrodObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function Cryqmzcs1djucsptoServicePart02ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoSqmzcs1djucserviceObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function CryptoServicqmzcs1djucseObfV14ClampMod(n: number, m: number): number {
const span = (m % 49) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServqmzcs1djucsicePart01ObfV15SumOdds(nums: number[]): number {
let acc = 31;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 30) % 384;
}
return acc;
}

export function CryptoServiceqmzcs1djucsPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoSqmzcs1djucserviceObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function qmzcs1djucsCrypbchlipsoqiyrodObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function CryptoServicePart01ObfV5Clamqmzcs1djucspMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceObqmzcs1djucsfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function CryptoServqmzcs1djucsiceObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceParqmzcs1djucst01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function Cryptoqmzcs1djucsServiceObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function Crqmzcs1djucsyptoServiceObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceObqmzcs1djucsfV13SumOdds(nums: number[]): number {
let acc = 65;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 20) % 580;
}
return acc;
}

export function CryptoServiceObfV14ShiftXqmzcs1djucsor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 6) & 3012;
}

export function CryptoServicePart02ObfV15Shqmzcs1djucsiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 57) & 6878;
}

export function CryptoServiceObfV16Clampqmzcs1djucsMod(n: number, m: number): number {
const span = (m % 59) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}
/* obfuscation-batch:v17 */
function CryptoSerqmzcs1djucsvicePart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 29) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function CryptoSerqmzcs1djucsvicePart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 61) & 16472;
}
function CryptoSerqmzcs1djucsvicePart01ObfV17ByteFold(s: string): number {
  let x = 21;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 30;
  return x & 51033;
}
function CryptoSerqmzcs1djucsvicePart01ObfV17HashMix(s: string): number {
  let h = 85;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 794;
  return h;
}
void CryptoSerqmzcs1djucsvicePart01ObfV17ClampMod(56, 70);
void CryptoSerqmzcs1djucsvicePart01ObfV17ShiftXor(47, 66);
void CryptoSerqmzcs1djucsvicePart01ObfV17ByteFold('wm');
void CryptoSerqmzcs1djucsvicePart01ObfV17HashMix('ttrp');
