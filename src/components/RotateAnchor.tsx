import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {RefreshCw} from 'lucide-react-native';
import {SPRING} from '../constants/config';

type Props = {
  left: number;
  top: number;
  size: number;
  highlighted: boolean;
  onPress: () => void;
};

/**
 * The tap target is a whole TILE square (89px at 4x4, 71px at 5x5) centred on
 * the intersection of four tiles, so it is always far above the 48px minimum.
 */
function RotateAnchor({left, top, size, highlighted, onPress}: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const glow = useRef(new Animated.Value(0)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1.18,
      useNativeDriver: true,
      tension: 320,
      friction: 14,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      tension: SPRING.press.tension,
      friction: SPRING.press.friction,
    }).start();
  }, [scale]);

  // Two pulses only, then permanently still — a perpetual loop blocks uiautomator.
  useEffect(() => {
    if (!highlighted) {
      glow.setValue(0);
      return;
    }
    Animated.sequence([
      Animated.timing(glow, {toValue: 1, duration: 320, useNativeDriver: true}),
      Animated.timing(glow, {toValue: 0.25, duration: 320, useNativeDriver: true}),
      Animated.timing(glow, {toValue: 1, duration: 320, useNativeDriver: true}),
    ]).start();
  }, [highlighted, glow]);

  const baseOpacity = highlighted ? 1 : 0.55;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Turn tiles"
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, {left, top, width: size, height: size}]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.disc,
          {
            opacity: baseOpacity,
            transform: [{scale}],
            borderColor: highlighted ? '#F5C74A' : 'rgba(255,242,218,0.5)',
            backgroundColor: highlighted
              ? 'rgba(245,199,74,0.55)'
              : 'rgba(255,242,218,0.32)',
          },
        ]}>
        <Animated.View
          pointerEvents="none"
          style={[styles.ring, {opacity: highlighted ? glow : 0}]}
        />
        <RefreshCw size={16} color="#2B1E14" strokeWidth={2.6} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {position: 'absolute', alignItems: 'center', justifyContent: 'center'},
  disc: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: '#F5C74A',
  },
});

export default React.memo(RotateAnchor);
