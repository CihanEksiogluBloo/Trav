/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { Colors } from './src/Constants';
import useColorScheme from './src/Hooks/useColorScheme';
import AppNavigator from './src/Navigation/AppNavigator';

const App = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme == 'dark'

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <StatusBar
        barStyle={isDark ? 'dark-content' : 'light-content'}
        backgroundColor={isDark ? Colors.dark.red : Colors.light.red}
      />
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
