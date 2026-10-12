import React from 'react';
import Svg, {Circle, Ellipse, G, Line, Path, Polygon, Rect} from 'react-native-svg';
import {Motif} from '../game/mosaic';

type Props = {
  motif: Motif;
  orient: number;
  size: number;
};

const BASE: {[k: string]: string} = {
  SKY_PLAIN: '#4C9ED1',
  SKY_CLOUD: '#4C9ED1',
  SUN_TL: '#5FAEDC',
  SUN_TR: '#5FAEDC',
  SUN_BL: '#5FAEDC',
  SUN_BR: '#5FAEDC',
  BIRD_A: '#4C9ED1',
  BIRD_B: '#F5C74A',
  FIELD_STRIPE: '#62BA6A',
  FIELD_FURROW: '#55A95E',
  ROAD_BEND: '#62BA6A',
  BARN_ROOF: '#F5C74A',
  BARN_WALL: '#EC8248',
  HEN: '#F5C74A',
};

function motifBody(motif: Motif) {
  switch (motif) {
    case 'SKY_PLAIN':
      return (
        <G>
          <Rect x={0} y={0} width={100} height={40} fill="#6FB6E0" opacity={0.55} />
          <Circle cx={22} cy={78} r={5} fill="#FFF6E2" opacity={0.5} />
        </G>
      );
    case 'SKY_CLOUD':
      return (
        <G>
          <Rect x={0} y={0} width={100} height={34} fill="#6FB6E0" opacity={0.5} />
          <Circle cx={34} cy={60} r={16} fill="#FFF6E2" opacity={0.95} />
          <Circle cx={56} cy={54} r={21} fill="#FFF6E2" opacity={0.95} />
          <Circle cx={75} cy={62} r={14} fill="#FFF6E2" opacity={0.95} />
          <Rect x={30} y={60} width={48} height={18} rx={9} fill="#FFF6E2" opacity={0.95} />
        </G>
      );
    case 'SUN_TL':
      return (
        <G>
          <Circle cx={100} cy={100} r={70} fill="#F5C74A" />
          <Circle cx={100} cy={100} r={44} fill="#FBE08A" />
        </G>
      );
    case 'SUN_TR':
      return (
        <G>
          <Circle cx={0} cy={100} r={70} fill="#F5C74A" />
          <Circle cx={0} cy={100} r={44} fill="#FBE08A" />
        </G>
      );
    case 'SUN_BL':
      return (
        <G>
          <Circle cx={100} cy={0} r={70} fill="#F5C74A" />
          <Circle cx={100} cy={0} r={44} fill="#FBE08A" />
        </G>
      );
    case 'SUN_BR':
      return (
        <G>
          <Circle cx={0} cy={0} r={70} fill="#F5C74A" />
          <Circle cx={0} cy={0} r={44} fill="#FBE08A" />
        </G>
      );
    case 'BIRD_A':
      return (
        <G>
          <Rect x={0} y={0} width={100} height={30} fill="#6FB6E0" opacity={0.5} />
          <Path
            d="M16 58 Q31 40 46 58"
            stroke="#27485E"
            strokeWidth={6}
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M52 72 Q67 54 82 72"
            stroke="#27485E"
            strokeWidth={6}
            strokeLinecap="round"
            fill="none"
          />
        </G>
      );
    case 'BIRD_B':
      return (
        <G>
          <Path
            d="M14 54 Q30 34 46 54"
            stroke="#B95E30"
            strokeWidth={7}
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M54 74 Q70 54 86 74"
            stroke="#B95E30"
            strokeWidth={7}
            strokeLinecap="round"
            fill="none"
          />
        </G>
      );
    case 'FIELD_STRIPE':
      return (
        <G>
          <Rect x={8} y={18} width={84} height={11} rx={5.5} fill="#4C9E55" opacity={0.85} />
          <Rect x={8} y={44} width={84} height={11} rx={5.5} fill="#4C9E55" opacity={0.85} />
          <Rect x={8} y={70} width={84} height={11} rx={5.5} fill="#4C9E55" opacity={0.85} />
          <Rect x={0} y={0} width={100} height={6} fill="#78C77F" opacity={0.6} />
        </G>
      );
    case 'FIELD_FURROW':
      return (
        <G>
          <Line x1={-14} y1={112} x2={46} y2={-12} stroke="#45924F" strokeWidth={9} opacity={0.9} />
          <Line x1={18} y1={112} x2={78} y2={-12} stroke="#45924F" strokeWidth={9} opacity={0.9} />
          <Line x1={50} y1={112} x2={110} y2={-12} stroke="#45924F" strokeWidth={9} opacity={0.9} />
          <Line x1={82} y1={112} x2={142} y2={-12} stroke="#45924F" strokeWidth={9} opacity={0.9} />
        </G>
      );
    case 'ROAD_BEND':
      return (
        <G>
          <Path
            d="M50 108 C50 74 24 66 24 26"
            stroke="#C9A371"
            strokeWidth={28}
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M50 108 C50 74 24 66 24 26"
            stroke="#E2C79A"
            strokeWidth={13}
            strokeLinecap="round"
            fill="none"
          />
        </G>
      );
    case 'BARN_ROOF':
      return (
        <G>
          <Polygon points="50,16 98,60 2,60" fill="#B95E30" />
          <Rect x={12} y={60} width={76} height={42} fill="#EC8248" />
          <Rect x={44} y={66} width={12} height={12} rx={2} fill="#FBE08A" />
        </G>
      );
    case 'BARN_WALL':
      return (
        <G>
          <Rect x={0} y={0} width={100} height={100} fill="#EC8248" />
          <Rect x={32} y={36} width={36} height={64} rx={4} fill="#8E4526" />
          <Rect x={14} y={14} width={16} height={16} rx={3} fill="#FBE08A" />
          <Rect x={70} y={14} width={16} height={16} rx={3} fill="#FBE08A" />
          <Rect x={0} y={0} width={100} height={6} fill="#B95E30" />
        </G>
      );
    case 'HEN':
      return (
        <G>
          <Ellipse cx={46} cy={64} rx={28} ry={21} fill="#B95E30" />
          <Circle cx={70} cy={42} r={13} fill="#B95E30" />
          <Circle cx={66} cy={28} r={6} fill="#D94E3A" />
          <Polygon points="82,42 95,47 82,52" fill="#E07A1F" />
          <Circle cx={74} cy={39} r={2.6} fill="#2B1E14" />
          <Line x1={38} y1={84} x2={38} y2={94} stroke="#8E4526" strokeWidth={4} />
          <Line x1={56} y1={84} x2={56} y2={94} stroke="#8E4526" strokeWidth={4} />
        </G>
      );
    default:
      return <G />;
  }
}

/**
 * Pure vector tile. AI PNGs can never match edge to edge across a mosaic, so
 * every piece is SVG. The motif rotates with the piece (so a wrong orientation
 * is obvious) while the seam and the bevel stay fixed — the light source does
 * not turn with the tile.
 */
function MosaicTile({motif, orient, size}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Rect x={0} y={0} width={100} height={100} fill={BASE[motif] || '#4C9ED1'} />
      <G rotation={orient * 90} originX={50} originY={50}>
        {motifBody(motif)}
      </G>
      <Path
        d="M3 97 L3 3 L97 3"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth={3.5}
        fill="none"
      />
      <Path
        d="M97 3 L97 97 L3 97"
        stroke="rgba(43,30,20,0.16)"
        strokeWidth={3.5}
        fill="none"
      />
      <Rect
        x={0.8}
        y={0.8}
        width={98.4}
        height={98.4}
        rx={3}
        stroke="rgba(43,30,20,0.3)"
        strokeWidth={1.6}
        fill="none"
      />
    </Svg>
  );
}

export default React.memo(MosaicTile);
