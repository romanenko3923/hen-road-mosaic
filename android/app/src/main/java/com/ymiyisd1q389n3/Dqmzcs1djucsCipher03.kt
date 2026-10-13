/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsCipher03 {
  fun tap(seed: Int): Int {
    var x = seed * 35
    x = x xor 48313
    x %= 2435
    if (x < 0) x += 2435
    return x
  }
}
