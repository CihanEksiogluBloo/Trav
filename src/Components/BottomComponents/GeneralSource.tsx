import React, {useCallback} from "react";
import {StyleSheet, Linking, Pressable} from "react-native";
import { Control } from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import CustomText from "../Text/CustomText";

type GeneralSourceType = {};

const GeneralSource: React.FC<GeneralSourceType> = ({}) => {
  const url = "https://www.kulturportali.gov.tr";
  const {generalText} = Control
  const colorScheme = useColorScheme()
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    await Linking.openURL(url);

    /* check disable
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }*/
  }, [url]);

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <CustomText style={styles.header}>General Source:</CustomText>
      <CustomText style={[styles.link,{color:generalText.link[colorScheme],borderColor:generalText.link[colorScheme]}]}>{url}</CustomText>
    </Pressable>
  );
};

export default GeneralSource;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:20,

  },
  header: {
    fontWeight: "bold",
  },
  link:{
      borderBottomWidth:1,

  }
});
