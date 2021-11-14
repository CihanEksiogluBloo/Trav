import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {TabParamList} from "../../types";
import AdvicesScreen from "../../Screens/AfterSelect/AdvicesScreen";
import FoodsScreen from "../../Screens/AfterSelect/FoodsScreen";
import PlacesScreen from "../../Screens/AfterSelect/PlacesScreen";

const Tab = createMaterialBottomTabNavigator<TabParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="FoodsScreen" shifting={true}>
      <Tab.Screen name="AdvicesScreen" component={AdvicesScreen} />
      <Tab.Screen name="FoodsScreen" component={FoodsScreen} />
      <Tab.Screen name="PlacesScreen" component={PlacesScreen} />
    </Tab.Navigator>
  );
};
