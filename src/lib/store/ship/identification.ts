import Updux, { createAction, withPayload } from "updux";
import u from "@yanick/updeep-remeda";

const initial = {
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

export const dux = new Updux({
    initial,
    actions: {
        setShipClass,
        updateIdentification,
    },
});

dux.addMutation(setShipClass, (shipClass) => u({ shipClass }));
dux.addMutation(updateIdentification, (update) => u(update));

export default dux;
