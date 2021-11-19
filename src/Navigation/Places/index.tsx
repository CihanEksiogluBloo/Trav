import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PlacesDetailScreen from "../../Screens/AfterSelect/PlacesDetailScreen";
import PlacesScreen from "../../Screens/AfterSelect/PlacesScreen";
import {PlacesStackParamList} from "../../types";
import useColorScheme from "../../Hooks/useColorScheme";
import {Control} from "../../Constants";

const Stack = createNativeStackNavigator<PlacesStackParamList>();

export function PlacesScreenNavigator() {
  const colorScheme = useColorScheme();
  const {PlacesDetailSrc, header} = Control;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: PlacesDetailSrc.headerBG[colorScheme]},
        headerTintColor: header.headerText[colorScheme],
        headerTitleAlign: "center",
        animation: "slide_from_right",
        
      }}>
      <Stack.Screen name="PlacesScreen" component={PlacesScreen} />
      <Stack.Screen
        name="PlacesDetail"
        component={PlacesDetailScreen}
        options={({route}) => {
          const {place} = route.params;
          return {
            headerShown: true,
            headerTitle: place.Mekan,
            title: place.Mekan,
          };
        }}
      />
    </Stack.Navigator>
  );
}
