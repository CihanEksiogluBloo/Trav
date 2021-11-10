import Colors from "./Colors";

const Control: {[key: string]: {[key: string]: {light: string; dark: string}}} =
  {
    home: {
      buttonIcon: {light: Colors.light.white, dark: Colors.dark.white},
      button: {light: Colors.light.white, dark: Colors.dark.white},
      buttonBorderColor:{light:Colors.light.white,dark:Colors.dark.white}
    },
  };

export default Control;
