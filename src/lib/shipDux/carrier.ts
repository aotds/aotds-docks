import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reqs, Reqs } from "./reqs";

type Squadron = {
  type: string;
  reqs: Reqs;
};

const initialState = {
  bays: 0,
  squadrons: [] as Squadron[],
  reqs,
};

export const { actions, reducer } = createSlice({
  name: "carrier",
  initialState,
  reducers: {
    setCarrierBays: (state, action: PayloadAction<number>) => {
      state.bays = action.payload;
      state.reqs = calcBaysReqs(action.payload);
      state.squadrons = adjustSquadrons(action.payload)(state.squadrons);
    },
    setSquadronType: (
      state,
      action: PayloadAction<{ type: string; id: number }>
    ) => {
      state.squadrons[action.payload.id - 1] = {
        type: action.payload.type,
        reqs: squadronReqs(action.payload.type),
      };
    },
  },
});

export const squadronTypes = [
  { type: "standard", cost: 3 },
  { type: "fast", cost: 4 },
  { type: "heavy", cost: 5 },
  { type: "interceptor", cost: 3 },
  { type: "attack", cost: 4 },
  { type: "long range", cost: 4 },
  { type: "torpedo", cost: 6 },
];

function squadronReqs(type: string) {
  return {
    mass: 6,
    cost: 6 * squadronTypes.find((s) => s.type === type)?.cost,
  };
}

const adjustSquadrons = (bays) => (squadrons) => {
  if (squadrons.length > bays) {
    squadrons = squadrons.slice(0, bays);
  }

  if (squadrons.length < bays) {
    squadrons = [
      ...squadrons,
      ..._.times(bays - squadrons.length, () => ({
        type: squadronTypes[0].type,
        reqs: {
          cost: 6 * squadronTypes[0].cost,
          mass: 6,
        },
      })),
    ];
  }

  return squadrons;
};

function calcBaysReqs(bays) {
  return {
    mass: 9 * bays,
    cost: 18 * bays,
  };
}
