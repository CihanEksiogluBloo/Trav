import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";
import React from "react";
import {RootStackParamList} from "../../types";
import {ProvinceStackNav} from "../Province";
import WhyScreen from "../../Screens/WhyScreen";
import {Control} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {BottomTabs} from "../BottomBar";

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackNav = () => {
  const colorScheme = useColorScheme();
  const {header} = Control;
  return (
    <HomeStack.Navigator
      screenOptions={{
        animation: "slide_from_right",
        animationTypeForReplace: "pop",
        headerShown: false,
        headerStyle: {backgroundColor: header.background[colorScheme]},
        headerTitleAlign: "center",
        headerTintColor: header.headerText[colorScheme],
        presentation: "modal",
      }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="WhyScreen"
        component={WhyScreen}
        options={{
          headerShown: true,
          animation: "slide_from_left",
          headerShadowVisible: false,
          headerTitle: "Why?",
          title: "Why Turkey?",
        }}
      />
      <HomeStack.Screen
        name="SelectProvinceStack"
        component={ProvinceStackNav}
      />
      <HomeStack.Screen name="AfterSelect" component={BottomTabs} />
    </HomeStack.Navigator>
  );
};
