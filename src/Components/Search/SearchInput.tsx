import React, {SetStateAction} from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';

type SearchInputType = {
  value: string;
  setValue: (e: string) => void;
  style: TextStyle | TextStyle[];
  placeHolderColor: ColorValue;
};

const SearchInput: React.FC<SearchInputType> = ({
  setValue,
  style,
  value,
  placeHolderColor,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={e => setValue(e)}
      placeholder={'Search...'}
      style={style}
      placeholderTextColor={placeHolderColor}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
