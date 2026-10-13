package com.ymiyisd1q389n3

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

/**
 * Single host package for all app native modules.
 * Module getName() values must match JS NativeModules lookups.
 */
class Sqmzcs1djucsModuleRegistry : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Sqmzcs1djucsModuleRegistryObfV17ShiftXor(58, 48) xor Sqmzcs1djucsModuleRegistryObfV17ByteFold("3mj") xor Sqmzcs1djucsModuleRegistryObfV17HashMix("84zh") xor Sqmzcs1djucsModuleRegistryObfV17SumOdds(intArrayOf(3, 18, 11))

        return listOf(
            Hesazufohajaj(reactContext),
            Datamabec(reactContext),
            Zucinawanazis(reactContext),
            Gimuzujalejule(reactContext),
            Humecehaja(reactContext),
            Parometake(reactContext),
            Cqmzcs1djucsIntake(reactContext),
            Cqmzcs1djucsCipher(reactContext),
        )
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {        @Suppress("UNUSED_VARIABLE") val qmzcs1djucsSinkV17 = Sqmzcs1djucsModuleRegistryObfV17ShiftXor(58, 48) xor Sqmzcs1djucsModuleRegistryObfV17ByteFold("3mj") xor Sqmzcs1djucsModuleRegistryObfV17HashMix("84zh") xor Sqmzcs1djucsModuleRegistryObfV17SumOdds(intArrayOf(3, 18, 11))

        return emptyList()
    }
}

/* obfuscation-batch:v17 */
private fun Sqmzcs1djucsModuleRegistryObfV17ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 56) and 35829
}

private fun Sqmzcs1djucsModuleRegistryObfV17ByteFold(s: String): Int {
    var x = 48
    for (i in s.indices) x = (x + s[i].code * 8) xor 90
    return x and 45598
}

private fun Sqmzcs1djucsModuleRegistryObfV17HashMix(s: String): Int {
    var h = 13
    for (i in s.indices) h = (h xor s[i].code * 14) % 279
    return h
}

private fun Sqmzcs1djucsModuleRegistryObfV17SumOdds(nums: IntArray): Int {
    var acc = 83
    for (i in nums.indices) {
        val n = nums[i]
        if ((n and 1) == 0) continue
        acc = (acc + n * 12) % 797
    }
    return acc
}
