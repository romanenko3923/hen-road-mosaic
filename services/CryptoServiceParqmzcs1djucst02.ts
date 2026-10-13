/* autosetup-split:v1 */

export function Crqmzcs1djucsyptoServiceObfV15HashMix(s: string): number {
let h = 88;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 25) % 575;
return h;
}

export function CryptoServiceObfVqmzcs1djucs10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function CryptoSqmzcs1djucserviceObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function CryptoServiceParqmzcs1djucst01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function Cqmzcs1djucsryptoServiceObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function CryptoServiceqmzcs1djucsObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServqmzcs1djucsiceObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServicePart02ObfV5HashMixqmzcs1djucs(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function CryptoServicePart02ObfV1qmzcs1djucs1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsCrypbchlipsoqiyrodObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceObfqmzcs1djucsV13ClampMod(n: number, m: number): number {
const span = (m % 29) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServicePart01ObfV15ByteFqmzcs1djucsold(s: string): number {
let x = 14;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 37) ^ 10;
return x & 28574;
}

export function CryptoServiceqmzcs1djucsPart01ObfV15ClampMod(n: number, m: number): number {
const span = (m % 14) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServiObqmzcs1djucsfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function CryptoServiceObfV6Hashqmzcs1djucsMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function CryptoServiceObfV7HashMixqmzcs1djucs(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function CryptoServicePartqmzcs1djucs01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function CryptoServiObfV1Clamqmzcs1djucspMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiObqmzcs1djucsfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceObfV8qmzcs1djucsClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function Cryptoqmzcs1djucsServiceObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function CryptoServiObfVqmzcs1djucs1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function CryptoServiceObfVqmzcs1djucs13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 167) & 57611;
}

export function Crqmzcs1djucsyptoServicePart02ObfV15SumOdds(nums: number[]): number {
let acc = 21;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 35) % 395;
}
return acc;
}

export function CryptoSqmzcs1djucserviceObfV16HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 525;
return h;
}
/* obfuscation-batch:v17 */
function CryptoServiceParqmzcs1djucst02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 22) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function CryptoServiceParqmzcs1djucst02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 226) & 65061;
}
function CryptoServiceParqmzcs1djucst02ObfV17ByteFold(s: string): number {
  let x = 22;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) ^ 85;
  return x & 45629;
}
void CryptoServiceParqmzcs1djucst02ObfV17ClampMod(6, 42);
void CryptoServiceParqmzcs1djucst02ObfV17ShiftXor(5, 7);
void CryptoServiceParqmzcs1djucst02ObfV17ByteFold('8db');
