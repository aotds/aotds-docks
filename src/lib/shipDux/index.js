import { Updux } from "updux";

import engine from "./engine.js";
import identification from "./identification.js";
import reqs from "./reqs.js";

const dux = new Updux({
  subduxes: {
    identification,
    engine,
  },
  initial: {
    reqs: { cost: 0, mass: 10 },
  },
});

export default dux;
