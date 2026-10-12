import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Polygon} from 'react-native-svg';
import {ChevronRight, House, RotateCcw} from 'lucide-react-native';
import {bgResult} from '../assets';
import {COLORS, GRADIENTS} from '../constants/theme';
import {SCREEN_W, SPRING} from '../constants/config';
import {TOTAL_LEVELS} from '../game/levels';
import {ZONES} from '../game/mosaic';
import {RoundResult} from './GameScreen';
import StatCard from '../components/StatCard';
import GoalChip from '../components/GoalChip';
import StarRow from '../components/StarRow';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

type Props = {
  result: RoundResult;
  onPlayAgain: () => void;
  onNextLevel: () => void;
  onMenu: () => void;
};

const CARD_W = Math.min(SCREEN_W - 44, 348);
const ZONE_COLORS = ['#4C9ED1', '#62BA6A', '#EC8248'];

function verdictOf(r: RoundResult): string {
  if (r.outcome === 'win') {
    return 'MOSAIC RESTORED!';
  }
  if (r.reason === 'TOO_MANY_MISTAKES') {
    return 'TOO MANY MISTAKES';
  }
  if (r.reason === 'TIME_UP') {
    return 'THE SUN WENT DOWN';
  }
  return 'OUT OF MOVES';
}

export default function ResultScreen({
  result,
  onPlayAgain,
  onNextLevel,
  onMenu,
}: Props) {
  const win = result.outcome === 'win';
  const hasNext = win && result.level < TOTAL_LEVELS;

  const bg = useRef(new Animated.Value(0)).current;
  const card = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bg, {toValue: 1, duration: 300, useNativeDriver: true}).start();
    Animated.spring(card, {
      toValue: 1,
      useNativeDriver: true,
      tension: SPRING.card.tension,
      friction: SPRING.card.friction,
    }).start();
  }, [bg, card]);

  const cardScale = card.interpolate({inputRange: [0, 1], outputRange: [0.88, 1]});

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={win ? GRADIENTS.win : GRADIENTS.lose}
        locations={[0, 0.5, 1]}
        start={{x: 0.1, y: 0}}
        end={{x: 0.9, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      {win ? null : (
        <Image source={bgResult} style={styles.loseArt} resizeMode="cover" />
      )}

      {win ? (
        <View pointerEvents="none" style={styles.burst}>
          <Svg width={CARD_W * 2} height={CARD_W * 2} viewBox="0 0 200 200">
            {Array.from({length: 12}, (_, i) => i).map(i => {
              const a = (i * Math.PI * 2) / 12;
              const b = a + 0.16;
              const x1 = 100 + Math.cos(a) * 160;
              const y1 = 100 + Math.sin(a) * 160;
              const x2 = 100 + Math.cos(b) * 160;
              const y2 = 100 + Math.sin(b) * 160;
              const pts =
                '100,100 ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2;
              return <Polygon key={i} points={pts} fill="rgba(255,255,255,0.09)" />;
            })}
          </Svg>
        </View>
      ) : null}

      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.center,
          {opacity: bg},
        ]}>
        <Animated.View
          pointerEvents="box-none"
          style={[styles.card, {transform: [{scale: cardScale}]}]}>
          <Text style={[styles.verdict, {color: win ? COLORS.text : '#8A4A2A'}]}>
            {verdictOf(result)}
          </Text>
          <Text style={styles.levelLine}>{'LEVEL ' + result.level}</Text>

          <View style={styles.stars}>
            <StarRow earned={result.stars} size={36} />
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statSlot}>
              <StatCard
                value={String(result.movesUsed)}
                label="MOVES"
                accent={COLORS.blue}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={String(result.mistakes)}
                label="MISTAKES"
                accent={COLORS.primary}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={String(result.stars)}
                label="STARS"
                accent={COLORS.green}
              />
            </View>
          </View>

          <View style={styles.chipRow}>
            {ZONES.map((z, i) => (
              <GoalChip
                key={z}
                label={z}
                done={result.goals[i]}
                color={ZONE_COLORS[i]}
              />
            ))}
          </View>

          <View style={styles.btnRow}>
            <View style={styles.btnSlot}>
              <PrimaryButton
                label="PLAY AGAIN"
                Icon={RotateCcw}
                colors={GRADIENTS.cta}
                shadowColor={COLORS.primary}
                height={58}
                onPress={onPlayAgain}
              />
            </View>
            {hasNext ? (
              <View style={styles.btnSlot}>
                <PrimaryButton
                  label="NEXT LEVEL"
                  Icon={ChevronRight}
                  colors={GRADIENTS.ctaAlt}
                  shadowColor={COLORS.blue}
                  labelColor="#FFFFFF"
                  iconColor="#FFFFFF"
                  height={58}
                  onPress={onNextLevel}
                />
              </View>
            ) : null}
          </View>

          <View style={styles.menuRow}>
            <SecondaryButton label="MENU" Icon={House} height={48} onPress={onMenu} />
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: COLORS.woodDark},
  loseArt: {...StyleSheet.absoluteFillObject, opacity: 0.18},
  burst: {
    position: 'absolute',
    alignSelf: 'center',
    top: '8%',
    opacity: 0.9,
  },
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  card: {
    width: CARD_W,
    backgroundColor: COLORS.bgAlt,
    borderRadius: 28,
    padding: 22,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    shadowColor: '#2B1E14',
    shadowOpacity: 0.4,
    shadowRadius: 26,
    shadowOffset: {width: 0, height: 12},
    elevation: 18,
  },
  verdict: {
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 1.2,
    textAlign: 'center',
    lineHeight: 30,
  },
  levelLine: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.textMuted,
    lineHeight: 15,
  },
  stars: {marginTop: 12},
  statsRow: {marginTop: 16, flexDirection: 'row', gap: 10, width: '100%'},
  statSlot: {flex: 1},
  chipRow: {marginTop: 14, flexDirection: 'row', gap: 8},
  // Stacked, not side by side: at CARD_W 348 a half-width slot is ~146dp and a
  // 18pt/letterSpacing-2 label like "PLAY AGAIN" is wider than that, so the row
  // variant spilled its icon and text out of both button backgrounds.
  btnRow: {marginTop: 18, flexDirection: 'column', gap: 10, width: '100%'},
  btnSlot: {width: '100%'},
  menuRow: {marginTop: 12, flexDirection: 'row', width: '100%'},
});
