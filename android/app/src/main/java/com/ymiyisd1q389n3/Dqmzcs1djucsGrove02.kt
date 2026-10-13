/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsGrove02 {
  fun tap(seed: Int): Int {
    val tag = "Dqmzcs1djucsGrove02"
    var x = seed xor 37873
    for (ch in tag) {
      x = (x + ch.code * 9) and 0xffff
    }
    return x xor 3028
  }
}
