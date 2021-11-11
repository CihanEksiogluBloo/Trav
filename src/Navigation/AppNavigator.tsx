import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {HomeStackNav} from "./Home"
import { View } from 'react-native';

const AppNavigator = () => {
    return (
       <NavigationContainer>
           <HomeStackNav />
       </NavigationContainer>
    )
}

export default AppNavigator


