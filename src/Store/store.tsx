import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import {persistStore, persistReducer} from "redux-persist";

const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export {store, persistor};
