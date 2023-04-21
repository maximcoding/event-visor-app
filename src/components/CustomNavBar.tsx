import {getHeaderTitle} from '@react-navigation/elements';
import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import {fontSize} from '../theme/typography';
import {spacing} from '../theme/spacing';

export default function CustomNavBar({
                                       navigation,
                                       route,
                                       options,
                                       back
                                     }: any) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const goBack = () => navigation.goBack;
  const title = getHeaderTitle(options, route.name);
  return (<SafeAreaView>
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Pressable><Text>Back</Text></Pressable>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </SafeAreaView>);
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    color: colors.text
  },
  containerLeft: {
    paddingHorizontal: spacing.medium,
    backgroundColor: colors.backgroundPrimary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerRight: {
    paddingHorizontal: spacing.medium,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimary,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: fontSize.medium,
    color: colors.text,
    justifyContent: 'center'
  }
});
