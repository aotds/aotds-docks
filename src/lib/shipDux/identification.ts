import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import * as carrier from "./carrier.js";

const initialState = {
  shipType: "",
  shipClass: "",
  isCarrier: false,
  mass: 10,
};

const identification = createSlice({
  name: "identification",
  initialState,
  reducers: {
    setShipType(state, action: PayloadAction<string>) {
      state.shipType = action.payload;
    },
    setShipClass(state, action: PayloadAction<string>) {
      state.shipClass = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      carrier.actions.setCarrierBays,
      (state, action: PayloadAction<number>) => {
        state.isCarrier = action.payload > 0;
      }
    );
  },
});

export const { actions, reducer } = identification;
