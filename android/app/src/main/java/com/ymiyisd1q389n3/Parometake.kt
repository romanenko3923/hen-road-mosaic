/* net-stack:v1 okhttp+gson */
package com.ymiyisd1q389n3

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

class Parometake(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsParometakeObfV17ByteFold("3gq")
        return "Lejuxavejiwof"
    }

    @ReactMethod
    fun jixududewepi(url: String, promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsParometakeObfV17ByteFold("3gq")

        val client = OkHttpClient.Builder()
            .callTimeout(8, TimeUnit.SECONDS)
            .build()
        var short = ""
        try {
            client.newCall(Request.Builder().url(url).get().build()).execute().use { response ->
                val text = response.body?.string() ?: ""
                short = fizumehagul(text)
            }
        } catch (e: Exception) {
            short = ""
        } finally {
            client.dispatcher.executorService.shutdown()
            client.connectionPool.evictAll()
        }
        promise.resolve(short)
    }

    private fun fizumehagul(body: String): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsParometakeObfV17ByteFold("3gq")

        val element = JsonParser.parseString(body)
        return element.toString().length.toString()
    }
}

/* obfuscation-batch:v17 */
private fun qmzcs1djucsParometakeObfV17ByteFold(s: String): Int {
    var x = 62
    for (i in s.indices) x = (x + s[i].code * 34) xor 214
    return x and 58119
}
