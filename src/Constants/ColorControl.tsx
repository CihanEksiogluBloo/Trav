import Colors from "./Colors";

const {light, dark} = Colors;

const Control: {[key: string]: {[key: string]: {light: string; dark: string}}} =
  {
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
    customView: {
      gradientOne: {light: light.red, dark: dark.red},
      gradientTwo: {light: light.blue, dark: dark.blue},
    },
    ProvinceStackNavColor: {
      contentBG: {light: light.red, dark: dark.black},
    },
    generalText: {
      color: {light: light.text, dark: dark.text},
    },
    generalIcons: {
      color: {light: light.white, dark: dark.white},
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
    },
    FoodsSrc: {
      statusBarColor: {light: light.red, dark: dark.red},
      BG: {light: light.red, dark: dark.red},
    },
    PlacesSrc: {
      statusBarColor: {light: light.red, dark: dark.red},
      BG: {light: light.white, dark: dark.white},
      rippleColor: {light: light.white, dark: dark.white},
    },
  };

export default Control;
