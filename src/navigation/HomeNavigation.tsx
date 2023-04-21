import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {HomeNavigationParamList} from './types';
import {DrawerHeaderNavigation} from './DrawerHeaderNavigation';
import {SettingsScreen} from '../screens/SettingsScreen';
import {ScreenName} from './RootNavigation';

const HomeStack = createNativeStackNavigator<HomeNavigationParamList>();
const Drawer = createDrawerNavigator<any>();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={ScreenName.Home}
        options={{
          headerLeft: () => (
            <DrawerHeaderNavigation navigationProps={navigation} />
          ),
        }}
        component={HomeScreen}
      />
      <HomeStack.Screen name={ScreenName.Details} component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

export const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name={ScreenName.Home}
        options={{drawerLabel: 'Home Screen'}}
        component={HomeNavigation}
      />
      <Drawer.Screen
        name={ScreenName.Settings}
        options={{drawerLabel: 'Setting Screen'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
