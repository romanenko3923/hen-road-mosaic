import React, {useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {Lock} from 'lucide-react-native';
import {COLORS} from '../constants/theme';
import {Difficulty, difficultyColor} from '../game/levels';

type Props = {
  level: number;
  stars: number;
  locked: boolean;
  current: boolean;
  difficulty: Difficulty;
  size: number;
  onPress: () => void;
};

function LevelCard({level, stars, locked, current, difficulty, size, onPress}: Props) {
  const shake = useRef(new Animated.Value(0)).current;
  const accent = difficultyColor(difficulty);

  const handlePress = useCallback(() => {
    if (!locked) {
      onPress();
      return;
    }
    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, {toValue: -1, duration: 60, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 1, duration: 60, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 0, duration: 60, useNativeDriver: true}),
    ]).start();
  }, [locked, onPress, shake]);

  const tx = shake.interpolate({inputRange: [-1, 0, 1], outputRange: [-5, 0, 5]});

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={locked ? 'Level ' + level + ' locked' : 'Level ' + level}
      onPress={handlePress}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={{width: size, height: Math.round(size * 1.1)}}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.card,
          {
            transform: [{translateX: tx}],
            backgroundColor: locked ? COLORS.surfaceSunk : COLORS.surface,
            borderColor: current ? COLORS.primary : locked ? '#E3D7BF' : COLORS.border,
            borderWidth: current ? 2.5 : 1.5,
          },
          current ? styles.currentShadow : styles.normalShadow,
        ]}>
        {locked ? (
          <Lock size={24} color="#B9A685" strokeWidth={2.2} />
        ) : (
          <View style={styles.inner}>
            <Text style={[styles.num, {color: accent}]}>{level}</Text>
            <View style={styles.starsRow}>
              {[0, 1, 2].map(i => (
                <Text
                  key={i}
                  style={[styles.star, {color: i < stars ? COLORS.gold : '#E0D4BC'}]}>
                  {'★'}
                </Text>
              ))}
            </View>
            <Text style={[styles.diff, {color: accent}]}>{difficulty}</Text>
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalShadow: {
    shadowColor: '#8A5A32',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
  },
  currentShadow: {
    shadowColor: '#EC8248',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 5},
    elevation: 7,
  },
  inner: {alignItems: 'center', justifyContent: 'center'},
  num: {fontSize: 26, fontWeight: '900', lineHeight: 30, fontVariant: ['tabular-nums']},
  starsRow: {flexDirection: 'row', marginTop: 2},
  star: {fontSize: 11, lineHeight: 14, marginHorizontal: 0.5},
  diff: {marginTop: 4, fontSize: 9, fontWeight: '800', letterSpacing: 1.2, lineHeight: 12},
});

export default React.memo(LevelCard);
