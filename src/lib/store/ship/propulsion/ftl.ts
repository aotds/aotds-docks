import { reqs, type Reqs } from "$lib/shipDux/reqs";
import Updux, { createAction, withPayload } from "updux";
import u from "@yanick/updeep-remeda";
import * as R from "remeda";

export const ftlTypes = ["none", "standard", "advanced"] as const;

type FtlType = typeof ftlTypes[number];

export const initialState = {
    reqs,
    type: "none" as FtlType,
};

const setFtlType = createAction("setFtlType", withPayload<FtlType>());
const setFtlReqs = createAction("setFtlReqs", withPayload<Reqs>());

const dux = new Updux({
    initialState,
    actions: { setFtlType, setFtlReqs },
    selectors: {
        getFtlType: R.prop<any, any>("type"),
    },
});

dux.addMutation(setFtlType, (type) => u({ type }));
dux.addMutation(setFtlReqs, (reqs) => u({ reqs }));

export default dux;

export function calcFtlReqs(type: FtlType, shipMass: number): Reqs {
    if (type === "none") return { cost: 0, mass: 0 };

    const mass = Math.ceil(shipMass / 10);

    return {
        mass,
        cost: mass * (type === "advanced" ? 3 : 2),
    };
}
