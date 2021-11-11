import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SelectProvinceButton from '../Components/Button/SelectProvinceButton';
import SelectProvinceHeader from '../Components/Headers/SelectProvinceHeader';
import {Control, Provinces} from '../Constants';
import useColorScheme from '../Hooks/useColorScheme';
import {ProvinceObject} from '../types';

const SelectProvince: React.FC = () => {
  const colorScheme = useColorScheme();
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<{
    searchKey: string;
    filteredData: ProvinceObject[];
  }>({
    searchKey: '',
    filteredData: [],
  });

  const onPressProvince = () => {};

  const onChangeSearchText = (text: string) => {
    setFilteredData(prev => {
      if (text) {
        const tranformedText = text.trim().toLowerCase();
        const filteredData = Provinces.filter(item =>
          item.province.toLowerCase().includes(tranformedText),
        );
        return {filteredData, searchKey: text};
      }
      return {filteredData: [], searchKey: text};
    });
  };

  const changeSearchInputVisibilty = () => {
    setShowSearchInput(prev => !prev);
  };

  const header = React.useMemo(() => {
    if (showSearchInput) {
      return null;
    }

    return (
      <SelectProvinceHeader
        changeSearchInputVisibilty={changeSearchInputVisibilty}
      />
    );
  }, [showSearchInput]);

  return (
    <View>
      {showSearchInput && (
        <View>
          <TextInput
            value={filteredData.searchKey}
            onChangeText={e => onChangeSearchText(e)}
            placeholder={'Search...'}
            style={{
              textAlign: 'center',
              color: Control.generalText.color[colorScheme],
            }}
            placeholderTextColor={Control.generalText.color[colorScheme]}
          />
        </View>
      )}
      <FlatList
        data={
          filteredData.filteredData.length > 0
            ? filteredData.filteredData
            : Provinces
        }
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={header}
        renderItem={({item}) => {
          return (
            <SelectProvinceButton
              onPressProvince={onPressProvince}
              province={item.province}
            />
          );
        }}
      />
    </View>
  );
};

export default SelectProvince;

const styles = StyleSheet.create({});
