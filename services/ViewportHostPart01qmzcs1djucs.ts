/* autosetup-split:v1 */

export function qmzcs1djucsViewportHostObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 126) & 41627;
}

export function qmzcs1djucsViewportHostObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function qmzcs1djucsViewportHostObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function qmzcs1djucsViewportHostObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function qmzcs1djucsViewportHostObfV15SumOdds(nums: number[]): number {
let acc = 84;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 16) % 392;
}
return acc;
}
/* obfuscation-batch:v17 */
function ViewportHostPart01qmzcs1djucsObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 125) & 4018;
}
function ViewportHostPart01qmzcs1djucsObfV17ByteFold(s: string): number {
  let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 137;
  return x & 50395;
}
function ViewportHostPart01qmzcs1djucsObfV17HashMix(s: string): number {
  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 413;
  return h;
}
function ViewportHostPart01qmzcs1djucsObfV17SumOdds(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 797;
  }
  return acc;
}
void ViewportHostPart01qmzcs1djucsObfV17ShiftXor(41, 77);
void ViewportHostPart01qmzcs1djucsObfV17ByteFold('98');
void ViewportHostPart01qmzcs1djucsObfV17HashMix('8m4m');
void ViewportHostPart01qmzcs1djucsObfV17SumOdds([2, 12, 21]);
