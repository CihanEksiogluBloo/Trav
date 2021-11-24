import React, {Fragment, useEffect, useLayoutEffect} from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import HomeButton from "../Components/Button/HomeButton";
import {AntDesign, MaterialCommunity} from "../Components/Icons/Icon";
import Colors from "../Constants/Colors";
import {RootStackScreenProps} from "../types";
import useColorScheme from "../Hooks/useColorScheme";
import {Control, LayoutDetail} from "../Constants";
import useChangeNavigationBar from "../Hooks/useChangeNavigationBar";
import {useIsFocused} from "@react-navigation/native";

const dimentions = LayoutDetail;

const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({navigation}) => {
  const colorScheme = useColorScheme();
  const isAndroid = Platform.OS == "android";
  const {home, SelectProvinceControl, WhySrc,statusBar} = Control;
  const isFocused = useIsFocused();

  const changeBarColor = (color: string) => {

    if (isAndroid) {
      useChangeNavigationBar({
        color: color,
        colorScheme,
      });
    }
  };

  useEffect(() => {
    if(isFocused){
      changeBarColor(statusBar.defaultNavigationBarColor[colorScheme]);
    }
    return () => {};
  }, [isFocused]);

  const whyTurkeyButtonPressHandler = () => {
    navigation.navigate("WhyScreen");
    changeBarColor(WhySrc.navBarColor[colorScheme]);
  };

  const letStartButtonPressHandler = () => {
    changeBarColor(SelectProvinceControl.navBarColor[colorScheme]);
    navigation.navigate("SelectProvinceStack");
  };

  return (
    <ImageBackground
      source={require("../Assets/Images/mainscreen.png")}
      style={styles.imageContainer}
      resizeMethod="auto"
      resizeMode="stretch">
      <View style={styles.generalContainer}>
        <View>
          <HomeButton
            onPress={whyTurkeyButtonPressHandler}
            title={"Why Turkey"}
            ContainerStyle={styles.buttonContainerStyle}>
            <AntDesign
              name={"questioncircleo"}
              color={home.buttonIcon[colorScheme]}
              size={24}
            />
          </HomeButton>
        </View>
        <View>
          <HomeButton
            onPress={letStartButtonPressHandler}
            title={"Let's Start"}
            ContainerStyle={styles.buttonContainerStyle}>
            <AntDesign
              name={"rightcircleo"}
              color={home.buttonIcon[colorScheme]}
              size={24}
            />
          </HomeButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageContainer: {flex: 1},
  generalContainer: {flex: 1, alignItems: "center", justifyContent: "center"},
  buttonContainerStyle: {
    width: dimentions.windowWidth * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
});
