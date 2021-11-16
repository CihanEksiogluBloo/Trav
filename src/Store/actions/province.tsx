//import axios from "axios";
import React, {Dispatch} from "react";
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import {
  FirestoreProvinceSnapType,
  ProvinceAdvice,
  StateArrayNames,
  ProvinceFood,
  ProvincePlace,
} from "../../types";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

type ProvinceDataActionType = {
  readonly type: "FETCH_PROVINCE_DATA";
  payload: {[key: string]: ProvinceAdvice[] | ProvincePlace[] | ProvinceFood[]};
  province?: string
};

export type ProvinceActions = ProvinceDataActionType;

const FirebaseDataFetch = (
  ProvinceName: string,
  StateArrayName: StateArrayNames,
  dispatch: Dispatch<ProvinceActions>,
  ProvinceOfLastData?: string
) => {
  firestore()
    .collection(ProvinceName + StateArrayName)
    .get()
    .then((res: {docs: any[]}) => {
      //const getData = {res.docs,...res.docs}
      const mappedList: ProvinceAdvice[] | ProvincePlace[] | ProvinceFood[] =
        res.docs.map(item => item.data());

      const result: {
        [key: string]: ProvinceAdvice[] | ProvincePlace[] | ProvinceFood[];
      } = {[StateArrayName]: mappedList};

      dispatch({type: "FETCH_PROVINCE_DATA", payload: result,province:ProvinceOfLastData});
    });
};

export const fetchProvinceData = (
  ProvinceName: string,
): ThunkAction<Promise<void>, {}, {}, ProvinceActions> => {
  return async (dispatch: Dispatch<ProvinceActions>) => {
    FirebaseDataFetch(ProvinceName, "Food", dispatch);
    FirebaseDataFetch(ProvinceName, "Place", dispatch);
    FirebaseDataFetch(ProvinceName, "Advice", dispatch,ProvinceName);
  };
};
