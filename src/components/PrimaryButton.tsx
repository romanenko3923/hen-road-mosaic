import React, {useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/theme';
import {SPRING} from '../constants/config';

// Lucide icons are ForwardRefExoticComponent; a structural prop type trips
// propTypes variance under strict mode, so keep the proven loose signature.
type IconCmp = React.ComponentType<any>;

type Props = {
  label: string;
  onPress: () => void;
  colors?: string[];
  shadowColor?: string;
  Icon?: IconCmp;
  iconColor?: string;
  labelColor?: string;
  height?: number;
  disabled?: boolean;
  style?: ViewStyle;
};

/**
 * Rule #20: the icon is a fixed 24x24 box, the label's lineHeight matches it and
 * the pair sits in one centred row with gap 10. Never position:'absolute'.
 * Rule #8: Pressable is the PARENT, the Animated.View is the child, and the
 * animated wrapper is pointerEvents="box-none" so taps always reach through.
 */
export default function PrimaryButton({
  label,
  onPress,
  colors,
  shadowColor,
  Icon,
  iconColor,
  labelColor,
  height = 62,
  disabled = false,
  style,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      tension: SPRING.press.tension,
      friction: SPRING.press.friction,
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

  const grad = colors && colors.length >= 2 ? colors : ['#F5C74A', '#EC8248'];
  const sh = shadowColor || COLORS.primary;
  const fg = disabled ? COLORS.textMuted : labelColor || COLORS.text;

  return (
    <Pressable
      // accessible={false} on purpose: an accessible Pressable collapses its
      // children, so the label only ever reaches the UI dump as content-desc and
      // the capture agent's text= lookup never matches it. With the collapse off
      // the label is published BOTH ways and either lookup finds the button.
      accessible={false}
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={disabled ? undefined : onPress}
      onPressIn={disabled ? undefined : pressIn}
      onPressOut={disabled ? undefined : pressOut}
      disabled={disabled}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, {height}, style]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.anim,
          {
            height,
            transform: [{scale}],
            shadowColor: sh,
            shadowOpacity: disabled ? 0 : 0.42,
            shadowRadius: 18,
            shadowOffset: {width: 0, height: 8},
            elevation: disabled ? 0 : 9,
          },
        ]}>
        <LinearGradient
          colors={disabled ? [COLORS.border, COLORS.surfaceSunk] : grad}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.grad, {height}]}>
          <View pointerEvents="none" style={styles.highlight} />
          <View pointerEvents="none" style={styles.row}>
            {Icon ? (
              <View style={styles.iconBox}>
                <Icon size={24} color={iconColor || fg} strokeWidth={2.4} />
              </View>
            ) : null}
            <Text style={[styles.label, {color: fg}]} numberOfLines={1}>
              {label}
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {width: '100%'},
  anim: {width: '100%', borderRadius: 20},
  grad: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  iconBox: {width: 24, height: 24, alignItems: 'center', justifyContent: 'center'},
  label: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
    lineHeight: 24,
  },
});
