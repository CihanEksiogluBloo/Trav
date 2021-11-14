import React, {useState} from "react";
import {Pressable, StyleSheet, View} from "react-native";
import {Control} from "../../Constants";
import useColorScheme from "../../Hooks/useColorScheme";
import {AntDesign} from "../Icons/Icon";
import CustomText from "../Text/CustomText";

type AccordionCardType = {
  header: string;
  value: string;
};

const AccordionCard: React.FC<AccordionCardType> = ({header, value}) => {
  const {AccordionCardControl, generalIcons} = Control;
  const colorScheme = useColorScheme();
  const [showValue, setShowValue] = useState<boolean>(false);
  const onChangeVisibilityPress = () => {
    setShowValue(prev => !prev);
  };
  return (
    <Pressable
      onPress={onChangeVisibilityPress}
      style={[
        styles.container,
        {borderColor: AccordionCardControl.borderColor[colorScheme]},
      ]}>
      <View
        style={[
          styles.headerContainer,
          {
            borderColor: AccordionCardControl.borderColor[colorScheme],
            borderBottomWidth: showValue ? 1 : 0,
          },
        ]}>
        <CustomText style={styles.headerText}>{header}</CustomText>
        <AntDesign
          name="down"
          size={24}
          color={generalIcons.color[colorScheme]}
          style={{position: "absolute", right: 20}}
          onPress={onChangeVisibilityPress}
        />
      </View>
      {showValue && (
        <View style={styles.valueContainer}>
          <CustomText style={styles.valueText}>{value}</CustomText>
        </View>
      )}
    </Pressable>
  );
};

export default AccordionCard;

const styles = StyleSheet.create({
  container: {width: "100%", borderWidth: 1, borderRadius: 7},
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  valueContainer: {padding: 10},
  valueText: {textAlign: "center"},
  headerText: {fontWeight: "800", fontSize: 17},
});
