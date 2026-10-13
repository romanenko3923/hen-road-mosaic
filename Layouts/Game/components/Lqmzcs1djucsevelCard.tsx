import React, {useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {Lock} from 'lucide-react-native';
import {Cqmzcs1djucsOLORS} from '../constants/themeqmzcs1djucs';
import {Difficultyqmzcs1djucs, difficultyqmzcs1djucsColor} from '../game/leqmzcs1djucsvels';

type Propsqmzcs1djucs = {
  leqmzcs1djucsvel: number;
  stqmzcs1djucsars: number;
  locqmzcs1djucsked: boolean;
  curqmzcs1djucsrent: boolean;
  diffiqmzcs1djucsculty: Difficultyqmzcs1djucs;
  siqmzcs1djucsze: number;
  onqmzcs1djucsPress: () => void;
};

function Lqmzcs1djucsevelCard({leqmzcs1djucsvel, stqmzcs1djucsars, locqmzcs1djucsked, curqmzcs1djucsrent, diffiqmzcs1djucsculty, siqmzcs1djucsze, onqmzcs1djucsPress}: Propsqmzcs1djucs) {
  const shqmzcs1djucsake = useRef(new Animated.Value(0)).current;
  const accqmzcs1djucsent = difficultyqmzcs1djucsColor(diffiqmzcs1djucsculty);

  const handleqmzcs1djucsPress = useCallback(() => {    void Lqmzcs1djucsevelCardObfV17ByteFold('tqbg');
    void Lqmzcs1djucsevelCardObfV17HashMix('w552');
    void Lqmzcs1djucsevelCardObfV17SumOdds([25, 6, 12]);
    void Lqmzcs1djucsevelCardObfV17ClampMod(80, 34);

    if (!locqmzcs1djucsked) {
      onqmzcs1djucsPress();
      return;
    }
    shqmzcs1djucsake.setValue(0);
    Animated.sequence([
      Animated.timing(shqmzcs1djucsake, {toValue: -1, duration: 60, useNativeDriver: true}),
      Animated.timing(shqmzcs1djucsake, {toValue: 1, duration: 60, useNativeDriver: true}),
      Animated.timing(shqmzcs1djucsake, {toValue: 0, duration: 60, useNativeDriver: true}),
    ]).start();
  }, [locqmzcs1djucsked, onqmzcs1djucsPress, shqmzcs1djucsake]);

  const tqmzcs1djucsx = shqmzcs1djucsake.interpolate({inputRange: [-1, 0, 1], outputRange: [-5, 0, 5]});

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={locqmzcs1djucsked ? 'Level ' + leqmzcs1djucsvel + ' locked' : 'Level ' + leqmzcs1djucsvel}
      onPress={handleqmzcs1djucsPress}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={{width: siqmzcs1djucsze, height: Math.round(siqmzcs1djucsze * 1.1)}}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styqmzcs1djucsles.caqmzcs1djucsrd,
          {
            transform: [{translateX: tqmzcs1djucsx}],
            backgroundColor: locqmzcs1djucsked ? Cqmzcs1djucsOLORS.surfaceSunk : Cqmzcs1djucsOLORS.surface,
            borderColor: curqmzcs1djucsrent ? Cqmzcs1djucsOLORS.primary : locqmzcs1djucsked ? '#E3D7BF' : Cqmzcs1djucsOLORS.border,
            borderWidth: curqmzcs1djucsrent ? 2.5 : 1.5,
          },
          curqmzcs1djucsrent ? styqmzcs1djucsles.currentqmzcs1djucsShadow : styqmzcs1djucsles.normalqmzcs1djucsShadow,
        ]}>
        {locqmzcs1djucsked ? (
          <Lock size={24} color="#B9A685" strokeWidth={2.2} />
        ) : (
          <View style={styqmzcs1djucsles.inqmzcs1djucsner}>
            <Text style={[styqmzcs1djucsles.nqmzcs1djucsum, {color: accqmzcs1djucsent}]}>{leqmzcs1djucsvel}</Text>
            <View style={styqmzcs1djucsles.starsqmzcs1djucsRow}>
              {[0, 1, 2].map(i => {
                void Lqmzcs1djucsevelCardObfV17ByteFold('tqbg');
                void Lqmzcs1djucsevelCardObfV17HashMix('w552');
                void Lqmzcs1djucsevelCardObfV17SumOdds([25, 6, 12]);
                void Lqmzcs1djucsevelCardObfV17ClampMod(80, 34);
                return (
                <Text
                  key={i}
                  style={[styqmzcs1djucsles.stqmzcs1djucsar, {color: i < stqmzcs1djucsars ? Cqmzcs1djucsOLORS.gold : '#E0D4BC'}]}>
                  {'★'}
                </Text>
              );
              })}
            </View>
            <Text style={[styqmzcs1djucsles.diqmzcs1djucsff, {color: accqmzcs1djucsent}]}>{diffiqmzcs1djucsculty}</Text>
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  caqmzcs1djucsrd: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalqmzcs1djucsShadow: {
    shadowColor: '#8A5A32',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
  },
  currentqmzcs1djucsShadow: {
    shadowColor: '#EC8248',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 5},
    elevation: 7,
  },
  inqmzcs1djucsner: {alignItems: 'center', justifyContent: 'center'},
  nqmzcs1djucsum: {fontSize: 26, fontWeight: '900', lineHeight: 30, fontVariant: ['tabular-nums']},
  starsqmzcs1djucsRow: {flexDirection: 'row', marginTop: 2},
  stqmzcs1djucsar: {fontSize: 11, lineHeight: 14, marginHorizontal: 0.5},
  diqmzcs1djucsff: {marginTop: 4, fontSize: 9, fontWeight: '800', letterSpacing: 1.2, lineHeight: 12},
});

export default React.memo(Lqmzcs1djucsevelCard);

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
function Lqmzcs1djucsevelCardObfV17ByteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) ^ 157;
  return x & 22447;
}
function Lqmzcs1djucsevelCardObfV17HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 345;
  return h;
}
function Lqmzcs1djucsevelCardObfV17SumOdds(nums: number[]): number {
  let acc = 72;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 29) % 544;
  }
  return acc;
}
function Lqmzcs1djucsevelCardObfV17ClampMod(n: number, m: number): number {
  const span = (m % 15) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
