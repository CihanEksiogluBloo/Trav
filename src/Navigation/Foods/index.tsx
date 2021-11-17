import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FoodsDetailScreen from "../../Screens/AfterSelect/FoodsDetailScreen";
import FoodsScreen from "../../Screens/AfterSelect/FoodsScreen";
import {FoodsStackParamList} from "../../types";

const Stack = createNativeStackNavigator<FoodsStackParamList>();

export function FoodsScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FoodsScreen" component={FoodsScreen} />
      <Stack.Screen
        name="FoodsDetail"
        component={FoodsDetailScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
