import React from "react";
import {ColorValue, Pressable, StyleSheet, Text, View} from "react-native";
import {Control} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {MaterialCommunity} from "../Icons/Icon";
import CustomText from "../Text/CustomText";

type ContentButtonType = {
  title: string;
  color: ColorValue;
  children: React.ReactNode;
};

const ContentButton: React.FC<ContentButtonType> = ({
  color,
  title,
  children,
}) => {
  const {generalText} = Control;
  const colorScheme = useColorScheme();
  return (
    <Pressable style={[styles.container, {backgroundColor: color}]}>
      <CustomText
        style={[styles.text, {color: generalText.haveBgColor[colorScheme]}]}>
        {title}
      </CustomText>
      <View style={styles.iconContainer}>
      {children}
      </View>
    </Pressable>
  );
};

export default ContentButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    padding: 8,
    width: "90%",
    borderRadius: 5,
    
  },
  iconContainer:{
    position:"absolute",
    right:10
  },
  text: {},
});
