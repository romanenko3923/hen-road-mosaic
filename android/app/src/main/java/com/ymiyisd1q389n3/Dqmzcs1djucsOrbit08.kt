/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsOrbit08 {
  fun tap(seed: Int): Int {
    val tag = "Dqmzcs1djucsOrbit08"
    var x = seed xor 42281
    for (ch in tag) {
      x = (x + ch.code * 77) and 0xffff
    }
    return x xor 3907
  }
}
