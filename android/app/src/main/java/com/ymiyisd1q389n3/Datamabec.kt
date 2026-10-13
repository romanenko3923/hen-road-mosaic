package com.ymiyisd1q389n3

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Datamabec(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsDatamabecObfV17ClampMod(76, 24) xor qmzcs1djucsDatamabecObfV17ShiftXor(68, 3) xor qmzcs1djucsDatamabecObfV17ByteFold("gf") xor qmzcs1djucsDatamabecObfV17HashMix("w6g")
        return "Wesopitojiwi"
    }

    @ReactMethod
    fun bawugumirekega(promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsDatamabecObfV17ClampMod(76, 24) xor qmzcs1djucsDatamabecObfV17ShiftXor(68, 3) xor qmzcs1djucsDatamabecObfV17ByteFold("gf") xor qmzcs1djucsDatamabecObfV17HashMix("w6g")

        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane + 24634
        dexLane = dexLane or 48682
        if ((dexLane and 11) == 0) {
            dexLane = dexLane + 501
        }
        dexLane = dexLane * 19
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { tegucawec(reactApplicationContext) }.getOrDefault("")
        promise.resolve(dexValue)
    }

    private fun tegucawec(context: Context): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsDatamabecObfV17ClampMod(76, 24) xor qmzcs1djucsDatamabecObfV17ShiftXor(68, 3) xor qmzcs1djucsDatamabecObfV17ByteFold("gf") xor qmzcs1djucsDatamabecObfV17HashMix("w6g")

        val loaded = WebSettings.getDefaultUserAgent(context)
        return if (loaded.isNullOrEmpty()) "" else loaded
    }
}

/* obfuscation-batch:v17 */
private fun qmzcs1djucsDatamabecObfV17ClampMod(n: Int, m: Int): Int {
    val span = (m % 55) + 3
    val x = n % span
    return if (x < 0) x + span else x
}

private fun qmzcs1djucsDatamabecObfV17ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 16) and 64988
}

private fun qmzcs1djucsDatamabecObfV17ByteFold(s: String): Int {
    var x = 7
    for (i in s.indices) x = (x + s[i].code * 28) xor 126
    return x and 42327
}

private fun qmzcs1djucsDatamabecObfV17HashMix(s: String): Int {
    var h = 21
    for (i in s.indices) h = (h xor s[i].code * 6) % 241
    return h
}
