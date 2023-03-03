import { Updux } from "updux";
import u from "updeep";
import { createSelector } from "reselect";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { reqs, Reqs } from "../reqs.js";

export const ftlTypes = ["none", "standard", "advanced"] as const;
type FtlType = typeof ftlTypes[number];

const initialState = {
    reqs,
    type: "none" as FtlType,
};

const ftl = createSlice({
    name: "ftl",
    initialState,
    reducers: {
        setFtl: (state, { payload }: PayloadAction<FtlType>) => {
            state.type = payload;
        },
        setFtlReqs: (state, action: PayloadAction<Reqs>) => {
            state.reqs = action.payload;
        },
    },
});

export function calcFtlReqs(type: FtlType, shipMass: number): Reqs {
    if (type === "none") return { cost: 0, mass: 0 };

    const mass = Math.ceil(shipMass / 10);

    return {
        mass,
        cost: mass * (type === "advanced" ? 3 : 2),
    };
}

export const { actions, reducer } = ftl;

// needs to be at the top level
export const ftlReqsReaction = (store) =>
    createSelector(
        [(ship) => ship.propulsion.ftl.type, (ship) => ship.reqs.mass],
        (type, shipMass) => store.dispatch.setFtlReqs(calcFtlReqs(type, shipMass))
    );
