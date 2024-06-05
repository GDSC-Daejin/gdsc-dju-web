import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  white: ' #FFFFFF',
  grey50: '#F9FAFB',
  grey100: '#F2F4F6',
  grey200: '#E5E8EB',
  grey300: '#D1D6DB',
  grey400: '#B0B8C1',
  grey450: '#D9D9D9',
  grey500: '#8B95A1',
  grey600: '#6B7684',
  grey700: '#4E5968',
  grey800: '#333D4B',
  grey900: '#191F28',

  orange100: '#FFF3E0',
  orange200: '#FFE0B2',
  orange300: '#FFCC80',
  orange400: '#FFB74D',
  orange500: '#FFA726',
  orange600: '#FF9800',
  orange700: '#FB8C00',
  orange800: '#F57C00',
  orange900: '#FF740F',

  yellowCore: '#FBBC04',
  yellow100: '#FFF8E1',
  yellow200: '#FFECB3',
  yellow300: '#FFE082',
  yellow400: '#FFD54F',
  yellow500: '#FFCA28',
  yellow600: '#FFB300',
  yellow700: '#FFA000',
  yellow800: '#FF8F00',
  yellow900: '#FF6F00',

  redCore: '#EA4335',
  red100: '#FFEBEE',
  red200: '#FFCDD2',
  red300: '#EF9A9A',
  red400: '#E57373',
  red500: '#EF5350',
  red600: '#F44336',
  red700: '#E53935',
  red800: '#D32F2F',
  red900: '#B71C1C',

  blueCore: '#4285F4',
  blue100: '#E3F2FD',
  blue200: '#BBDEFB',
  blue300: '#90CAF9',
  blue400: '#64B5F6',
  blue500: '#42A5F5',
  blue600: '#2196F3',
  blue700: '#1E88E5',
  blue800: '#1976D2',
  blue900: '#1565C0',

  greenCore: '#34A853',
  green100: '#E8F5E9',
  green200: '#C8E6C9',
  green300: '#A5D6A7',
  green400: '#81C784',
  green500: '#66BB6A',
  green600: '#4CAF50',
  green700: '#388E3B',
  green800: '#2E7D31',
  green900: '#1B5E20',
});

export const sizes = stylex.defineVars({
  heading_bold: '36px',
  title1_bold: '20px',
  title2_medium: '14px',
  body1_medium: '18px',
  body1_medium_16: '16px',
  body2_regular: '16px',
  body3_regular: '14px',
  caption1_regular: '12px',
});

export const fontWeight = stylex.defineVars({
  heading_bold: '700',
  title1_bold: '700',
  title2_medium: '500',
  body1_medium: '500',
  body2_regular: '400',
  body3_regular: '400',
  caption1_regular: '400',
});

const DARK = '@media (prefers-color-scheme: dark)';

export const ThemeColors = stylex.defineVars({
  primaryText: { default: 'black', [DARK]: 'white' },
  secondaryText: { default: '#333', [DARK]: '#ccc' },
  accent: { default: 'blue', [DARK]: 'lightblue' },
  background: { default: 'white', [DARK]: 'black' },
  lineColor: { default: 'gray', [DARK]: 'lightgray' },
});

export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px',
});
