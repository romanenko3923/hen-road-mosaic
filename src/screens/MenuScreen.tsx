import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LayoutGrid, Puzzle, Sun, Target} from 'lucide-react-native';
import {bgMenu, spriteHen} from '../assets';
import {COLORS, GRADIENTS} from '../constants/theme';
import {ANIM} from '../constants/config';
import {TOTAL_LEVELS} from '../game/levels';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import LevelPickerSheet from '../components/LevelPickerSheet';
import ScreenHeader from '../components/ScreenHeader';

type Props = {
  unlocked: number;
  stars: {[level: number]: number};
  bestStars: number;
  onPlay: (level: number) => void;
};

const RULES = [
  'TAP A TURN MARKER - FOUR TILES SPIN A QUARTER TURN TOGETHER',
  'EVERY TURN COSTS ONE MOVE - A TURN THAT SCATTERS TILES IS A MISTAKE',
  'FINISH THE SKY, FIELD AND BIRDS ZONES TO REBUILD THE SUNSET',
];

export default function MenuScreen({unlocked, stars, bestStars, onPlay}: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const sheet = useRef(new Animated.Value(0)).current;
  const hero = useRef(new Animated.Value(0)).current;

  const [picker, setPicker] = useState(false);
  const [rule, setRule] = useState(0);

  useEffect(() => {
    // One-shot entry only. An idle loop on Menu starves the capture agent.
    Animated.timing(fade, {
      toValue: 1,
      duration: ANIM.menuFade,
      useNativeDriver: true,
    }).start();
    Animated.timing(sheet, {
      toValue: 1,
      duration: ANIM.entry,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    Animated.spring(hero, {
      toValue: 1,
      useNativeDriver: true,
      tension: 38,
      friction: 8,
    }).start();
  }, [fade, sheet, hero]);

  const openPicker = useCallback(() => setPicker(true), []);
  const closePicker = useCallback(() => setPicker(false), []);
  const cycleRule = useCallback(() => setRule(r => (r + 1) % RULES.length), []);
  const startGame = useCallback(() => onPlay(unlocked), [onPlay, unlocked]);
  const pickLevel = useCallback(
    (lvl: number) => {
      setPicker(false);
      onPlay(lvl);
    },
    [onPlay],
  );

  const sheetY = sheet.interpolate({inputRange: [0, 1], outputRange: [40, 0]});
  const heroY = hero.interpolate({inputRange: [0, 1], outputRange: [18, 0]});

  return (
    <View style={styles.root}>
      <Image source={bgMenu} style={StyleSheet.absoluteFill} resizeMode="cover" />
      <LinearGradient
        colors={GRADIENTS.menuScrim}
        locations={[0, 0.62, 0.88]}
        style={StyleSheet.absoluteFill}
      />

      <Animated.View pointerEvents="box-none" style={[styles.body, {opacity: fade}]}>
        <ScreenHeader
          transparent
          left={
            <View style={styles.badge}>
              <Sun size={22} color={COLORS.primary} strokeWidth={2.4} />
            </View>
          }
          right={
            <View style={styles.progressPill}>
              <Text style={styles.progressText}>
                {'LEVEL ' + unlocked + ' / ' + TOTAL_LEVELS}
              </Text>
            </View>
          }
        />

        <View style={styles.heroZone} pointerEvents="none">
          <Animated.View pointerEvents="none" style={{opacity: hero, transform: [{translateY: heroY}]}}>
            <Image source={spriteHen} style={styles.hen} resizeMode="contain" />
          </Animated.View>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={[styles.sheet, {opacity: sheet, transform: [{translateY: sheetY}]}]}>
          <Text style={styles.title}>HEN ROAD MOSAIC</Text>
          <Text style={styles.tagline}>ROTATE 2x2 - REBUILD THE FARM SUNSET</Text>

          <View style={styles.ruleStrip}>
            <Text style={styles.ruleText} numberOfLines={2}>
              {RULES[rule]}
            </Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statSlot}>
              <StatCard
                value={String(TOTAL_LEVELS)}
                label="LEVELS"
                accent={COLORS.green}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard value={String(unlocked)} label="UNLOCKED" accent={COLORS.blue} />
            </View>
            {bestStars > 0 ? (
              <View style={styles.statSlot}>
                <StatCard
                  value={bestStars + '★'}
                  label="BEST"
                  accent={COLORS.gold}
                />
              </View>
            ) : null}
          </View>

          <PrimaryButton
            label="START GAME"
            Icon={Puzzle}
            colors={GRADIENTS.cta}
            shadowColor={COLORS.primary}
            height={62}
            onPress={startGame}
            style={styles.cta}
          />

          <View style={styles.secondaryRow}>
            <SecondaryButton label="LEVELS" Icon={LayoutGrid} onPress={openPicker} />
            <SecondaryButton label="RULES" Icon={Target} onPress={cycleRule} />
          </View>
        </Animated.View>
      </Animated.View>

      <LevelPickerSheet
        visible={picker}
        unlocked={unlocked}
        stars={stars}
        onSelect={pickLevel}
        onClose={closePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: COLORS.bg},
  body: {flex: 1},
  badge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPill: {
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255,255,255,0.65)',
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: COLORS.textSoft,
    lineHeight: 16,
  },
  heroZone: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  hen: {
    width: 196,
    height: 196,
    shadowColor: '#8A5A32',
    shadowOpacity: 0.3,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 8},
  },
  sheet: {
    marginTop: -28,
    backgroundColor: COLORS.bgAlt,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(216,201,168,0.9)',
    paddingHorizontal: 22,
    paddingTop: 26,
    paddingBottom: 28,
    shadowColor: '#8A5A32',
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: -6},
    elevation: 16,
  },
  title: {
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 36,
  },
  tagline: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: COLORS.textSoft,
    textAlign: 'center',
    lineHeight: 16,
  },
  ruleStrip: {
    marginTop: 14,
    minHeight: 42,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: 'rgba(245,199,74,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(236,130,72,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ruleText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 15,
    color: COLORS.textSoft,
    textAlign: 'center',
  },
  statsRow: {marginTop: 16, flexDirection: 'row', gap: 12},
  statSlot: {flex: 1},
  cta: {marginTop: 20},
  secondaryRow: {marginTop: 14, flexDirection: 'row', gap: 12},
});
