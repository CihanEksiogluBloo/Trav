import React from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {Control, LayoutDetail} from "../../../Constants";
import {ProvincePlace} from "../../../types";
import FastImage from "react-native-fast-image";
import useColorScheme from "../../../Hooks/useColorScheme";
import CustomText from "../../Text/CustomText";
import HomeButton from "../../Button/HomeButton";
import {AntDesign, MaterialCommunity} from "../../Icons/Icon";
import CustomView from "../../CustomView/CustomView";
import ContentButton from "../../Button/ContentButton";

type PlacesContainerType = {
  item: ProvincePlace;
  onPress?: (place: ProvincePlace) => void;
  onShowMaps: (Adres:string) => void;
  onShowDetail: (place: ProvincePlace) => void;
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
      onPress={() => onPress && onPress(item)}
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
          <ContentButton
            title="Show On Maps"
            onPress={() => onShowMaps(item.Adres)}
            color={PlacesSrc.statusBarColor[colorScheme]}>
            <MaterialCommunity
              name="map-marker"
              size={24}
              color={generalIcons.color[colorScheme]}
            />
          </ContentButton>
          <ContentButton
            title="Show Detail"
            color={PlacesSrc.statusBarColor[colorScheme]}
            onPress={() => onShowDetail(item)}
            >
            <AntDesign
              name="rightcircle"
              size={20}
              color={generalIcons.color[colorScheme]}
            />
          </ContentButton>
        </View>
      </View>
      <CustomText style={{color: "black"}}>asds</CustomText>
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
    height: "95%",
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
