/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsLattice01 {
  fun tap(seed: Int): Int {
    var x = seed xor 21293
    x = (x * 93 + 1242) and 0xffff
    return x
  }
}
