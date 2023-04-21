import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens/SplashScreen';
import {AuthNavigation} from './AuthNavigation';
import {DrawerHeaderNavigation} from './DrawerHeaderNavigation';
import {HomeNavigation} from './HomeNavigation';

const RootStack = createNativeStackNavigator<any>();

export const ScreenName = {
  Auth: 'AuthScreen' as string,
  Splash: 'SplashScreen' as string,
  Drawer: 'Drawer' as string,
  Home: 'Home' as string,
  Settings: ' Settings' as string,
  Feed: 'Feed' as string,
  Details: 'Details' as string,
  Login: 'Login' as string,
  LoginWithEmail: 'LoginWithEmail' as string,
  LoginWithFacebook: 'LoginWithFacebook' as string,
  LoginWithGoogle: 'LoginWithGoogle' as string,
  Register: 'Register' as string
};

const getIsSignedIn = () => {
  // custom logic
  return true;
};
export const RootNavigation = () => {
  const isSignedIn = getIsSignedIn();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenName.Splash}>
        <RootStack.Screen
          name={ScreenName.Splash}
          component={SplashScreen}
        />
        {
          isSignedIn ? <RootStack.Screen
              name={ScreenName.Auth}
              component={AuthNavigation} /> :

            <RootStack.Screen
              name={ScreenName.Home}
              component={HomeNavigation} />
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
