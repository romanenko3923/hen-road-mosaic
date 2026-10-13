/* autosetup-split:v1 */

export function qmzcs1djucsVieObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function qmzcs1djucsVieObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function qmzcs1djucsViewportHostObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function qmzcs1djucsViewportHosObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function qmzcs1djucsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function qmzcs1djucsViewportHostObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function qmzcs1djucsViewportHostObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function qmzcs1djucsViewportHostObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function qmzcs1djucsViewportHostObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function qmzcs1djucsViewportHostObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function qmzcs1djucsViewportHostObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function qmzcs1djucsViewportHostObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function qmzcs1djucsViewportHostObfV13SumOdds(nums: number[]): number {
let acc = 45;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 8) % 261;
}
return acc;
}

export function qmzcs1djucsViewportHostPart01ObfV14ClampMod(n: number, m: number): number {
const span = (m % 12) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsViewportHostObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 50) & 39681;
}
/* obfuscation-batch:v17 */
function ViewportHostPart0qmzcs1djucs3ObfV17ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 103;
  return x & 18416;
}
function ViewportHostPart0qmzcs1djucs3ObfV17HashMix(s: string): number {
  let h = 6;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 33) % 278;
  return h;
}
function ViewportHostPart0qmzcs1djucs3ObfV17SumOdds(nums: number[]): number {
  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 502;
  }
  return acc;
}
function ViewportHostPart0qmzcs1djucs3ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 51) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void ViewportHostPart0qmzcs1djucs3ObfV17ByteFold('23');
void ViewportHostPart0qmzcs1djucs3ObfV17HashMix('tj52');
void ViewportHostPart0qmzcs1djucs3ObfV17SumOdds([2, 24, 6]);
void ViewportHostPart0qmzcs1djucs3ObfV17ClampMod(77, 54);
