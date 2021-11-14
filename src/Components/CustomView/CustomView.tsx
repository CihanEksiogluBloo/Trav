import React from "react";
import {StyleSheet, View, ImageBackground} from "react-native";

type CustomViewType = {
  children: React.ReactNode;
};

const CustomView: React.FC<CustomViewType> = ({children}) => {
  return (
    <ImageBackground
      source={require("../../Assets/Images/bg.png")}
      style={{flex: 1}}
      resizeMethod="resize"
      resizeMode="stretch">
      <View>{children}</View>
    </ImageBackground>
  );
};

export default CustomView;

const styles = StyleSheet.create({});
