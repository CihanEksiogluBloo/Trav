import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {LayoutDetail} from "../../../Constants";
import {ProvinceFood} from "../../../types";
import FastImage from "react-native-fast-image";
import CustomText from "../../Text/CustomText";

type FoodsContainerType = {
  item: ProvinceFood;
};

const FoodsContainer: React.FC<FoodsContainerType> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={{width: "100%", height: "80%"}}
          source={{
            uri: item.GorselUrl,
            //headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.infoContainer}>
        <CustomText>{item.Yemek}</CustomText>
        <View>
          <CustomText>asd</CustomText>
        </View>
      </View>
    </View>
  );
};

export default FoodsContainer;

const styles = StyleSheet.create({
  container: {
    height: LayoutDetail.windowHeight * 0.3,
    flexDirection: "row",
    padding: 10,
  },
  imageContainer: {
    width: LayoutDetail.windowWidth * 0.5,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {},
});
