import React, {memo} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Colors, Control} from '../../Constants';
import useColorScheme from '../../Hooks/useColorScheme';

type HomeButtonType = {
  onPress: () => void;
  title: string | null;
  children: React.ReactNode;
  pressCheckWitoutLabel?: boolean;
  textStyle?: TextStyle;
  ContainerStyle?: ViewStyle;
};

const HomeButton: React.FC<HomeButtonType> = ({
  onPress,
  title,
  children,
  textStyle,
  ContainerStyle,
}) => {
  const colorScheme = useColorScheme();
  const {home} = Control;

  return (
    <View style={[styles.pressableStyle]}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: Colors[colorScheme].green}}>
        <View
          style={[
            {
              borderWidth: 1,
              borderColor: home.buttonBorderColor[colorScheme],
              padding: 10,
              borderRadius: 10,
              flexDirection: 'row',
            },
            ContainerStyle,
          ]}>
          {title && (
            <Text
              numberOfLines={1}
              style={[
                styles.textStyle,
                {color: Colors[colorScheme].white},
                textStyle,
              ]}>
              {title}
            </Text>
          )}
          {children}
        </View>
      </Pressable>
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  pressableStyle: {
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
    overflow: 'hidden',
  },
  textStyle: {fontSize: 18, marginHorizontal: 5},
});
