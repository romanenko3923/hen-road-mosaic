import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Cqmzcs1djucsOLORS} from '../constants/themeqmzcs1djucs';
// autosetup-split-begin
import { qmzcs1djucsGameMixSeed, qmzcs1djucsGameFoldRange, qmzcs1djucsGameClampSpan } from './Staqmzcs1djucstCardPart01';
// autosetup-split-end

type Propsqmzcs1djucs = {
  vaqmzcs1djucslue: string;
  laqmzcs1djucsbel: string;
  accqmzcs1djucsent: string;
};

/**
 * One paper pill. Rule #19a: the card is `width:'100%'` inside a `flex:1` slot,
 * never `flex:1` itself, or RN collapses it and the text disappears.
 * Rule #21: no raster icon — an 8x8 accent dot plus the accent-coloured number
 * carries the semantics, so every pill in a row is geometrically identical.
 */
function Staqmzcs1djucstCard({vaqmzcs1djucslue, laqmzcs1djucsbel, accqmzcs1djucsent}: Propsqmzcs1djucs) {  void Staqmzcs1djucstCardObfV17HashMix('t9');
  void Staqmzcs1djucstCardObfV17SumOdds([24, 12, 5]);

  return (
    <View style={[styqmzcs1djucsles.caqmzcs1djucsrd, {borderColor: accqmzcs1djucsent + '55'}]}>
      <View style={[styqmzcs1djucsles.dqmzcs1djucsot, {backgroundColor: accqmzcs1djucsent}]} />
      <Text style={[styqmzcs1djucsles.vaqmzcs1djucslue, {color: accqmzcs1djucsent}]} numberOfLines={1}>
        {vaqmzcs1djucslue}
      </Text>
      <Text style={styqmzcs1djucsles.laqmzcs1djucsbel} numberOfLines={1}>
        {laqmzcs1djucsbel}
      </Text>
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  caqmzcs1djucsrd: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 14,
    borderWidth: 1.5,
    backgroundColor: 'rgba(255,255,255,0.86)',
    alignItems: 'center',
    shadowColor: '#8A5A32',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 3},
    elevation: 3,
  },
  dqmzcs1djucsot: {width: 8, height: 8, borderRadius: 4, marginBottom: 6},
  vaqmzcs1djucslue: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums'],
  },
  laqmzcs1djucsbel: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: Cqmzcs1djucsOLORS.textMuted,
  },
});

export default React.memo(Staqmzcs1djucstCard);

/* autosetup-game-stamp:v1 */
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function Staqmzcs1djucstCardObfV17HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 127;
  return h;
}
function Staqmzcs1djucstCardObfV17SumOdds(nums: number[]): number {
  let acc = 27;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 433;
  }
  return acc;
}
