import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Updux } from "updux";
import u from "updeep";

import { Reqs, reqs } from "./reqs.js";

const initialState = {
    rating: 1,
    advanced: false,
    reqs,
};

const engine = createSlice({
    name: "engine",
    initialState,
    reducers: {
        setDriveRating(state, action: PayloadAction<number>) {
            state.rating = action.payload;
        },
        setDriveAdvanced(state, action: PayloadAction<boolean>) {
            state.advanced = action.payload;
        },
        setDriverReqs(state, action: PayloadAction<Reqs>) {
            state.reqs = action.payload;
        },
    },
});

export function calcDriveReqs(
    shipMass: number,
    rating: number,
    advanced = false
) {
    const mass = Math.ceil(rating * 0.05 * shipMass);
    const cost = mass * (advanced ? 3 : 2);

    return { mass, cost };
}

export default engine;
