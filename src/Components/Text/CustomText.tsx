import React from "react";
import {StyleSheet, Text, View, TextStyle} from "react-native";
import {Control} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";

type CustomTextType = {
  style?: TextStyle;
  children: string;
  numberOfLines?: number
};

const CustomText: React.FC<CustomTextType> = ({children, style,numberOfLines}) => {
  const {generalText} = Control;
  const colorScheme = useColorScheme();
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, {color: generalText.color[colorScheme]}, style]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
      
  },
});
