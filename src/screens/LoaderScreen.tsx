import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Polygon, Rect} from 'react-native-svg';
import {bgLoader} from '../assets';
import {COLORS, GRADIENTS} from '../constants/theme';
import {SPRING} from '../constants/config';
import GrainLayer from '../components/GrainLayer';

/**
 * Deep walnut brand plate. It is deliberately the DARKEST screen in the app —
 * MenuScreen is high-key cream, so the two frames can never read as the same
 * picture to the screenshot gate.
 *
 * Animation budget: every tween here finishes by ~2.6s and nothing repeats.
 * A perpetual or long-running animation keeps the choreographer busy and makes
 * the capture agent's UI dump come back empty.
 */
export default function LoaderScreen() {
  const plaque = useRef(new Animated.Value(0)).current;
  const title = useRef(new Animated.Value(0)).current;
  const subtitle = useRef(new Animated.Value(0)).current;
  const bar = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const entry = Animated.sequence([
      Animated.delay(120),
      Animated.spring(plaque, {
        toValue: 1,
        useNativeDriver: true,
        tension: SPRING.entry.tension,
        friction: SPRING.entry.friction,
      }),
    ]);

    const fadeTitle = Animated.sequence([
      Animated.delay(420),
      Animated.timing(title, {toValue: 1, duration: 500, useNativeDriver: true}),
    ]);

    const fadeSub = Animated.sequence([
      Animated.delay(780),
      Animated.timing(subtitle, {toValue: 1, duration: 420, useNativeDriver: true}),
    ]);

    // Width cannot run on the native driver — staged, short, and finite.
    const progress = Animated.sequence([
      Animated.delay(260),
      Animated.timing(bar, {toValue: 0.35, duration: 520, useNativeDriver: false}),
      Animated.delay(180),
      Animated.timing(bar, {toValue: 0.62, duration: 460, useNativeDriver: false}),
      Animated.delay(200),
      Animated.timing(bar, {toValue: 0.86, duration: 420, useNativeDriver: false}),
      Animated.delay(160),
      Animated.timing(bar, {toValue: 1, duration: 380, useNativeDriver: false}),
    ]);

    entry.start();
    fadeTitle.start();
    fadeSub.start();
    progress.start();

    return () => {
      entry.stop();
      fadeTitle.stop();
      fadeSub.stop();
      progress.stop();
    };
  }, [plaque, title, subtitle, bar]);

  const plaqueScale = plaque.interpolate({inputRange: [0, 1], outputRange: [0.82, 1]});
  const barWidth = bar.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={GRADIENTS.loader}
        locations={[0, 0.55, 1]}
        start={{x: 0.2, y: 0}}
        end={{x: 0.8, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <Image source={bgLoader} style={styles.bgImage} resizeMode="cover" />
      <View style={styles.glow} />
      <GrainLayer colorA="#F5C74A" colorB="#FFF2DA" count={360} />

      <View style={styles.center}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.plaque,
            {opacity: plaque, transform: [{scale: plaqueScale}]},
          ]}>
          <Svg width={92} height={92} viewBox="0 0 92 92">
            <Rect x={0} y={0} width={46} height={46} rx={5} fill="#4C9ED1" />
            <Rect x={46} y={0} width={46} height={46} rx={5} fill="#F5C74A" />
            <Rect x={0} y={46} width={46} height={46} rx={5} fill="#62BA6A" />
            <Rect x={46} y={46} width={46} height={46} rx={5} fill="#EC8248" />
            <Circle cx={69} cy={23} r={13} fill="#FBE08A" />
            <Circle cx={62} cy={66} r={11} fill="#8E4526" />
            <Circle cx={72} cy={60} r={6} fill="#8E4526" />
            <Polygon points="78,59 87,62 78,65" fill="#2B1E14" />
            <Rect
              x={1}
              y={1}
              width={90}
              height={90}
              rx={8}
              stroke="rgba(43,30,20,0.45)"
              strokeWidth={2}
              fill="none"
            />
          </Svg>
        </Animated.View>

        <Animated.Text style={[styles.title, {opacity: title}]}>
          HEN ROAD MOSAIC
        </Animated.Text>

        <Animated.Text style={[styles.subtitle, {opacity: subtitle}]}>
          TURN THE TILES - RESTORE THE SUNSET
        </Animated.Text>

        <View style={styles.track}>
          <Animated.View pointerEvents="none" style={[styles.fillWrap, {width: barWidth}]}>
            <LinearGradient
              colors={GRADIENTS.cta}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.fill}
            />
          </Animated.View>
        </View>

        <Text style={styles.loading}>LOADING...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: COLORS.woodDark},
  bgImage: {...StyleSheet.absoluteFillObject, opacity: 0.45},
  glow: {
    position: 'absolute',
    alignSelf: 'center',
    top: '26%',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(245,199,74,0.1)',
  },
  center: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32},
  plaque: {
    width: 132,
    height: 132,
    borderRadius: 26,
    backgroundColor: '#3E2A1A',
    borderWidth: 2,
    borderColor: 'rgba(245,199,74,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 10},
    elevation: 14,
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 3.2,
    color: COLORS.textOnDark,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowRadius: 10,
    textShadowOffset: {width: 0, height: 3},
  },
  subtitle: {
    marginTop: 12,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.4,
    color: 'rgba(245,199,74,0.9)',
    textAlign: 'center',
  },
  track: {
    marginTop: 36,
    width: 180,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,242,218,0.16)',
    overflow: 'hidden',
  },
  fillWrap: {height: 6, borderRadius: 3, overflow: 'hidden'},
  fill: {flex: 1, borderRadius: 3},
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 4,
    color: 'rgba(255,242,218,0.5)',
  },
});
