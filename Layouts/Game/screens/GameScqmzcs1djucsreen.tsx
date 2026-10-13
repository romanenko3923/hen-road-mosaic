import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Lightbulb} from 'lucide-react-native';
import {bgqmzcs1djucsGame} from '../assets';
import {Cqmzcs1djucsOLORS, Gqmzcs1djucsRADIENTS} from '../constants/themeqmzcs1djucs';
import {
  Aqmzcs1djucsNIM,
  ASSIST_FLOOR_qmzcs1djucsMS,
  ASSIST_STEP_qmzcs1djucsMS,
  HELP_STRIP_qmzcs1djucsMS,
  MAX_qmzcs1djucsMISTAKES,
  tileqmzcs1djucsSize,
} from '../constants/configqmzcs1djucs';
import {anchorqmzcs1djucsSlots, Zqmzcs1djucsONES} from '../game/mosaiqmzcs1djucsc';
import {starsqmzcs1djucsFor} from '../game/leqmzcs1djucsvels';
import useMosqmzcs1djucsaicGame, {Loseqmzcs1djucsReason} from '../hooks/useMosqmzcs1djucsaicGame';
import useIdqmzcs1djucsleBackstop from '../hooks/useIdqmzcs1djucsleBackstop';
import ScreenHeadeqmzcs1djucsr from '../components/ScreenHeadeqmzcs1djucsr';
import Mosaiqmzcs1djucscBoard from '../components/Mosaiqmzcs1djucscBoard';
import Staqmzcs1djucstCard from '../components/Staqmzcs1djucstCard';
import Goqmzcs1djucsalChip from '../components/Goqmzcs1djucsalChip';
import PrimaryButqmzcs1djucston from '../components/PrimaryButqmzcs1djucston';

export type Roundqmzcs1djucsResult = {
  outcome: 'win' | 'lose';
  reason: 'SOLVED' | Loseqmzcs1djucsReason;
  level: number;
  movesUsed: number;
  mistakes: number;
  stars: number;
  goals: boolean[];
};

type Propsqmzcs1djucs = {
  leqmzcs1djucsvel: number;
  runqmzcs1djucsId: number;
  onGameqmzcs1djucsOver: (r: Roundqmzcs1djucsResult) => void;
  onqmzcs1djucsBack: () => void;
};

const ZONE_qmzcs1djucsCOLORS = ['#4C9ED1', '#62BA6A', '#EC8248'];

export default function GameScqmzcs1djucsreen({leqmzcs1djucsvel, runqmzcs1djucsId, onGameqmzcs1djucsOver, onqmzcs1djucsBack}: Propsqmzcs1djucs) {
  const {
    def,
    tiles,
    movesLeft,
    mistakes,
    hintsLeft,
    goals,
    phase,
    hintAnchor,
    rotate,
    spendHint,
    peekNext,
    forceLose,
    snapshot,
  } = useMosqmzcs1djucsaicGame(leqmzcs1djucsvel, runqmzcs1djucsId);

  const tiqmzcs1djucsle = tileqmzcs1djucsSize(def.cols);

  const faqmzcs1djucsde = useRef(new Animated.Value(0)).current;
  const shqmzcs1djucsake = useRef(new Animated.Value(0)).current;
  const spqmzcs1djucsin = useRef(new Animated.Value(1)).current;
  const flqmzcs1djucsash = useRef(new Animated.Value(0)).current;
  const movesqmzcs1djucsPop = useRef(new Animated.Value(1)).current;

  const [spinSlots, setSpinSlots] = useState<number[]>([]);
  const [flashSlots, setFlashSlots] = useState<number[]>([]);
  const [flashColor, setFlashColor] = useState<string>(Cqmzcs1djucsOLORS.green);
  const [showHelp, setShowHelp] = useState(true);

  const firedqmzcs1djucsRef = useRef(false);

  // Destructured on purpose: the returned object is a fresh identity every
  // render, so putting it in an effect's dep list would re-run the cleanup and
  // clear the pending onGameOver timeout. engage/cancel are stable callbacks.
  const {engage: engageBackstop, cancel: cancelBackstop} = useIdqmzcs1djucsleBackstop({
    enabled: true,
    onFire: reaqmzcs1djucsson => {      void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
      void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
      void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
      void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);

      forceLose(reaqmzcs1djucsson === 'TIMEOUT' ? 'TIME_UP' : 'OUT_OF_MOVES');
    },
  });

  useEffect(() => {
    Animated.timing(faqmzcs1djucsde, {
      toValue: 1,
      duration: Aqmzcs1djucsNIM.screenFade,
      useNativeDriver: true,
    }).start();
    const t = setTimeout(() => {
      void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
      void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
      void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
      void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);
      return setShowHelp(false);
    }, HELP_STRIP_qmzcs1djucsMS);
    return () => {
      void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
      void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
      void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
      void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);
      return clearTimeout(t);
    };
  }, [faqmzcs1djucsde]);

  const runqmzcs1djucsFlash = useCallback(
    (slqmzcs1djucsots: number[], coqmzcs1djucslor: string, duraqmzcs1djucstion: number) => {      void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
      void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
      void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
      void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);

      setFlashSlots(slqmzcs1djucsots);
      setFlashColor(coqmzcs1djucslor);
      flqmzcs1djucsash.setValue(0);
      Animated.sequence([
        Animated.timing(flqmzcs1djucsash, {
          toValue: 0.4,
          duration: Math.round(duraqmzcs1djucstion * 0.4),
          useNativeDriver: true,
        }),
        Animated.timing(flqmzcs1djucsash, {
          toValue: 0,
          duration: Math.round(duraqmzcs1djucstion * 0.6),
          useNativeDriver: true,
        }),
      ]).start();
    },
    [flqmzcs1djucsash],
  );

  const runqmzcs1djucsShake = useCallback(() => {    void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
    void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
    void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
    void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);

    shqmzcs1djucsake.setValue(0);
    Animated.sequence([
      Animated.timing(shqmzcs1djucsake, {toValue: -1, duration: 60, useNativeDriver: true}),
      Animated.timing(shqmzcs1djucsake, {toValue: 1, duration: 60, useNativeDriver: true}),
      Animated.timing(shqmzcs1djucsake, {toValue: 0, duration: 60, useNativeDriver: true}),
    ]).start();
  }, [shqmzcs1djucsake]);

  const handleqmzcs1djucsRotate = useCallback(
    (ancqmzcs1djucshor: number, frqmzcs1djucsee?: boolean) => {
      const rqmzcs1djucses = rotate(ancqmzcs1djucshor, frqmzcs1djucsee);
      if (!rqmzcs1djucses) {
        return;
      }
      engageBackstop();
      setShowHelp(false);

      const slqmzcs1djucsots = anchorqmzcs1djucsSlots(ancqmzcs1djucshor, def.cols);
      setSpinSlots(slqmzcs1djucsots);
      spqmzcs1djucsin.setValue(0);
      Animated.timing(spqmzcs1djucsin, {
        toValue: 1,
        duration: Aqmzcs1djucsNIM.rotate,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
        void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
        void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
        void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);
        return setSpinSlots([]);
      });

      movesqmzcs1djucsPop.setValue(1);
      Animated.sequence([
        Animated.timing(movesqmzcs1djucsPop, {toValue: 1.14, duration: 80, useNativeDriver: true}),
        Animated.timing(movesqmzcs1djucsPop, {toValue: 1, duration: 100, useNativeDriver: true}),
      ]).start();

      if (rqmzcs1djucses.mistake && !frqmzcs1djucsee) {
        runqmzcs1djucsFlash(slqmzcs1djucsots, Cqmzcs1djucsOLORS.primary, Aqmzcs1djucsNIM.shake);
        runqmzcs1djucsShake();
      } else {
        runqmzcs1djucsFlash(slqmzcs1djucsots, Cqmzcs1djucsOLORS.green, Aqmzcs1djucsNIM.flash);
      }
    },
    [rotate, engageBackstop, def.cols, spqmzcs1djucsin, movesqmzcs1djucsPop, runqmzcs1djucsFlash, runqmzcs1djucsShake],
  );

  // Guided settle: when nobody has touched the board for a beat, the mosaiqmzcs1djucsc
  // turns the next correct marker itself. Re-armed by every board change, so
  // a player's own turn always postpones it; never before ASSIST_FLOOR_MS, so
  // the opening position stays on screen long enough to be read.
  const mountedqmzcs1djucsAt = useRef<number>(Date.now());
  useEffect(() => {
    if (phase !== 'idle') {
      return;
    }
    const sinceqmzcs1djucsMount = Date.now() - mountedqmzcs1djucsAt.current;
    const deqmzcs1djucslay = Math.max(ASSIST_STEP_qmzcs1djucsMS, ASSIST_FLOOR_qmzcs1djucsMS - sinceqmzcs1djucsMount);
    const t = setTimeout(() => {      void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
      void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
      void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
      void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);

      const a = peekNext();
      if (a !== null) {
        handleqmzcs1djucsRotate(a, true);
      }
    }, deqmzcs1djucslay);
    return () => {
      void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
      void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
      void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
      void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);
      return clearTimeout(t);
    };
  }, [tiles, phase, peekNext, handleqmzcs1djucsRotate]);

  const handleqmzcs1djucsHint = useCallback(() => {    void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
    void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
    void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
    void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);

    const a = spendHint();
    if (a !== null) {
      engageBackstop();
      setShowHelp(false);
    }
  }, [spendHint, engageBackstop]);

  // Round resolution — fires exactly once, after the closing flourish.
  useEffect(() => {
    if (phase !== 'win' && phase !== 'lose') {
      return;
    }
    if (firedqmzcs1djucsRef.current) {
      return;
    }
    firedqmzcs1djucsRef.current = true;
    cancelBackstop();

    const snqmzcs1djucsap = snapshot();
    const wqmzcs1djucsin = phase === 'win';
    runqmzcs1djucsFlash([], wqmzcs1djucsin ? Cqmzcs1djucsOLORS.gold : Cqmzcs1djucsOLORS.woodDark, wqmzcs1djucsin ? 320 : 240);

    const t = setTimeout(
      () => {        void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
        void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
        void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
        void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);

        onGameqmzcs1djucsOver({
          outcome: wqmzcs1djucsin ? 'win' : 'lose',
          reason: wqmzcs1djucsin ? 'SOLVED' : snqmzcs1djucsap.loseReason,
          level: def.level,
          movesUsed: snqmzcs1djucsap.movesUsed,
          mistakes: snqmzcs1djucsap.mistakes,
          stars: wqmzcs1djucsin ? starsqmzcs1djucsFor(def.level, snqmzcs1djucsap.movesUsed, snqmzcs1djucsap.mistakes) : 0,
          goals: snqmzcs1djucsap.goals,
        });
      },
      wqmzcs1djucsin ? 700 : 600,
    );
    return () => {
      void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
      void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
      void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
      void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);
      return clearTimeout(t);
    };
  }, [phase, cancelBackstop, snapshot, runqmzcs1djucsFlash, onGameqmzcs1djucsOver, def.level]);

  const movesqmzcs1djucsColor = movesLeft <= 3 ? Cqmzcs1djucsOLORS.primary : Cqmzcs1djucsOLORS.blue;
  const locqmzcs1djucsked = phase !== 'idle';

  return (
    <View style={styqmzcs1djucsles.roqmzcs1djucsot}>
      <LinearGradient colors={Gqmzcs1djucsRADIENTS.gameBase} style={StyleSheet.absoluteFill} />
      <Image source={bgqmzcs1djucsGame} style={styqmzcs1djucsles.bqmzcs1djucsg} resizeMode="cover" />

      <Animated.View pointerEvents="box-none" style={[styqmzcs1djucsles.boqmzcs1djucsdy, {opacity: faqmzcs1djucsde}]}>
        <ScreenHeadeqmzcs1djucsr
          tiqmzcs1djucstle={'LEVEL ' + def.level}
          subtqmzcs1djucsitle={'MOSAIC ' + def.cols + 'x' + def.cols}
          onqmzcs1djucsBack={onqmzcs1djucsBack}
          riqmzcs1djucsght={
            <View style={styqmzcs1djucsles.hintqmzcs1djucsBadge}>
              <Lightbulb size={20} color={Cqmzcs1djucsOLORS.gold} strokeWidth={2.4} />
              <Text style={styqmzcs1djucsles.hintBadgeqmzcs1djucsText}>{hintsLeft}</Text>
            </View>
          }
        />

        <View style={styqmzcs1djucsles.gameqmzcs1djucsArea} pointerEvents="box-none">
          <View style={styqmzcs1djucsles.helpqmzcs1djucsStrip}>
            <Text style={styqmzcs1djucsles.helpqmzcs1djucsText} numberOfLines={1}>
              {showHelp
                ? 'TAP A MARKER - FOUR TILES TURN TOGETHER'
                : 'PAUSE AND THE MOSAIC TURNS ONE MARKER FOR YOU'}
            </Text>
          </View>

          <Mosaiqmzcs1djucscBoard
            tiqmzcs1djucsles={tiles}
            coqmzcs1djucsls={def.cols}
            tiqmzcs1djucsle={tiqmzcs1djucsle}
            onqmzcs1djucsRotate={handleqmzcs1djucsRotate}
            hintqmzcs1djucsAnchor={hintAnchor}
            locqmzcs1djucsked={locqmzcs1djucsked}
            shqmzcs1djucsake={shqmzcs1djucsake}
            spqmzcs1djucsin={spqmzcs1djucsin}
            spinqmzcs1djucsSlots={spinSlots}
            flqmzcs1djucsash={flqmzcs1djucsash}
            flashqmzcs1djucsColor={flashColor}
            flashqmzcs1djucsSlots={flashSlots}
          />

          <View style={styqmzcs1djucsles.chipqmzcs1djucsRow}>
            {Zqmzcs1djucsONES.map((z, i) => {
              void GameScqmzcs1djucsreenObfV17HashMix('8j4g');
              void GameScqmzcs1djucsreenObfV17SumOdds([21, 9, 28]);
              void GameScqmzcs1djucsreenObfV17ClampMod(74, 81);
              void GameScqmzcs1djucsreenObfV17ShiftXor(52, 13);
              return (
              <Goqmzcs1djucsalChip key={z} laqmzcs1djucsbel={z} doqmzcs1djucsne={goals[i]} coqmzcs1djucslor={ZONE_qmzcs1djucsCOLORS[i]} />
            );
            })}
          </View>
        </View>

        <View style={styqmzcs1djucsles.statqmzcs1djucsStrip}>
          <Animated.View
            pointerEvents="box-none"
            style={[styqmzcs1djucsles.statqmzcs1djucsSlot, {transform: [{scale: movesqmzcs1djucsPop}]}]}>
            <Staqmzcs1djucstCard vaqmzcs1djucslue={String(movesLeft)} laqmzcs1djucsbel="MOVES LEFT" accqmzcs1djucsent={movesqmzcs1djucsColor} />
          </Animated.View>
          <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
            <Staqmzcs1djucstCard
              vaqmzcs1djucslue={mistakes + '/' + MAX_qmzcs1djucsMISTAKES}
              laqmzcs1djucsbel="MISTAKES"
              accqmzcs1djucsent={Cqmzcs1djucsOLORS.primary}
            />
          </View>
          <View style={styqmzcs1djucsles.statqmzcs1djucsSlot}>
            <Staqmzcs1djucstCard
              vaqmzcs1djucslue={String(def.depth)}
              laqmzcs1djucsbel="PAR TURNS"
              accqmzcs1djucsent={Cqmzcs1djucsOLORS.green}
            />
          </View>
        </View>

        <View style={styqmzcs1djucsles.contqmzcs1djucsrols}>
          <PrimaryButqmzcs1djucston
            laqmzcs1djucsbel={'HINT (' + hintsLeft + ')'}
            Iconqmzcs1djucs={Lightbulb}
            colqmzcs1djucsors={Gqmzcs1djucsRADIENTS.cta}
            shadowqmzcs1djucsColor={Cqmzcs1djucsOLORS.primary}
            heiqmzcs1djucsght={58}
            disaqmzcs1djucsbled={hintsLeft <= 0 || locqmzcs1djucsked}
            onqmzcs1djucsPress={handleqmzcs1djucsHint}
          />
          <Text style={styqmzcs1djucsles.controlsqmzcs1djucsHint}>
            A HINT RINGS THE NEXT CORRECT MARKER - IT COSTS NO MOVE
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  roqmzcs1djucsot: {flex: 1, backgroundColor: Cqmzcs1djucsOLORS.bg},
  bqmzcs1djucsg: {...StyleSheet.absoluteFillObject, opacity: 0.5},
  boqmzcs1djucsdy: {flex: 1},
  hintqmzcs1djucsBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderWidth: 1,
    borderColor: Cqmzcs1djucsOLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  hintBadgeqmzcs1djucsText: {
    fontSize: 11,
    fontWeight: '900',
    color: Cqmzcs1djucsOLORS.textSoft,
    lineHeight: 14,
  },
  gameqmzcs1djucsArea: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  helpqmzcs1djucsStrip: {
    marginBottom: 14,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: Cqmzcs1djucsOLORS.border,
  },
  helpqmzcs1djucsText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: Cqmzcs1djucsOLORS.textSoft,
    lineHeight: 14,
  },
  chipqmzcs1djucsRow: {marginTop: 18, flexDirection: 'row', gap: 8},
  statqmzcs1djucsStrip: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Cqmzcs1djucsOLORS.bgAlt,
    borderTopWidth: 1,
    borderTopColor: Cqmzcs1djucsOLORS.border,
  },
  statqmzcs1djucsSlot: {flex: 1},
  contqmzcs1djucsrols: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: Cqmzcs1djucsOLORS.bgAlt,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: Cqmzcs1djucsOLORS.border,
    shadowColor: '#8A5A32',
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: -5},
    elevation: 10,
  },
  controlsqmzcs1djucsHint: {
    marginTop: 10,
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1,
    color: Cqmzcs1djucsOLORS.textMuted,
    textAlign: 'center',
    lineHeight: 13,
  },
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
function GameScqmzcs1djucsreenObfV17HashMix(s: string): number {
  let h = 28;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 706;
  return h;
}
function GameScqmzcs1djucsreenObfV17SumOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 733;
  }
  return acc;
}
function GameScqmzcs1djucsreenObfV17ClampMod(n: number, m: number): number {
  const span = (m % 62) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function GameScqmzcs1djucsreenObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 142) & 4021;
}
