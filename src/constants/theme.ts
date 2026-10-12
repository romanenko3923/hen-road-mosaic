/**
 * WARM_EARTHY preset copy with the ticket's accent hexes applied.
 * NOTE: no `as const` anywhere — LinearGradient needs a mutable string[].
 */

export const COLORS = {
  // canvas / surfaces
  bg: '#FFF2DA',
  bgAlt: '#F7F2E9',
  surface: '#FFFFFF',
  surfaceSunk: '#F0E8D8',
  border: '#E8DDC4',
  borderStrong: '#D8C9A8',

  // accents (ticket palette)
  primary: '#EC8248',
  gold: '#F5C74A',
  green: '#62BA6A',
  blue: '#4C9ED1',

  // wood / depth
  wood: '#5C3A22',
  woodLight: '#6B4226',
  woodMid: '#4A3121',
  woodDark: '#2B1E14',

  // text
  text: '#3B2A1C',
  textSoft: '#7A6450',
  textMuted: '#A89177',
  textOnDark: '#FFF2DA',
};

export const GRADIENTS: {[k: string]: string[]} = {
  loader: ['#2B1E14', '#4A3121', '#6B4226'],
  menuScrim: ['rgba(255,242,218,0)', 'rgba(255,242,218,0.35)', '#FFF2DA'],
  gameBase: ['#FFF2DA', '#F3E7CF'],
  plank: ['#6B4529', '#4A2E1A'],
  cta: ['#F5C74A', '#EC8248'],
  ctaAlt: ['#62BA6A', '#4C9ED1'],
  win: ['#F5C74A', '#EC8248', '#B95E30'],
  lose: ['#6B4226', '#4A3121', '#2B1E14'],
  sheet: ['#FFF2DA', '#F7F2E9', '#F0E4CC'],
};

export const THEME = {
  // Visual preset identity — rule #11b, do not invent a new preset name.
  name: 'WARM_EARTHY',
  style: 'SKEUOMORPHISM',
  menuLayout: 'M2_BOTTOM_SHEET',
  gameLayout: 'G3_SPLIT_PANEL',
  colors: COLORS,
  gradients: GRADIENTS,
  radius: {tile: 4, board: 18, pill: 14, card: 20, sheet: 32, chip: 15},
  shadow: {
    soft: {
      shadowColor: '#8A5A32',
      shadowOpacity: 0.16,
      shadowRadius: 10,
      shadowOffset: {width: 0, height: 4},
      elevation: 4,
    },
    card: {
      shadowColor: '#8A5A32',
      shadowOpacity: 0.2,
      shadowRadius: 18,
      shadowOffset: {width: 0, height: 8},
      elevation: 8,
    },
    deep: {
      shadowColor: '#2B1E14',
      shadowOpacity: 0.42,
      shadowRadius: 20,
      shadowOffset: {width: 0, height: 10},
      elevation: 12,
    },
  },
};

export default THEME;
