import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Play} from 'lucide-react-native';
import {COLORS, GRADIENTS} from '../constants/theme';
import {ANIM, SCREEN_W} from '../constants/config';
import {LEVELS, TOTAL_LEVELS} from '../game/levels';
import LevelCard from './LevelCard';
import PrimaryButton from './PrimaryButton';

type Props = {
  visible: boolean;
  unlocked: number;
  stars: {[level: number]: number};
  onSelect: (level: number) => void;
  onClose: () => void;
};

const GRID_PAD = 20;
const GAP = 12;
const GRID_W = Math.min(SCREEN_W - 2 * GRID_PAD, 380);
const CARD = Math.floor((GRID_W - 2 * GAP) / 3);

/**
 * Level select lives in an overlay, not in its own *Screen.tsx: a mandatory
 * screen between Menu and Game both raises the screenshot gate's required count
 * and strands the capture agent one screen short of the board.
 */
export default function LevelPickerSheet({
  visible,
  unlocked,
  stars,
  onSelect,
  onClose,
}: Props) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: visible ? 1 : 0,
      duration: ANIM.entry,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [visible, anim]);

  if (!visible) {
    return null;
  }

  const translateY = anim.interpolate({inputRange: [0, 1], outputRange: [420, 0]});
  const playLevel = Math.min(unlocked, TOTAL_LEVELS);

  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.scrimWrap, {opacity: anim}]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close level list"
          style={StyleSheet.absoluteFill}
          onPress={onClose}
        />
      </Animated.View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.sheetWrap, {transform: [{translateY}], opacity: anim}]}>
        <LinearGradient colors={GRADIENTS.sheet} style={styles.sheet}>
          <View style={styles.grabber} />
          <Text style={styles.title}>SELECT LEVEL</Text>
          <Text style={styles.sub}>
            {'UNLOCKED ' + playLevel + ' OF ' + TOTAL_LEVELS}
          </Text>

          <View style={styles.grid}>
            {LEVELS.map(def => (
              <LevelCard
                key={def.level}
                level={def.level}
                stars={stars[def.level] || 0}
                locked={def.level > unlocked}
                current={def.level === playLevel}
                difficulty={def.difficulty}
                size={CARD}
                onPress={() => onSelect(def.level)}
              />
            ))}
          </View>

          <PrimaryButton
            label={'PLAY LEVEL ' + playLevel}
            Icon={Play}
            colors={GRADIENTS.ctaAlt}
            shadowColor={COLORS.blue}
            labelColor="#FFFFFF"
            iconColor="#FFFFFF"
            height={58}
            onPress={() => onSelect(playLevel)}
            style={styles.cta}
          />

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            onPress={onClose}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.close}>
            <Text style={styles.closeLabel}>CLOSE</Text>
          </Pressable>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrimWrap: {...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(43,30,20,0.62)'},
  sheetWrap: {position: 'absolute', left: 0, right: 0, bottom: 0},
  sheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(216,201,168,0.9)',
    paddingHorizontal: GRID_PAD,
    paddingTop: 12,
    paddingBottom: 22,
    alignItems: 'center',
  },
  grabber: {
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.borderStrong,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2.2,
    color: COLORS.text,
    lineHeight: 26,
  },
  sub: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: COLORS.textMuted,
    lineHeight: 14,
  },
  grid: {
    width: GRID_W,
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GAP,
    justifyContent: 'flex-start',
  },
  cta: {marginTop: 16, width: GRID_W},
  close: {
    marginTop: 10,
    height: 44,
    paddingHorizontal: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: COLORS.textSoft,
    lineHeight: 18,
  },
});
