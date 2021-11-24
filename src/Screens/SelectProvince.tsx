import React, {useState} from "react";
import {Dimensions, FlatList, Platform, StyleSheet, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import {useDispatch, useSelector} from "react-redux";
import SelectProvinceButton from "../Components/Button/SelectProvinceButton";
import CustomView from "../Components/CustomView/CustomView";
import SelectProvinceHeader from "../Components/Headers/SelectProvinceHeader";
import {AntDesign} from "../Components/Icons/Icon";
import SearchInput from "../Components/Search/SearchInput";
import {Control, LayoutDetail, Provinces} from "../Constants";
import useColorScheme from "../Hooks/useColorScheme";
import {ProvinceObject, RootStackScreenProps} from "../types";
import * as ProvinceActions from "../Store/actions/province";
import * as UIActions from "../Store/actions/uiControl";
import {ApplicationState} from "../Store/reducers";
import useChangeNavigationBar from "../Hooks/useChangeNavigationBar";

const regex = new RegExp(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g);

const SelectProvince: React.FC<RootStackScreenProps<"SelectProvinceStack">> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const {SelectProvinceControl, statusBar, PlacesSrc} = Control;
  const colorScheme = useColorScheme();
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const navBarColor = statusBar.defaultNavigationBarColor[colorScheme];
  const isPlatformAndroid = Platform.OS == "android";

  const {ProvinceOfLastData} = useSelector(
    (state: ApplicationState) => state.province,
  );

  const [filteredData, setFilteredData] = useState<{
    searchKey: string;
    filteredData: ProvinceObject[];
  }>({
    searchKey: "",
    filteredData: [],
  });

  const navigateAfterSelect = (province: string) => {
    if (ProvinceOfLastData == province) {
      navigation.navigate("AfterSelect");
      return;
    }
    dispatch(ProvinceActions.fetchProvinceData(province));
    navigation.navigate("AfterSelect");
  };

  const onPressProvince = (province: string) => {
    if (isPlatformAndroid) {
      useChangeNavigationBar({
        color: PlacesSrc.statusBarColor[colorScheme],
        colorScheme,
      });
      navigateAfterSelect(province);
    } else {
      navigateAfterSelect(province);
    }
  };

  const onChangeSearchText = React.useCallback((text: string) => {
    setFilteredData(prev => {
      if (text) {
        const transformedText = text.trim().toLowerCase();
        const testResult = regex.test(transformedText);
        if (testResult) {
          return {filteredData: [], searchKey: ""};
        }
        const filteredData = Provinces.filter(item =>
          item.province.toLowerCase().includes(transformedText),
        );
        return {filteredData, searchKey: text};
      }
      return {filteredData: [], searchKey: text};
    });
  }, []);

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
    <CustomView>
      {showSearchInput && (
        <View style={{justifyContent: "center"}}>
          <SearchInput
            setValue={onChangeSearchText}
            style={[
              styles.searchInput,
              {
                backgroundColor: SelectProvinceControl.searchBarBG[colorScheme],
                color: SelectProvinceControl.searchBarText[colorScheme],
              },
            ]}
            value={filteredData.searchKey}
            placeHolderColor={SelectProvinceControl.searchBarText[colorScheme]}
          />
          <AntDesign
            name="closecircle"
            size={24}
            style={{position: "absolute", right: 20}}
            color={"black"}
            onPress={changeSearchInputVisibilty}
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
    </CustomView>
  );
};

export default SelectProvince;

const styles = StyleSheet.create({
  searchInput: {
    textAlign: "center",
    height: LayoutDetail.windowHeight * 0.05,
    borderWidth: 1,
    marginHorizontal: 7,
    borderRadius: 20,
  },
});
