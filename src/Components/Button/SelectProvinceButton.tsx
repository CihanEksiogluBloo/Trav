import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Control} from '../../Constants';
import useColorScheme from '../../Hooks/useColorScheme';

type SelectProvinceButtonType = {
  province: string;
  onPressProvince: () => void;
};

const SelectProvinceButton: React.FC<SelectProvinceButtonType> = ({
  onPressProvince,
  province,
}) => {
  const useColor = useColorScheme();
  const {SelectProvinceControl} = Control;
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.pressableStyle,
          {backgroundColor: SelectProvinceControl.BG[useColor]},
        ]}
        android_ripple={{
          color: SelectProvinceControl.rippleColor[useColor],
        }}>
        <Text
          style={[styles.text, {color: Control.generalText.color[useColor]}]}>
          {province}
        </Text>
      </Pressable>
    </View>
  );
};

function areEqual(prevProps : any, nextProps : any ) {
  return prevProps == nextProps
}

export default React.memo(SelectProvinceButton,areEqual);

const styles = StyleSheet.create({
  container: {margin: 5, borderRadius: 10, overflow: 'hidden'},
  pressableStyle: {alignItems: 'center', padding: 10, borderRadius: 10},
  text: {
    fontSize: 16,
  },
});
