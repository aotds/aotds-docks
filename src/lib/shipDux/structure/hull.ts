import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reqs } from "../reqs";

const initialState = {
    rating: 0,
    min: 0,
    max: 0,
    reqs,
};

const hull = createSlice({
    name: "hull",
    initialState,
    reducers: {
        setHull: (state, action: PayloadAction<number>) => {
            state.rating = action.payload;
            state.reqs = {
                mass: action.payload,
                cost: 2 * action.payload,
            }
        },
        setShipMass: (state, action: PayloadAction<number>) => {
            const mass = action.payload;
            let { rating } = state;
            if (rating > mass) state.rating = mass;
            state.min = Math.ceil(mass / 10);
            if (state.rating < state.min) state.rating = state.min;
            state.max = mass;
        };
    },
},
});

export const { actions, reducer } = hull;
