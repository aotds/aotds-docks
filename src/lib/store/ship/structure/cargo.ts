import { reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";

const initialState = { space: 0, reqs };

const setCargo = createPayloadAction<number>("setCargo");

export const cargoDux = new Updux({
  initialState,
  actions: { setCargo },
  reducers: {
    setCargo: (state, action) => {
      state.space = action.payload;
      state.reqs = { cost: 0, mass: action.payload };
    },
  },
});

cargoDux.addMutation(setCargo, (space) =>
  u({
    space,
    reqs: { cost: 0, mass: space },
  })
);
