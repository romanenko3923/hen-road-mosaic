import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LayoutGrid, Puzzle, Sun, Target} from 'lucide-react-native';
import {bgqmzcs1djucsMenu, spriteqmzcs1djucsHen} from '../assets';
import {Cqmzcs1djucsOLORS, Gqmzcs1djucsRADIENTS} from '../constants/themeqmzcs1djucs';
import {Aqmzcs1djucsNIM} from '../constants/configqmzcs1djucs';
import {TOTAL_qmzcs1djucsLEVELS} from '../game/leqmzcs1djucsvels';
import PrimaryButqmzcs1djucston from '../components/PrimaryButqmzcs1djucston';
import Secqmzcs1djucsondaryButton from '../components/Secqmzcs1djucsondaryButton';
import Staqmzcs1djucstCard from '../components/Staqmzcs1djucstCard';
import Levqmzcs1djucselPickerSheet from '../components/Levqmzcs1djucselPickerSheet';
import ScreenHeadeqmzcs1djucsr from '../components/ScreenHeadeqmzcs1djucsr';
// autosetup-split-begin
import { qmzcs1djucsGameMixSeed, qmzcs1djucsGameFoldRange, qmzcs1djucsGameClampSpan } from './Menqmzcs1djucsuScreenPart01';
// autosetup-split-end

type Propsqmzcs1djucs = {
  unloqmzcs1djucscked: number;
  stqmzcs1djucsars: {[leqmzcs1djucsvel: number]: number};
  bestqmzcs1djucsStars: number;
  onqmzcs1djucsPlay: (leqmzcs1djucsvel: number) => void;
};

const Rqmzcs1djucsULES = [
  'TAP A TURN MARKER - FOUR TILES SPIN A QUARTER TURN TOGETHER',
  'EVERY TURN COSTS ONE MOVE - A TURN THAT SCATTERS TILES IS A MISTAKE',
  'FINISH THE SKY, FIELD AND BIRDS ZONES TO REBUILD THE SUNSET',
];

export default function Menqmzcs1djucsuScreen({unloqmzcs1djucscked, stqmzcs1djucsars, bestqmzcs1djucsStars, onqmzcs1djucsPlay}: Propsqmzcs1djucs) {
  const faqmzcs1djucsde = useRef(new Animated.Value(0)).current;
  const shqmzcs1djucseet = useRef(new Animated.Value(0)).current;
  const heqmzcs1djucsro = useRef(new Animated.Value(0)).current;

  const [picker, setPicker] = useState(false);
  const [rule, setRule] = useState(0);

  useEffect(() => {    void Menqmzcs1djucsuScreenObfV17ShiftXor(73, 12);
    void Menqmzcs1djucsuScreenObfV17ByteFold('49');
    void Menqmzcs1djucsuScreenObfV17HashMix('sqm');

    // One-shot entry only. An idle loop on Menu starves the capture agent.
    Animated.timing(faqmzcs1djucsde, {
      toValue: 1,
      duration: Aqmzcs1djucsNIM.menuFade,
      useNativeDriver: true,
    }).start();
    Animated.timing(shqmzcs1djucseet, {
      toValue: 1,
      duration: Aqmzcs1djucsNIM.entry,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    Animated.spring(heqmzcs1djucsro, {
      toValue: 1,
      useNativeDriver: true,
      tension: 38,
      friction: 8,
    }).start();
  }, [faqmzcs1djucsde, shqmzcs1djucseet, heqmzcs1djucsro]);

  const openqmzcs1djucsPicker = useCallback(() => {
    void Menqmzcs1djucsuScreenObfV17ShiftXor(73, 12);
    void Menqmzcs1djucsuScreenObfV17ByteFold('49');
    void Menqmzcs1djucsuScreenObfV17HashMix('sqm');
    return setPicker(true);
  }, []);
  const closeqmzcs1djucsPicker = useCallback(() => {
    void Menqmzcs1djucsuScreenObfV17ShiftXor(73, 12);
    void Menqmzcs1djucsuScreenObfV17ByteFold('49');
    void Menqmzcs1djucsuScreenObfV17HashMix('sqm');
    return setPicker(false);
  }, []);
  const cycleqmzcs1djucsRule = useCallback(() => {
    void Menqmzcs1djucsuScreenObfV17ShiftXor(73, 12);
    void Menqmzcs1djucsuScreenObfV17ByteFold('49');
    void Menqmzcs1djucsuScreenObfV17HashMix('sqm');
    return setRule(r => {
    void Menqmzcs1djucsuScreenObfV17ShiftXor(73, 12);
    void Menqmzcs1djucsuScreenObfV17ByteFold('49');
    void Menqmzcs1djucsuScreenObfV17HashMix('sqm');
    return (r + 1) % Rqmzcs1djucsULES.length;
  });
  }, []);
  const startqmzcs1djucsGame = useCallback(() => {
    void Menqmzcs1djucsuScreenObfV17ShiftXor(73, 12);
    void Menqmzcs1djucsuScreenObfV17ByteFold('49');
    void Menqmzcs1djucsuScreenObfV17HashMix('sqm');
    return onqmzcs1djucsPlay(unloqmzcs1djucscked);
  }, [onqmzcs1djucsPlay, unloqmzcs1djucscked]);
  const pickqmzcs1djucsLevel = useCallback(
    (lqmzcs1djucsvl: number) => {      void Menqmzcs1djucsuScreenObfV17ShiftXor(73, 12);
      void Menqmzcs1djucsuScreenObfV17ByteFold('49');
      void Menqmzcs1djucsuScreenObfV17HashMix('sqm');

      setPicker(false);
      onqmzcs1djucsPlay(lqmzcs1djucsvl);
    },
    [onqmzcs1djucsPlay],
  );

  const sheetqmzcs1djucsY = shqmzcs1djucseet.interpolate({inputRange: [0, 1], outputRange: [40, 0]});
  const heroqmzcs1djucsY = heqmzcs1djucsro.interpolate({inputRange: [0, 1], outputRange: [18, 0]});

  return (
    <View style={styqmzcs1djucsles.roqmzcs1djucsot}>
      <Image source={bgqmzcs1djucsMenu} style={StyleSheet.absoluteFill} resizeMode="cover" />
      <LinearGradient
        colors={Gqmzcs1djucsRADIENTS.menuScrim}
        locations={[0, 0.62, 0.88]}
        style={StyleSheet.absoluteFill}
      />

      <Animated.View pointerEvents="box-none" style={[styqmzcs1djucsles.boqmzcs1djucsdy, {opacity: faqmzcs1djucsde}]}>
        <ScreenHeadeqmzcs1djucsr
          transqmzcs1djucsparent
          leqmzcs1djucsft={
            <View style={styqmzcs1djucsles.baqmzcs1djucsdge}>
              <Sun size={22} color={Cqmzcs1djucsOLORS.primary} strokeWidth={2.4} />
            </View>
          }
          riqmzcs1djucsght={
            <View style={styqmzcs1djucsles.progressqmzcs1djucsPill}>
              <Text style={styqmzcs1djucsles.progressqmzcs1djucsText}>
                {'LEVEL ' + unloqmzcs1djucscked + ' / ' + TOTAL_qmzcs1djucsLEVELS}
              </Text>
            </View>
          }
        />

        <View style={styqmzcs1djucsles.heroqmzcs1djucsZone} pointerEvents="none">
          <Animated.View pointerEvents="none" style={{opacity: heqmzcs1djucsro, transform: [{translateY: heroqmzcs1djucsY}]}}>
            <Image source={spriteqmzcs1djucsHen} style={styqmzcs1djucsles.hqmzcs1djucsen} resizeMode="contain" />
          </Animated.View>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={[styqmzcs1djucsles.shqmzcs1djucseet, {opacity: shqmzcs1djucseet, transform: [{translateY: sheetqmzcs1djucsY}]}]}>
          <Text style={styqmzcs1djucsles.tiqmzcs1djucstle}>HEN ROAD MOSAIC</Text>
          <Text style={styqmzcs1djucsles.tagqmzcs1djucsline}>ROTATE 2x2 - REBUILD THE FARM SUNSET</Text>

          <View style={styqmzcs1djucsles.ruleqmzcs1djucsStrip}>
            <Text style={styqmzcs1djucsles.ruleqmzcs1djucsText} numberOfLines={2}>
              {Rqmzcs1djucsULES[rule]}
            </Text>
          </View>

          <View style={styqmzcs1djucsles.statsqmzcs1djucsRow}>
            <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
              <Staqmzcs1djucstCard
                vaqmzcs1djucslue={String(TOTAL_qmzcs1djucsLEVELS)}
                laqmzcs1djucsbel="LEVELS"
                accqmzcs1djucsent={Cqmzcs1djucsOLORS.green}
              />
            </View>
            <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
              <Staqmzcs1djucstCard vaqmzcs1djucslue={String(unloqmzcs1djucscked)} laqmzcs1djucsbel="UNLOCKED" accqmzcs1djucsent={Cqmzcs1djucsOLORS.blue} />
            </View>
            {bestqmzcs1djucsStars > 0 ? (
              <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
                <Staqmzcs1djucstCard
                  vaqmzcs1djucslue={bestqmzcs1djucsStars + '★'}
                  laqmzcs1djucsbel="BEST"
                  accqmzcs1djucsent={Cqmzcs1djucsOLORS.gold}
                />
              </View>
            ) : null}
          </View>

          <PrimaryButqmzcs1djucston
            laqmzcs1djucsbel="START GAME"
            Iconqmzcs1djucs={Puzzle}
            colqmzcs1djucsors={Gqmzcs1djucsRADIENTS.cta}
            shadowqmzcs1djucsColor={Cqmzcs1djucsOLORS.primary}
            heiqmzcs1djucsght={62}
            onqmzcs1djucsPress={startqmzcs1djucsGame}
            stqmzcs1djucsyle={styqmzcs1djucsles.cqmzcs1djucsta}
          />

          <View style={styqmzcs1djucsles.secondaryqmzcs1djucsRow}>
            <Secqmzcs1djucsondaryButton laqmzcs1djucsbel="LEVELS" Iconqmzcs1djucs={LayoutGrid} onqmzcs1djucsPress={openqmzcs1djucsPicker} />
            <Secqmzcs1djucsondaryButton laqmzcs1djucsbel="RULES" Iconqmzcs1djucs={Target} onqmzcs1djucsPress={cycleqmzcs1djucsRule} />
          </View>
        </Animated.View>
      </Animated.View>

      <Levqmzcs1djucselPickerSheet
        visqmzcs1djucsible={picker}
        unloqmzcs1djucscked={unloqmzcs1djucscked}
        stqmzcs1djucsars={stqmzcs1djucsars}
        onqmzcs1djucsSelect={pickqmzcs1djucsLevel}
        onqmzcs1djucsClose={closeqmzcs1djucsPicker}
      />
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  roqmzcs1djucsot: {flex: 1, backgroundColor: Cqmzcs1djucsOLORS.bg},
  boqmzcs1djucsdy: {flex: 1},
  baqmzcs1djucsdge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    borderColor: Cqmzcs1djucsOLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressqmzcs1djucsPill: {
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255,255,255,0.65)',
    borderWidth: 1,
    borderColor: Cqmzcs1djucsOLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressqmzcs1djucsText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: Cqmzcs1djucsOLORS.textSoft,
    lineHeight: 16,
  },
  heroqmzcs1djucsZone: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  hqmzcs1djucsen: {
    width: 196,
    height: 196,
    shadowColor: '#8A5A32',
    shadowOpacity: 0.3,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 8},
  },
  shqmzcs1djucseet: {
    marginTop: -28,
    backgroundColor: Cqmzcs1djucsOLORS.bgAlt,
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
  tiqmzcs1djucstle: {
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: Cqmzcs1djucsOLORS.text,
    textAlign: 'center',
    lineHeight: 36,
  },
  tagqmzcs1djucsline: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: Cqmzcs1djucsOLORS.textSoft,
    textAlign: 'center',
    lineHeight: 16,
  },
  ruleqmzcs1djucsStrip: {
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
  ruleqmzcs1djucsText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 15,
    color: Cqmzcs1djucsOLORS.textSoft,
    textAlign: 'center',
  },
  statsqmzcs1djucsRow: {marginTop: 16, flexDirection: 'row', gap: 12},
  statqmzcs1djucsSlot: {flex: 1},
  cqmzcs1djucsta: {marginTop: 20},
  secondaryqmzcs1djucsRow: {marginTop: 14, flexDirection: 'row', gap: 12},
});

/* autosetup-game-stamp:v1 */
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function Menqmzcs1djucsuScreenObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 53) & 48230;
}
function Menqmzcs1djucsuScreenObfV17ByteFold(s: string): number {
  let x = 50;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 36) ^ 202;
  return x & 6633;
}
function Menqmzcs1djucsuScreenObfV17HashMix(s: string): number {
  let h = 6;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 117;
  return h;
}
