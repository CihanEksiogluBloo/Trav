import {
  ProvinceActions

} from "../actions/province";


type ProvinceStateType = {
  ProvinceData: [];

};

const initialState: ProvinceStateType = {
  ProvinceData: []
};

export default (
  state: ProvinceStateType = initialState,
  action: ProvinceActions
): ProvinceStateType => {
  switch (action.type) {
    default: {
      return state
    }
  }
};
