import { Updux } from "updux";
import u from 'updeep';

import engine from "./engine.js";
import identification from "./identification.js";
import reqs from "./reqs.js";

const dux = new Updux({
  subduxes: {
    identification,
    engine,
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
