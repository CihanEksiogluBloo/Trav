import React, {useEffect} from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  Linking,
  View,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import GeneralSource from "../../Components/BottomComponents/GeneralSource";
import PlacesContainer from "../../Components/Containers/PlacesContainer/PlacesContainer";
import CustomText from "../../Components/Text/CustomText";
import {Control, LayoutDetail} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {ApplicationState} from "../../Store/reducers";
import {PlacesStackScreenProps, ProvincePlace} from "../../types";
import {GoogleMapsUrl} from "../../utils/links";
import * as UIActions from "../../Store/actions/uiControl";

const generalUrl = "https://www.kulturportali.gov.tr";

const PlacesScreen: React.FC<PlacesStackScreenProps<"PlacesScreen">> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const Places = useSelector(
    (state: ApplicationState) => state.province.ProvinceData.Place,
  );
  const {PlacesSrc} = Control;
  const colorScheme = useColorScheme();

  const onPressPlace = (place: ProvincePlace) => {
    navigation.navigate("PlacesDetail", {place});
  };

  const onShowMaps = (Adres: string) => {
    const returnedLink = GoogleMapsUrl(Adres);
    Linking.openURL(returnedLink);
  };
  const statusColor = PlacesSrc.statusBarColor[colorScheme];
  useEffect(() => {
    const focusFunction = () => {
      dispatch(UIActions.changeStatusColor(statusColor, statusColor));
    };
    const focused = navigation.addListener("focus", focusFunction);
    return focused;
  }, []);

  return (
    <View
      style={[styles.container, {backgroundColor: PlacesSrc.BG[colorScheme]}]}>
      <FlatList
        data={Places}
        ListHeaderComponent={() => {
          return <CustomText style={styles.listHeaderText}>Places</CustomText>;
        }}
        ListHeaderComponentStyle={{
          ...styles.ListHeaderComponentStyle,
          backgroundColor: PlacesSrc.statusBarColor[colorScheme],
        }}
        keyExtractor={(_, index) => index.toString()}
        ListFooterComponent={() => <GeneralSource url={generalUrl} />}
        renderItem={({item}) => {
          return (
            <PlacesContainer
              item={item}
              onPress={onPressPlace}
              onShowDetail={onPressPlace}
              onShowMaps={onShowMaps}
            />
          );
        }}
      />
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ListHeaderComponentStyle: {
    width: "100%",
    height: LayoutDetail.windowHeight * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  listHeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
