import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PlacesDetailScreen from "../../Screens/AfterSelect/PlacesDetailScreen";
import PlacesScreen from "../../Screens/AfterSelect/PlacesScreen";
import { PlacesStackParamList } from "../../types";

const Stack = createNativeStackNavigator<PlacesStackParamList>();

export function PlacesScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PlacesScreen" component={PlacesScreen} />
      <Stack.Screen
        name="PlacesDetail"
        component={PlacesDetailScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
