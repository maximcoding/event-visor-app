import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../theme/colors';
import RegisterScreen from '../screens/RegisterScreen';
import {ScreenName} from './RootNavigation';
import LoginScreen from '../screens/LoginScreen';
import Header from '../components/Header';
import LoginEmailScreen from '../screens/LoginEmailScreen';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/src/types';
import {getHeaderTitle} from '@react-navigation/elements';
import CustomNavBar from '../components/CustomNavBar';
import {fontSize} from '../theme/typography';

const AuthStack = createStackNavigator();
export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={ScreenName.Login}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false, // hide bottom border
        headerTitleAlign: 'left',
        headerTintColor: colors.text, // this makes all the header element color green including - back button
        // headerTitle: (props) => (<Header {...props} />),
        header: (props) => <CustomNavBar {...props} />,
        headerStyle: {
          height: 80,
          borderWidth: 0,
          backgroundColor: colors.buttonFC
        }
      }}>
      <AuthStack.Screen name={ScreenName.Login} component={LoginScreen} />
      <AuthStack.Screen
        name={ScreenName.LoginWithEmail} component={LoginEmailScreen}
        options={{
          // header: (props) => <CustomNavBar {...props} />,
          // headerTitle: (props) => (<Header {...props} />),
          headerStyle: {
            backgroundColor: colors.error
            // borderBottomWidth: 10, // set headerShadowVisible first
          },
          // presentation: 'modal',
          headerShown: true
        }} />
      <AuthStack.Screen
        name={ScreenName.Register}
        component={RegisterScreen}
        options={(route) => ({
          headerStyle: {
            backgroundColor: colors.backgroundSecondary //Set Header color
          },
          headerTintColor: colors.textSecondary,
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        })}
      />
    </AuthStack.Navigator>
  );
};
