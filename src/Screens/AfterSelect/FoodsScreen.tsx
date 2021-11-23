import React, {useEffect} from "react";
import {FlatList, StatusBar, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import FoodsContainer from "../../Components/Containers/FoodsContainer/FoodsContainer";
import CustomView from "../../Components/CustomView/CustomView";
import {Control, LayoutDetail} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {ApplicationState} from "../../Store/reducers";
import {FoodsStackScreenProps} from "../../types";
import * as UIActions from "../../Store/actions/uiControl";
import CustomText from "../../Components/Text/CustomText";

const FoodsScreen: React.FC<FoodsStackScreenProps<"FoodsScreen">> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const Foods = useSelector(
    (state: ApplicationState) => state.province.ProvinceData.Food,
  );
  const {FoodsSrc} = Control;
  const colorScheme = useColorScheme();
  const statusBgcolor = FoodsSrc.statusBarColor[colorScheme];

  useEffect(() => {
    const focusFunction = () => {
      dispatch(UIActions.changeStatusColor(statusBgcolor,statusBgcolor));
    };
    const focused = navigation.addListener("focus", focusFunction);
    return focused;
  }, []);

  return (
    <View
      style={[styles.container, {backgroundColor: FoodsSrc.BG[colorScheme]}]}>
      <FlatList
        data={Foods}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={() => {
          return <CustomText style={styles.listHeaderText}>Places</CustomText>;
        }}
        ListHeaderComponentStyle={{
          ...styles.ListHeaderComponentStyle,
          backgroundColor: statusBgcolor,
        }}
        renderItem={({item}) => {
          return <FoodsContainer item={item} />;
        }}
      />
    </View>
  );
};

export default FoodsScreen;

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
