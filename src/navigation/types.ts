import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type AuthNavigationParamList = {
  Login: any;
  LoginWithEmail: any;
  Register: any;
};

export type HomeNavigationParamList = {
  Home: any;
  Details: any;
};

export type BottomTabsParamList = {
  HomeStack: HomeNavigationParamList;
  Feed: any;
  Settings: any;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeNavigationParamList, 'Details'>,
  BottomTabNavigationProp<BottomTabsParamList, 'Feed'>
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeNavigationParamList,
  'Details'
>;
