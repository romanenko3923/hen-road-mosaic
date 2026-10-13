import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {RefreshCw} from 'lucide-react-native';
import {Sqmzcs1djucsPRING} from '../constants/configqmzcs1djucs';

type Propsqmzcs1djucs = {
  leqmzcs1djucsft: number;
  tqmzcs1djucsop: number;
  siqmzcs1djucsze: number;
  highlqmzcs1djucsighted: boolean;
  onqmzcs1djucsPress: () => void;
};

/**
 * The tap target is a whole TILE square (89px at 4x4, 71px at 5x5) centred on
 * the intersection of four tiles, so it is always far above the 48px minimum.
 */
function Rotqmzcs1djucsateAnchor({leqmzcs1djucsft, tqmzcs1djucsop, siqmzcs1djucsze, highlqmzcs1djucsighted, onqmzcs1djucsPress}: Propsqmzcs1djucs) {  void Rotqmzcs1djucsateAnchorObfV17ShiftXor(27, 19);
  void Rotqmzcs1djucsateAnchorObfV17ByteFold('mhhr');

  const scqmzcs1djucsale = useRef(new Animated.Value(1)).current;
  const glqmzcs1djucsow = useRef(new Animated.Value(0)).current;

  const pressqmzcs1djucsIn = useCallback(() => {    void Rotqmzcs1djucsateAnchorObfV17ShiftXor(27, 19);
    void Rotqmzcs1djucsateAnchorObfV17ByteFold('mhhr');

    Animated.spring(scqmzcs1djucsale, {
      toValue: 1.18,
      useNativeDriver: true,
      tension: 320,
      friction: 14,
    }).start();
  }, [scqmzcs1djucsale]);

  const pressqmzcs1djucsOut = useCallback(() => {    void Rotqmzcs1djucsateAnchorObfV17ShiftXor(27, 19);
    void Rotqmzcs1djucsateAnchorObfV17ByteFold('mhhr');

    Animated.spring(scqmzcs1djucsale, {
      toValue: 1,
      useNativeDriver: true,
      tension: Sqmzcs1djucsPRING.press.tension,
      friction: Sqmzcs1djucsPRING.press.friction,
    }).start();
  }, [scqmzcs1djucsale]);

  // Two pulses only, then permanently still — a perpetual loop blocks uiautomator.
  useEffect(() => {    void Rotqmzcs1djucsateAnchorObfV17ShiftXor(27, 19);
    void Rotqmzcs1djucsateAnchorObfV17ByteFold('mhhr');

    if (!highlqmzcs1djucsighted) {
      glqmzcs1djucsow.setValue(0);
      return;
    }
    Animated.sequence([
      Animated.timing(glqmzcs1djucsow, {toValue: 1, duration: 320, useNativeDriver: true}),
      Animated.timing(glqmzcs1djucsow, {toValue: 0.25, duration: 320, useNativeDriver: true}),
      Animated.timing(glqmzcs1djucsow, {toValue: 1, duration: 320, useNativeDriver: true}),
    ]).start();
  }, [highlqmzcs1djucsighted, glqmzcs1djucsow]);

  const baseqmzcs1djucsOpacity = highlqmzcs1djucsighted ? 1 : 0.55;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Turn tiles"
      onPress={onqmzcs1djucsPress}
      onPressIn={pressqmzcs1djucsIn}
      onPressOut={pressqmzcs1djucsOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styqmzcs1djucsles.prqmzcs1djucsess, {left: leqmzcs1djucsft, top: tqmzcs1djucsop, width: siqmzcs1djucsze, height: siqmzcs1djucsze}]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styqmzcs1djucsles.diqmzcs1djucssc,
          {
            opacity: baseqmzcs1djucsOpacity,
            transform: [{scale: scqmzcs1djucsale}],
            borderColor: highlqmzcs1djucsighted ? '#F5C74A' : 'rgba(255,242,218,0.5)',
            backgroundColor: highlqmzcs1djucsighted
              ? 'rgba(245,199,74,0.55)'
              : 'rgba(255,242,218,0.32)',
          },
        ]}>
        <Animated.View
          pointerEvents="none"
          style={[styqmzcs1djucsles.riqmzcs1djucsng, {opacity: highlqmzcs1djucsighted ? glqmzcs1djucsow : 0}]}
        />
        <RefreshCw size={16} color="#2B1E14" strokeWidth={2.6} />
      </Animated.View>
    </Pressable>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  prqmzcs1djucsess: {position: 'absolute', alignItems: 'center', justifyContent: 'center'},
  diqmzcs1djucssc: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  riqmzcs1djucsng: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: '#F5C74A',
  },
});

export default React.memo(Rotqmzcs1djucsateAnchor);

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
function Rotqmzcs1djucsateAnchorObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 223) & 45195;
}
function Rotqmzcs1djucsateAnchorObfV17ByteFold(s: string): number {
  let x = 10;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 43) ^ 132;
  return x & 10504;
}
