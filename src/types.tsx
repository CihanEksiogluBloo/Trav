import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
  
  
export type RootStackParamList = {
    Home: undefined;
    SelectProvinceStack: undefined;
    WhyScreen: undefined;
    
  };
export type ProvinceStackParamList = {
  SelectProvince: undefined;
}

  export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;