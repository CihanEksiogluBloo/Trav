import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import HomeButton from '../Components/Button/HomeButton';
import {AntDesign, MaterialCommunity} from '../Components/Icons/Icon';
import Colors from '../Constants/Colors';
import {RootStackScreenProps} from '../types';
import useColorScheme from '../Hooks/useColorScheme';
import {Control, LayoutDetail} from '../Constants';

const dimentions = LayoutDetail;

const HomeScreen: React.FC<RootStackScreenProps<'HomeStack'>> = () => {
  const colorScheme = useColorScheme();
  const {home} = Control

  const whyTurkeyButtonPressHandler = () => {
    
  }

  const letStartButtonPressHandler = () => {

  }

  return (
    <ImageBackground
      source={require('../Assets/Images/mainscreen.png')}
      style={styles.imageContainer}
      resizeMethod="resize"
      resizeMode="cover">
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
