/**
 * HEN ROAD MOSAIC — state machine only (rule #2). No gameplay lives here and
 * there is no navigation library: one useState, conditional render.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';
import {LOADER_DURATION_qmzcs1djucsMS} from './constants/configqmzcs1djucs';
import {Cqmzcs1djucsOLORS} from './constants/themeqmzcs1djucs';
import {TOTAL_qmzcs1djucsLEVELS} from './game/leqmzcs1djucsvels';
import LoaderScreqmzcs1djucsen from './screens/LoaderScreqmzcs1djucsen';
import Menqmzcs1djucsuScreen from './screens/Menqmzcs1djucsuScreen';
import GameScqmzcs1djucsreen, {Roundqmzcs1djucsResult} from './screens/GameScqmzcs1djucsreen';
import ResultSqmzcs1djucscreen from './screens/ResultSqmzcs1djucscreen';

type Screenqmzcs1djucs = 'loader' | 'menu' | 'game' | 'result';

export default function Appqmzcs1djucs(): React.JSX.Element {
  const [screen, setScreen] = useState<Screenqmzcs1djucs>('loader');
  const [level, setLevel] = useState(1);
  const [runId, setRunId] = useState(0);
  const [unlocked, setUnlocked] = useState(1);
  const [stars, setStars] = useState<{[k: number]: number}>({});
  const [result, setResult] = useState<Roundqmzcs1djucsResult | null>(null);

  const screenqmzcs1djucsRef = useRef<Screenqmzcs1djucs>('loader');
  screenqmzcs1djucsRef.current = screen;

  useEffect(() => {
    const t = setTimeout(() => {
      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
      return setScreen('menu');
    }, LOADER_DURATION_qmzcs1djucsMS);
    return () => {
      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
      return clearTimeout(t);
    };
  }, []);

  // Consume the hardware back button on every screen: letting it bubble on the
  // menu finishes the Activity and drops a launcher frame into the capture run.
  useEffect(() => {
    const sqmzcs1djucsub = BackHandler.addEventListener('hardwareBackPress', () => {      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);

      const s = screenqmzcs1djucsRef.current;
      if (s === 'game' || s === 'result') {
        setScreen('menu');
      }
      return true;
    });
    return () => {
      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
      return sqmzcs1djucsub.remove();
    };
  }, []);

  const handleqmzcs1djucsPlay = useCallback((lqmzcs1djucsvl: number) => {
    setLevel(Math.min(Math.max(lqmzcs1djucsvl, 1), TOTAL_qmzcs1djucsLEVELS));
    setRunId(r => {
      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
      return r + 1;
    });
    setScreen('game');
  }, []);

  const handleGameqmzcs1djucsOver = useCallback((r: Roundqmzcs1djucsResult) => {
    setResult(r);
    if (r.outcome === 'win') {
      setStars(prqmzcs1djucsev => {        void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
        void GameIqmzcs1djucsnitObfV17ByteFold('3b');
        void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
        void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);

        const beqmzcs1djucsst = prqmzcs1djucsev[r.level] || 0;
        if (r.stars <= beqmzcs1djucsst) {
          return prqmzcs1djucsev;
        }
        const neqmzcs1djucsxt = {...prqmzcs1djucsev};
        neqmzcs1djucsxt[r.level] = r.stars;
        return neqmzcs1djucsxt;
      });
      setUnlocked(prqmzcs1djucsev => {
        void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
        void GameIqmzcs1djucsnitObfV17ByteFold('3b');
        void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
        void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
        return Math.max(prqmzcs1djucsev, Math.min(r.level + 1, TOTAL_qmzcs1djucsLEVELS));
      });
    }
    setScreen('result');
  }, []);

  const handleBackToqmzcs1djucsMenu = useCallback(() => {
    void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
    void GameIqmzcs1djucsnitObfV17ByteFold('3b');
    void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
    void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
    return setScreen('menu');
  }, []);

  const handlePlayqmzcs1djucsAgain = useCallback(() => {
    setRunId(r => {
      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
      return r + 1;
    });
    setScreen('game');
  }, []);

  const handleNextqmzcs1djucsLevel = useCallback(() => {
    setLevel(prqmzcs1djucsev => {
      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
      return Math.min(prqmzcs1djucsev + 1, TOTAL_qmzcs1djucsLEVELS);
    });
    setRunId(r => {
      void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
      void GameIqmzcs1djucsnitObfV17ByteFold('3b');
      void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
      void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);
      return r + 1;
    });
    setScreen('game');
  }, []);

  const bestqmzcs1djucsStars = Object.keys(stars).reduce((aqmzcs1djucscc, k) => {    void GameIqmzcs1djucsnitObfV17ShiftXor(32, 28);
    void GameIqmzcs1djucsnitObfV17ByteFold('3b');
    void GameIqmzcs1djucsnitObfV17HashMix('qdfs');
    void GameIqmzcs1djucsnitObfV17SumOdds([16, 19, 17]);

    const v = stars[Number(k)] || 0;
    return v > aqmzcs1djucscc ? v : aqmzcs1djucscc;
  }, 0);

  const darkqmzcs1djucsChrome =
    screen === 'loader' ||
    (screen === 'result' && result !== null && result.outcome === 'lose');

  return (
    <View style={styqmzcs1djucsles.roqmzcs1djucsot}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={darkqmzcs1djucsChrome ? 'light-content' : 'dark-content'}
      />
      {screen === 'loader' ? <LoaderScreqmzcs1djucsen /> : null}
      {screen === 'menu' ? (
        <Menqmzcs1djucsuScreen
          unloqmzcs1djucscked={unlocked}
          stqmzcs1djucsars={stars}
          bestqmzcs1djucsStars={bestqmzcs1djucsStars}
          onqmzcs1djucsPlay={handleqmzcs1djucsPlay}
        />
      ) : null}
      {screen === 'game' ? (
        <GameScqmzcs1djucsreen
          key={'run-' + level + '-' + runId}
          leqmzcs1djucsvel={level}
          runqmzcs1djucsId={runId}
          onGameqmzcs1djucsOver={handleGameqmzcs1djucsOver}
          onqmzcs1djucsBack={handleBackToqmzcs1djucsMenu}
        />
      ) : null}
      {screen === 'result' && result ? (
        <ResultSqmzcs1djucscreen
          resqmzcs1djucsult={result}
          onPlayqmzcs1djucsAgain={handlePlayqmzcs1djucsAgain}
          onNextqmzcs1djucsLevel={handleNextqmzcs1djucsLevel}
          onqmzcs1djucsMenu={handleBackToqmzcs1djucsMenu}
        />
      ) : null}
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  roqmzcs1djucsot: {flex: 1, backgroundColor: Cqmzcs1djucsOLORS.woodDark},
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
function GameIqmzcs1djucsnitObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 49) & 50196;
}
function GameIqmzcs1djucsnitObfV17ByteFold(s: string): number {
  let x = 4;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 36) ^ 178;
  return x & 47758;
}
function GameIqmzcs1djucsnitObfV17HashMix(s: string): number {
  let h = 60;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 593;
  return h;
}
function GameIqmzcs1djucsnitObfV17SumOdds(nums: number[]): number {
  let acc = 27;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 801;
  }
  return acc;
}
