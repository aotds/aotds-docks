import { Updux } from "updux";
import u from "updeep";

import propulsion from "./propulsion/index.js";
import identification from "./identification.js";
import { calculateDriveReqs } from "./propulsion/drive.js";
import { ftlReqsReaction } from "./propulsion/ftl.js";
import structure from "./structure/index.js";
import carrier from "./carrier.js";
import weaponry from "./weaponry/index.js";
import { screensReqsReaction } from "./structure/screens.js";

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
    actions: {},
});

dux.setMutation("setShipMass", (mass) => u({ reqs: { mass } }));

dux.addReaction(calculateDriveReqs);
dux.addReaction(ftlReqsReaction);
dux.addReaction(screensReqsReaction);

export default dux;
