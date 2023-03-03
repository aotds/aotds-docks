import { combineReducers } from "@reduxjs/toolkit";
import * as drive from "./drive.js";
import * as ftl from "./ftl.js";

export const reducer = combineReducers({
  drive: drive.reducer,
  ftl: ftl.reducer,
});

export const initialState = {
  drive: drive.initialState,
  ftl: ftl.initialState,
};
