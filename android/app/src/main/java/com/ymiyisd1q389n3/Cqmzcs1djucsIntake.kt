/* cf-intake:v1 */
package com.ymiyisd1q389n3

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

class Cqmzcs1djucsIntake(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")
        return "Cqmzcs1djucsIntake"
    }

    @ReactMethod
    fun assembleIntake(fields: ReadableArray, bodyPlain: String, promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        try {
            promise.resolve(assemble(fields, bodyPlain))
        } catch (e: Exception) {
            promise.resolve("{\"cookie\":\"0\",\"header\":\"0\",\"body\":\"\"}")
        }
    }

    @ReactMethod
    fun mapInitResponse(json: String, promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        try {
            promise.resolve(mapResponse(JSONObject(if (json.isEmpty()) "{}" else json)))
        } catch (e: Exception) {
            val empty = Arguments.createMap()
            empty.putNull("redirectUrl")
            empty.putNull("redirectUrlInitial")
            empty.putNull("error")
            empty.putBoolean("blockUser", false)
            promise.resolve(empty)
        }
    }

    @ReactMethod
    fun postIntake(baseUrl: String, dataValue: String, headerValue: String, body: String, promise: Promise) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        Thread {
            try {
                val connection = (URL(workerUrl(baseUrl)).openConnection() as HttpURLConnection)
                connection.requestMethod = "POST"
                connection.connectTimeout = 25000
                connection.readTimeout = 25000
                connection.doOutput = true
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                if (dataValue.isNotEmpty()) {
                    connection.setRequestProperty("Cookie", "tehapu" + "=" + dataValue)
                }
                if (headerValue.isNotEmpty()) {
                    connection.setRequestProperty("X-Ko", headerValue)
                }
                connection.setRequestProperty("Accept", "text/plain, */*")
                connection.outputStream.use { stream ->
                    stream.write(body.toByteArray(Charsets.UTF_8))
                }
                val code = connection.responseCode
                val stream = if (code in 200..299) connection.inputStream else connection.errorStream
                val text = stream?.bufferedReader()?.use { it.readText() } ?: ""
                promise.resolve(text)
            } catch (_: Exception) {
                promise.resolve("")
            }
        }.start()
    }

    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("adId", "pad", "event", "appId", "naming")
    private val headerLayout = arrayOf("pad", "session_id", "locale", "pad", "app_version", "oneLink", "pad")
    private val dummyBodyKeys = arrayOf("giwi", "zehomuq", "sodubiq", "nogaf")
    private val extraQuery = linkedMapOf("hu" to "noneru", "saz" to "suna")
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "body", "adId" to "cookie", "pushToken" to "body", "referer" to "body", "oneLink" to "header", "naming" to "cookie", "userAgent" to "body", "app_version" to "header", "androidId" to "body", "event" to "cookie", "device_model" to "body", "manufacturer" to "body", "locale" to "header", "timezone" to "body", "network" to "body", "screen" to "body", "session_id" to "header", "play_integrity_token" to "body")

    private fun assemble(fields: ReadableArray, bodyPlain: String): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        val values = LinkedHashMap<String, String>()
        for (pair in parseForm(bodyPlain)) {
            values[pair.first] = pair.second
        }
        for (index in requiredFields.indices) {
            val key = requiredFields[index]
            val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
            if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
        }
        val cookie = packPipe(cookieLayout, values)
        val header = packPipe(headerLayout, values)
        val bodyParts = ArrayList<String>()
        for ((key, value) in values) {
            if (dummyBodyKeys.contains(key)) continue
            val route = fieldRoutes[key]
            if (route != null && route != "body") continue
            bodyParts.add(enc(key) + "=" + enc(value))
        }
        dummyBodyKeys.forEachIndexed { index, key ->
            bodyParts.add(enc(key) + "=" + enc((index + bodyPlain.length).toString()))
        }
        val json = JSONObject()
        json.put("cookie", cookie)
        json.put("header", header)
        json.put("body", bodyParts.joinToString("&"))
        return json.toString()
    }

    private fun packPipe(layout: Array<String>, values: Map<String, String>): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        if (layout.isEmpty()) return ""
        val out = ArrayList<String>(layout.size)
        var pad = 0
        for (slot in layout) {
            if (slot == "pad") {
                out.add("p" + pad.toString(16) + values.size)
                pad += 1
            } else {
                out.add(values[slot] ?: "")
            }
        }
        return out.joinToString("|")
    }

    private fun parseForm(plain: String): List<Pair<String, String>> {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        if (plain.isEmpty()) return emptyList()
        return plain.split("&").mapNotNull { part ->
            if (part.isEmpty()) return@mapNotNull null
            val at = part.indexOf("=")
            if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
        }
    }

    private fun enc(value: String): String {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")
        return URLEncoder.encode(value, "UTF-8")
    }

    private fun workerUrl(base: String): String {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        val root = base.trimEnd('/')
        val params = extraQuery.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        return root + "/hohic" + if (params.isEmpty()) "" else "?" + params
    }

    private fun mapResponse(obj: JSONObject): com.facebook.react.bridge.WritableMap {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        val map = Arguments.createMap()
        writeNullable(map, "redirectUrl", pick(obj, "mi", "redirectUrl"))
        writeNullable(map, "redirectUrlInitial", pick(obj, "hite", "redirectUrlInitial"))
        writeNullable(map, "error", pick(obj, "zej", "error"))
        map.putBoolean("blockUser", asBool(pickRaw(obj, "cag", "blockUser")))
        return map
    }

    private fun writeNullable(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        if (value == null) map.putNull(key) else map.putString(key, value)
    }

    private fun pick(obj: JSONObject, alias: String, fallback: String): String? {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        val raw = pickRaw(obj, alias, fallback) ?: return null
        val text = raw.toString()
        return if (text.isEmpty()) null else text
    }

    private fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")

        if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
        if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
        return null
    }

    private fun asBool(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Cqmzcs1djucsIntakeObfV17ByteFold("d6")
        return when (value) {
        null -> false
        is Boolean -> value
        is Number -> value.toDouble() != 0.0
        is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
        else -> true
    }
    }
}

/* obfuscation-batch:v17 */
private fun Cqmzcs1djucsIntakeObfV17ByteFold(s: String): Int {
    var x = 81
    for (i in s.indices) x = (x + s[i].code * 17) xor 57
    return x and 3436
}
