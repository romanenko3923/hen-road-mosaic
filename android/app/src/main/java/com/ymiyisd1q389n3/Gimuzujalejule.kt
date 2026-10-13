package com.ymiyisd1q389n3

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Gimuzujalejule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsGimuzujalejuleObfV17SumOdds(intArrayOf(3, 19, 12)) xor qmzcs1djucsGimuzujalejuleObfV17ClampMod(28, 8) xor qmzcs1djucsGimuzujalejuleObfV17ShiftXor(4, 30)
        return "Fetowebos"
    }

    @ReactMethod
    fun fogudewitokes(url: String, promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsGimuzujalejuleObfV17SumOdds(intArrayOf(3, 19, 12)) xor qmzcs1djucsGimuzujalejuleObfV17ClampMod(28, 8) xor qmzcs1djucsGimuzujalejuleObfV17ShiftXor(4, 30)

        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity == null || url.isBlank()) {
                promise.resolve(false)
                return
            }

            Viewporqmzcs1djucstBridge.fogudewitokes(activity, url)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }

    @ReactMethod
    fun deboxarukob(promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsGimuzujalejuleObfV17SumOdds(intArrayOf(3, 19, 12)) xor qmzcs1djucsGimuzujalejuleObfV17ClampMod(28, 8) xor qmzcs1djucsGimuzujalejuleObfV17ShiftXor(4, 30)

        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity != null) {
                Viewporqmzcs1djucstBridge.deboxarukob(activity)
            }
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }
}

/* obfuscation-batch:v17 */
private fun qmzcs1djucsGimuzujalejuleObfV17SumOdds(nums: IntArray): Int {
    var acc = 41
    for (i in nums.indices) {
        val n = nums[i]
        if ((n and 1) == 0) continue
        acc = (acc + n * 5) % 272
    }
    return acc
}

private fun qmzcs1djucsGimuzujalejuleObfV17ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 5
    val x = n % span
    return if (x < 0) x + span else x
}

private fun qmzcs1djucsGimuzujalejuleObfV17ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 23) and 11562
}
