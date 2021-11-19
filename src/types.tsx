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
  AfterSelect: undefined;
};
export type PlacesStackParamList = {
  PlacesScreen: undefined;
  PlacesDetail: PlacesDetailParams;
};
export type FoodsStackParamList = {
  FoodsScreen: undefined;
  FoodsDetail: FoodsDetailParams;
};
export type AdvicesStackParamList = {
  AdvicesScreen: undefined;
  AdvicesDetail: AdvicesDetailParams;
};

type PlacesDetailParams = {
  place: ProvincePlace;
};
type FoodsDetailParams = {
  food: ProvinceFood;
};
type AdvicesDetailParams = {
  advice: ProvinceAdvice;
};

export type TabParamList = {
  AdvicesScreen: undefined;
  FoodsStack: undefined;
  PlacesStack: undefined;
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

export type PlacesStackScreenProps<Screen extends keyof PlacesStackParamList> =
  NativeStackScreenProps<PlacesStackParamList, Screen>;

export type FoodsStackScreenProps<Screen extends keyof FoodsStackParamList> =
  NativeStackScreenProps<FoodsStackParamList, Screen>;

export type AdvicesStackScreenProps<
  Screen extends keyof AdvicesStackParamList,
> = NativeStackScreenProps<AdvicesStackParamList, Screen>;

export type ProvinceObject = {province: string};

export type FirestoreProvinceSnapType = {
  _data: {
    Adres: string;
    Bilgi: string;
    GorselUrl: string;
    Kaynak: string;
    Link: string;
    Restoran: string;
    Yemek: string;
  };
  _metadata: any;
  _ref: any;
  _exists: any;
};

export type StateArrayNames = "Food" | "Advice" | "Place";

export type ProvinceAdvice = {
  Advices: string;
  GorselUrl: string;
};
export type ProvinceFood = {
  Adres: string;
  Bilgi: string;
  GorselUrl: string;
  Kaynak: string;
  Link: string;
  Restoran: string;
  Yemek: string;
};

export type ProvincePlace = {
  Adres: string;
  GorselUrl: string;
  Mekan: string;
  Tarih: string;
  link:string;
};
