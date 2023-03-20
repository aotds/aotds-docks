import { createSlice } from "@reduxjs/toolkit";
import { reqs } from "./reqs";

const initialState = {
  usedMass: 0,
  mass: 10,
  cost: 0,
};

const shipReqs = createSlice({
  name: "shipReqs",
  initialState,
  reducers: {
    setShipMass(state, action) {
      state.mass = action.payload;
    },
    setShipReqs(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { actions, reducer } = shipReqs;
