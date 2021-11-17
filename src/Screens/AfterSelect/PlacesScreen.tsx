import React from "react";
import {FlatList, StatusBar, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import PlacesContainer from "../../Components/Containers/PlacesContainer/PlacesContainer";
import CustomText from "../../Components/Text/CustomText";
import {Control, LayoutDetail} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {ApplicationState} from "../../Store/reducers";

const PlacesScreen = () => {
  const Places = useSelector(
    (state: ApplicationState) => state.province.ProvinceData.Place,
  );
  const {PlacesSrc} = Control;
  const colorScheme = useColorScheme();

  const onPressPlace = () => {};

  return (
    <View
      style={[styles.container, {backgroundColor: PlacesSrc.BG[colorScheme]}]}>
      <StatusBar
        backgroundColor={PlacesSrc.statusBarColor[colorScheme]}
        barStyle={`${colorScheme}-content`}
      />
      <FlatList
        data={Places}
        ListHeaderComponent={() => {
          return (
            <CustomText
              style={styles.listHeaderText}>
              Places
            </CustomText>
          );
        }}
        ListHeaderComponentStyle={{
          ...styles.ListHeaderComponentStyle,
          backgroundColor: PlacesSrc.statusBarColor[colorScheme],
        }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return <PlacesContainer item={item} onPress={onPressPlace} />;
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
  listHeaderText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  }
});
