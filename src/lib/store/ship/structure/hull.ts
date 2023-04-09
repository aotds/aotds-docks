import { reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";
import identificationDux from "../identification";

const initialState = {
  rating: 0,
  min: 0,
  max: 0,
  reqs,
};

const setHull = createPayloadAction<number>("setHull");

export const hullDux = new Updux({
  initialState,
  actions: {
    setHull,
    updateIdentification: identificationDux.actions.updateIdentification,
  },
});

hullDux.addMutation(setHull, (rating) =>
  u({
    rating,
    reqs: {
      mass: rating,
      cost: 2 * rating,
    },
  })
);

hullDux.addMutation(
  identificationDux.actions.updateIdentification,
  (payload) => {
    let mass = payload?.reqs?.mass ?? 0;
    return u({
      min: Math.ceil((mass ?? 0) / 10),
      max: mass ?? 0,
    });
  }
);
