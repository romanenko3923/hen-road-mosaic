import React, {useCallback, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS} from '../constants/theme';
import {SPRING} from '../constants/config';

// Lucide icons are ForwardRefExoticComponent; a structural prop type trips
// propTypes variance under strict mode, so keep the proven loose signature.
type IconCmp = React.ComponentType<any>;

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconCmp;
  height?: number;
  style?: ViewStyle;
};

/** Same icon contract as PrimaryButton: 24x24 box, lineHeight 24, gap 10. */
export default function SecondaryButton({label, onPress, Icon, height = 50, style}: Props) {
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

  return (
    <Pressable
      // accessible={false} on purpose: an accessible Pressable collapses its
      // children, so the label only ever reaches the UI dump as content-desc and
      // the capture agent's text= lookup never matches it. With the collapse off
      // the label is published BOTH ways and either lookup finds the button.
      accessible={false}
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, {height}, style]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.anim, {height, transform: [{scale}]}]}>
        <View pointerEvents="none" style={styles.row}>
          {Icon ? (
            <View style={styles.iconBox}>
              <Icon size={24} color={COLORS.textSoft} strokeWidth={2.2} />
            </View>
          ) : null}
          <Text style={styles.label} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {flex: 1},
  anim: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderWidth: 1.5,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  iconBox: {width: 24, height: 24, alignItems: 'center', justifyContent: 'center'},
  label: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.2,
    lineHeight: 24,
    color: COLORS.textSoft,
  },
});
