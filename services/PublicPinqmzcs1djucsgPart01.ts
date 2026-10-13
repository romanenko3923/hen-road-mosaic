/* autosetup-split:v1 */

export function qmzcs1djucsPublicPingObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 215) & 24601;
}

export function qmzcs1djucsPublicPingObfV14HashMix(s: string): number {
let h = 31;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 200;
return h;
}

export function qmzcs1djucsPublicPingObfV14SumOdds(nums: number[]): number {
let acc = 26;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 42) % 388;
}
return acc;
}

export function qmzcs1djucsPublicPingObfV15SumOdds(nums: number[]): number {
let acc = 73;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 25) % 612;
}
return acc;
}

export function qmzcs1djucsPublicPingObfV15ClampMod(n: number, m: number): number {
const span = (m % 43) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsPublicPingObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 237) & 30457;
}

export function qmzcs1djucsPublicPingObfV16ClampMod(n: number, m: number): number {
const span = (m % 60) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function qmzcs1djucsPublicPingObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 188) & 11575;
}
/* obfuscation-batch:v17 */
function PublicPinqmzcs1djucsgPart01ObfV17HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 414;
  return h;
}
function PublicPinqmzcs1djucsgPart01ObfV17SumOdds(nums: number[]): number {
  let acc = 65;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 521;
  }
  return acc;
}
function PublicPinqmzcs1djucsgPart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 32) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void PublicPinqmzcs1djucsgPart01ObfV17HashMix('kn');
void PublicPinqmzcs1djucsgPart01ObfV17SumOdds([21, 9, 5]);
void PublicPinqmzcs1djucsgPart01ObfV17ClampMod(18, 81);
