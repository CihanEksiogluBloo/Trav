import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {HomeStackNav} from "./Home"

const AppNavigator = () => {
    return (
       <NavigationContainer>
           <HomeStackNav />
       </NavigationContainer>
    )
}

export default AppNavigator


