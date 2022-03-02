import { Updux } from "updux";
import u from "updeep";

import reqs from "../reqs.js";

const dux = new Updux({
  subduxes: { reqs },
  initial: {
    rating: 1,
    advanced: false,
  },
  actions: {
    setDrive: null,
    setDriveReqs: null,
  },
});

dux.setMutation("setDrive", (changes) => u(changes));
dux.setMutation("setDriveReqs", (reqs) => u({ reqs }));

export function calcDriveReqs(shipMass, rating, advanced = false) {
  const mass = Math.ceil(rating * 0.05 * shipMass);
  const cost = mass * (advanced ? 3 : 2);

  return { mass, cost };
}

export default dux;
