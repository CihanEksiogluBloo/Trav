import React, {useCallback, useRef} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {PlacesStackScreenProps} from "../../types";
import FastImage from "react-native-fast-image";
import GeneralSource from "../../Components/BottomComponents/GeneralSource";
import CustomText from "../../Components/Text/CustomText";
import {Control, FontSettings, LayoutDetail} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {useDispatch} from "react-redux";
import * as UIActions from "../../Store/actions/uiControl";

const PlacesDetailScreen: React.FC<PlacesStackScreenProps<"PlacesDetail">> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch();
  const {place} = route.params;
  const {PlacesDetailSrc, PlacesSrc} = Control;
  const colorScheme = useColorScheme();
  const statusColor = PlacesSrc.statusBarColor[colorScheme];

  React.useEffect(() => {
    const focusFunction = () => {
      dispatch(UIActions.changeStatusColor(statusColor, statusColor));
    };
    const focused = navigation.addListener("focus", focusFunction);
    return focused;
  }, []);

  return (
    <ScrollView
      style={styles.ContainerStyle}
      contentContainerStyle={styles.containerContent}>
      <View style={[styles.imageContainer]}>
        <FastImage
          style={[
            styles.image,
            {
              transform: [{scale: 1}],
            },
          ]}
          source={{
            uri: place.GorselUrl,
            //headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.infoContainer}>
        <CustomText
          style={[
            styles.header,
            {color: PlacesDetailSrc.headerColor[colorScheme]},
          ]}>
          {place.Mekan}
        </CustomText>
        <CustomText style={styles.history}>{place.Tarih}</CustomText>
      </View>
      <View style={styles.sourceContainer}>
        <GeneralSource url={place.link} />
      </View>
    </ScrollView>
  );
};

export default PlacesDetailScreen;

const styles = StyleSheet.create({
  ContainerStyle: {},
  containerContent: {},
  imageContainer: {
    width: LayoutDetail.windowWidth,
    height: LayoutDetail.windowHeight * 0.3,
    marginTop: 5,
  },
  image: {width: "100%", height: "100%"},
  infoContainer: {marginHorizontal: 10, marginVertical: 5},
  sourceContainer: {paddingHorizontal: 15},
  history: {color: "black"},
  header: {textAlign: "center", fontSize: FontSettings.h2, fontWeight: "bold"},
});
