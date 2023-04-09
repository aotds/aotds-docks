import { reqs, type Reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";
import { createSelector } from "reselect";
import prepare from "immer";

type Layer = number;

const initialState = {
  reqs,
  layers: [] as Layer[],
};

const setNbrArmorLayers = createPayloadAction<number>("setNbrArmorLayers");
const setArmorRating = createPayloadAction(
  "setArmorRating",
  (id: number, rating: number) => ({ index: id - 1, rating })
);

export const armorDux = new Updux({
  initialState,
  actions: { setNbrArmorLayers, setArmorRating },
});

armorDux.addMutation(setArmorRating, ({ index, rating }) =>
  prepare((state) => {
    state.layers[index] = rating;
    state.reqs = calcArmorReqs(state.layers);
  })
);

armorDux.addMutation(setNbrArmorLayers, (nbrLayers) =>
  prepare((state) => {
    while (state.layers.length > nbrLayers) {
      state.layers.pop();
    }
    while (state.layers.length < nbrLayers) {
      state.layers.push(0);
    }
    state.reqs = calcArmorReqs(state.layers);
  })
);

function calcArmorReqs(layers: Layer[]): Reqs {
  const mass = 2 * layers.reduce((a, b) => a + b, 0);
  const cost = 2 * layers.map((v, k) => v * (k + 1)).reduce((a, b) => a + b, 0);

  return {
    mass,
    cost,
  };
}
