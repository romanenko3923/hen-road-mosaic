/* autosetup-split:v1 */

export function constntsVariqmzcs1djucsableObfV13ByteFold(s: string): number {
let x = 42;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 137;
return x & 37532;
}

export function constntsVariableObfV13HashMqmzcs1djucsix(s: string): number {
let h = 9;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 803;
return h;
}

export function constntsVarqmzcs1djucsiableObfV13SumOdds(nums: number[]): number {
let acc = 40;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 21) % 331;
}
return acc;
}

export function consqmzcs1djucstntsVariableObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function constntsVarObfV1Suqmzcs1djucsmOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function constntsVariaqmzcs1djucsbleObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVarObfV2HashMiqmzcs1djucsx(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function constntsVaqmzcs1djucsriablePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function constnqmzcs1djucstsVarObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function constntsVariableObfqmzcs1djucsV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function constntsVariableObfqmzcs1djucsV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function constntsVariableObfV7Hashqmzcs1djucsMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function constntsVariableObfV12Haqmzcs1djucsshMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function constntsVariablePqmzcs1djucsart01ObfV13HashMix(s: string): number {
let h = 40;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 207;
return h;
}

export function constntsVariableObfV6qmzcs1djucsHashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function constntsVariableObfV7SumOddqmzcs1djucss(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function constntsVarObfVqmzcs1djucs1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV5Clamqmzcs1djucspMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constqmzcs1djucsntsVariablePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsconstbchlipsoqiyroObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function constntqmzcs1djucssVariableObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsconstbchlipsoqiyroObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function qmzcs1djucsconstbchlipsoqiyroObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function constntsVqmzcs1djucsariablePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function constntsVarqmzcs1djucsiablePart02ObfV13SumOdds(nums: number[]): number {
let acc = 33;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 5) % 805;
}
return acc;
}

export function constntsVariableObfV15Clampqmzcs1djucsMod(n: number, m: number): number {
const span = (m % 23) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cqmzcs1djucsonstntsVariableObfV15ByteFold(s: string): number {
let x = 75;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 205;
return x & 20524;
}
/* obfuscation-batch:v17 */
function constntsVariaqmzcs1djucsblePart02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 14) & 9409;
}
function constntsVariaqmzcs1djucsblePart02ObfV17ByteFold(s: string): number {
  let x = 64;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) ^ 65;
  return x & 38689;
}
function constntsVariaqmzcs1djucsblePart02ObfV17HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 8) % 498;
  return h;
}
void constntsVariaqmzcs1djucsblePart02ObfV17ShiftXor(16, 64);
void constntsVariaqmzcs1djucsblePart02ObfV17ByteFold('kkk');
void constntsVariaqmzcs1djucsblePart02ObfV17HashMix('9f');
