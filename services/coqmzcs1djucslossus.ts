/* cipher-id:colossus */
import { NativeModules } from 'react-native';

function coqmzcs1djucsCipher() {
  return NativeModules.Cqmzcs1djucsCipher;
}

export function hexToBytes(hex: string): Uint8Array {  void coqmzcs1djucslossusObfV17ShiftXor(31, 79);

  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => {
    void coqmzcs1djucslossusObfV17ShiftXor(31, 79);
    return b.toString(16).padStart(2, '0').toUpperCase();
  }).join('');
}

export function coqmzcs1djucslossusEncryptBytes(data: Uint8Array): Uint8Array {  void coqmzcs1djucslossusObfV17ShiftXor(31, 79);

  const hex = String(coqmzcs1djucsCipher()?.transformHex(bytesToHex(data)) ?? '');
  return hexToBytes(hex);
}

export function coqmzcs1djucslossusDecryptBytes(data: Uint8Array): Uint8Array {  void coqmzcs1djucslossusObfV17ShiftXor(31, 79);

  return coqmzcs1djucslossusEncryptBytes(data);
}

export function coqmzcs1djucslossusEncryptHex(plain: string): string {  void coqmzcs1djucslossusObfV17ShiftXor(31, 79);

  try {
    return String(coqmzcs1djucsCipher().encryptHex(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function coqmzcs1djucslossusDecryptHex(hex: string): string {  void coqmzcs1djucslossusObfV17ShiftXor(31, 79);

  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(coqmzcs1djucsCipher().decryptHex(normalized) ?? '');
  } catch {
    return '';
  }
}
/* obfuscation-batch:v17 */
function coqmzcs1djucslossusObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 139) & 33101;
}
