import { Updux } from "updux";
import u from "updeep";

import reqs from "../reqs.js";

const dux = new Updux({
    subduxes: {
        reqs,
    },
    initial: {
        type: "none",
    },
    actions: {
        setStreamlining: null,
    },
});
export default dux;

dux.setMutation("setStreamlining", ({ shipMass, type }) =>
    u({
        type,
        reqs: calcStreamliningReqs({ shipMass, type }),
    })
);

function calcStreamliningReqs({ shipMass, type }) {
    const mass = Math.ceil(
        (shipMass * (type === "none" ? 0 : type === "partial" ? 5 : 10)) / 100
    );

    return { mass, cost: 2 * mass };
}
