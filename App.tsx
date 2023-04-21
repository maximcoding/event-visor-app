import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();
import './src/localization/i18n';
import {RootNavigation} from './src/navigation/RootNavigation';
import {Loader} from './src/components/Loader';

function App(): JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
