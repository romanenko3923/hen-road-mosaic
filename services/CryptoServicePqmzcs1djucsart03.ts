/* autosetup-split:v1 */

export function CryptoServiceObfV11HashMqmzcs1djucsix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function CryptoServicePart02ObfV6SumOddqmzcs1djucss(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function qmzcs1djucsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function CryptoServicePart02ObfV11Hasqmzcs1djucshMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function CryptoServiObfV2Hqmzcs1djucsashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function CryptoServiceOqmzcs1djucsbfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function Crqmzcs1djucsyptoServiceObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function CryptoServiceParqmzcs1djucst01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiObfqmzcs1djucsV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function CryptoServicePart01ObfV6HashMqmzcs1djucsix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function CryptoServiceObfqmzcs1djucsV13ByteFold(s: string): number {
let x = 75;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 43) ^ 204;
return x & 62662;
}

export function Cryptoqmzcs1djucsServicePart01ObfV15HashMix(s: string): number {
let h = 87;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 123;
return h;
}

export function CryptoServicePart01ObfV5Sqmzcs1djucsumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function CryptoServicePartqmzcs1djucs02ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function Crypqmzcs1djucstoServiceObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function Cryqmzcs1djucsptoServiceObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsCrypbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function CryptoServiceObfV6SumOddqmzcs1djucss(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function CryptoServqmzcs1djucsicePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function Cryqmzcs1djucsptoServicePart02ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function qmzcs1djucsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function CryptoServiceObfV9ClampModqmzcs1djucs(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function Cryptoqmzcs1djucsServiceObfV14SumOdds(nums: number[]): number {
let acc = 88;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 35) % 382;
}
return acc;
}

export function CryptoSeqmzcs1djucsrvicePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 16) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function Cryptqmzcs1djucsoServiceObfV16SumOdds(nums: number[]): number {
let acc = 71;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 16) % 362;
}
return acc;
}
/* obfuscation-batch:v17 */
function CryptoServicePqmzcs1djucsart03ObfV17HashMix(s: string): number {
  let h = 76;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 733;
  return h;
}
function CryptoServicePqmzcs1djucsart03ObfV17SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 25) % 425;
  }
  return acc;
}
function CryptoServicePqmzcs1djucsart03ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 34) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function CryptoServicePqmzcs1djucsart03ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 62) & 41721;
}
void CryptoServicePqmzcs1djucsart03ObfV17HashMix('pnsw');
void CryptoServicePqmzcs1djucsart03ObfV17SumOdds([2, 26, 29]);
void CryptoServicePqmzcs1djucsart03ObfV17ClampMod(58, 60);
void CryptoServicePqmzcs1djucsart03ObfV17ShiftXor(80, 47);
