/* dex-lanes:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsDexLanes {
    fun lane00(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 4
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(157, 135, 22)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 30226
        val laneWord = "hklh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane01(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(22, 20, 179)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 59540
        dexLane = dexLane shl 7
        dexLane = dexLane or 45433
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane02(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1125
            1 -> dexLane + 3284
            else -> dexLane + 3510
        }
        val laneWord = "dfia"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 41
        dexLane = dexLane shl 10
        if ((dexLane and 28) == 0) {
            dexLane = dexLane + 2947
        }
        return dexLane
    }

    fun lane03(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 1
        dexLane = dexLane * 28
        dexLane = dexLane % 5
        dexLane = dexLane or 2801
        return dexLane
    }

    fun lane04(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 57531
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 613
            1 -> dexLane + 2175
            else -> dexLane + 3562
        }
        dexLane = dexLane * 40
        val laneWord = "idke"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 191
        }
        return dexLane
    }

    fun lane05(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 34
        val laneWord = "bdkk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 3003
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 11
        return dexLane
    }

    fun lane06(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(99, 142, 162)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3722
            1 -> dexLane + 2043
            else -> dexLane + 1914
        }
        val laneWord = "fbka"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 36337
        return dexLane
    }

    fun lane07(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 3
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2319
            1 -> dexLane + 1292
            else -> dexLane + 52
        }
        dexLane = dexLane % 59
        return dexLane
    }

    fun lane08(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 5109
        dexLane = dexLane shl 10
        dexLane = dexLane.inv()
        dexLane = dexLane % 62
        dexLane = dexLane * 16
        return dexLane
    }

    fun lane09(seed: Int): Int {
        var dexLane = seed
        val laneWord = "nfhm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 4
        dexLane = dexLane xor 55644
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 161
            1 -> dexLane + 2573
            else -> dexLane + 3436
        }
        return dexLane
    }

    fun lane10(seed: Int): Int {
        var dexLane = seed
        val laneWord = "jend"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 32503
        dexLane = dexLane ushr 1
        dexLane = dexLane % 45
        val laneNums = intArrayOf(120, 117, 23)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane11(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 38
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2460
            1 -> dexLane + 3317
            else -> dexLane + 1605
        }
        dexLane = dexLane + 22617
        dexLane = dexLane * 4
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane12(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 45899
        dexLane = dexLane shl 9
        dexLane = dexLane % 38
        dexLane = dexLane and 29987
        return dexLane
    }

    fun lane13(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 10523
        val laneWord = "mecb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 18
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2565
            1 -> dexLane + 1158
            else -> dexLane + 3066
        }
        val laneNums = intArrayOf(67, 52, 4)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane14(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 601
        }
        dexLane = dexLane * 18
        dexLane = dexLane and 31225
        val laneNums = intArrayOf(184, 160, 88)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane ushr 8
        return dexLane
    }

    fun lane15(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 15
        dexLane = dexLane shl 8
        val laneNums = intArrayOf(60, 57, 85)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 2839
        }
        dexLane = dexLane % 58
        return dexLane
    }

    fun lane16(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 24) == 0) {
            dexLane = dexLane + 348
        }
        dexLane = dexLane xor 44500
        dexLane = dexLane shl 7
        val laneNums = intArrayOf(196, 146, 54)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 27
        return dexLane
    }

    fun lane17(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 16457
        val laneWord = "fclj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 66
        dexLane = dexLane shl 1
        dexLane = dexLane * 11
        return dexLane
    }

    fun lane18(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(148, 198, 146)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 7) == 0) {
            dexLane = dexLane + 1143
        }
        val laneWord = "jmne"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 61
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane19(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(86, 62, 94)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane and 18592
        dexLane = dexLane + 44725
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2748
            1 -> dexLane + 2531
            else -> dexLane + 1324
        }
        return dexLane
    }

    fun lane20(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 4
        val laneWord = "cghb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 3148
        }
        dexLane = dexLane + 35435
        return dexLane
    }

    fun lane21(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 11673
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3330
            1 -> dexLane + 676
            else -> dexLane + 301
        }
        dexLane = dexLane and 7789
        dexLane = dexLane * 12
        dexLane = dexLane ushr 6
        return dexLane
    }

    fun lane22(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3501
            1 -> dexLane + 1506
            else -> dexLane + 2096
        }
        val laneNums = intArrayOf(59, 124, 164)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 21) == 0) {
            dexLane = dexLane + 3393
        }
        dexLane = dexLane xor 49620
        dexLane = dexLane ushr 5
        return dexLane
    }

    fun lane23(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 13992
        dexLane = dexLane * 37
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(3, 100, 41)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 392
        }
        return dexLane
    }

    fun lane24(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 291
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 28
        dexLane = dexLane xor 12999
        dexLane = dexLane and 17580
        return dexLane
    }

    fun lane25(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 27200
        dexLane = dexLane ushr 11
        dexLane = dexLane xor 39618
        dexLane = dexLane or 26450
        val laneWord = "hfjh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane26(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 40170
        val laneWord = "lmjp"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(68, 191, 16)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 38
        dexLane = dexLane * 14
        return dexLane
    }

    fun lane27(seed: Int): Int {
        var dexLane = seed
        val laneWord = "knod"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 52973
        dexLane = dexLane xor 37942
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 32
        return dexLane
    }

    fun lane28(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 801
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3427
            1 -> dexLane + 1223
            else -> dexLane + 503
        }
        dexLane = dexLane xor 34545
        dexLane = dexLane shl 5
        dexLane = dexLane % 19
        return dexLane
    }

    fun lane29(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 11
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 2146
        }
        val laneWord = "klgo"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 39
        dexLane = dexLane + 2217
        return dexLane
    }

    fun lane30(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 998
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 6
        if ((dexLane and 14) == 0) {
            dexLane = dexLane + 2666
        }
        dexLane = dexLane or 45352
        return dexLane
    }

    fun lane31(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 21) == 0) {
            dexLane = dexLane + 2249
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3207
            1 -> dexLane + 2033
            else -> dexLane + 3207
        }
        dexLane = dexLane or 35450
        dexLane = dexLane ushr 10
        dexLane = dexLane % 81
        return dexLane
    }

    fun lane32(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 42832
        val laneWord = "iikg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(186, 150, 166)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 897
        }
        dexLane = dexLane % 68
        return dexLane
    }

    fun lane33(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 23814
        dexLane = dexLane or 32745
        dexLane = dexLane shl 10
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 10
        return dexLane
    }

    fun lane34(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 16
        val laneNums = intArrayOf(121, 6, 170)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 10
        dexLane = dexLane ushr 11
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane35(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 55218
        val laneWord = "mlfb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 1980
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 59838
        return dexLane
    }

    fun lane36(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 21
        dexLane = dexLane xor 51358
        dexLane = dexLane.inv()
        dexLane = dexLane % 73
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 1353
        }
        return dexLane
    }

    fun lane37(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane + 3918
        dexLane = dexLane * 28
        dexLane = dexLane shl 5
        dexLane = dexLane % 19
        return dexLane
    }

    fun lane38(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 1757
        }
        dexLane = dexLane and 6432
        dexLane = dexLane xor 31397
        dexLane = dexLane shl 1
        return dexLane
    }

    fun lane39(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 18046
        dexLane = dexLane % 30
        dexLane = dexLane.inv()
        dexLane = dexLane xor 6238
        dexLane = dexLane shl 9
        return dexLane
    }

    fun lane40(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 10
        dexLane = dexLane xor 6506
        dexLane = dexLane % 58
        dexLane = dexLane shl 12
        dexLane = dexLane + 43699
        return dexLane
    }

    fun lane41(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 3
        val laneNums = intArrayOf(189, 178, 55)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "dlpp"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane42(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 5
        dexLane = dexLane * 38
        dexLane = dexLane + 52416
        dexLane = dexLane xor 25586
        return dexLane
    }

    fun lane43(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 38692
        dexLane = dexLane * 18
        dexLane = dexLane and 1563
        dexLane = dexLane.inv()
        dexLane = dexLane + 1499
        return dexLane
    }

    fun lane44(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 331
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1728
            1 -> dexLane + 2747
            else -> dexLane + 605
        }
        dexLane = dexLane shl 6
        dexLane = dexLane ushr 11
        dexLane = dexLane + 41050
        return dexLane
    }

    fun lane45(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 8
        dexLane = dexLane xor 9364
        dexLane = dexLane ushr 2
        val laneNums = intArrayOf(85, 156, 67)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 22036
        return dexLane
    }

    fun lane46(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 21405
        dexLane = dexLane xor 571
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 8
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane47(seed: Int): Int {
        var dexLane = seed
        val laneWord = "kijd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 41481
        dexLane = dexLane + 58038
        dexLane = dexLane % 4
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane48(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 41611
        val laneWord = "mjeb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2093
            1 -> dexLane + 1919
            else -> dexLane + 2520
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane49(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(87, 9, 88)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 40
        dexLane = dexLane ushr 8
        dexLane = dexLane + 2929
        return dexLane
    }

    fun lane50(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 24) == 0) {
            dexLane = dexLane + 2645
        }
        dexLane = dexLane or 14629
        dexLane = dexLane + 51346
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(6, 169, 109)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane51(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3020
            1 -> dexLane + 3376
            else -> dexLane + 2358
        }
        dexLane = dexLane + 24704
        val laneNums = intArrayOf(163, 194, 148)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "mdck"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 52
        return dexLane
    }

    fun lane52(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 53549
        val laneWord = "dnop"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 41
        dexLane = dexLane + 37885
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane53(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 23529
        if ((dexLane and 15) == 0) {
            dexLane = dexLane + 3987
        }
        dexLane = dexLane.inv()
        dexLane = dexLane and 31589
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane54(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 2
        dexLane = dexLane % 41
        val laneNums = intArrayOf(109, 23, 170)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane55(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 6
        dexLane = dexLane or 11610
        dexLane = dexLane * 40
        dexLane = dexLane and 2748
        dexLane = dexLane ushr 8
        return dexLane
    }

    fun lane56(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 572
            1 -> dexLane + 3334
            else -> dexLane + 2716
        }
        dexLane = dexLane % 64
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane and 20900
        dexLane = dexLane * 8
        return dexLane
    }

    fun lane57(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 6
        dexLane = dexLane xor 10493
        dexLane = dexLane.inv()
        dexLane = dexLane * 18
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 105
        }
        return dexLane
    }

    fun lane58(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 8
        dexLane = dexLane and 24521
        val laneWord = "ajok"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane shl 2
        dexLane = dexLane xor 37394
        return dexLane
    }

    fun lane59(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 39
        dexLane = dexLane or 54524
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 27
        dexLane = dexLane + 36061
        return dexLane
    }

    fun lane60(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 1
        dexLane = dexLane and 28539
        dexLane = dexLane xor 50963
        val laneWord = "jign"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 50533
        return dexLane
    }

    fun lane61(seed: Int): Int {
        var dexLane = seed
        val laneWord = "nepc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane + 16401
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 917
            1 -> dexLane + 107
            else -> dexLane + 3844
        }
        val laneNums = intArrayOf(167, 167, 34)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 18
        return dexLane
    }

    fun lane62(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 34890
        dexLane = dexLane and 20489
        dexLane = dexLane xor 1167
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 2693
        }
        dexLane = dexLane ushr 7
        return dexLane
    }

    fun lane63(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 62
        dexLane = dexLane and 3500
        dexLane = dexLane or 33952
        val laneWord = "kbec"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane64(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 43019
        if ((dexLane and 11) == 0) {
            dexLane = dexLane + 3557
        }
        dexLane = dexLane shl 6
        dexLane = dexLane or 6869
        return dexLane
    }

    fun lane65(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane + 7726
        dexLane = dexLane and 2595
        val laneWord = "jccf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane66(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ckan"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 11117
        dexLane = dexLane + 3429
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 50845
        return dexLane
    }

    fun lane67(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 10
        dexLane = dexLane shl 6
        dexLane = dexLane or 30296
        dexLane = dexLane + 20914
        dexLane = dexLane xor 37222
        return dexLane
    }

    fun lane68(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(170, 104, 195)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane ushr 4
        dexLane = dexLane shl 4
        dexLane = dexLane * 24
        dexLane = dexLane or 2889
        return dexLane
    }

    fun lane69(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3246
            1 -> dexLane + 1105
            else -> dexLane + 2151
        }
        if ((dexLane and 14) == 0) {
            dexLane = dexLane + 3708
        }
        dexLane = dexLane % 63
        val laneWord = "njbj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane70(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "adaf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 1711
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1456
            1 -> dexLane + 588
            else -> dexLane + 1132
        }
        dexLane = dexLane shl 2
        return dexLane
    }

    fun lane71(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 46406
        dexLane = dexLane and 6912
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 2
        val laneWord = "mffi"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane72(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane * 21
        val laneNums = intArrayOf(81, 150, 116)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 53430
        dexLane = dexLane ushr 4
        return dexLane
    }

    fun lane73(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 11
        if ((dexLane and 17) == 0) {
            dexLane = dexLane + 936
        }
        dexLane = dexLane xor 34204
        return dexLane
    }

    fun lane74(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 49351
        dexLane = dexLane ushr 8
        dexLane = dexLane shl 6
        dexLane = dexLane and 1738
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1780
            1 -> dexLane + 1935
            else -> dexLane + 2462
        }
        return dexLane
    }

    fun lane75(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 13498
        dexLane = dexLane shl 4
        dexLane = dexLane xor 19741
        dexLane = dexLane ushr 3
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane76(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 56728
        dexLane = dexLane % 79
        dexLane = dexLane or 842
        dexLane = dexLane.inv()
        dexLane = dexLane * 15
        return dexLane
    }

    fun lane77(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 31444
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "ahaj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane shl 3
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 541
            1 -> dexLane + 3200
            else -> dexLane + 852
        }
        return dexLane
    }

    fun lane78(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 610
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 3
        dexLane = dexLane and 16168
        dexLane = dexLane or 56735
        return dexLane
    }

    fun lane79(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 2324
        }
        dexLane = dexLane + 46506
        dexLane = dexLane * 5
        dexLane = dexLane or 58008
        val laneNums = intArrayOf(15, 162, 155)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane80(seed: Int): Int {
        var dexLane = seed
        val laneWord = "mmji"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(77, 14, 153)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 209
        }
        dexLane = dexLane * 41
        return dexLane
    }

    fun lane81(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 7659
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "lkjk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane + 57713
        dexLane = dexLane ushr 2
        return dexLane
    }

    fun lane82(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 36784
        dexLane = dexLane and 6486
        dexLane = dexLane xor 22432
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 102
            1 -> dexLane + 522
            else -> dexLane + 2041
        }
        return dexLane
    }

    fun lane83(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 9776
        dexLane = dexLane * 22
        dexLane = dexLane + 54267
        dexLane = dexLane % 5
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1791
            1 -> dexLane + 1415
            else -> dexLane + 631
        }
        return dexLane
    }

    fun lane84(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 5
        dexLane = dexLane and 24669
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(177, 27, 157)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 10
        return dexLane
    }

    fun lane85(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 41198
        dexLane = dexLane shl 10
        dexLane = dexLane and 24603
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "gkop"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane86(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 11
        val laneNums = intArrayOf(17, 10, 131)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 50443
        dexLane = dexLane + 6879
        dexLane = dexLane shl 3
        return dexLane
    }

    fun lane87(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 34471
        val laneNums = intArrayOf(111, 85, 124)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 5756
        dexLane = dexLane shl 10
        return dexLane
    }

    fun lane88(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane % 68
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2926
            1 -> dexLane + 2792
            else -> dexLane + 1648
        }
        dexLane = dexLane or 42311
        dexLane = dexLane + 10492
        return dexLane
    }

    fun lane89(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(139, 26, 46)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "mbpn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane shl 5
        dexLane = dexLane + 46985
        dexLane = dexLane or 7147
        return dexLane
    }

    fun lane90(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 11
        dexLane = dexLane shl 11
        dexLane = dexLane ushr 10
        dexLane = dexLane xor 4636
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane91(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 22
        dexLane = dexLane shl 7
        dexLane = dexLane and 744
        dexLane = dexLane.inv()
        dexLane = dexLane or 51512
        return dexLane
    }

    fun lane92(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 27
        dexLane = dexLane ushr 8
        val laneNums = intArrayOf(170, 31, 168)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane shl 6
        return dexLane
    }

    fun lane93(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(176, 16, 111)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "hjkb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 13
        if ((dexLane and 9) == 0) {
            dexLane = dexLane + 347
        }
        dexLane = dexLane or 55694
        return dexLane
    }

    fun lane94(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 87
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 620
            1 -> dexLane + 404
            else -> dexLane + 3954
        }
        dexLane = dexLane % 62
        dexLane = dexLane or 34308
        dexLane = dexLane and 8790
        return dexLane
    }

    fun lane95(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 24
        dexLane = dexLane ushr 9
        val laneWord = "bakf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane shl 6
        return dexLane
    }

    fun touch(seed: Int) {
        var acc = seed
        acc = lane00(acc)
        acc = lane01(acc)
        acc = lane02(acc)
        acc = lane03(acc)
        acc = lane04(acc)
        acc = lane05(acc)
        acc = lane06(acc)
        acc = lane07(acc)
        acc = lane08(acc)
        acc = lane09(acc)
        acc = lane10(acc)
        acc = lane11(acc)
        acc = lane12(acc)
        acc = lane13(acc)
        acc = lane14(acc)
        acc = lane15(acc)
        acc = lane16(acc)
        acc = lane17(acc)
        acc = lane18(acc)
        acc = lane19(acc)
        acc = lane20(acc)
        acc = lane21(acc)
        acc = lane22(acc)
        acc = lane23(acc)
        acc = lane24(acc)
        acc = lane25(acc)
        acc = lane26(acc)
        acc = lane27(acc)
        acc = lane28(acc)
        acc = lane29(acc)
        acc = lane30(acc)
        acc = lane31(acc)
        acc = lane32(acc)
        acc = lane33(acc)
        acc = lane34(acc)
        acc = lane35(acc)
        acc = lane36(acc)
        acc = lane37(acc)
        acc = lane38(acc)
        acc = lane39(acc)
        acc = lane40(acc)
        acc = lane41(acc)
        acc = lane42(acc)
        acc = lane43(acc)
        acc = lane44(acc)
        acc = lane45(acc)
        acc = lane46(acc)
        acc = lane47(acc)
        acc = lane48(acc)
        acc = lane49(acc)
        acc = lane50(acc)
        acc = lane51(acc)
        acc = lane52(acc)
        acc = lane53(acc)
        acc = lane54(acc)
        acc = lane55(acc)
        acc = lane56(acc)
        acc = lane57(acc)
        acc = lane58(acc)
        acc = lane59(acc)
        acc = lane60(acc)
        acc = lane61(acc)
        acc = lane62(acc)
        acc = lane63(acc)
        acc = lane64(acc)
        acc = lane65(acc)
        acc = lane66(acc)
        acc = lane67(acc)
        acc = lane68(acc)
        acc = lane69(acc)
        acc = lane70(acc)
        acc = lane71(acc)
        acc = lane72(acc)
        acc = lane73(acc)
        acc = lane74(acc)
        acc = lane75(acc)
        acc = lane76(acc)
        acc = lane77(acc)
        acc = lane78(acc)
        acc = lane79(acc)
        acc = lane80(acc)
        acc = lane81(acc)
        acc = lane82(acc)
        acc = lane83(acc)
        acc = lane84(acc)
        acc = lane85(acc)
        acc = lane86(acc)
        acc = lane87(acc)
        acc = lane88(acc)
        acc = lane89(acc)
        acc = lane90(acc)
        acc = lane91(acc)
        acc = lane92(acc)
        acc = lane93(acc)
        acc = lane94(acc)
        acc = lane95(acc)
        if (acc == Int.MIN_VALUE) {
            android.util.Log.v("Dqmzcs1djucsDexLanes", "lane")
        }
    }
}
