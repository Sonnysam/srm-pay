import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/Auth";
import CompReducer from "./reducers/Comp";

const rootReducer = combineReducers({
  AuthReducer,
  CompReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
