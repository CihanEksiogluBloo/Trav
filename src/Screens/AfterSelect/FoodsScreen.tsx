import React from "react";
import {FlatList, StatusBar, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import FoodsContainer from "../../Components/Containers/FoodsContainer/FoodsContainer";
import CustomView from "../../Components/CustomView/CustomView";
import {Control} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {ApplicationState} from "../../Store/reducers";
import {FoodsStackScreenProps} from "../../types";

const FoodsScreen: React.FC<FoodsStackScreenProps<"FoodsScreen">> = () => {
  const Foods = useSelector(
    (state: ApplicationState) => state.province.ProvinceData.Food,
  );
  const {FoodsSrc} = Control;
  const colorScheme = useColorScheme();

  return (
    <View
      style={[styles.container, {backgroundColor: FoodsSrc.BG[colorScheme]}]}>
      <StatusBar
        backgroundColor={FoodsSrc.statusBarColor[colorScheme]}
        barStyle={`${colorScheme}-content`}
      />
      <FlatList
        data={Foods}
        keyExtractor={(_, index) => index.toString()}
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
});
