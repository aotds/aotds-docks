import { Updux } from "updux";
import u from 'updeep';

import propulsion from "./propulsion/index.js";
import identification from "./identification.js";

const dux = new Updux({
  subduxes: {
    identification,
    propulsion
  },
  initial: {
    reqs: { cost: 0, mass: 10, usedMass: 0 },
  },
    actions: {
        setShipMass: null,
    }
});

dux.setMutation( 'setShipMass', mass => u({reqs: {mass}}) );

export default dux;
