import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {FoodsStackScreenProps} from "../../types";

const FoodsDetailScreen: React.FC<FoodsStackScreenProps<"FoodsDetail">> = ({
  route,
}) => {
  const {food} = route.params;
  return (
    <View>
      <Text>FoodsDetailScreen</Text>
    </View>
  );
};

export default FoodsDetailScreen;

const styles = StyleSheet.create({});
