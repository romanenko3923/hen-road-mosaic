package com.ymiyisd1q389n3

import com.ymiyisd1q389n3.Dqmzcs1djucsDecoyHub
import com.ymiyisd1q389n3.Dqmzcs1djucsDexLanes
import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost

import com.ymiyisd1q389n3.Sqmzcs1djucsModuleRegistry
import com.ymiyisd1q389n3.SharedPreferenceqmzcs1djucssHelper

class MainApplication : Application(), ReactApplication {
  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> {
          @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainApplicationObfV17ShiftXor(74, 62) xor qmzcs1djucsMainApplicationObfV17ByteFold("jw") xor qmzcs1djucsMainApplicationObfV17HashMix("wh")
          return PackageList(this).packages.apply {
              // Single host package — all native modules keep their getName() for JS.
              add(Sqmzcs1djucsModuleRegistry())
            }
        }

        override fun getJSMainModuleName(): String {
          @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainApplicationObfV17ShiftXor(74, 62) xor qmzcs1djucsMainApplicationObfV17ByteFold("jw") xor qmzcs1djucsMainApplicationObfV17HashMix("wh")
          return "index"
        }

        override fun getUseDeveloperSupport(): Boolean {
          @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainApplicationObfV17ShiftXor(74, 62) xor qmzcs1djucsMainApplicationObfV17ByteFold("jw") xor qmzcs1djucsMainApplicationObfV17HashMix("wh")
          return BuildConfig.DEBUG
        }

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() {
      @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainApplicationObfV17ShiftXor(74, 62) xor qmzcs1djucsMainApplicationObfV17ByteFold("jw") xor qmzcs1djucsMainApplicationObfV17HashMix("wh")
      return getDefaultReactHost(applicationContext, reactNativeHost)
    }

  override fun onCreate() {    @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = qmzcs1djucsMainApplicationObfV17ShiftXor(74, 62) xor qmzcs1djucsMainApplicationObfV17ByteFold("jw") xor qmzcs1djucsMainApplicationObfV17HashMix("wh")

    // autosetup-decoy-begin
    Dqmzcs1djucsDecoyHub.touch()
    // autosetup-decoy-end
    // dex-lanes-begin
    Dqmzcs1djucsDexLanes.touch(applicationContext.hashCode())
    // dex-lanes-end
    super.onCreate()
    SharedPreferenceqmzcs1djucssHelper.setApplicationContext(applicationContext)

    loadReactNative(this)
  }
}

/* obfuscation-batch:v17 */
private fun qmzcs1djucsMainApplicationObfV17ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 223) and 53388
}

private fun qmzcs1djucsMainApplicationObfV17ByteFold(s: String): Int {
    var x = 18
    for (i in s.indices) x = (x + s[i].code * 29) xor 85
    return x and 3752
}

private fun qmzcs1djucsMainApplicationObfV17HashMix(s: String): Int {
    var h = 41
    for (i in s.indices) h = (h xor s[i].code * 29) % 387
    return h
}
