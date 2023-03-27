import { reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";

export const adfcDux = new Updux({
  initialState: {
    rating: 0,
    reqs,
  },
  actions: {
    setADFC: (rating: number) => rating,
  },
});

adfcDux.addMutation(adfcDux.actions.setADFC, (rating) =>
  u({
    rating,
    reqs: { cost: 8 * rating, mass: 2 * rating },
  })
);
