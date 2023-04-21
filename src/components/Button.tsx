import {NamedStyles, Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, palette} from '../theme/colors';
import {fontSize, textStyle, fontWeight} from '../theme/typography';
import React from 'react';
import {spacing} from '../theme/spacing';
import {de} from 'date-fns/locale';

export enum ButtonType {
  transparent,
  link,
  login,
  facebook,
  google,
  next,
  nextCircle,
}

export interface IButton {
  type: ButtonType;
  title: string;
  onPress: () => void;
}

export const Button = (props: IButton) => {
  let styles = defaultStyles;
  switch (props.type) {
    case ButtonType.login:
      styles.button.backgroundColor = palette.white100;
      styles.button.borderColor = colors.text;
      styles.title.color = palette.primary600 as any;
      break;
    case ButtonType.facebook:
      styles.button.backgroundColor = colors.buttonFC;
      styles.button.borderColor = colors.buttonFC;
      styles.title.color = palette.white100;
      break;
    case ButtonType.link:
    default:
      styles.button.backgroundColor = colors.transparent;
      styles.button.borderColor = colors.transparent;
      styles.button.marginHorizontal = spacing.extraLarge;
  }
  let customStyles = StyleSheet.flatten([defaultStyles, styles]);

  return <TouchableOpacity
    style={customStyles.button}
    activeOpacity={0.5}
    onPress={props.onPress}>
    <Text style={customStyles.title}>{props.title}</Text>
  </TouchableOpacity>;
};


export const defaultStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
    borderWidth: 2,
    borderRadius: 24,
    height: 48,
    marginHorizontal: spacing.extraLarge,
    marginVertical: spacing.extraSmall,
    justifyContent: 'center',
    textAlignVertical: 'center'
  },
  title: {
    ...textStyle.title,
    color: colors.text,
    fontSize: fontSize.large,
    fontWeight: '500'
  }
});
