import {ProvinceFood, ProvinceAdvice, ProvincePlace} from "../../types";
import {ProvinceActions} from "../actions/province";

type ProvinceStateType = {
  ProvinceData: {
    Food: ProvinceFood[];
    Advice: ProvinceAdvice[];
    Place: ProvincePlace[];
  };
  ProvinceOfLastData: string;
};

const initialState: ProvinceStateType = {
  ProvinceData: {Food: [], Advice: [], Place: []},
  ProvinceOfLastData: "",
};

export default (
  state: ProvinceStateType = initialState,
  action: ProvinceActions,
): ProvinceStateType => {
  switch (action.type) {
    case "FETCH_PROVINCE_DATA":
      const ProvinceOfLastData = action.province
        ? action.province
        : state.ProvinceOfLastData;
      return {
        ...state,
        ProvinceData: {...state.ProvinceData, ...action.payload},
        ProvinceOfLastData,
      };
    default: {
      return state;
    }
  }
};
