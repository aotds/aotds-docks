import { Updux } from "updux";
import u from "updeep";

import carrier from './carrier.js';

const dux = new Updux({
  actions: {
    setShipType: null,
    setShipClass: null,
        setCarrierBays: carrier.actions.setCarrierBays,
  },
  initial: {
    shipType: "",
    shipClass: "",
    isCarrier: false,
    mass: 10,
  },
});

dux.setMutation("setShipType", (shipType) => u({ shipType }));
dux.setMutation("setShipClass", (shipClass) => u({ shipClass }));
dux.setMutation('setCarrierBays', (bays) => u({
    isCarrier: bays > 0,
}))

export default dux;
