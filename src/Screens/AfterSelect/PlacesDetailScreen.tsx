import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {PlacesStackScreenProps} from "../../types";

const PlacesDetailScreen: React.FC<PlacesStackScreenProps<"PlacesDetail">> = ({
  route,
}) => {
  const {place} = route.params;
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default PlacesDetailScreen;

const styles = StyleSheet.create({});
