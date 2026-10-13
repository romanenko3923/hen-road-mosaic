/* autosetup-split:v1 */

export function qmzcs1djucsGatePipelineObfV14ClampMod(n: number, m: number): number {
const span = (m % 14) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsGatePipelineObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 118) & 55874;
}

export function qmzcs1djucsGatePipelineObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 87) & 61133;
}

export function qmzcs1djucsGatePipelineObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsGatePipelineObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelinObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function qmzcs1djucsGatePipelineObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function qmzcs1djucsGatePipelineObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function qmzcs1djucsGatePipelinObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function qmzcs1djucsGatObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function qmzcs1djucsGatePipelineObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsGatePipelineObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function qmzcs1djucsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function qmzcs1djucsGatePipelineObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelinObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelinObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function qmzcs1djucsGatePipelinePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsGatePipelinePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV13SumOdds(nums: number[]): number {
let acc = 63;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 36) % 287;
}
return acc;
}

export function qmzcs1djucsGatePipelinePart01ObfV13ClampMod(n: number, m: number): number {
const span = (m % 12) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsGatePipelinePart01ObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 207) & 8597;
}

export function qmzcs1djucsGatePipelineObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsGatePipelineObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function qmzcs1djucsGatObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function qmzcs1djucsGatePipelinObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function qmzcs1djucsGatObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function qmzcs1djucsGatObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function qmzcs1djucsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function qmzcs1djucsGatePipelineObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelinePart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function qmzcs1djucsGatePipelineObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelinePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function qmzcs1djucsGatePipelinObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function qmzcs1djucsGatObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function qmzcs1djucsGatePipelineObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function qmzcs1djucsGatePipelineObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function qmzcs1djucsGatePipelineObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function qmzcs1djucsGatePipelinePart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelineObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function qmzcs1djucsGatePipelinePart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsGatePipelineObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function qmzcs1djucsGatePipelineObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsGatePipelinePart02ObfV13ByteFold(s: string): number {
let x = 57;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) ^ 40;
return x & 64880;
}

export function qmzcs1djucsGatePipelinePart02ObfV13HashMix(s: string): number {
let h = 50;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 529;
return h;
}

export function qmzcs1djucsGatePipelinePart02ObfV13SumOdds(nums: number[]): number {
let acc = 54;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 30) % 254;
}
return acc;
}

export function qmzcs1djucsGatePipelinePart02ObfV13ClampMod(n: number, m: number): number {
const span = (m % 51) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsGatePipelinePart01ObfV14HashMix(s: string): number {
let h = 77;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 29) % 389;
return h;
}

export function qmzcs1djucsGatePipelinePart01ObfV14SumOdds(nums: number[]): number {
let acc = 29;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 7) % 344;
}
return acc;
}

export function qmzcs1djucsGatePipelinePart01ObfV14ClampMod(n: number, m: number): number {
const span = (m % 22) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsGatePipelinePart01ObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 226) & 11943;
}

export function qmzcs1djucsGatePipelineObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 153) & 26372;
}

export function qmzcs1djucsGatePipelineObfV15ByteFold(s: string): number {
let x = 36;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 121;
return x & 12689;
}

export function qmzcs1djucsGatePipelineObfV15HashMix(s: string): number {
let h = 31;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 320;
return h;
}

export function qmzcs1djucsGatePipelineObfV16SumOdds(nums: number[]): number {
let acc = 39;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 22) % 777;
}
return acc;
}

export function qmzcs1djucsGatePipelineObfV16ClampMod(n: number, m: number): number {
const span = (m % 53) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}
/* obfuscation-batch:v17 */
function GatePiqmzcs1djucspelinePart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 63) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function GatePiqmzcs1djucspelinePart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 77) & 10148;
}
function GatePiqmzcs1djucspelinePart01ObfV17ByteFold(s: string): number {
  let x = 60;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 148;
  return x & 55345;
}
void GatePiqmzcs1djucspelinePart01ObfV17ClampMod(29, 39);
void GatePiqmzcs1djucspelinePart01ObfV17ShiftXor(16, 6);
void GatePiqmzcs1djucspelinePart01ObfV17ByteFold('vjb7');
