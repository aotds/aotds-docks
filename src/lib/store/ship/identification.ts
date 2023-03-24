import Updux, { createAction, withPayload } from "updux";
import u from "@yanick/updeep-remeda";
import * as R from "remeda";
import { carrierDux } from "./carrier";

const initialState = {
    shipType: "",
    shipClass: "",
    isCarrier: false,
    reqs: {
        mass: 10,
        cost: 0,
        usedMass: 0,
    },
};

const setShipClass = createAction("setShipClass", withPayload<string>());
const updateIdentification = createAction("updateIdentification");
const setShipReqs = createAction("setShipReqs", withPayload());

export const dux = new Updux({
    initialState,
    actions: {
        setShipClass,
        updateIdentification,
        setShipReqs,
    },
    selectors: {
        getShipMass: (state) => state.reqs.mass,
        isCarrier: ({ isCarrier }) => isCarrier,
    },
});

dux.addMutation(setShipClass, (shipClass) => u({ shipClass }));
dux.addMutation(updateIdentification, (update) => u(update));
dux.addMutation(setShipReqs, (reqs) => u({ reqs }));

dux.addMutation(carrierDux.actions.setNbrCarrierBays, (nbrBays) =>
    u({
        isCarrier: nbrBays > 0,
    })
);

export default dux;
