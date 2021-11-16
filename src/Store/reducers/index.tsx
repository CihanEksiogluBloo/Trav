import {combineReducers} from "redux";
import ProvinceReducer from "./province";
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["province"],
};

const rootReducer = combineReducers({
  province: ProvinceReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
