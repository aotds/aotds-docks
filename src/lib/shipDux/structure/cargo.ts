import { createSlice } from "@reduxjs/toolkit";
import { reqs } from "../reqs";

const initialState = { space: 0, reqs };

const cargo = createSlice({
    name: "cargo",
    initialState,
    reducers: {
        setCargo: (state, action) => {
            state.space = action.payload;
            state.reqs = { cost: 0, mass: action.payload };
        },
    },
});

export const { actions, reducer } = cargo;
