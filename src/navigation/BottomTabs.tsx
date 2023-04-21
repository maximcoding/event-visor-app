import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HomeNavigation} from './HomeNavigation';
import {ScreenName} from './RootNavigation';
import {FeedScreen} from '../screens/FeedScreen';
import {SettingsScreen} from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator<any>();

const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}>
      <Tab.Screen
        name={ScreenName.Home}
        options={{headerShown: false}}
        component={HomeNavigation}
      />
      <Tab.Screen
        name={ScreenName.Feed}
        options={{headerShown: false}}
        component={FeedScreen}
      />
      <Tab.Screen
        name={ScreenName.Settings}
        options={{headerShown: false}}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
