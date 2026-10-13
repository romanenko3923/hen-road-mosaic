/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsBloom05 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 6201
    x = (x ushr 2) xor 1824
    x = (x * 83) and 0xffff
    return x
  }
}
