import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {TabParamList} from "../../types";
import AdvicesScreen from "../../Screens/AfterSelect/AdvicesScreen";
import FoodsScreen from "../../Screens/AfterSelect/FoodsScreen";
import PlacesScreen from "../../Screens/AfterSelect/PlacesScreen";
import useColorScheme from "../../Hooks/useColorScheme";
import {Control} from "../../Constants";
import {
  AntDesign,
  Meterial,
  MaterialCommunity,
} from "../../Components/Icons/Icon";

const Tab = createMaterialBottomTabNavigator<TabParamList>();

export const BottomTabs = () => {
  const colorScheme = useColorScheme();
  const {BottomBar} = Control;
  return (
    <Tab.Navigator
      
      initialRouteName="PlacesScreen"
      shifting={true}
      activeColor={BottomBar.activeColor[colorScheme]}
      inactiveColor={BottomBar.inactiveColor[colorScheme]}
      barStyle={{backgroundColor: BottomBar.BG[colorScheme]}}>
      <Tab.Screen
        name="PlacesScreen"
        component={PlacesScreen}
        options={{
          title:"Places",
          tabBarLabel: "Places",
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunity name="fireplace-off" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FoodsScreen"
        component={FoodsScreen}
        options={{
          tabBarLabel: "Foods",
          tabBarIcon: ({color, focused}) => (
            <Meterial name="food-bank" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AdvicesScreen"
        component={AdvicesScreen}
        options={{
          tabBarLabel: "Advices",
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunity
              name="account-question"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
