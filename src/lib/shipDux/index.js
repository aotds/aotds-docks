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
    actions: {
        setShipReqs: null,
    },
});

dux.setMutation("setShipMass", (mass) => u({ reqs: { mass } }));
dux.setMutation('setShipReqs', reqs => u({reqs}));

dux.addReaction(calculateDriveReqs);
dux.addReaction(ftlReqsReaction);
dux.addReaction(screensReqsReaction);

dux.addReaction( (store) => (state) => {
    let cost = 0;
    let mass = 0;

    let subsystems = Object.values(state);

    while(subsystems.length>0) {
        const subsystem = subsystems.shift();
        if( typeof subsystem !== 'object' ) continue;

        if( subsystem.reqs ) {
            cost += subsystem.reqs.cost;
            mass += subsystem.reqs.mass;
        }

        subsystems.push( ...Object.values(subsystem));
    }

    store.dispatch.setShipReqs({cost,usedMass: mass});

});


export default dux;
