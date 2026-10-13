/* cf-cipher:v1 */
package com.ymiyisd1q389n3

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

class Cqmzcs1djucsCipher(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))
        return "Cqmzcs1djucsCipher"
    }

    private val keyString = "s8TiE9FPp2qRRkwYtBpzMBQApzHu"
    @Suppress("unused")
    private val ivString = "YsoeHL7gZY9p97pvdy"
    private val keyBytes = keyString.toByteArray(StandardCharsets.UTF_8)

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun encryptHex(plain: String): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        return try {
            bytesToHex(transform(plain.toByteArray(StandardCharsets.UTF_8)))
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun decryptHex(hex: String): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            String(transform(hexToBytes(normalized)), StandardCharsets.UTF_8)
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun transformHex(hex: String): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            bytesToHex(transform(hexToBytes(normalized)))
        } catch (_: Exception) {
            ""
        }
    }

    private class Wheel(val pins: IntArray, var pos: Int) {
        val len: Int = pins.size
    }

    private fun transform(data: ByteArray): ByteArray {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        val st = intArrayOf(seedState(keyBytes))
        val chi = CHI_LENS.map { fillWheel(st, it) }
        val psi = PSI_LENS.map { fillWheel(st, it) }
        val mu = MU_LENS.map { fillWheel(st, it) }
        val out = ByteArray(data.size)
        for (i in data.indices) {
            var chiB = 0
            var psiB = 0
            for (b in 0 until 8) {
                chiB = chiB or (chi[b].pins[chi[b].pos] shl b)
                psiB = psiB or (psi[b].pins[psi[b].pos] shl b)
            }
            out[i] = (data[i].toInt() xor chiB xor psiB).toByte()
            for (b in 0 until 8) {
                chi[b].pos = (chi[b].pos + 1) % chi[b].len
            }
            val mu0 = mu[0].pins[mu[0].pos]
            mu[0].pos = (mu[0].pos + 1) % mu[0].len
            if (mu0 != 0) {
                mu[1].pos = (mu[1].pos + 1) % mu[1].len
            }
            if (mu[1].pins[mu[1].pos] != 0) {
                for (b in 0 until 8) {
                    psi[b].pos = (psi[b].pos + 1) % psi[b].len
                }
            }
        }
        return out
    }

    private fun seedState(bytes: ByteArray): Int {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        var s = 0x811C9DC5.toInt()
        for (b in bytes) {
            s = s xor (b.toInt() and 0xFF)
            s *= 16777619
        }
        if (bytes.isEmpty()) s = s xor 0xA5A5A5A5.toInt()
        return s
    }

    private fun nextU32(state: IntArray): Int {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        var x = state[0]
        x = x xor (x shl 13)
        x = x xor (x ushr 17)
        x = x xor (x shl 5)
        state[0] = x
        return x
    }

    private fun fillWheel(st: IntArray, len: Int): Wheel {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        val pins = IntArray(len)
        var ones = 0
        for (i in 0 until len) {
            pins[i] = nextU32(st) and 1
            ones += pins[i]
        }
        if (ones == 0) pins[0] = 1
        if (ones == len) pins[0] = 0
        val pos = u32Mod(nextU32(st), len)
        return Wheel(pins, pos)
    }

    private fun u32Mod(value: Int, len: Int): Int {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        return ((value.toLong() and 0xFFFFFFFFL) % len.toLong()).toInt()
    }

    private fun hexToBytes(hex: String): ByteArray {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        val out = ByteArray(hex.length / 2)
        var i = 0
        while (i < out.size) {
            val at = i * 2
            out[i] = hex.substring(at, at + 2).toInt(16).toByte()
            i += 1
        }
        return out
    }

    private fun bytesToHex(bytes: ByteArray): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsCipherObfV17ShiftXor(7, 25) xor Cqmzcs1djucsCipherObfV17ByteFold("vtj") xor Cqmzcs1djucsCipherObfV17HashMix("jk5p") xor Cqmzcs1djucsCipherObfV17SumOdds(intArrayOf(25, 11, 12))

        val hex = "0123456789ABCDEF"
        val chars = CharArray(bytes.size * 2)
        for (i in bytes.indices) {
            val v = bytes[i].toInt() and 0xFF
            chars[i * 2] = hex[v ushr 4]
            chars[i * 2 + 1] = hex[v and 0x0F]
        }
        return String(chars)
    }

    companion object {
        private val CHI_LENS = intArrayOf(41, 31, 29, 26, 23, 43, 47, 37)
        private val PSI_LENS = intArrayOf(43, 47, 51, 53, 59, 61, 67, 71)
        private val MU_LENS = intArrayOf(61, 37)
    }
}

/* obfuscation-batch:v17 */
private fun Cqmzcs1djucsCipherObfV17ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 223) and 43348
}

private fun Cqmzcs1djucsCipherObfV17ByteFold(s: String): Int {
    var x = 3
    for (i in s.indices) x = (x + s[i].code * 40) xor 134
    return x and 22900
}

private fun Cqmzcs1djucsCipherObfV17HashMix(s: String): Int {
    var h = 42
    for (i in s.indices) h = (h xor s[i].code * 36) % 499
    return h
}

private fun Cqmzcs1djucsCipherObfV17SumOdds(nums: IntArray): Int {
    var acc = 69
    for (i in nums.indices) {
        val n = nums[i]
        if ((n and 1) == 0) continue
        acc = (acc + n * 24) % 572
    }
    return acc
}
