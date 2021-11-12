import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Meterial} from '../Icons/Icon';
import {Colors,LayoutDetail} from '../../Constants';

type SelectProvinceHeaderType = {
  changeSearchInputVisibilty: () => void;
};

const SelectProvinceHeader: React.FC<SelectProvinceHeaderType> = ({
  changeSearchInputVisibilty,
}) => {
  return (
    <Pressable style={styles.container} onPress={changeSearchInputVisibilty}>
      <Text style={{alignSelf: 'center', color: 'white'}}>
        Select a Province
      </Text>
      <Pressable onPress={changeSearchInputVisibilty} style={styles.pressable}>
        <Meterial name="search" size={24} color={Colors.dark.red} />
      </Pressable>
    </Pressable>
  );
};

export default SelectProvinceHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'center',
    height:LayoutDetail.windowHeight * 0.05
  },
  pressable: {
    right: 15,
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 17,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
