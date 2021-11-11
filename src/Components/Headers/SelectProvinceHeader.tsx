import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import {Meterial} from '../Icons/Icon';
import {Colors} from "../../Constants"


type SelectProvinceHeaderType = {
    changeSearchInputVisibilty : () => void
}

const SelectProvinceHeader : React.FC<SelectProvinceHeaderType> = ({changeSearchInputVisibilty}) => {
    return (
        <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 10,
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>
          Select a Province
        </Text>
        <Pressable
          onPress={changeSearchInputVisibilty}
          style={{
            right: 5,
            position: 'absolute',
            width: 30,
            height: 30,
            borderRadius: 17,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Meterial name="search" size={24} color={Colors.dark.red} />
        </Pressable>
      </View>
    )
}

export default SelectProvinceHeader

const styles = StyleSheet.create({})
