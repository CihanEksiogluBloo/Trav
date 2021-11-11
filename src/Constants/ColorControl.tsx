import Colors from "./Colors";

const {light,dark} = Colors;

const Control: {[key: string]: {[key: string]: {light: string; dark: string}}} =
  {
    home: {
      buttonIcon: {light: light.white, dark: dark.white},
      button: {light: light.white, dark: dark.white},
      buttonBorderColor:{light:Colors.light.white,dark:dark.white}
    },
    header:{
      background:{light:light.red,dark:dark.red},
      headerText:{light:light.white,dark:dark.white},
      contentBG:{light:light.red,dark:dark.black}
    },
    customView:{
      gradientOne:{light:light.red,dark:dark.red},
      gradientTwo:{light:light.blue,dark:dark.blue},
    },
    ProvinceStackNavColor:{
      contentBG:{light:light.red,dark:dark.black}
    },
  };

export default Control;
