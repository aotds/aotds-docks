import { Updux } from "updux";
import u from "updeep";
import { createSelector } from "reselect";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { reqs, Reqs } from "../reqs.js";

const ftl = createSlice({
    name: "ftl",
    initialState: {},
    reducers: {
        setFtl: (state, { payload }: PayloadAction<FtlType>) => {
            state.type = payload;
        },
        setFtlReqs: (state, action: PayloadAction<Reqs>) => {
            state.reqs = action.payload;
        },
    },
});

export const { actions, reducer } = ftl;
