import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Animated} from 'react-native';
import {Storage} from '../services/storage/storage';
import {logoImg} from '../../assets/images';
import {ScreenName} from '../navigation/RootNavigation';

export const SplashScreen = ({navigation}: any) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      Storage.get('user_id').then(value =>
        navigation.replace(value === null ? ScreenName.Auth : ScreenName.Home)
      );
    }, 1000);
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Image
        source={logoImg}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc'
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80
  }
});
