import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Polygon, Rect} from 'react-native-svg';
import {bgqmzcs1djucsLoader} from '../assets';
import {Cqmzcs1djucsOLORS, Gqmzcs1djucsRADIENTS} from '../constants/themeqmzcs1djucs';
import Graqmzcs1djucsinLayer from '../components/Graqmzcs1djucsinLayer';

/**
 * Deep walnut brand plate. Darkest screen in the app so the cream menu
 * never reads as the same picture.
 *
 * The fill loops until the host unmounts this screen. Hero motion is
 * one-shot only (swipe shear, tilt settle). Grain stays static.
 */

const TILE_qmzcs1djucsLABELS = ['LOADING', 'TILING', 'SETTLING'];
const Sqmzcs1djucsPARK = Cqmzcs1djucsOLORS.gold;
const MAX_qmzcs1djucsBURSTS = 3;

type Loaderqmzcs1djucsProps = {
  donqmzcs1djucseOnFirstCycle?: boolean;
  onDoneqmzcs1djucs?: () => void;
};

type Sparkqmzcs1djucsBit = {
  key: string;
  ox: number;
  oy: number;
  w: number;
  h: number;
  rot: number;
};

type Sparkqmzcs1djucsBurst = {
  id: number;
  x: number;
  y: number;
  life: number;
  bits: Sparkqmzcs1djucsBit[];
};

function clqmzcs1djucsamp(n: number, lqmzcs1djucso: number, hqmzcs1djucsi: number): number {  void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
  void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
  void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

  return n < lqmzcs1djucso ? lqmzcs1djucso : n > hqmzcs1djucsi ? hqmzcs1djucsi : n;
}

function MosaicSparkqmzcs1djucsDash({
  ox,
  oy,
  w,
  h,
  rot,
  life,
}: Sparkqmzcs1djucsBit & {life: number}) {  void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
  void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
  void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

  const opaqmzcs1djucscity = useRef(new Animated.Value(0.35)).current;
  const scqmzcs1djucsale = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {    void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
    void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
    void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

    const uqmzcs1djucsp = Math.max(120, Math.round(life * 0.38));
    const doqmzcs1djucswn = Math.max(180, life - uqmzcs1djucsp);
    Animated.parallel([
      Animated.sequence([
        Animated.timing(opaqmzcs1djucscity, {
          toValue: 1,
          duration: Math.round(uqmzcs1djucsp * 0.45),
          useNativeDriver: true,
        }),
        Animated.timing(opaqmzcs1djucscity, {
          toValue: 0,
          duration: doqmzcs1djucswn,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(scqmzcs1djucsale, {toValue: 1, duration: uqmzcs1djucsp, useNativeDriver: true}),
        Animated.timing(scqmzcs1djucsale, {toValue: 0, duration: doqmzcs1djucswn, useNativeDriver: true}),
      ]),
    ]).start();
  }, [life, opaqmzcs1djucscity, scqmzcs1djucsale]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: w,
        height: h,
        marginLeft: -w / 2,
        marginTop: -h / 2,
        borderRadius: 1,
        backgroundColor: Sqmzcs1djucsPARK,
        opacity: opaqmzcs1djucscity,
        transform: [
          {translateX: ox},
          {translateY: oy},
          {rotate: `${rot}deg`},
          {scale: scqmzcs1djucsale},
        ],
      }}
    />
  );
}

function LoaderSparkqmzcs1djucsMosaic({
  buqmzcs1djucsrst,
  onqmzcs1djucsGone,
}: {
  buqmzcs1djucsrst: Sparkqmzcs1djucsBurst;
  onqmzcs1djucsGone: (iqmzcs1djucsd: number) => void;
}) {
  useEffect(() => {
    const t = setTimeout(() => {
      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
      return onqmzcs1djucsGone(buqmzcs1djucsrst.id);
    }, buqmzcs1djucsrst.life + 30);
    return () => {
      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
      return clearTimeout(t);
    };
  }, [buqmzcs1djucsrst.id, buqmzcs1djucsrst.life, onqmzcs1djucsGone]);

  return (
    <View pointerEvents="none" style={[styqmzcs1djucsles.burstqmzcs1djucsOrigin, {left: buqmzcs1djucsrst.x, top: buqmzcs1djucsrst.y}]}>
      {buqmzcs1djucsrst.bits.map(bqmzcs1djucsit => {
        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
        return (
        <MosaicSparkqmzcs1djucsDash key={bqmzcs1djucsit.key} {...bqmzcs1djucsit} life={buqmzcs1djucsrst.life} />
      );
      })}
    </View>
  );
}

function Mosaicqmzcs1djucsPlaque() {  void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
  void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
  void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

  return (
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
  );
}

export default function LoaderScreqmzcs1djucsen({
  donqmzcs1djucseOnFirstCycle,
  onDoneqmzcs1djucs,
}: Loaderqmzcs1djucsProps) {
  const plaqmzcs1djucsque = useRef(new Animated.Value(0)).current;
  const tiqmzcs1djucstle = useRef(new Animated.Value(0)).current;
  const subtqmzcs1djucsitle = useRef(new Animated.Value(0)).current;
  const bqmzcs1djucsar = useRef(new Animated.Value(0)).current;
  const tiqmzcs1djucslt = useRef(new Animated.Value(0)).current;
  const holdqmzcs1djucsScale = useRef(new Animated.Value(1)).current;
  const touqmzcs1djucsched = useRef(false);
  const reacqmzcs1djucstion = useRef(0);
  const burstqmzcs1djucsId = useRef(0);
  const onDoneqmzcs1djucsRef = useRef(onDoneqmzcs1djucs);
  onDoneqmzcs1djucsRef.current = onDoneqmzcs1djucs;

  const [labelIx, setLabelIx] = useState(0);
  const [bursts, setBursts] = useState<Sparkqmzcs1djucsBurst[]>([]);

  const playqmzcs1djucsTap = useCallback(() => {    void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
    void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
    void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

    const whqmzcs1djucsich = reacqmzcs1djucstion.current % 3;
    reacqmzcs1djucstion.current += 1;
    tiqmzcs1djucslt.stopAnimation();
    if (whqmzcs1djucsich === 0) {
      Animated.sequence([
        Animated.timing(tiqmzcs1djucslt, {toValue: 8, duration: 90, useNativeDriver: true}),
        Animated.timing(tiqmzcs1djucslt, {toValue: -8, duration: 120, useNativeDriver: true}),
        Animated.timing(tiqmzcs1djucslt, {toValue: 5, duration: 100, useNativeDriver: true}),
        Animated.timing(tiqmzcs1djucslt, {toValue: 0, duration: 150, useNativeDriver: true}),
      ]).start();
    } else if (whqmzcs1djucsich === 1) {
      Animated.sequence([
        Animated.timing(tiqmzcs1djucslt, {toValue: -8, duration: 140, useNativeDriver: true}),
        Animated.timing(tiqmzcs1djucslt, {toValue: 6, duration: 160, useNativeDriver: true}),
        Animated.timing(tiqmzcs1djucslt, {toValue: 0, duration: 180, useNativeDriver: true}),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(tiqmzcs1djucslt, {toValue: 168, duration: 280, useNativeDriver: true}),
        Animated.spring(tiqmzcs1djucslt, {
          toValue: 0,
          useNativeDriver: true,
          tension: 46,
          friction: 8,
        }),
      ]).start();
    }
  }, [tiqmzcs1djucslt]);

  const playTapqmzcs1djucsRef = useRef(playqmzcs1djucsTap);
  playTapqmzcs1djucsRef.current = playqmzcs1djucsTap;

  const pqmzcs1djucsan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
        return true;
      },
      onMoveShouldSetPanResponder: () => {
        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
        return true;
      },
      onPanResponderGrant: () => {        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

        touqmzcs1djucsched.current = true;
        tiqmzcs1djucslt.stopAnimation();
        Animated.timing(holdqmzcs1djucsScale, {
          toValue: 0.94,
          duration: 200,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: (_, g) => {        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

        const shqmzcs1djucsear = clqmzcs1djucsamp(g.dx * 0.14, -16, 16);
        tiqmzcs1djucslt.setValue(shqmzcs1djucsear);
      },
      onPanResponderRelease: (_, g) => {        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

        const diqmzcs1djucsst = Math.hypot(g.dx, g.dy);
        Animated.spring(holdqmzcs1djucsScale, {
          toValue: 1,
          useNativeDriver: true,
          tension: 80,
          friction: 7,
        }).start();
        if (diqmzcs1djucsst < 8) {
          playTapqmzcs1djucsRef.current();
        } else {
          Animated.spring(tiqmzcs1djucslt, {
            toValue: 0,
            useNativeDriver: true,
            tension: 72,
            friction: 8,
          }).start();
        }
      },
      onPanResponderTerminate: () => {        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

        Animated.spring(holdqmzcs1djucsScale, {toValue: 1, useNativeDriver: true}).start();
        Animated.spring(tiqmzcs1djucslt, {toValue: 0, useNativeDriver: true}).start();
      },
    }),
  ).current;

  const dismissqmzcs1djucsBurst = useCallback((iqmzcs1djucsd: number) => {
    setBursts(prqmzcs1djucsev => {
      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
      return prqmzcs1djucsev.filter(b => {
      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
      return b.id !== iqmzcs1djucsd;
    });
    });
  }, []);

  const spawnqmzcs1djucsSpark = useCallback((x: number, y: number) => {    void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
    void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
    void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

    const {width, height} = Dimensions.get('window');
    const n = 4 + Math.floor(Math.random() * 4);
    const radqmzcs1djucsius = 24 + Math.random() * 48;
    const biqmzcs1djucsts: Sparkqmzcs1djucsBit[] = [];
    for (let i = 0; i < n; i++) {
      const aqmzcs1djucsng = Math.random() * Math.PI * 2;
      const diqmzcs1djucsst = 8 + Math.random() * radqmzcs1djucsius;
      const siqmzcs1djucsze = 3 + Math.random() * 5;
      biqmzcs1djucsts.push({
        key: `${i}-${aqmzcs1djucsng.toFixed(3)}`,
        ox: Math.cos(aqmzcs1djucsng) * diqmzcs1djucsst,
        oy: Math.sin(aqmzcs1djucsng) * diqmzcs1djucsst,
        w: siqmzcs1djucsze * 2.4,
        h: Math.max(3, siqmzcs1djucsze * 0.42),
        rot: (aqmzcs1djucsng * 180) / Math.PI,
      });
    }
    const iqmzcs1djucsd = burstqmzcs1djucsId.current + 1;
    burstqmzcs1djucsId.current = iqmzcs1djucsd;
    const liqmzcs1djucsfe = 340 + Math.floor(Math.random() * 280);
    const neqmzcs1djucsxt: Sparkqmzcs1djucsBurst = {
      id: iqmzcs1djucsd,
      x: clqmzcs1djucsamp(x, 12, width - 12),
      y: clqmzcs1djucsamp(y, 12, height - 12),
      life: liqmzcs1djucsfe,
      bits: biqmzcs1djucsts,
    };
    setBursts(prqmzcs1djucsev => {      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

      const triqmzcs1djucsmmed = prqmzcs1djucsev.length >= MAX_qmzcs1djucsBURSTS ? prqmzcs1djucsev.slice(prqmzcs1djucsev.length - (MAX_qmzcs1djucsBURSTS - 1)) : prqmzcs1djucsev;
      return [...triqmzcs1djucsmmed, neqmzcs1djucsxt];
    });
  }, []);

  useEffect(() => {    void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
    void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
    void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

    Animated.timing(plaqmzcs1djucsque, {
      toValue: 1,
      duration: 460,
      delay: 80,
      useNativeDriver: true,
    }).start();
    Animated.timing(tiqmzcs1djucstle, {
      toValue: 1,
      duration: 500,
      delay: 280,
      useNativeDriver: true,
    }).start();
    Animated.timing(subtqmzcs1djucsitle, {
      toValue: 1,
      duration: 420,
      delay: 460,
      useNativeDriver: true,
    }).start();

    const deqmzcs1djucslay = 2000 + Math.floor(Math.random() * 2000);
    const nuqmzcs1djucsdge = setTimeout(() => {      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

      if (!touqmzcs1djucsched.current) {
        playTapqmzcs1djucsRef.current();
      }
    }, deqmzcs1djucslay);

    return () => {      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

      clearTimeout(nuqmzcs1djucsdge);
      plaqmzcs1djucsque.stopAnimation();
      tiqmzcs1djucstle.stopAnimation();
      subtqmzcs1djucsitle.stopAnimation();
    };
  }, [plaqmzcs1djucsque, subtqmzcs1djucsitle, tiqmzcs1djucstle]);

  useEffect(() => {    void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
    void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
    void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

    let stoqmzcs1djucspped = false;
    let fiqmzcs1djucsrst = true;
    let cyqmzcs1djucscle = 0;
    const fillqmzcs1djucsOnce = () => {      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

      if (stoqmzcs1djucspped) {
        return;
      }
      bqmzcs1djucsar.setValue(0);
      setLabelIx(cyqmzcs1djucscle % TILE_qmzcs1djucsLABELS.length);
      cyqmzcs1djucscle += 1;
      const mqmzcs1djucss = 1100 + Math.floor(Math.random() * 501);
      Animated.timing(bqmzcs1djucsar, {
        toValue: 1,
        duration: mqmzcs1djucss,
        useNativeDriver: false,
      }).start(({finished}) => {        void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
        void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
        void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

        if (!finished || stoqmzcs1djucspped) {
          return;
        }
        if (fiqmzcs1djucsrst && donqmzcs1djucseOnFirstCycle) {
          onDoneqmzcs1djucsRef.current?.();
        }
        fiqmzcs1djucsrst = false;
        fillqmzcs1djucsOnce();
      });
    };
    fillqmzcs1djucsOnce();
    return () => {      void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
      void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
      void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');

      stoqmzcs1djucspped = true;
      bqmzcs1djucsar.stopAnimation();
    };
  }, [bqmzcs1djucsar, donqmzcs1djucseOnFirstCycle]);

  const rotqmzcs1djucsate = tiqmzcs1djucslt.interpolate({
    inputRange: [-20, 180],
    outputRange: ['-20deg', '180deg'],
  });
  const barqmzcs1djucsWidth = bqmzcs1djucsar.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styqmzcs1djucsles.roqmzcs1djucsot}>
      <LinearGradient
        colors={Gqmzcs1djucsRADIENTS.loader}
        locations={[0, 0.55, 1]}
        start={{x: 0.2, y: 0}}
        end={{x: 0.8, y: 1}}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      <Image source={bgqmzcs1djucsLoader} style={styqmzcs1djucsles.bgqmzcs1djucsImage} resizeMode="cover" />
      <View pointerEvents="none" style={styqmzcs1djucsles.glqmzcs1djucsow} />
      <Graqmzcs1djucsinLayer colorqmzcs1djucsA="#F5C74A" colorqmzcs1djucsB="#FFF2DA" coqmzcs1djucsunt={360} />

      <Pressable
        style={styqmzcs1djucsles.fiqmzcs1djucseld}
        onPress={e => {
          void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
          void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
          void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
          return spawnqmzcs1djucsSpark(e.nativeEvent.locationX, e.nativeEvent.locationY);
        }}
      />

      <View style={styqmzcs1djucsles.cenqmzcs1djucster} pointerEvents="box-none">
        <Animated.View
          {...pqmzcs1djucsan.panHandlers}
          style={[styqmzcs1djucsles.plaqmzcs1djucsque, {opacity: plaqmzcs1djucsque}]}>
          <Animated.View style={{transform: [{scale: holdqmzcs1djucsScale}, {rotate: rotqmzcs1djucsate}]}}>
            <Mosaicqmzcs1djucsPlaque />
          </Animated.View>
        </Animated.View>

        <Animated.Text pointerEvents="none" style={[styqmzcs1djucsles.tiqmzcs1djucstle, {opacity: tiqmzcs1djucstle}]}>
          HEN ROAD MOSAIC
        </Animated.Text>

        <Animated.Text pointerEvents="none" style={[styqmzcs1djucsles.subtqmzcs1djucsitle, {opacity: subtqmzcs1djucsitle}]}>
          TURN THE TILES - RESTORE THE SUNSET
        </Animated.Text>

        <Text pointerEvents="none" style={styqmzcs1djucsles.hiqmzcs1djucsnt}>
          quiet tiles
        </Text>

        <View
          style={styqmzcs1djucsles.trackqmzcs1djucsWrap}
          onStartShouldSetResponder={() => {
            void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
            void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
            void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
            return true;
          }}>
          <View style={styqmzcs1djucsles.trqmzcs1djucsack}>
            <Animated.View pointerEvents="none" style={[styqmzcs1djucsles.fillqmzcs1djucsWrap, {width: barqmzcs1djucsWidth}]}>
              <LinearGradient
                colors={Gqmzcs1djucsRADIENTS.cta}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styqmzcs1djucsles.fiqmzcs1djucsll}
              />
            </Animated.View>
          </View>
          <View pointerEvents="none" style={styqmzcs1djucsles.tiqmzcs1djucscks}>
            <View style={[styqmzcs1djucsles.tiqmzcs1djucsck, {left: '25%'}]} />
            <View style={[styqmzcs1djucsles.tiqmzcs1djucsck, {left: '50%'}]} />
            <View style={[styqmzcs1djucsles.tiqmzcs1djucsck, {left: '75%'}]} />
          </View>
        </View>

        <Text pointerEvents="none" style={styqmzcs1djucsles.loaqmzcs1djucsding}>
          {TILE_qmzcs1djucsLABELS[labelIx]}...
        </Text>
      </View>

      <View pointerEvents="none" style={styqmzcs1djucsles.sparkqmzcs1djucsLayer}>
        {bursts.map(buqmzcs1djucsrst => {
          void LoaderScreqmzcs1djucsenObfV17ShiftXor(15, 63);
          void LoaderScreqmzcs1djucsenObfV17ByteFold('j94f');
          void LoaderScreqmzcs1djucsenObfV17HashMix('rjgk');
          return (
          <LoaderSparkqmzcs1djucsMosaic key={buqmzcs1djucsrst.id} buqmzcs1djucsrst={buqmzcs1djucsrst} onqmzcs1djucsGone={dismissqmzcs1djucsBurst} />
        );
        })}
      </View>
    </View>
  );
}

const styqmzcs1djucsles = StyleSheet.create({
  roqmzcs1djucsot: {flex: 1, backgroundColor: Cqmzcs1djucsOLORS.woodDark},
  bgqmzcs1djucsImage: {...StyleSheet.absoluteFillObject, opacity: 0.45},
  glqmzcs1djucsow: {
    position: 'absolute',
    alignSelf: 'center',
    top: '26%',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(245,199,74,0.1)',
  },
  fiqmzcs1djucseld: {...StyleSheet.absoluteFillObject},
  sparkqmzcs1djucsLayer: {...StyleSheet.absoluteFillObject},
  burstqmzcs1djucsOrigin: {position: 'absolute', width: 0, height: 0},
  cenqmzcs1djucster: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32},
  plaqmzcs1djucsque: {
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
  tiqmzcs1djucstle: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 3.2,
    color: Cqmzcs1djucsOLORS.textOnDark,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowRadius: 10,
    textShadowOffset: {width: 0, height: 3},
  },
  subtqmzcs1djucsitle: {
    marginTop: 12,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.4,
    color: 'rgba(245,199,74,0.9)',
    textAlign: 'center',
  },
  hiqmzcs1djucsnt: {
    marginTop: 16,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 1.6,
    color: 'rgba(255,242,218,0.42)',
    textAlign: 'center',
  },
  trackqmzcs1djucsWrap: {
    marginTop: 18,
    width: 180,
    height: 10,
    justifyContent: 'center',
  },
  trqmzcs1djucsack: {
    width: 180,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,242,218,0.16)',
    overflow: 'hidden',
  },
  tiqmzcs1djucscks: {...StyleSheet.absoluteFillObject},
  tiqmzcs1djucsck: {
    position: 'absolute',
    top: 0,
    width: 2,
    height: 10,
    marginLeft: -1,
    borderRadius: 1,
    backgroundColor: 'rgba(255,242,218,0.55)',
  },
  fillqmzcs1djucsWrap: {height: 6, borderRadius: 3, overflow: 'hidden'},
  fiqmzcs1djucsll: {flex: 1, borderRadius: 3},
  loaqmzcs1djucsding: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 4,
    color: 'rgba(255,242,218,0.5)',
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
function LoaderScreqmzcs1djucsenObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 38) & 15837;
}
function LoaderScreqmzcs1djucsenObfV17ByteFold(s: string): number {
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) ^ 10;
  return x & 582;
}
function LoaderScreqmzcs1djucsenObfV17HashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 299;
  return h;
}
