import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProvinceStackParamList} from '../../types';
import SelectProvince from '../../Screens/SelectProvince';
import { Control } from '../../Constants';
import useColorScheme from '../../Hooks/useColorScheme';

const ProvinceStack = createNativeStackNavigator<ProvinceStackParamList>();

export const ProvinceStackNav = () => {
  const {ProvinceStackNavColor} = Control;
  const useColor = useColorScheme();
  return (
    <ProvinceStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        contentStyle: {backgroundColor:ProvinceStackNavColor.contentBG[useColor]},
      }}
      initialRouteName="SelectProvince">
      <ProvinceStack.Screen name="SelectProvince" component={SelectProvince} />
    </ProvinceStack.Navigator>
  );
};
