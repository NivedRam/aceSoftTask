import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  
});

const {dispatch}=store

export {store,dispatch,useSelector}