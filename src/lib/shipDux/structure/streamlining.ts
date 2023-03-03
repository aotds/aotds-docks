import { createSlice } from "@reduxjs/toolkit";
import { reqs } from "../reqs";

const initialState = {
  type: "none",
  reqs,
};

const streamlining = createSlice({
  name: "streamlining",
  initialState,
  reducers: {
    setStreamlining(state, action) {
      state.type = action.payload.type;
      state.reqs = calcStreamliningReqs(action.payload);
    },
  },
});

export const { actions, reducer } = streamlining;

function calcStreamliningReqs({ shipMass, type }) {
  const mass = Math.ceil(
    (shipMass * (type === "none" ? 0 : type === "partial" ? 5 : 10)) / 100
  );

  return { mass, cost: 2 * mass };
}
