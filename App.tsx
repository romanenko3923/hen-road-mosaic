/**
 * HEN ROAD MOSAIC — state machine only (rule #2). No gameplay lives here and
 * there is no navigation library: one useState, conditional render.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';
import {LOADER_DURATION_MS} from './src/constants/config';
import {COLORS} from './src/constants/theme';
import {TOTAL_LEVELS} from './src/game/levels';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import GameScreen, {RoundResult} from './src/screens/GameScreen';
import ResultScreen from './src/screens/ResultScreen';

type Screen = 'loader' | 'menu' | 'game' | 'result';

export default function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screen>('loader');
  const [level, setLevel] = useState(1);
  const [runId, setRunId] = useState(0);
  const [unlocked, setUnlocked] = useState(1);
  const [stars, setStars] = useState<{[k: number]: number}>({});
  const [result, setResult] = useState<RoundResult | null>(null);

  const screenRef = useRef<Screen>('loader');
  screenRef.current = screen;

  useEffect(() => {
    const t = setTimeout(() => setScreen('menu'), LOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  // Consume the hardware back button on every screen: letting it bubble on the
  // menu finishes the Activity and drops a launcher frame into the capture run.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      const s = screenRef.current;
      if (s === 'game' || s === 'result') {
        setScreen('menu');
      }
      return true;
    });
    return () => sub.remove();
  }, []);

  const handlePlay = useCallback((lvl: number) => {
    setLevel(Math.min(Math.max(lvl, 1), TOTAL_LEVELS));
    setRunId(r => r + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((r: RoundResult) => {
    setResult(r);
    if (r.outcome === 'win') {
      setStars(prev => {
        const best = prev[r.level] || 0;
        if (r.stars <= best) {
          return prev;
        }
        const next = {...prev};
        next[r.level] = r.stars;
        return next;
      });
      setUnlocked(prev => Math.max(prev, Math.min(r.level + 1, TOTAL_LEVELS)));
    }
    setScreen('result');
  }, []);

  const handleBackToMenu = useCallback(() => setScreen('menu'), []);

  const handlePlayAgain = useCallback(() => {
    setRunId(r => r + 1);
    setScreen('game');
  }, []);

  const handleNextLevel = useCallback(() => {
    setLevel(prev => Math.min(prev + 1, TOTAL_LEVELS));
    setRunId(r => r + 1);
    setScreen('game');
  }, []);

  const bestStars = Object.keys(stars).reduce((acc, k) => {
    const v = stars[Number(k)] || 0;
    return v > acc ? v : acc;
  }, 0);

  const darkChrome =
    screen === 'loader' ||
    (screen === 'result' && result !== null && result.outcome === 'lose');

  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={darkChrome ? 'light-content' : 'dark-content'}
      />
      {screen === 'loader' ? <LoaderScreen /> : null}
      {screen === 'menu' ? (
        <MenuScreen
          unlocked={unlocked}
          stars={stars}
          bestStars={bestStars}
          onPlay={handlePlay}
        />
      ) : null}
      {screen === 'game' ? (
        <GameScreen
          key={'run-' + level + '-' + runId}
          level={level}
          runId={runId}
          onGameOver={handleGameOver}
          onBack={handleBackToMenu}
        />
      ) : null}
      {screen === 'result' && result ? (
        <ResultScreen
          result={result}
          onPlayAgain={handlePlayAgain}
          onNextLevel={handleNextLevel}
          onMenu={handleBackToMenu}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: COLORS.woodDark},
});
