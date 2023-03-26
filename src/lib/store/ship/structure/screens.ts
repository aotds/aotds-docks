import { reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";
import { createSelector } from "reselect";

const initialState = {
  standard: 0,
  advanced: 0,
  reqs,
};

const setScreens = createPayloadAction<{ standard: number; advanced: number }>(
  "setScreens"
);
const setScreensReqs = createPayloadAction("setScreensReqs");

export const screensDux = new Updux({
  initialState,
  actions: {
    setScreensReqs,
    setScreens,
  },
  // reducers: {
  //     setScreensReqs(state, action) {
  //         state.reqs = action.payload;
  //     },
  // },
});

screensDux.addMutation(setScreens, (payload) => u(payload));
screensDux.addMutation(setScreensReqs, (reqs) => u({ reqs }));

export const screensReqsReaction = (api) =>
  createSelector(
    (ship) => ship.identification.reqs.mass,
    (ship) => ship.structure.screens.standard,
    (ship) => ship.structure.screens.advanced,
    (...args) => api.dispatch.setScreensReqs(calcScreensReqs(...args))
  );

function calcScreensReqs(mass: number, standard: number, advanced: number) {
  const standardMass = standard * Math.max(3, Math.ceil(0.05 * mass));
  const advancedMass = advanced * Math.max(4, Math.ceil(0.075 * mass));

  return {
    mass: standardMass + advancedMass,
    cost: 3 * standardMass + 4 * advancedMass,
  };
}
