import React, {Fragment, useCallback, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {HomeStackNav} from "./Home";
import {StatusBar, View} from "react-native";
import useColorScheme from "../Hooks/useColorScheme";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../Store/reducers";
import {Control} from "../Constants";
import * as UIActions from "../Store/actions/uiControl";
import {SafeAreaView} from "react-native-safe-area-context";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const AppNavigator = () => {
  const dispatch = useDispatch();
  const {statusBar} = Control;
  const colorScheme = useColorScheme();
  const isDark = colorScheme == "dark";
  const {StatusBarColor, NavigationBarColor} = useSelector(
    (state: ApplicationState) => state.uiControl,
  );

  const statusBarColorConst = StatusBarColor
    ? StatusBarColor
    : statusBar.defaultColor[colorScheme];
  const navigationBarColorConst = NavigationBarColor
    ? NavigationBarColor
    : statusBar.defaultNavigationBarColor[colorScheme];
  //reset persisted status color

  const changeNavigationBarColorFunc = useCallback(async () => {
    //android
    try {
      await changeNavigationBarColor(navigationBarColorConst, isDark, false);
    } catch (e) {
      console.log(e);
    }
  }, [NavigationBarColor]);

  useEffect(() => {
    dispatch(
      UIActions.changeStatusColor(
        statusBar.defaultColor[colorScheme],
        statusBar.defaultNavigationBarColor[colorScheme],
      ),
    );
    changeNavigationBarColorFunc()
  }, []);

  useEffect(() => {
    changeNavigationBarColorFunc();
  }, [StatusBarColor]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar
          barStyle={isDark ? "dark-content" : "light-content"}
          backgroundColor={statusBarColorConst}
        />
        <HomeStackNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
