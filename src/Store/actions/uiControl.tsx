import React, {Dispatch} from "react";
import {ColorValue} from "react-native";

type changeStatusColorType = {
  readonly type: "CHANGE_STATUS_COLOR";
  payload: {navigationBarColor: string; StatusBarColor: ColorValue};
};

export type uiControlActions = changeStatusColorType;

export const changeStatusColor = (
  StatusBarColor: ColorValue,
  navigationBarColor: string,
): uiControlActions => {
  return {
    type: "CHANGE_STATUS_COLOR",
    payload: {StatusBarColor, navigationBarColor},
  };
};
