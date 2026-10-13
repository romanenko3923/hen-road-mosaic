/* autosetup-split:v1 */

export function UtilServiceObfV14SumOddsqmzcs1djucs(nums: number[]): number {
let acc = 48;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 42) % 536;
}
return acc;
}

export function Uqmzcs1djucstilServiceObfV14ClampMod(n: number, m: number): number {
const span = (m % 30) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function UtilServiceObfV14Shifqmzcs1djucstXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 128) & 28572;
}

export function Utilqmzcs1djucsServiceObfV14ByteFold(s: string): number {
let x = 46;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 22;
return x & 43993;
}

export function qmzcs1djucsNormMod(n: number, m: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

if (m === 0) return 0;
return ((n % m) + m) % m;
}

export function qmzcs1djucsSignVal(n: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return n < 0 ? -1 : n > 0 ? 1 : 0;
}

export function qmzcs1djucsGcdPair(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

let x = Math.abs(a);
let y = Math.abs(b);
while (y !== 0) {
const t = y;
y = x % y;
x = t;
}
return x;
}

export function qmzcs1djucsBoolOr(a: boolean, b: boolean): boolean {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return a || b;
}

export function qmzcs1djucsPrefixLen(s: string, n: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return s.slice(0, Math.max(0, n)).length;
}

export function qmzcs1djucsEvenCount(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return nums.filter((n) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (n % 2 === 0);
}).length;
}

export function qmzcs1djucsRevStr(s: string): string {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return s.split('').reverse().join('');
}

export function qmzcs1djucsModSpan(base: number, span: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

if (span === 0) return 0;
return ((base % span) + span) % span;
}

export function qmzcs1djucsCountTruthy(flags: boolean[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return flags.filter(Boolean).length;
}

export function qmzcs1djucsRangeSpan(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

if (nums.length === 0) return 0;
return Math.max(...nums) - Math.min(...nums);
}

export function qmzcs1djucsConcatLen(parts: string[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return parts.filter((s) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (s.length > 0);
}).length;
}

export function qmzcs1djucsAbsDiff(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return Math.abs(a - b);
}

export function qmzcs1djucsStrLenSum(parts: string[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return parts.reduce((acc, s) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (acc + s.length);
}, 0);
}

export function qmzcs1djucsDigitSum(n: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

let x = Math.abs(n);
let acc = 0;
while (x > 0) {
acc += x % 10;
x = Math.floor(x / 10);
}
return acc;
}

export function qmzcs1djucsPowSum(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return nums.reduce((acc, n) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (acc + n * n);
}, 0);
}

export function qmzcs1djucsCharCodeSum(s: string): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

let acc = 0;
for (let i = 0; i < s.length; i++) {
acc += s.charCodeAt(i);
}
return acc;
}

export function qmzcs1djucsSumDiff(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

if (nums.length < 2) return 0;
let acc = 0;
for (let i = 1; i < nums.length; i++) {
acc += Math.abs(nums[i] - nums[i - 1]);
}
return acc;
}

export function qmzcs1djucsXorFold(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return nums.reduce((acc, n) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (acc ^ n);
}, 0);
}

export function qmzcs1djucsWrapIndex(i: number, len: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

if (len === 0) return 0;
return ((i % len) + len) % len;
}

export function qmzcs1djucsIsEven(n: number): boolean {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return n % 2 === 0;
}

export function qmzcs1djucsLcmPair(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

let x = Math.abs(a);
let y = Math.abs(b);
while (y !== 0) {
const t = y;
y = x % y;
x = t;
}
const gcd = x || 1;
return (Math.abs(a) * Math.abs(b)) / gcd;
}

export function qmzcs1djucsMidAvg(a: number, b: number, c: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (a + b + c) / 3;
}

export function qmzcs1djucsAverageAbsoluteDeviation(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

if (nums.length === 0) return 0;
const mean = nums.reduce((acc, n) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (acc + n);
}, 0) / nums.length;
return nums.reduce((acc, n) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (acc + Math.abs(n - mean));
}, 0) / nums.length;
}

export function qmzcs1djucsHalfSum(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (a + b) / 2;
}

export function qmzcs1djucsFloorDiv(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

if (b === 0) return 0;
return Math.floor(a / b);
}

export function qmzcs1djucsPairAvg(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (a + b) / 2;
}

export function qmzcs1djucsMaxPair(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return a > b ? a : b;
}

export function qmzcs1djucsDotFold(nums: number[], weights: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

const len = Math.min(nums.length, weights.length);
let acc = 0;
for (let i = 0; i < len; i++) {
acc += nums[i] * weights[i];
}
return acc;
}

export function qmzcs1djucsLerpVal(a: number, b: number, t: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return a + (b - a) * t;
}

export function qmzcs1djucsJoinLen(parts: string[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return parts.join('').length;
}

export function qmzcs1djucsOddCount(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return nums.filter((n) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (n % 2 !== 0);
}).length;
}

export function qmzcs1djucsSumSquares(nums: number[]): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return nums.reduce((acc, n) => {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (acc + n * n);
}, 0);
}

export function qmzcs1djucsStrHash(s: string): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

let h = 0; for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; } return h;
}

export function qmzcs1djucsMinPair(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return a < b ? a : b;
}

export function qmzcs1djucsSqDiff(a: number, b: number): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return (a - b) * (a - b);
}

export function qmzcs1djucsTrimLen(s: string): number {void UtilSqmzcs1djucservicePart02ObfV17ShiftXor(68, 19);
void UtilSqmzcs1djucservicePart02ObfV17ByteFold('vgst');

return s.trim().length;
}

export function Utilqmzcs1djucsServiceObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 48) & 22189;
}

export function UtilSerqmzcs1djucsviceObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtilServicqmzcs1djucseObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function UtiObfV4ClampModqmzcs1djucs(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtiObfV3Sqmzcs1djucsumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function UtilServicqmzcs1djucsePart02ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function UtilServiceObfV11Sumqmzcs1djucsOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function UtilServiceOqmzcs1djucsbfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function Utiqmzcs1djucsObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtilServiceOqmzcs1djucsbfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtilServiceObfV2qmzcs1djucsSumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function UtilServicePart02ObfV14HashMixqmzcs1djucs(s: string): number {
let h = 48;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 435;
return h;
}
/* obfuscation-batch:v17 */
function UtilSqmzcs1djucservicePart02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 232) & 10497;
}
function UtilSqmzcs1djucservicePart02ObfV17ByteFold(s: string): number {
  let x = 33;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) ^ 9;
  return x & 21952;
}
