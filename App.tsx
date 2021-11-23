/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import AppNavigator from "./src/Navigation/AppNavigator";
import {store, persistor} from "./src/Store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#6a51ae",
  },
});

export default App;
