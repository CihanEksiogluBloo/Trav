import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {FoodsStackScreenProps} from "../../types";
import * as UIActions from "../../Store/actions/uiControl";
import {ApplicationState} from "../../Store/reducers";
import {Control} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";

const FoodsDetailScreen: React.FC<FoodsStackScreenProps<"FoodsDetail">> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch();
  const {food} = route.params;
  const {FoodsSrc} = Control;
  const colorScheme = useColorScheme();
  const statusColor = FoodsSrc.statusBarColor[colorScheme];

  React.useEffect(() => {
    const focusFunction = () => {
      dispatch(UIActions.changeStatusColor(statusColor, statusColor));
    };
    const focused = navigation.addListener("focus", focusFunction);
    return focused;
  }, []);

  return (
    <View>
      <Text>FoodsDetailScreen</Text>
    </View>
  );
};

export default FoodsDetailScreen;

const styles = StyleSheet.create({});
