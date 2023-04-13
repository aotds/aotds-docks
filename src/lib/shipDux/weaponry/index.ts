import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { reqs } from "../reqs.js";
import * as weapons from "./weapons.js";

const adfc = createSlice({
  name: "adfc",
  initialState: {
    rating: 0,
    reqs,
  },
  reducers: {
    setAdfc(state, action) {
      const rating = action.payload;
      state.rating = action.payload;
      state.reqs = {
        cost: 8 * rating,
        mass: 2 * rating,
      };
    },
  },
});

export const reducer = combineReducers({
  adfc: adfc.reducer,
  weapons: weapons.reducer,
});
