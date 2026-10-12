import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BOARD_BORDER, BOARD_FRAME, BOARD_PAD} from '../constants/config';
import {GRADIENTS} from '../constants/theme';
import {anchorCount, anchorSlots, Tile} from '../game/mosaic';
import MosaicTile from './MosaicTile';
import RotateAnchor from './RotateAnchor';

type Props = {
  tiles: Tile[];
  cols: number;
  tile: number;
  onRotate: (anchor: number) => void;
  hintAnchor: number | null;
  locked: boolean;
  shake: Animated.Value;
  spin: Animated.Value;
  spinSlots: number[];
  flash: Animated.Value;
  flashColor: string;
  flashSlots: number[];
};

function MosaicBoard({
  tiles,
  cols,
  tile,
  onRotate,
  hintAnchor,
  locked,
  shake,
  spin,
  spinSlots,
  flash,
  flashColor,
  flashSlots,
}: Props) {
  const grid = tile * cols;
  const outer = grid + 2 * BOARD_FRAME;

  const spinRotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg'],
  });
  const spinScale = spin.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [0.9, 1.02, 1],
  });

  const shakeX = shake.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-7, 0, 7],
  });

  const flashWhole = flashSlots.length === 0;

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[styles.outerWrap, {transform: [{translateX: shakeX}]}]}>
      <View pointerEvents="none" style={[styles.contact, {width: outer - 18}]} />
      <LinearGradient
        colors={GRADIENTS.plank}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={[styles.plank, {width: outer, height: outer}]}>
        <View pointerEvents="none" style={styles.plankHighlight} />
        <View style={{width: grid, height: grid}}>
          {tiles.map((t, slot) => {
            const row = Math.floor(slot / cols);
            const col = slot % cols;
            const spinning = spinSlots.indexOf(slot) >= 0;
            const box = {
              position: 'absolute' as const,
              left: col * tile,
              top: row * tile,
              width: tile,
              height: tile,
            };
            if (spinning) {
              return (
                <Animated.View
                  key={'t' + slot}
                  pointerEvents="none"
                  style={[box, {transform: [{rotate: spinRotate}, {scale: spinScale}]}]}>
                  <MosaicTile motif={t.motif} orient={t.orient} size={tile} />
                </Animated.View>
              );
            }
            return (
              <View key={'t' + slot} pointerEvents="none" style={box}>
                <MosaicTile motif={t.motif} orient={t.orient} size={tile} />
              </View>
            );
          })}

          {flashWhole ? (
            <Animated.View
              pointerEvents="none"
              style={[
                styles.flashFull,
                {width: grid, height: grid, backgroundColor: flashColor, opacity: flash},
              ]}
            />
          ) : (
            flashSlots.map(slot => {
              const row = Math.floor(slot / cols);
              const col = slot % cols;
              return (
                <Animated.View
                  key={'f' + slot}
                  pointerEvents="none"
                  style={{
                    position: 'absolute',
                    left: col * tile,
                    top: row * tile,
                    width: tile,
                    height: tile,
                    backgroundColor: flashColor,
                    opacity: flash,
                  }}
                />
              );
            })
          )}

          <View
            style={StyleSheet.absoluteFill}
            pointerEvents={locked ? 'none' : 'box-none'}>
            {Array.from({length: anchorCount(cols)}, (_, a) => a).map(a => {
              const slots = anchorSlots(a, cols);
              const tl = slots[0];
              const row = Math.floor(tl / cols);
              const col = tl % cols;
              return (
                <RotateAnchor
                  key={'a' + a}
                  left={(col + 1) * tile - tile / 2}
                  top={(row + 1) * tile - tile / 2}
                  size={tile}
                  highlighted={hintAnchor === a}
                  onPress={() => onRotate(a)}
                />
              );
            })}
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outerWrap: {alignItems: 'center', justifyContent: 'center'},
  contact: {
    position: 'absolute',
    height: 24,
    bottom: -6,
    borderRadius: 14,
    backgroundColor: 'rgba(43,30,20,0.18)',
  },
  plank: {
    borderRadius: 18,
    borderWidth: BOARD_BORDER,
    borderColor: '#8A5A32',
    padding: BOARD_PAD,
    shadowColor: '#2B1E14',
    shadowOpacity: 0.42,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 10},
    elevation: 12,
  },
  plankHighlight: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    height: 1.5,
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
  flashFull: {position: 'absolute', left: 0, top: 0},
});

export default React.memo(MosaicBoard);
