import React from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {Control, LayoutDetail} from "../../../Constants";
import {ProvincePlace} from "../../../types";
import FastImage from "react-native-fast-image";
import useColorScheme from "../../../Hooks/useColorScheme";
import CustomText from "../../Text/CustomText";
import HomeButton from "../../Button/HomeButton";
import {MaterialCommunity} from "../../Icons/Icon";
import CustomView from "../../CustomView/CustomView";

type PlacesContainerType = {
  item: ProvincePlace;
  onPress?: () => void;
  onShowMaps: () => void;
  onShowDetail: () => void;
};

const PlacesContainer: React.FC<PlacesContainerType> = ({
  item,
  onPress,
  onShowDetail,
  onShowMaps,
}) => {
  const ContainerWrapper = onPress ? Pressable : View;
  const colorScheme = useColorScheme();
  const {PlacesSrc, generalText, generalIcons} = Control;

  return (
    <ContainerWrapper
      style={styles.container}
      onPress={onPress}
      android_ripple={{color: PlacesSrc.rippleColor[colorScheme]}}>
      <CustomText style={styles.header}>{item.Mekan}</CustomText>
      <View style={styles.mainCont}>
        <View style={styles.imageContainer}>
          <FastImage
            style={{width: "100%", height: "100%"}}
            source={{
              uri: item.GorselUrl,
              //headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.paragraph}>
            <CustomText numberOfLines={7} style={styles.text}>
              {item.Tarih}
            </CustomText>
          </View>
            <Pressable style={{flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:PlacesSrc.statusBarColor[colorScheme],padding:5,width:"90%",borderRadius:5}}>
              <CustomText>
                Show ON Maps
              </CustomText>
              <MaterialCommunity name="map-marker" size={24} color="black" />
            </Pressable>

        </View>
      </View>
    </ContainerWrapper>
  );
};

export default PlacesContainer;

const styles = StyleSheet.create({
  container: {
    height: LayoutDetail.windowHeight * 0.3,
    overflow: "hidden",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  mainCont: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },
  imageContainer: {
    width: LayoutDetail.windowWidth * 0.5,
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  infoContainer: {
    width: LayoutDetail.windowWidth * 0.5,
    height: "95%",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  text: {},
  paragraph: {
    height: "60%",
    width: "95%",
    paddingHorizontal: 5,
  },
});
