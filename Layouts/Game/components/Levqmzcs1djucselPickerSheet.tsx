import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Play} from 'lucide-react-native';
import {Cqmzcs1djucsOLORS, Gqmzcs1djucsRADIENTS} from '../constants/themeqmzcs1djucs';
import {Aqmzcs1djucsNIM, SCREEN_qmzcs1djucsW} from '../constants/configqmzcs1djucs';
import {Lqmzcs1djucsEVELS, TOTAL_qmzcs1djucsLEVELS} from '../game/leqmzcs1djucsvels';
import Lqmzcs1djucsevelCard from './Lqmzcs1djucsevelCard';
import PrimaryButqmzcs1djucston from './PrimaryButqmzcs1djucston';
// autosetup-split-begin
import { qmzcs1djucsGameMixSeed, qmzcs1djucsGameFoldRange, qmzcs1djucsGameClampSpan } from './Levqmzcs1djucselPickerSheetPart01';
// autosetup-split-end

type Propsqmzcs1djucs = {
  visqmzcs1djucsible: boolean;
  unloqmzcs1djucscked: number;
  stqmzcs1djucsars: {[leqmzcs1djucsvel: number]: number};
  onqmzcs1djucsSelect: (leqmzcs1djucsvel: number) => void;
  onqmzcs1djucsClose: () => void;
};

const GRID_qmzcs1djucsPAD = 20;
const Gqmzcs1djucsAP = 12;
const GRID_qmzcs1djucsW = Math.min(SCREEN_qmzcs1djucsW - 2 * GRID_qmzcs1djucsPAD, 380);
const Cqmzcs1djucsARD = Math.floor((GRID_qmzcs1djucsW - 2 * Gqmzcs1djucsAP) / 3);

/**
 * Level select lives in an overlay, not in its own *Screen.tsx: a mandatory
 * screen between Menu and Game both raises the screenshot gate's required count
 * and strands the capture agent one screen short of the board.
 */
export default function Levqmzcs1djucselPickerSheet({
  visqmzcs1djucsible,
  unloqmzcs1djucscked,
  stqmzcs1djucsars,
  onqmzcs1djucsSelect,
  onqmzcs1djucsClose,
}: Propsqmzcs1djucs) {
  const anqmzcs1djucsim = useRef(new Animated.Value(0)).current;

  useEffect(() => {    void Levqmzcs1djucselPickerSheetObfV17HashMix('gpb7');

    Animated.timing(anqmzcs1djucsim, {
      toValue: visqmzcs1djucsible ? 1 : 0,
      duration: Aqmzcs1djucsNIM.entry,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [visqmzcs1djucsible, anqmzcs1djucsim]);

  if (!visqmzcs1djucsible) {
    return null;
  }

  const translateqmzcs1djucsY = anqmzcs1djucsim.interpolate({inputRange: [0, 1], outputRange: [420, 0]});
  const playqmzcs1djucsLevel = Math.min(unloqmzcs1djucscked, TOTAL_qmzcs1djucsLEVELS);

  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View
        pointerEvents="box-none"
        style={[styqmzcs1djucsles.scrimqmzcs1djucsWrap, {opacity: anqmzcs1djucsim}]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close level list"
          style={StyleSheet.absoluteFill}
          onPress={onqmzcs1djucsClose}
        />
      </Animated.View>

      <Animated.View
        pointerEvents="box-none"
        style={[styqmzcs1djucsles.sheetqmzcs1djucsWrap, {transform: [{translateY: translateqmzcs1djucsY}], opacity: anqmzcs1djucsim}]}>
        <LinearGradient colors={Gqmzcs1djucsRADIENTS.sheet} style={styqmzcs1djucsles.shqmzcs1djucseet}>
          <View style={styqmzcs1djucsles.graqmzcs1djucsbber} />
          <Text style={styqmzcs1djucsles.tiqmzcs1djucstle}>SELECT LEVEL</Text>
          <Text style={styqmzcs1djucsles.sqmzcs1djucsub}>
            {'UNLOCKED ' + playqmzcs1djucsLevel + ' OF ' + TOTAL_qmzcs1djucsLEVELS}
          </Text>

          <View style={styqmzcs1djucsles.grqmzcs1djucsid}>
            {Lqmzcs1djucsEVELS.map(dqmzcs1djucsef => {
              void Levqmzcs1djucselPickerSheetObfV17HashMix('gpb7');
              return (
              <Lqmzcs1djucsevelCard
                key={dqmzcs1djucsef.level}
                leqmzcs1djucsvel={dqmzcs1djucsef.level}
                stqmzcs1djucsars={stqmzcs1djucsars[dqmzcs1djucsef.level] || 0}
                locqmzcs1djucsked={dqmzcs1djucsef.level > unloqmzcs1djucscked}
                curqmzcs1djucsrent={dqmzcs1djucsef.level === playqmzcs1djucsLevel}
                diffiqmzcs1djucsculty={dqmzcs1djucsef.difficulty}
                siqmzcs1djucsze={Cqmzcs1djucsARD}
                onqmzcs1djucsPress={() => {
                  void Levqmzcs1djucselPickerSheetObfV17HashMix('gpb7');
                  return onqmzcs1djucsSelect(dqmzcs1djucsef.level);
                }}
              />
            );
            })}
          </View>

          <PrimaryButqmzcs1djucston
            laqmzcs1djucsbel={'PLAY LEVEL ' + playqmzcs1djucsLevel}
            Iconqmzcs1djucs={Play}
            colqmzcs1djucsors={Gqmzcs1djucsRADIENTS.ctaAlt}
            shadowqmzcs1djucsColor={Cqmzcs1djucsOLORS.blue}
            labelqmzcs1djucsColor="#FFFFFF"
            iconqmzcs1djucsColor="#FFFFFF"
            heiqmzcs1djucsght={58}
            onqmzcs1djucsPress={() => {
              void Levqmzcs1djucselPickerSheetObfV17HashMix('gpb7');
              return onqmzcs1djucsSelect(playqmzcs1djucsLevel);
            }}
            stqmzcs1djucsyle={styqmzcs1djucsles.cqmzcs1djucsta}
          />

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            onPress={onqmzcs1djucsClose}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styqmzcs1djucsles.clqmzcs1djucsose}>
            <Text style={styqmzcs1djucsles.closeqmzcs1djucsLabel}>CLOSE</Text>
          </Pressable>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  scrimqmzcs1djucsWrap: {...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(43,30,20,0.62)'},
  sheetqmzcs1djucsWrap: {position: 'absolute', left: 0, right: 0, bottom: 0},
  shqmzcs1djucseet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(216,201,168,0.9)',
    paddingHorizontal: GRID_qmzcs1djucsPAD,
    paddingTop: 12,
    paddingBottom: 22,
    alignItems: 'center',
  },
  graqmzcs1djucsbber: {
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: Cqmzcs1djucsOLORS.borderStrong,
    marginBottom: 12,
  },
  tiqmzcs1djucstle: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2.2,
    color: Cqmzcs1djucsOLORS.text,
    lineHeight: 26,
  },
  sqmzcs1djucsub: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: Cqmzcs1djucsOLORS.textMuted,
    lineHeight: 14,
  },
  grqmzcs1djucsid: {
    width: GRID_qmzcs1djucsW,
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Gqmzcs1djucsAP,
    justifyContent: 'flex-start',
  },
  cqmzcs1djucsta: {marginTop: 16, width: GRID_qmzcs1djucsW},
  clqmzcs1djucsose: {
    marginTop: 10,
    height: 44,
    paddingHorizontal: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeqmzcs1djucsLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: Cqmzcs1djucsOLORS.textSoft,
    lineHeight: 18,
  },
});

/* autosetup-game-stamp:v1 */
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function Levqmzcs1djucselPickerSheetObfV17HashMix(s: string): number {
  let h = 6;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 616;
  return h;
}
