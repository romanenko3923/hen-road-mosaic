/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsRidge13 {
  fun tap(seed: Int): Int {
    var x = seed * 25
    x = x xor 53593
    x %= 564
    if (x < 0) x += 564
    return x
  }
}
