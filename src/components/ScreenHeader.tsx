import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ChevronLeft} from 'lucide-react-native';
import {COLORS} from '../constants/theme';
import {HEADER_H, HEADER_TOP_PAD} from '../constants/config';

type Props = {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  /** Menu sits over full-bleed art, so its bar carries no surface or divider. */
  transparent?: boolean;
};

/**
 * The one header component in the app: every screen that has a top bar uses it
 * and only swaps the left / title / right slots, so the bars can never drift
 * apart in padding or styling. paddingTop 44 clears the status bar (rule #6).
 */
export default function ScreenHeader({
  title,
  subtitle,
  onBack,
  left,
  right,
  transparent = false,
}: Props) {
  return (
    <View style={[styles.wrap, transparent ? styles.wrapTransparent : null]}>
      <View style={styles.slot}>
        {left}
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            onPress={onBack}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.back}>
            <ChevronLeft size={24} color={COLORS.text} strokeWidth={2.4} />
          </Pressable>
        ) : null}
      </View>

      <View style={styles.center}>
        {title ? (
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        ) : null}
        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.slotRight}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: HEADER_H + HEADER_TOP_PAD,
    paddingTop: HEADER_TOP_PAD,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  wrapTransparent: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  slot: {minWidth: 48, height: 48, alignItems: 'flex-start', justifyContent: 'center'},
  slotRight: {minWidth: 48, height: 48, alignItems: 'flex-end', justifyContent: 'center'},
  back: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.text,
    lineHeight: 20,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: COLORS.textMuted,
    lineHeight: 12,
  },
});
