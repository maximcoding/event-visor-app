import {StyleSheet, Text, View} from 'react-native';
import {withTranslation} from 'react-i18next';
import React from 'react';
import {colors} from '../theme/colors';
import {fontSize} from '../theme/typography';

const Header = withTranslation()(({children, i18n}) => {
  return (<View style={styles.container}>
    <Text style={styles.headerTitle}>{'Create an Account'}</Text>
  </View>);
});
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'flex-end',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: fontSize.medium,
    color: colors.text,
    textAlignVertical: 'center',
    alignSelf: 'flex-start'
  }
});
