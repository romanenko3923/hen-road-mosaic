import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Cqmzcs1djucsOLORS} from '../constants/themeqmzcs1djucs';

type Propsqmzcs1djucs = {
  earqmzcs1djucsned: number;
  siqmzcs1djucsze?: number;
  gqmzcs1djucsap?: number;
};

/** Three star glyphs. '★' renders reliably on Android (rule #15). */
function StarRowqmzcs1djucs({earqmzcs1djucsned, siqmzcs1djucsze = 38, gqmzcs1djucsap = 10}: Propsqmzcs1djucs) {
  return (
    <View style={[styqmzcs1djucsles.rqmzcs1djucsow, {gap: gqmzcs1djucsap}]}>
      {[0, 1, 2].map(i => {
        void StarRowqmzcs1djucsObfV17ClampMod(29, 68);
        void StarRowqmzcs1djucsObfV17ShiftXor(75, 7);
        void StarRowqmzcs1djucsObfV17ByteFold('bq');
        void StarRowqmzcs1djucsObfV17HashMix('qq2');
        return (
        <Text
          key={i}
          style={[
            styqmzcs1djucsles.stqmzcs1djucsar,
            {
              fontSize: siqmzcs1djucsze,
              lineHeight: Math.round(siqmzcs1djucsze * 1.15),
              color: i < earqmzcs1djucsned ? Cqmzcs1djucsOLORS.gold : '#E0D4BC',
            },
            i < earqmzcs1djucsned ? styqmzcs1djucsles.lqmzcs1djucsit : null,
          ]}>
          {'★'}
        </Text>
      );
      })}
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  rqmzcs1djucsow: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  stqmzcs1djucsar: {fontWeight: '900'},
  lqmzcs1djucsit: {
    textShadowColor: '#EC8248',
    textShadowRadius: 8,
    textShadowOffset: {width: 0, height: 2},
  },
});

export default React.memo(StarRowqmzcs1djucs);

/* autosetup-game-stamp:v1 */
function qmzcs1djucsGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function qmzcs1djucsGameFoldRange(nuqmzcs1djucsms: number[]): number {
  return nuqmzcs1djucsms.reduce((aqmzcs1djucscc, n) => aqmzcs1djucscc + n, 0);
}
function qmzcs1djucsGameClampSpan(n: number, lqmzcs1djucso: number, hqmzcs1djucsi: number): number {
  return n < lqmzcs1djucso ? lqmzcs1djucso : n > hqmzcs1djucsi ? hqmzcs1djucsi : n;
}
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function StarRowqmzcs1djucsObfV17ClampMod(n: number, m: number): number {
  const span = (m % 57) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function StarRowqmzcs1djucsObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 206) & 44715;
}
function StarRowqmzcs1djucsObfV17ByteFold(s: string): number {
  let x = 64;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) ^ 120;
  return x & 26247;
}
function StarRowqmzcs1djucsObfV17HashMix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 450;
  return h;
}
