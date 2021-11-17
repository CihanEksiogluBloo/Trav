import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {AdvicesStackScreenProps} from "../../types";

const AdvicesDetail: React.FC<AdvicesStackScreenProps<"AdvicesDetail">> = ({
  route,
}) => {
  const {advice} = route.params;
  return (
    <View>
      <Text>AdvicesDetail</Text>
    </View>
  );
};

export default AdvicesDetail;

const styles = StyleSheet.create({});
