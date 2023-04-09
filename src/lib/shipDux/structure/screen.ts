import { createSelector, createSlice } from "@reduxjs/toolkit";
import { reqs } from "../reqs";

const initialState = {
    standard: 0,
    advanced: 0,
    reqs,
};

const screen = createSlice({
    name: "screens",
    initialState,
    reducers: {
        setScreens(state, action) {
            state.standard = action.payload.standard;
            state.advanced = action.payload.advanced;
        },
        setScreensReqs(state, action) {
            state.reqs = action.payload;
        },
    },
});

export const { actions, reducer } = screen;

export const screensReqsReaction = (store) =>
    createSelector(
        (ship) => ship.reqs.mass,
        (ship) => ship.structure.screens.standard,
        (ship) => ship.structure.screens.advanced,
        (...args) => store.dispatch.setScreensReqs(calcScreensReqs(...args))
    );

function calcScreensReqs(mass, standard, advanced) {
    const standard_mass = standard * Math.max(3, Math.ceil(0.05 * mass));
    const advanced_mass = advanced * Math.max(4, Math.ceil(0.075 * mass));

    return {
        mass: standard_mass + advanced_mass,
        cost: 3 * standard_mass + 4 * advanced_mass,
    };
}
