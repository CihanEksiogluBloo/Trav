import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {CompositeScreenProps} from "@react-navigation/native";
import {MaterialBottomTabScreenProps} from "@react-navigation/material-bottom-tabs";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  SelectProvinceStack: undefined;
  WhyScreen: undefined;
  AfterSelect:undefined;
};

export type TabParamList = {
  AdvicesScreen: undefined;
  FoodsScreen: undefined;
  PlacesScreen: undefined;
};

export type ProvinceStackParamList = {
  SelectProvince: undefined;
};

export type RootTabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    MaterialBottomTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type ProvinceObject = {province: string};
