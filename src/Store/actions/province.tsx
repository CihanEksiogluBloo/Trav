import axios from "axios";
import {Dispatch} from "react";

type ProvinceDataActionType = {
  readonly type: "FETCH_PROVINCE_DATA";
  payload: {};
};

export type ProvinceActions = ProvinceDataActionType;

export const fetchProvinceData = () => {
  return async (dispatch: Dispatch<ProvinceActions>) => {};
};
