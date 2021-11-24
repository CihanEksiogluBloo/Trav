import React from "react";
import changeNavigationBarColor from "react-native-navigation-bar-color";

//Only Android
const changeNavigationBar = async ({
  color,
  colorScheme,
}: {
  color: string;
  colorScheme: "light" | "dark";
}) => {
  try {
    const isLight = colorScheme == "light" ? false : true;
    changeNavigationBarColor(color, isLight, true);
  } catch (e) {
    console.log(e);
  }
};

export default changeNavigationBar;
