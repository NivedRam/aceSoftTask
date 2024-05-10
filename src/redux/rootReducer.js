import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slice";
const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;
