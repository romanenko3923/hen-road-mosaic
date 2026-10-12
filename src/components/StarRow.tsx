import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';

type Props = {
  earned: number;
  size?: number;
  gap?: number;
};

/** Three star glyphs. '★' renders reliably on Android (rule #15). */
function StarRow({earned, size = 38, gap = 10}: Props) {
  return (
    <View style={[styles.row, {gap}]}>
      {[0, 1, 2].map(i => (
        <Text
          key={i}
          style={[
            styles.star,
            {
              fontSize: size,
              lineHeight: Math.round(size * 1.15),
              color: i < earned ? COLORS.gold : '#E0D4BC',
            },
            i < earned ? styles.lit : null,
          ]}>
          {'★'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  star: {fontWeight: '900'},
  lit: {
    textShadowColor: '#EC8248',
    textShadowRadius: 8,
    textShadowOffset: {width: 0, height: 2},
  },
});

export default React.memo(StarRow);
