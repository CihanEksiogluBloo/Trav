import {ColorValue} from "react-native";
import {Colors} from "../../Constants";
import {uiControlActions} from "../actions/uiControl";

type UIControlStateType = {
  StatusBarColor: ColorValue | null;
  NavigationBarColor: string | null;
};

const initialState: UIControlStateType = {
  StatusBarColor: null,
  NavigationBarColor: null,
};

export default (
  state: UIControlStateType = initialState,
  action: uiControlActions,
): UIControlStateType => {
  switch (action.type) {
    case "CHANGE_STATUS_COLOR":
      return {
        ...state,
        StatusBarColor: action.payload.StatusBarColor,
        NavigationBarColor: action.payload.navigationBarColor,
      };
    default: {
      return state;
    }
  }
};
