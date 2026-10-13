/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsVale04 {
  fun tap(seed: Int): Int {
    var x = seed * 33
    x = x xor 8644
    x %= 2034
    if (x < 0) x += 2034
    return x
  }
}
