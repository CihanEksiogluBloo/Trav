import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useDispatch} from "react-redux";
import {Control} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {AdvicesStackScreenProps} from "../../types";
import * as UIActions from "../../Store/actions/uiControl";

const AdvicesDetail: React.FC<AdvicesStackScreenProps<"AdvicesDetail">> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch();
  const {advice} = route.params;
  const {AdvicesSrc} = Control;
  const colorScheme = useColorScheme();
  const statusBarColor = AdvicesSrc.statusBarColor[colorScheme];

  useEffect(() => {
    console.log("work");
    const focusFunction = () => {
      dispatch(UIActions.changeStatusColor(statusBarColor, statusBarColor));
    };
    const focused = navigation.addListener("focus", focusFunction);
    return focused;
  }, []);

  return (
    <View>
      <Text>AdvicesDetail</Text>
    </View>
  );
};

export default AdvicesDetail;

const styles = StyleSheet.create({});
