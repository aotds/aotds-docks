import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import R from "remeda";

import * as propulsion from "./propulsion";
import * as structure from "./structure";
import * as weaponry from "./weaponry/index.js";
import * as carrier from "./carrier";

const shipSlice = createSlice({
  name: "ship",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      () => true,
      combineReducers({
        propulsion: propulsion.reducer,
        structure: structure.reducer,
        weaponry: weaponry.reducer,
        carrier: carrier.reducer,
      })
    );
  },
});

export function createStore() {
  return configureStore({
    reducer: shipSlice.reducer,
  });
}

export const actions = shipSlice.actions;

/**
import * as propulsion from "./propulsion/index.js";
import * as identification from "./identification.js";
import { calculateDriveReqs } from "./propulsion/drive.js";
import { ftlReqsReaction } from "./propulsion/ftl.js";
import * as structure from "./structure/index.js";
import * as carrier from "./carrier.js";
import * as weaponry from "./weaponry/index.js";
import * as shipReqs from "./shipReqs.js";
import { screensReqsReaction } from "./structure/screens.js";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    propulsion: propulsion.initialState,
    identification: identification.initialState,
    structure: structure.initialState,
    carrier: carrier.initialState,
    weaponry: weaponry.initialState,
    shipReqs: shipReqs.initialState,
}

const shipSlice = createSlice({
    name: "ship",
    ),
});




const dux = new Updux({
    subduxes: {
        identification,
        propulsion,
        structure,
        carrier,
        weaponry,
    },
    initial: {
        reqs: { cost: 0, mass: 10, usedMass: 0 },
    },
    actions: {
        setShipReqs: null,
        setUITransform: null,
        resetLayout: null,
        resetShip: null,
    },
});

function resetUITransform(thing) {
    if (typeof thing !== "object") return thing;

    return u.map(
        (v, k) => (k === "uiTransform" ? "" : resetUITransform(v)),
        thing
    );
}

dux.setMutation("resetShip", () => () => dux.initial);

dux.setMutation("resetLayout", () => resetUITransform);

dux.setMutation("setUITransform", ({ system, systemId, translate }) => {
    const transform = translate
        ? `translate(${translate[0]}px,${translate[1]}px)`
        : "";

    switch (system) {
        case "firecons":
            return u.updateIn("weaponry.firecons.uiTransform", transform);

        case "weapon":
            return u.updateIn(
                "weaponry.weapons",
                u.map(u.if(({ id }) => id === systemId, u({ uiTransform: transform })))
            );

        case "screens":
            return u.updateIn("structure.screens.uiTransform", transform);

        case "hull":
            return u.updateIn("structure.hull.uiTransform", transform);

        case "internalSystems":
            const path = "structure.uiTransform";
            return u.updateIn(path, transform);

        case "ftl":
            return u.updateIn("propulsion.ftl.uiTransform", transform);

        case "drive":
            return u.updateIn("propulsion.drive.uiTransform", transform);

        default:
            return (state) => state;
    }
});

dux.addReaction(calculateDriveReqs);
dux.addReaction(ftlReqsReaction);
dux.addReaction(screensReqsReaction);

dux.addReaction((store) => (state) => {
    let cost = 0;
    let mass = 0;

    let subsystems = Object.values(state);

    while (subsystems.length > 0) {
        const subsystem = subsystems.shift();
        if (typeof subsystem !== "object") continue;

        if (subsystem.reqs) {
            cost += subsystem.reqs.cost;
            mass += subsystem.reqs.mass;
        }

        subsystems.push(...Object.values(subsystem));
    }

    store.dispatch.setShipReqs({ cost, usedMass: mass });
});

export default dux;
*/
