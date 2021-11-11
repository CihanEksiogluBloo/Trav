import React, { useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import HomeButton from '../Components/Button/HomeButton';
import {AntDesign, MaterialCommunity} from '../Components/Icons/Icon';
import Colors from '../Constants/Colors';
import {RootStackScreenProps} from '../types';
import useColorScheme from '../Hooks/useColorScheme';
import {Control, LayoutDetail,Provinces} from '../Constants';


const dimentions = LayoutDetail;

const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = ({navigation}) => {

  function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const colorScheme = useColorScheme();
  const {home} = Control

  const whyTurkeyButtonPressHandler = () => {
    navigation.navigate("WhyScreen")
    
  }

  const letStartButtonPressHandler = () => {
    navigation.navigate("SelectProvinceStack")
  }

  return (
    <ImageBackground
      source={require('../Assets/Images/mainscreen.png')}
      style={styles.imageContainer}
      resizeMethod="auto"
      resizeMode="stretch">
      <View style={styles.generalContainer}>

        <View>
        <HomeButton
          onPress={whyTurkeyButtonPressHandler}
          title={"Why Turkey"}
          ContainerStyle={styles.buttonContainerStyle}>
          <AntDesign
            name={'questioncircleo'}
            color={home.buttonIcon[colorScheme]}
            size={24}
          />
        </HomeButton>
        </View>
        <View>
        <HomeButton
          onPress={letStartButtonPressHandler}
          title={"Let's Start"}
          ContainerStyle={styles.buttonContainerStyle}>
          <AntDesign
            name={'rightcircleo'}
            color={home.buttonIcon[colorScheme]}
            size={24}
          />
        </HomeButton>
        </View>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageContainer: {flex: 1},
  generalContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonContainerStyle: {
    width: dimentions.windowWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
