import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';

type Props = {
  label: string;
  done: boolean;
  color: string;
};

/** Shared by GameScreen and ResultScreen so the zone read-out never drifts. */
function GoalChip({label, done, color}: Props) {
  return (
    <View
      style={[
        styles.chip,
        done
          ? {backgroundColor: color, borderColor: color}
          : {backgroundColor: 'rgba(255,255,255,0.7)', borderColor: '#E0D4BC'},
      ]}>
      <Text
        style={[styles.text, {color: done ? '#FFFFFF' : COLORS.textMuted}]}
        numberOfLines={1}>
        {done ? label + ' ✓' : label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 10, fontWeight: '800', letterSpacing: 1.2, lineHeight: 14},
});

export default React.memo(GoalChip);
