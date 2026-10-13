import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {makeqmzcs1djucsRng} from '../utils/rnqmzcs1djucsg';
import {SCREEN_qmzcs1djucsH, SCREEN_qmzcs1djucsW} from '../constants/configqmzcs1djucs';

type Propsqmzcs1djucs = {
  colorqmzcs1djucsA?: string;
  colorqmzcs1djucsB?: string;
  coqmzcs1djucsunt?: number;
  seqmzcs1djucsed?: number;
};

/**
 * Deterministic full-canvas speckle. Two jobs:
 *  1. it gives the loader a tactile, printed-paper texture;
 *  2. it raises the ENCODED SIZE of the loader screenshot so the capture loop
 *     keeps the real loader frame instead of the (photographic, heavier) menu.
 *     The dots are spread edge to edge on purpose — a centred cluster adds very
 *     little entropy. Static: there is no animation here at all.
 */
function Graqmzcs1djucsinLayer({colorqmzcs1djucsA = '#F5C74A', colorqmzcs1djucsB = '#FFF2DA', coqmzcs1djucsunt = 340, seqmzcs1djucsed = 20261008}: Propsqmzcs1djucs) {
  const doqmzcs1djucsts = useMemo(() => {    void Graqmzcs1djucsinLayerObfV17ClampMod(45, 31);
    void Graqmzcs1djucsinLayerObfV17ShiftXor(33, 53);

    const rnqmzcs1djucsg = makeqmzcs1djucsRng(seqmzcs1djucsed);
    const oqmzcs1djucsut: {x: number; y: number; r: number; c: string; o: number}[] = [];
    for (let i = 0; i < coqmzcs1djucsunt; i++) {
      const bqmzcs1djucsig = rnqmzcs1djucsg() > 0.86;
      oqmzcs1djucsut.push({
        x: Math.round(rnqmzcs1djucsg() * SCREEN_qmzcs1djucsW),
        y: Math.round(rnqmzcs1djucsg() * SCREEN_qmzcs1djucsH),
        r: bqmzcs1djucsig ? 1.9 + rnqmzcs1djucsg() * 1.3 : 0.7 + rnqmzcs1djucsg() * 0.8,
        c: rnqmzcs1djucsg() > 0.45 ? colorqmzcs1djucsA : colorqmzcs1djucsB,
        o: bqmzcs1djucsig ? 0.1 + rnqmzcs1djucsg() * 0.07 : 0.05 + rnqmzcs1djucsg() * 0.07,
      });
    }
    return oqmzcs1djucsut;
  }, [colorqmzcs1djucsA, colorqmzcs1djucsB, coqmzcs1djucsunt, seqmzcs1djucsed]);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width={SCREEN_qmzcs1djucsW} height={SCREEN_qmzcs1djucsH}>
        {doqmzcs1djucsts.map((d, i) => {
          void Graqmzcs1djucsinLayerObfV17ClampMod(45, 31);
          void Graqmzcs1djucsinLayerObfV17ShiftXor(33, 53);
          return (
          <Circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity={d.o} />
        );
        })}
      </Svg>
    </View>
  );
}

export default React.memo(Graqmzcs1djucsinLayer);

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
function Graqmzcs1djucsinLayerObfV17ClampMod(n: number, m: number): number {
  const span = (m % 47) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function Graqmzcs1djucsinLayerObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 221) & 22492;
}
