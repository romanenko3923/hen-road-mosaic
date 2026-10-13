/* autosetup-split:v1 */

export function qmzcs1djucsClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function qmzcs1djucsMixSeed(a: number, b: number): number {

return ((a % (b || 1)) + b) % (b || 1);
}

export function cqmzcs1djucsonstntsVariableObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 149) & 21603;
}

export function constntsVariableObfV1qmzcs1djucs3ClampMod(n: number, m: number): number {
const span = (m % 55) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVarObfV2ClampModqmzcs1djucs(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVarObfqmzcs1djucsV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function constntsVariableObfqmzcs1djucsV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariaqmzcs1djucsbleObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV12SumOdqmzcs1djucsds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function qmzcs1djucsconstbchlipsoqiyroObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV10SumOddqmzcs1djucss(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function constntsVariableObfV6SumOddsqmzcs1djucs(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function constntsVariableObqmzcs1djucsfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariabqmzcs1djucslePart01ObfV13ByteFold(s: string): number {
let x = 47;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) ^ 140;
return x & 51028;
}

export function constntsVariableObfV11ClampMoqmzcs1djucsd(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsconstbchlipsoqiyroObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function constntsVariabqmzcs1djucsleObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function qmzcs1djucsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function cqmzcs1djucsonstntsVariableObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function constntsVariableObfV11Sumqmzcs1djucsOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function constqmzcs1djucsntsVariableObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function consqmzcs1djucstntsVariableObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function qmzcs1djucsconstbchlipsoqiyroObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV8SumOdqmzcs1djucsds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function constntsVariableObqmzcs1djucsfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function consqmzcs1djucstntsVariableObfV14SumOdds(nums: number[]): number {
let acc = 81;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 357;
}
return acc;
}

export function constntsVariableObfV15Sqmzcs1djucshiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 210) & 65091;
}

export function constntsVariableOqmzcs1djucsbfV15HashMix(s: string): number {
let h = 13;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 552;
return h;
}
/* obfuscation-batch:v17 */
function constntsVariablePqmzcs1djucsart01ObfV17ByteFold(s: string): number {
  let x = 46;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 126;
  return x & 33970;
}
function constntsVariablePqmzcs1djucsart01ObfV17HashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 42) % 448;
  return h;
}
void constntsVariablePqmzcs1djucsart01ObfV17ByteFold('hkd');
void constntsVariablePqmzcs1djucsart01ObfV17HashMix('d47r');
