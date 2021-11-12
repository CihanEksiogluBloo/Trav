import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import {Control} from '../../Constants';
import useColorScheme from '../../Hooks/useColorScheme';

type CustomViewType = {
  children: React.ReactNode;
};

const CustomView: React.FC<CustomViewType> = ({children}) => {
  const colorScheme = useColorScheme();
  const {customView} = Control;
  return (
    <Svg>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="80%">
        <Stop offset="0" stopColor={customView.gradientOne[colorScheme]} />
        <Stop offset="1" stopColor={customView.gradientTwo[colorScheme]} />
      </LinearGradient>
      <Rect width="100%" height="100%" fill="url(#grad)"></Rect>
      {children}
    </Svg>
  );
};

export default CustomView;

const styles = StyleSheet.create({});
