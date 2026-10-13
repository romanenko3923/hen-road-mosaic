package com.ymiyisd1q389n3

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

class Humecehaja(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsHumecehajaObfV17SumOdds(intArrayOf(6, 11, 3)) xor qmzcs1djucsHumecehajaObfV17ClampMod(15, 24) xor qmzcs1djucsHumecehajaObfV17ShiftXor(61, 63)
        return "Decifipakabogu"
    }

    @ReactMethod
    fun xaxuvazah(promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsHumecehajaObfV17SumOdds(intArrayOf(6, 11, 3)) xor qmzcs1djucsHumecehajaObfV17ClampMod(15, 24) xor qmzcs1djucsHumecehajaObfV17ShiftXor(61, 63)

        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane ushr 2
        val laneNums = intArrayOf(183, 14, 17)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 1025
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {            @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsHumecehajaObfV17SumOdds(intArrayOf(6, 11, 3)) xor qmzcs1djucsHumecehajaObfV17ClampMod(15, 24) xor qmzcs1djucsHumecehajaObfV17ShiftXor(61, 63)

            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        val started = runCatching { rusimawevazefi { value -> finish(value) } }
        if (started.isFailure) finish("")
    }

    private fun rusimawevazefi(finish: (String) -> Unit) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsHumecehajaObfV17SumOdds(intArrayOf(6, 11, 3)) xor qmzcs1djucsHumecehajaObfV17ClampMod(15, 24) xor qmzcs1djucsHumecehajaObfV17ShiftXor(61, 63)

        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(kehucolit())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun kehucolit(): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsHumecehajaObfV17SumOdds(intArrayOf(6, 11, 3)) xor qmzcs1djucsHumecehajaObfV17ClampMod(15, 24) xor qmzcs1djucsHumecehajaObfV17ShiftXor(61, 63)

        val bytes = ByteArray(16)
        java.security.SecureRandom().nextBytes(bytes)
        val alphabet = "0123456789abcdef"
        val out = StringBuilder(bytes.size * 2)
        for (byte in bytes) {
            val v = byte.toInt() and 0xff
            out.append(alphabet[v ushr 4])
            out.append(alphabet[v and 0x0f])
        }
        return out.toString()
    }

    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}

/* obfuscation-batch:v17 */
private fun qmzcs1djucsHumecehajaObfV17SumOdds(nums: IntArray): Int {
    var acc = 19
    for (i in nums.indices) {
        val n = nums[i]
        if ((n and 1) == 0) continue
        acc = (acc + n * 24) % 208
    }
    return acc
}

private fun qmzcs1djucsHumecehajaObfV17ClampMod(n: Int, m: Int): Int {
    val span = (m % 57) + 1
    val x = n % span
    return if (x < 0) x + span else x
}

private fun qmzcs1djucsHumecehajaObfV17ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 24) and 47066
}
