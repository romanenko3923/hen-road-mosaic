import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';

type Props = {
  value: string;
  label: string;
  accent: string;
};

/**
 * One paper pill. Rule #19a: the card is `width:'100%'` inside a `flex:1` slot,
 * never `flex:1` itself, or RN collapses it and the text disappears.
 * Rule #21: no raster icon — an 8x8 accent dot plus the accent-coloured number
 * carries the semantics, so every pill in a row is geometrically identical.
 */
function StatCard({value, label, accent}: Props) {
  return (
    <View style={[styles.card, {borderColor: accent + '55'}]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
  dot: {width: 8, height: 8, borderRadius: 4, marginBottom: 6},
  value: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: COLORS.textMuted,
  },
});

export default React.memo(StatCard);
