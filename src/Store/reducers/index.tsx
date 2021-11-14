import {combineReducers} from "redux";
import ProvinceReducer from "./province";

const rootReducer = combineReducers({
  province: ProvinceReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
