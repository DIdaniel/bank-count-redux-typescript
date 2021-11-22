import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducers = combineReducers({
  AllReducer: bankReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
