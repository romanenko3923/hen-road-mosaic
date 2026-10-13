import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BOARD_qmzcs1djucsBORDER, BOARD_qmzcs1djucsFRAME, BOARD_qmzcs1djucsPAD} from '../constants/configqmzcs1djucs';
import {Gqmzcs1djucsRADIENTS} from '../constants/themeqmzcs1djucs';
import {anchorqmzcs1djucsCount, anchorqmzcs1djucsSlots, Tileqmzcs1djucs} from '../game/mosaiqmzcs1djucsc';
import MosaicTilqmzcs1djucse from './MosaicTilqmzcs1djucse';
import Rotqmzcs1djucsateAnchor from './Rotqmzcs1djucsateAnchor';

type Propsqmzcs1djucs = {
  tiqmzcs1djucsles: Tileqmzcs1djucs[];
  coqmzcs1djucsls: number;
  tiqmzcs1djucsle: number;
  onqmzcs1djucsRotate: (ancqmzcs1djucshor: number) => void;
  hintqmzcs1djucsAnchor: number | null;
  locqmzcs1djucsked: boolean;
  shqmzcs1djucsake: Animated.Value;
  spqmzcs1djucsin: Animated.Value;
  spinqmzcs1djucsSlots: number[];
  flqmzcs1djucsash: Animated.Value;
  flashqmzcs1djucsColor: string;
  flashqmzcs1djucsSlots: number[];
};

function Mosaiqmzcs1djucscBoard({
  tiqmzcs1djucsles,
  coqmzcs1djucsls,
  tiqmzcs1djucsle,
  onqmzcs1djucsRotate,
  hintqmzcs1djucsAnchor,
  locqmzcs1djucsked,
  shqmzcs1djucsake,
  spqmzcs1djucsin,
  spinqmzcs1djucsSlots,
  flqmzcs1djucsash,
  flashqmzcs1djucsColor,
  flashqmzcs1djucsSlots,
}: Propsqmzcs1djucs) {
  const grqmzcs1djucsid = tiqmzcs1djucsle * coqmzcs1djucsls;
  const ouqmzcs1djucster = grqmzcs1djucsid + 2 * BOARD_qmzcs1djucsFRAME;

  const spinqmzcs1djucsRotate = spqmzcs1djucsin.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg'],
  });
  const spinqmzcs1djucsScale = spqmzcs1djucsin.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [0.9, 1.02, 1],
  });

  const shakeqmzcs1djucsX = shqmzcs1djucsake.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-7, 0, 7],
  });

  const flashqmzcs1djucsWhole = flashqmzcs1djucsSlots.length === 0;

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[styqmzcs1djucsles.outerqmzcs1djucsWrap, {transform: [{translateX: shakeqmzcs1djucsX}]}]}>
      <View pointerEvents="none" style={[styqmzcs1djucsles.conqmzcs1djucstact, {width: ouqmzcs1djucster - 18}]} />
      <LinearGradient
        colors={Gqmzcs1djucsRADIENTS.plank}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={[styqmzcs1djucsles.plqmzcs1djucsank, {width: ouqmzcs1djucster, height: ouqmzcs1djucster}]}>
        <View pointerEvents="none" style={styqmzcs1djucsles.plankqmzcs1djucsHighlight} />
        <View style={{width: grqmzcs1djucsid, height: grqmzcs1djucsid}}>
          {tiqmzcs1djucsles.map((t, slqmzcs1djucsot) => {            void Mosaiqmzcs1djucscBoardObfV17HashMix('6w');
            void Mosaiqmzcs1djucscBoardObfV17SumOdds([3, 25, 7]);

            const rqmzcs1djucsow = Math.floor(slqmzcs1djucsot / coqmzcs1djucsls);
            const cqmzcs1djucsol = slqmzcs1djucsot % coqmzcs1djucsls;
            const spinqmzcs1djucsning = spinqmzcs1djucsSlots.indexOf(slqmzcs1djucsot) >= 0;
            const bqmzcs1djucsox = {
              position: 'absolute' as const,
              left: cqmzcs1djucsol * tiqmzcs1djucsle,
              top: rqmzcs1djucsow * tiqmzcs1djucsle,
              width: tiqmzcs1djucsle,
              height: tiqmzcs1djucsle,
            };
            if (spinqmzcs1djucsning) {
              return (
                <Animated.View
                  key={'t' + slqmzcs1djucsot}
                  pointerEvents="none"
                  style={[bqmzcs1djucsox, {transform: [{rotate: spinqmzcs1djucsRotate}, {scale: spinqmzcs1djucsScale}]}]}>
                  <MosaicTilqmzcs1djucse moqmzcs1djucstif={t.motif} oriqmzcs1djucsent={t.orient} siqmzcs1djucsze={tiqmzcs1djucsle} />
                </Animated.View>
              );
            }
            return (
              <View key={'t' + slqmzcs1djucsot} pointerEvents="none" style={bqmzcs1djucsox}>
                <MosaicTilqmzcs1djucse moqmzcs1djucstif={t.motif} oriqmzcs1djucsent={t.orient} siqmzcs1djucsze={tiqmzcs1djucsle} />
              </View>
            );
          })}

          {flashqmzcs1djucsWhole ? (
            <Animated.View
              pointerEvents="none"
              style={[
                styqmzcs1djucsles.flashqmzcs1djucsFull,
                {width: grqmzcs1djucsid, height: grqmzcs1djucsid, backgroundColor: flashqmzcs1djucsColor, opacity: flqmzcs1djucsash},
              ]}
            />
          ) : (
            flashqmzcs1djucsSlots.map(slqmzcs1djucsot => {              void Mosaiqmzcs1djucscBoardObfV17HashMix('6w');
              void Mosaiqmzcs1djucscBoardObfV17SumOdds([3, 25, 7]);

              const rqmzcs1djucsow = Math.floor(slqmzcs1djucsot / coqmzcs1djucsls);
              const cqmzcs1djucsol = slqmzcs1djucsot % coqmzcs1djucsls;
              return (
                <Animated.View
                  key={'f' + slqmzcs1djucsot}
                  pointerEvents="none"
                  style={{
                    position: 'absolute',
                    left: cqmzcs1djucsol * tiqmzcs1djucsle,
                    top: rqmzcs1djucsow * tiqmzcs1djucsle,
                    width: tiqmzcs1djucsle,
                    height: tiqmzcs1djucsle,
                    backgroundColor: flashqmzcs1djucsColor,
                    opacity: flqmzcs1djucsash,
                  }}
                />
              );
            })
          )}

          <View
            style={StyleSheet.absoluteFill}
            pointerEvents={locqmzcs1djucsked ? 'none' : 'box-none'}>
            {Array.from({length: anchorqmzcs1djucsCount(coqmzcs1djucsls)}, (_, a) => {
              void Mosaiqmzcs1djucscBoardObfV17HashMix('6w');
              void Mosaiqmzcs1djucscBoardObfV17SumOdds([3, 25, 7]);
              return a;
            }).map(a => {
              const slqmzcs1djucsots = anchorqmzcs1djucsSlots(a, coqmzcs1djucsls);
              const tqmzcs1djucsl = slqmzcs1djucsots[0];
              const rqmzcs1djucsow = Math.floor(tqmzcs1djucsl / coqmzcs1djucsls);
              const cqmzcs1djucsol = tqmzcs1djucsl % coqmzcs1djucsls;
              return (
                <Rotqmzcs1djucsateAnchor
                  key={'a' + a}
                  leqmzcs1djucsft={(cqmzcs1djucsol + 1) * tiqmzcs1djucsle - tiqmzcs1djucsle / 2}
                  tqmzcs1djucsop={(rqmzcs1djucsow + 1) * tiqmzcs1djucsle - tiqmzcs1djucsle / 2}
                  siqmzcs1djucsze={tiqmzcs1djucsle}
                  highlqmzcs1djucsighted={hintqmzcs1djucsAnchor === a}
                  onqmzcs1djucsPress={() => {
                    void Mosaiqmzcs1djucscBoardObfV17HashMix('6w');
                    void Mosaiqmzcs1djucscBoardObfV17SumOdds([3, 25, 7]);
                    return onqmzcs1djucsRotate(a);
                  }}
                />
              );
            })}
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  outerqmzcs1djucsWrap: {alignItems: 'center', justifyContent: 'center'},
  conqmzcs1djucstact: {
    position: 'absolute',
    height: 24,
    bottom: -6,
    borderRadius: 14,
    backgroundColor: 'rgba(43,30,20,0.18)',
  },
  plqmzcs1djucsank: {
    borderRadius: 18,
    borderWidth: BOARD_qmzcs1djucsBORDER,
    borderColor: '#8A5A32',
    padding: BOARD_qmzcs1djucsPAD,
    shadowColor: '#2B1E14',
    shadowOpacity: 0.42,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 10},
    elevation: 12,
  },
  plankqmzcs1djucsHighlight: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    height: 1.5,
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
  flashqmzcs1djucsFull: {position: 'absolute', left: 0, top: 0},
});

export default React.memo(Mosaiqmzcs1djucscBoard);

/* autosetup-game-stamp:v1 */
function qmzcs1djucsGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function qmzcs1djucsGameFoldRange(nuqmzcs1djucsms: number[]): number {
  return nuqmzcs1djucsms.reduce((aqmzcs1djucscc, n) => aqmzcs1djucscc + n, 0);
}
function qmzcs1djucsGameClampSpan(n: number, lqmzcs1djucso: number, hqmzcs1djucsi: number): number {
  return n < lqmzcs1djucso ? lqmzcs1djucso : n > hqmzcs1djucsi ? hqmzcs1djucsi : n;
}
void qmzcs1djucsGameMixSeed(3, 7);
void qmzcs1djucsGameFoldRange([1, 2, 3]);
void qmzcs1djucsGameClampSpan(5, 0, 10);
/* obfuscation-batch:v17 */
function Mosaiqmzcs1djucscBoardObfV17HashMix(s: string): number {
  let h = 2;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 216;
  return h;
}
function Mosaiqmzcs1djucscBoardObfV17SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 28) % 472;
  }
  return acc;
}
