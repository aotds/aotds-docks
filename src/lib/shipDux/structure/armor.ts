import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reqs, reqs } from "../reqs";

type Layer = number;

const initialState = {
    reqs,
    layers: [] as Layer[],
};

const armor = createSlice({
    name: "armor",
    initialState,
    reducers: {
        setArmorRating: (state, action) => {
            state.layers[action.payload.layer - 1] = action.payload.rating;
            state.reqs = calcArmorReqs(state.layers);
        },
        setArmorLayers: (state, action: PayloadAction<number>) => {
            while (state.layers.length > action.payload) state.layers.pop();
            while (state.layers.length < action.payload) state.layers.push(0);
            state.reqs = calcArmorReqs(state.layers);
        },
    },
});

function calcArmorReqs(layers: Layer[]): Reqs {
    const mass = 2 * layers.reduce((a, b) => a + b, 0);
    const cost = 2 * layers.map((v, k) => v * (k + 1)).reduce((a, b) => a + b, 0);

    return {
        mass,
        cost,
    };
}
