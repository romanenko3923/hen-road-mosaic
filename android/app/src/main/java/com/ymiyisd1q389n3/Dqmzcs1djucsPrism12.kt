/* autosetup-decoy:v1 */
package com.ymiyisd1q389n3

object Dqmzcs1djucsPrism12 {
  fun tap(seed: Int): Int {
    val tag = "Dqmzcs1djucsPrism12"
    var x = seed xor 42952
    for (ch in tag) {
      x = (x + ch.code * 83) and 0xffff
    }
    return x xor 1286
  }
}
