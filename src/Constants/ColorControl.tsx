import {ColorValue} from "react-native";
import Colors from "./Colors";

const {light, dark} = Colors;

const Control: {
  [key: string]: {[key: string]: {light: string; dark: string}};
} = {
  home: {
    buttonIcon: {light: light.white, dark: dark.white},
    button: {light: light.white, dark: dark.white},
    buttonBorderColor: {light: Colors.light.white, dark: dark.white},
  },
  header: {
    background: {light: light.red, dark: dark.red},
    headerText: {light: light.white, dark: dark.white},
    contentBG: {light: light.red, dark: dark.black},
  },
  statusBar: {
    defaultColor: {light: light.red, dark: dark.red},
    defaultNavigationBarColor: {light: light.white, dark: dark.white},
  },
  customView: {
    gradientOne: {light: light.red, dark: dark.red},
    gradientTwo: {light: light.blue, dark: dark.blue},
  },
  ProvinceStackNavColor: {
    contentBG: {light: light.red, dark: dark.black},
  },
  generalText: {
    color: {light: light.text, dark: dark.text},
    haveBgColor: {light: light.white, dark: dark.white},
    link: {light: light.blue, dark: dark.blue},
  },
  generalIcons: {
    color: {light: light.white, dark: dark.white},
    haveBgColor: {light: light.white, dark: dark.white},
  },
  SelectProvinceControl: {
    rippleColor: {light: light.green, dark: dark.softblue},
    BG: {light: light.black05, dark: dark.black05},
    searchBarBG: {light: light.white, dark: dark.white},
    searchBarText: {light: light.black, dark: dark.black},
  },
  AccordionCardControl: {
    borderColor: {light: light.white, dark: dark.white},
  },
  BottomBar: {
    activeColor: {light: light.white, dark: dark.white},
    inactiveColor: {light: light.black, dark: dark.black},
    BG: {light: light.red, dark: dark.grey},
    FoodBarColor: {light: light.blue, dark: dark.blue},
    PlacesBarColor: {light: light.red, dark: dark.red},
    AdvicesBarColor: {light: light.purple, dark: dark.purple},
  },
  FoodsSrc: {
    statusBarColor: {light: light.blue, dark: dark.blue},
    BG: {light: light.white, dark: dark.white},
  },
  PlacesSrc: {
    statusBarColor: {light: light.red, dark: dark.red},
    BG: {light: light.white, dark: dark.white},
    rippleColor: {light: light.red, dark: dark.white},
  },
  PlacesDetailSrc: {
    headerBG: {light: light.red, dark: dark.red},
    headerColor: {light: light.red, dark: dark.red},
  },
};

export default Control;
