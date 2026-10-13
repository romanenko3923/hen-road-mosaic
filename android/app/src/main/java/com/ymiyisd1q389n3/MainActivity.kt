package com.ymiyisd1q389n3

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.ymiyisd1q389n3.Viewporqmzcs1djucstBridge
import com.ymiyisd1q389n3.SharedPreferenceqmzcs1djucssHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String {
    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")
    return "qmzcs1djucs"
  }

  override fun createReactActivityDelegate(): ReactActivityDelegate {
    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")
    return DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
  }

  override fun onCreate(savedInstanceState: Bundle?) {    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")

    super.onCreate(savedInstanceState)
    cachePendinqmzcs1djucsgSendId(intent)
    cacqmzcs1djucshePendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")

    super.onNewIntent(intent)
    setIntent(intent)
    cachePendinqmzcs1djucsgSendId(intent)
    cacqmzcs1djucshePendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")

    if (Viewporqmzcs1djucstBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")

    Viewporqmzcs1djucstBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachePendinqmzcs1djucsgSendId(intent: Intent?) {    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")

    val sendIqmzcs1djucsd = intent?.getStringExtra("sendid")
    if (!sendIqmzcs1djucsd.isNullOrEmpty()) {
      SharedPreferenceqmzcs1djucssHelper.saveString("pendingSendId", sendIqmzcs1djucsd)
    }
  }

  private fun cacqmzcs1djucshePendingPushUrl(intent: Intent?) {    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainActivityObfV17ByteFold("tw") xor qmzcs1djucsMainActivityObfV17HashMix("5pk3")

    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      SharedPreferenceqmzcs1djucssHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}

/* obfuscation-batch:v17 */
private fun qmzcs1djucsMainActivityObfV17ByteFold(s: String): Int {
    var x = 48
    for (i in s.indices) x = (x + s[i].code * 39) xor 130
    return x and 56108
}

private fun qmzcs1djucsMainActivityObfV17HashMix(s: String): Int {
    var h = 28
    for (i in s.indices) h = (h xor s[i].code * 19) % 245
    return h
}
