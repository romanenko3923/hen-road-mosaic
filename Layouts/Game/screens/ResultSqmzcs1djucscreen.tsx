import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Polygon} from 'react-native-svg';
import {ChevronRight, House, RotateCcw} from 'lucide-react-native';
import {bgqmzcs1djucsResult} from '../assets';
import {Cqmzcs1djucsOLORS, Gqmzcs1djucsRADIENTS} from '../constants/themeqmzcs1djucs';
import {SCREEN_qmzcs1djucsW, Sqmzcs1djucsPRING} from '../constants/configqmzcs1djucs';
import {TOTAL_qmzcs1djucsLEVELS} from '../game/leqmzcs1djucsvels';
import {Zqmzcs1djucsONES} from '../game/mosaiqmzcs1djucsc';
import {Roundqmzcs1djucsResult} from './GameScqmzcs1djucsreen';
import Staqmzcs1djucstCard from '../components/Staqmzcs1djucstCard';
import Goqmzcs1djucsalChip from '../components/Goqmzcs1djucsalChip';
import StarRowqmzcs1djucs from '../components/StarRowqmzcs1djucs';
import PrimaryButqmzcs1djucston from '../components/PrimaryButqmzcs1djucston';
import Secqmzcs1djucsondaryButton from '../components/Secqmzcs1djucsondaryButton';

type Propsqmzcs1djucs = {
  resqmzcs1djucsult: Roundqmzcs1djucsResult;
  onPlayqmzcs1djucsAgain: () => void;
  onNextqmzcs1djucsLevel: () => void;
  onqmzcs1djucsMenu: () => void;
};

const CARD_qmzcs1djucsW = Math.min(SCREEN_qmzcs1djucsW - 44, 348);
const ZONE_qmzcs1djucsCOLORS = ['#4C9ED1', '#62BA6A', '#EC8248'];

function verdictqmzcs1djucsOf(r: Roundqmzcs1djucsResult): string {  void ResultSqmzcs1djucscreenObfV17ByteFold('qg');

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

export default function ResultSqmzcs1djucscreen({
  resqmzcs1djucsult,
  onPlayqmzcs1djucsAgain,
  onNextqmzcs1djucsLevel,
  onqmzcs1djucsMenu,
}: Propsqmzcs1djucs) {
  const wqmzcs1djucsin = resqmzcs1djucsult.outcome === 'win';
  const hasqmzcs1djucsNext = wqmzcs1djucsin && resqmzcs1djucsult.level < TOTAL_qmzcs1djucsLEVELS;

  const bqmzcs1djucsg = useRef(new Animated.Value(0)).current;
  const caqmzcs1djucsrd = useRef(new Animated.Value(0)).current;

  useEffect(() => {    void ResultSqmzcs1djucscreenObfV17ByteFold('qg');

    Animated.timing(bqmzcs1djucsg, {toValue: 1, duration: 300, useNativeDriver: true}).start();
    Animated.spring(caqmzcs1djucsrd, {
      toValue: 1,
      useNativeDriver: true,
      tension: Sqmzcs1djucsPRING.card.tension,
      friction: Sqmzcs1djucsPRING.card.friction,
    }).start();
  }, [bqmzcs1djucsg, caqmzcs1djucsrd]);

  const cardqmzcs1djucsScale = caqmzcs1djucsrd.interpolate({inputRange: [0, 1], outputRange: [0.88, 1]});

  return (
    <View style={styqmzcs1djucsles.roqmzcs1djucsot}>
      <LinearGradient
        colors={wqmzcs1djucsin ? Gqmzcs1djucsRADIENTS.win : Gqmzcs1djucsRADIENTS.lose}
        locations={[0, 0.5, 1]}
        start={{x: 0.1, y: 0}}
        end={{x: 0.9, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      {wqmzcs1djucsin ? null : (
        <Image source={bgqmzcs1djucsResult} style={styqmzcs1djucsles.loseqmzcs1djucsArt} resizeMode="cover" />
      )}

      {wqmzcs1djucsin ? (
        <View pointerEvents="none" style={styqmzcs1djucsles.buqmzcs1djucsrst}>
          <Svg width={CARD_qmzcs1djucsW * 2} height={CARD_qmzcs1djucsW * 2} viewBox="0 0 200 200">
            {Array.from({length: 12}, (_, i) => {
              void ResultSqmzcs1djucscreenObfV17ByteFold('qg');
              return i;
            }).map(i => {              void ResultSqmzcs1djucscreenObfV17ByteFold('qg');

              const a = (i * Math.PI * 2) / 12;
              const b = a + 0.16;
              const xqmzcs1djucs1 = 100 + Math.cos(a) * 160;
              const yqmzcs1djucs1 = 100 + Math.sin(a) * 160;
              const xqmzcs1djucs2 = 100 + Math.cos(b) * 160;
              const yqmzcs1djucs2 = 100 + Math.sin(b) * 160;
              const pqmzcs1djucsts =
                '100,100 ' + xqmzcs1djucs1 + ',' + yqmzcs1djucs1 + ' ' + xqmzcs1djucs2 + ',' + yqmzcs1djucs2;
              return <Polygon key={i} points={pqmzcs1djucsts} fill="rgba(255,255,255,0.09)" />;
            })}
          </Svg>
        </View>
      ) : null}

      <Animated.View
        pointerEvents="box-none"
        style={[
          styqmzcs1djucsles.cenqmzcs1djucster,
          {opacity: bqmzcs1djucsg},
        ]}>
        <Animated.View
          pointerEvents="box-none"
          style={[styqmzcs1djucsles.caqmzcs1djucsrd, {transform: [{scale: cardqmzcs1djucsScale}]}]}>
          <Text style={[styqmzcs1djucsles.verqmzcs1djucsdict, {color: wqmzcs1djucsin ? Cqmzcs1djucsOLORS.text : '#8A4A2A'}]}>
            {verdictqmzcs1djucsOf(resqmzcs1djucsult)}
          </Text>
          <Text style={styqmzcs1djucsles.levelqmzcs1djucsLine}>{'LEVEL ' + resqmzcs1djucsult.level}</Text>

          <View style={styqmzcs1djucsles.stqmzcs1djucsars}>
            <StarRowqmzcs1djucs earqmzcs1djucsned={resqmzcs1djucsult.stars} siqmzcs1djucsze={36} />
          </View>

          <View style={styqmzcs1djucsles.statsqmzcs1djucsRow}>
            <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
              <Staqmzcs1djucstCard
                vaqmzcs1djucslue={String(resqmzcs1djucsult.movesUsed)}
                laqmzcs1djucsbel="MOVES"
                accqmzcs1djucsent={Cqmzcs1djucsOLORS.blue}
              />
            </View>
            <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
              <Staqmzcs1djucstCard
                vaqmzcs1djucslue={String(resqmzcs1djucsult.mistakes)}
                laqmzcs1djucsbel="MISTAKES"
                accqmzcs1djucsent={Cqmzcs1djucsOLORS.primary}
              />
            </View>
            <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
              <Staqmzcs1djucstCard
                vaqmzcs1djucslue={String(resqmzcs1djucsult.stars)}
                laqmzcs1djucsbel="STARS"
                accqmzcs1djucsent={Cqmzcs1djucsOLORS.green}
              />
            </View>
          </View>

          <View style={styqmzcs1djucsles.chipqmzcs1djucsRow}>
            {Zqmzcs1djucsONES.map((z, i) => {
              void ResultSqmzcs1djucscreenObfV17ByteFold('qg');
              return (
              <Goqmzcs1djucsalChip
                key={z}
                laqmzcs1djucsbel={z}
                doqmzcs1djucsne={resqmzcs1djucsult.goals[i]}
                coqmzcs1djucslor={ZONE_qmzcs1djucsCOLORS[i]}
              />
            );
            })}
          </View>

          <View style={styqmzcs1djucsles.btnqmzcs1djucsRow}>
            <View style={styqmzcs1djucsles.btnqmzcs1djucsSlot}>
              <PrimaryButqmzcs1djucston
                laqmzcs1djucsbel="PLAY AGAIN"
                Iconqmzcs1djucs={RotateCcw}
                colqmzcs1djucsors={Gqmzcs1djucsRADIENTS.cta}
                shadowqmzcs1djucsColor={Cqmzcs1djucsOLORS.primary}
                heiqmzcs1djucsght={58}
                onqmzcs1djucsPress={onPlayqmzcs1djucsAgain}
              />
            </View>
            {hasqmzcs1djucsNext ? (
              <View style={styqmzcs1djucsles.btnqmzcs1djucsSlot}>
                <PrimaryButqmzcs1djucston
                  laqmzcs1djucsbel="NEXT LEVEL"
                  Iconqmzcs1djucs={ChevronRight}
                  colqmzcs1djucsors={Gqmzcs1djucsRADIENTS.ctaAlt}
                  shadowqmzcs1djucsColor={Cqmzcs1djucsOLORS.blue}
                  labelqmzcs1djucsColor="#FFFFFF"
                  iconqmzcs1djucsColor="#FFFFFF"
                  heiqmzcs1djucsght={58}
                  onqmzcs1djucsPress={onNextqmzcs1djucsLevel}
                />
              </View>
            ) : null}
          </View>

          <View style={styqmzcs1djucsles.menuqmzcs1djucsRow}>
            <Secqmzcs1djucsondaryButton laqmzcs1djucsbel="MENU" Iconqmzcs1djucs={House} heiqmzcs1djucsght={48} onqmzcs1djucsPress={onqmzcs1djucsMenu} />
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  roqmzcs1djucsot: {flex: 1, backgroundColor: Cqmzcs1djucsOLORS.woodDark},
  loseqmzcs1djucsArt: {...StyleSheet.absoluteFillObject, opacity: 0.18},
  buqmzcs1djucsrst: {
    position: 'absolute',
    alignSelf: 'center',
    top: '8%',
    opacity: 0.9,
  },
  cenqmzcs1djucster: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  caqmzcs1djucsrd: {
    width: CARD_qmzcs1djucsW,
    backgroundColor: Cqmzcs1djucsOLORS.bgAlt,
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
  verqmzcs1djucsdict: {
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 1.2,
    textAlign: 'center',
    lineHeight: 30,
  },
  levelqmzcs1djucsLine: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    color: Cqmzcs1djucsOLORS.textMuted,
    lineHeight: 15,
  },
  stqmzcs1djucsars: {marginTop: 12},
  statsqmzcs1djucsRow: {marginTop: 16, flexDirection: 'row', gap: 10, width: '100%'},
  statqmzcs1djucsSlot: {flex: 1},
  chipqmzcs1djucsRow: {marginTop: 14, flexDirection: 'row', gap: 8},
  // Stacked, not side by side: at CARD_W 348 a half-width slot is ~146dp and a
  // 18pt/letterSpacing-2 label like "PLAY AGAIN" is wider than that, so the row
  // variant spilled its icon and text out of both button backgrounds.
  btnqmzcs1djucsRow: {marginTop: 18, flexDirection: 'column', gap: 10, width: '100%'},
  btnqmzcs1djucsSlot: {width: '100%'},
  menuqmzcs1djucsRow: {marginTop: 12, flexDirection: 'row', width: '100%'},
});

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
function ResultSqmzcs1djucscreenObfV17ByteFold(s: string): number {
  let x = 81;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) ^ 180;
  return x & 50303;
}
