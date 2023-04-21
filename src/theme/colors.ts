// TODO: write documentation for colors and palette in own markdown file and add links from here

export const palette = {
  white100: '#FFFFFF',
  white200: '#F4F2F1',

  gray100: '#D7CEC9',
  gray200: '#B6ACA6',
  gray300: '#978F8A',
  gray400: '#564E4A',
  gray500: '#2B2C2E',

  primary100: '#F4E0D9',
  primary200: '#E8C1B4',
  primary300: '#DDA28E',
  primary400: '#D28468',
  primary500: '#EB1D5A',
  primary600: '#EF5548',

  angry100: '#EF5548',
  angry200: '#FF0F01',

  secondary100: '#DCDDE9',
  secondary200: '#BCC0D6',
  secondary300: '#9196B9',
  secondary400: '#626894',
  secondary500: '#41476E',
  secondary600: '##4E535F',

  dark: '#2B2C2E',
  black100: '#091525',
  black200: '#000000',

  accent100: '#FFF111',
  accent200: '#EDD000',
  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)'
} as const;

export const colors = {
  palette,
  transparent: 'rgba(0, 0, 0, 0)',
  text: palette.white100,
  textSecondary: palette.primary600,
  backgroundPrimary: palette.primary600,
  backgroundSecondary: palette.secondary500,
  backgroundDark: palette.dark,
  button: palette.primary500,
  buttonFC: '#4267b2',
  placeholder: palette.gray100,
  buttonSecondary: palette.secondary500,
  border: palette.white100,
  tint: palette.primary300,
  separator: palette.gray100,
  error: palette.angry100,
  errorBackground: palette.angry100
};
