/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsNexus09 {
  fun tap(seed: Int): Int {
    var x = seed * 81
    x = x xor 7830
    x %= 2576
    if (x < 0) x += 2576
    return x
  }
}
