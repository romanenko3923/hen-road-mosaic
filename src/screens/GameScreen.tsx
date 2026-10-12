import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Lightbulb} from 'lucide-react-native';
import {bgGame} from '../assets';
import {COLORS, GRADIENTS} from '../constants/theme';
import {
  ANIM,
  ASSIST_FLOOR_MS,
  ASSIST_STEP_MS,
  HELP_STRIP_MS,
  MAX_MISTAKES,
  tileSize,
} from '../constants/config';
import {anchorSlots, ZONES} from '../game/mosaic';
import {starsFor} from '../game/levels';
import useMosaicGame, {LoseReason} from '../hooks/useMosaicGame';
import useIdleBackstop from '../hooks/useIdleBackstop';
import ScreenHeader from '../components/ScreenHeader';
import MosaicBoard from '../components/MosaicBoard';
import StatCard from '../components/StatCard';
import GoalChip from '../components/GoalChip';
import PrimaryButton from '../components/PrimaryButton';

export type RoundResult = {
  outcome: 'win' | 'lose';
  reason: 'SOLVED' | LoseReason;
  level: number;
  movesUsed: number;
  mistakes: number;
  stars: number;
  goals: boolean[];
};

type Props = {
  level: number;
  runId: number;
  onGameOver: (r: RoundResult) => void;
  onBack: () => void;
};

const ZONE_COLORS = ['#4C9ED1', '#62BA6A', '#EC8248'];

export default function GameScreen({level, runId, onGameOver, onBack}: Props) {
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
  } = useMosaicGame(level, runId);

  const tile = tileSize(def.cols);

  const fade = useRef(new Animated.Value(0)).current;
  const shake = useRef(new Animated.Value(0)).current;
  const spin = useRef(new Animated.Value(1)).current;
  const flash = useRef(new Animated.Value(0)).current;
  const movesPop = useRef(new Animated.Value(1)).current;

  const [spinSlots, setSpinSlots] = useState<number[]>([]);
  const [flashSlots, setFlashSlots] = useState<number[]>([]);
  const [flashColor, setFlashColor] = useState<string>(COLORS.green);
  const [showHelp, setShowHelp] = useState(true);

  const firedRef = useRef(false);

  // Destructured on purpose: the returned object is a fresh identity every
  // render, so putting it in an effect's dep list would re-run the cleanup and
  // clear the pending onGameOver timeout. engage/cancel are stable callbacks.
  const {engage: engageBackstop, cancel: cancelBackstop} = useIdleBackstop({
    enabled: true,
    onFire: reason => {
      forceLose(reason === 'TIMEOUT' ? 'TIME_UP' : 'OUT_OF_MOVES');
    },
  });

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: ANIM.screenFade,
      useNativeDriver: true,
    }).start();
    const t = setTimeout(() => setShowHelp(false), HELP_STRIP_MS);
    return () => clearTimeout(t);
  }, [fade]);

  const runFlash = useCallback(
    (slots: number[], color: string, duration: number) => {
      setFlashSlots(slots);
      setFlashColor(color);
      flash.setValue(0);
      Animated.sequence([
        Animated.timing(flash, {
          toValue: 0.4,
          duration: Math.round(duration * 0.4),
          useNativeDriver: true,
        }),
        Animated.timing(flash, {
          toValue: 0,
          duration: Math.round(duration * 0.6),
          useNativeDriver: true,
        }),
      ]).start();
    },
    [flash],
  );

  const runShake = useCallback(() => {
    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, {toValue: -1, duration: 60, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 1, duration: 60, useNativeDriver: true}),
      Animated.timing(shake, {toValue: 0, duration: 60, useNativeDriver: true}),
    ]).start();
  }, [shake]);

  const handleRotate = useCallback(
    (anchor: number, free?: boolean) => {
      const res = rotate(anchor, free);
      if (!res) {
        return;
      }
      engageBackstop();
      setShowHelp(false);

      const slots = anchorSlots(anchor, def.cols);
      setSpinSlots(slots);
      spin.setValue(0);
      Animated.timing(spin, {
        toValue: 1,
        duration: ANIM.rotate,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => setSpinSlots([]));

      movesPop.setValue(1);
      Animated.sequence([
        Animated.timing(movesPop, {toValue: 1.14, duration: 80, useNativeDriver: true}),
        Animated.timing(movesPop, {toValue: 1, duration: 100, useNativeDriver: true}),
      ]).start();

      if (res.mistake && !free) {
        runFlash(slots, COLORS.primary, ANIM.shake);
        runShake();
      } else {
        runFlash(slots, COLORS.green, ANIM.flash);
      }
    },
    [rotate, engageBackstop, def.cols, spin, movesPop, runFlash, runShake],
  );

  // Guided settle: when nobody has touched the board for a beat, the mosaic
  // turns the next correct marker itself. Re-armed by every board change, so
  // a player's own turn always postpones it; never before ASSIST_FLOOR_MS, so
  // the opening position stays on screen long enough to be read.
  const mountedAt = useRef<number>(Date.now());
  useEffect(() => {
    if (phase !== 'idle') {
      return;
    }
    const sinceMount = Date.now() - mountedAt.current;
    const delay = Math.max(ASSIST_STEP_MS, ASSIST_FLOOR_MS - sinceMount);
    const t = setTimeout(() => {
      const a = peekNext();
      if (a !== null) {
        handleRotate(a, true);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [tiles, phase, peekNext, handleRotate]);

  const handleHint = useCallback(() => {
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
    if (firedRef.current) {
      return;
    }
    firedRef.current = true;
    cancelBackstop();

    const snap = snapshot();
    const win = phase === 'win';
    runFlash([], win ? COLORS.gold : COLORS.woodDark, win ? 320 : 240);

    const t = setTimeout(
      () => {
        onGameOver({
          outcome: win ? 'win' : 'lose',
          reason: win ? 'SOLVED' : snap.loseReason,
          level: def.level,
          movesUsed: snap.movesUsed,
          mistakes: snap.mistakes,
          stars: win ? starsFor(def.level, snap.movesUsed, snap.mistakes) : 0,
          goals: snap.goals,
        });
      },
      win ? 700 : 600,
    );
    return () => clearTimeout(t);
  }, [phase, cancelBackstop, snapshot, runFlash, onGameOver, def.level]);

  const movesColor = movesLeft <= 3 ? COLORS.primary : COLORS.blue;
  const locked = phase !== 'idle';

  return (
    <View style={styles.root}>
      <LinearGradient colors={GRADIENTS.gameBase} style={StyleSheet.absoluteFill} />
      <Image source={bgGame} style={styles.bg} resizeMode="cover" />

      <Animated.View pointerEvents="box-none" style={[styles.body, {opacity: fade}]}>
        <ScreenHeader
          title={'LEVEL ' + def.level}
          subtitle={'MOSAIC ' + def.cols + 'x' + def.cols}
          onBack={onBack}
          right={
            <View style={styles.hintBadge}>
              <Lightbulb size={20} color={COLORS.gold} strokeWidth={2.4} />
              <Text style={styles.hintBadgeText}>{hintsLeft}</Text>
            </View>
          }
        />

        <View style={styles.gameArea} pointerEvents="box-none">
          <View style={styles.helpStrip}>
            <Text style={styles.helpText} numberOfLines={1}>
              {showHelp
                ? 'TAP A MARKER - FOUR TILES TURN TOGETHER'
                : 'PAUSE AND THE MOSAIC TURNS ONE MARKER FOR YOU'}
            </Text>
          </View>

          <MosaicBoard
            tiles={tiles}
            cols={def.cols}
            tile={tile}
            onRotate={handleRotate}
            hintAnchor={hintAnchor}
            locked={locked}
            shake={shake}
            spin={spin}
            spinSlots={spinSlots}
            flash={flash}
            flashColor={flashColor}
            flashSlots={flashSlots}
          />

          <View style={styles.chipRow}>
            {ZONES.map((z, i) => (
              <GoalChip key={z} label={z} done={goals[i]} color={ZONE_COLORS[i]} />
            ))}
          </View>
        </View>

        <View style={styles.statStrip}>
          <Animated.View
            pointerEvents="box-none"
            style={[styles.statSlot, {transform: [{scale: movesPop}]}]}>
            <StatCard value={String(movesLeft)} label="MOVES LEFT" accent={movesColor} />
          </Animated.View>
          <View style={styles.statSlot}>
            <StatCard
              value={mistakes + '/' + MAX_MISTAKES}
              label="MISTAKES"
              accent={COLORS.primary}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={String(def.depth)}
              label="PAR TURNS"
              accent={COLORS.green}
            />
          </View>
        </View>

        <View style={styles.controls}>
          <PrimaryButton
            label={'HINT (' + hintsLeft + ')'}
            Icon={Lightbulb}
            colors={GRADIENTS.cta}
            shadowColor={COLORS.primary}
            height={58}
            disabled={hintsLeft <= 0 || locked}
            onPress={handleHint}
          />
          <Text style={styles.controlsHint}>
            A HINT RINGS THE NEXT CORRECT MARKER - IT COSTS NO MOVE
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: COLORS.bg},
  bg: {...StyleSheet.absoluteFillObject, opacity: 0.5},
  body: {flex: 1},
  hintBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  hintBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: COLORS.textSoft,
    lineHeight: 14,
  },
  gameArea: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  helpStrip: {
    marginBottom: 14,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  helpText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: COLORS.textSoft,
    lineHeight: 14,
  },
  chipRow: {marginTop: 18, flexDirection: 'row', gap: 8},
  statStrip: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.bgAlt,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  statSlot: {flex: 1},
  controls: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: COLORS.bgAlt,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    shadowColor: '#8A5A32',
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: -5},
    elevation: 10,
  },
  controlsHint: {
    marginTop: 10,
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 13,
  },
});
