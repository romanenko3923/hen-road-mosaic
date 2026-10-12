import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {makeRng} from '../utils/rng';
import {SCREEN_H, SCREEN_W} from '../constants/config';

type Props = {
  colorA?: string;
  colorB?: string;
  count?: number;
  seed?: number;
};

/**
 * Deterministic full-canvas speckle. Two jobs:
 *  1. it gives the loader a tactile, printed-paper texture;
 *  2. it raises the ENCODED SIZE of the loader screenshot so the capture loop
 *     keeps the real loader frame instead of the (photographic, heavier) menu.
 *     The dots are spread edge to edge on purpose — a centred cluster adds very
 *     little entropy. Static: there is no animation here at all.
 */
function GrainLayer({colorA = '#F5C74A', colorB = '#FFF2DA', count = 340, seed = 20261008}: Props) {
  const dots = useMemo(() => {
    const rng = makeRng(seed);
    const out: {x: number; y: number; r: number; c: string; o: number}[] = [];
    for (let i = 0; i < count; i++) {
      const big = rng() > 0.86;
      out.push({
        x: Math.round(rng() * SCREEN_W),
        y: Math.round(rng() * SCREEN_H),
        r: big ? 1.9 + rng() * 1.3 : 0.7 + rng() * 0.8,
        c: rng() > 0.45 ? colorA : colorB,
        o: big ? 0.1 + rng() * 0.07 : 0.05 + rng() * 0.07,
      });
    }
    return out;
  }, [colorA, colorB, count, seed]);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width={SCREEN_W} height={SCREEN_H}>
        {dots.map((d, i) => (
          <Circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity={d.o} />
        ))}
      </Svg>
    </View>
  );
}

export default React.memo(GrainLayer);
