import React from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { IconProps } from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Meterial = (props:IconProps) => <MaterialIcons {...props} />
export const MaterialCommunity = (props:IconProps) => <MaterialCommunityIcons {...props} />
export const AntDesign = (props:IconProps) => <AntDesignIcon {...props} />