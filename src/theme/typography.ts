import {colors} from './colors';
import {spacing} from './spacing';
import {styles} from './styles';

export const fontSize = {
  small: 12,
  medium: 14,
  large: 16
};
export const FONT_WEIGHT_LIGHT = '300';
export const FONT_WEIGHT_MEDIUM = '600';
export const FONT_WEIGHT_HEAVY = '800';
export const textStyle = {
  title: {
    fontFamily: 'Krona One',
    fontSize: fontSize.medium,
    fontWeight: FONT_WEIGHT_HEAVY,
    padding: spacing.extraSmall,
    textAlignVertical: 'center' as any,
    textAlign: 'center' as any
  },
  textArea: {
    fontSize: fontSize.medium,
    padding: spacing.medium,
    overflow: 'scroll',
    ...styles.alignSelfStretch
  },
  button: {}
};
