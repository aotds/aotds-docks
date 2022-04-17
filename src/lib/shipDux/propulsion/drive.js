import { Updux } from "updux";
import u from "updeep";
import { createSelector } from "reselect";

import reqs from "../reqs.js";

const dux = new Updux({
  subduxes: { reqs },
  initial: {
    rating: 0,
    advanced: false,
  },
  actions: {
    setDrive: null,
    setDriveReqs: null,
  },
});

dux.setMutation("setDrive", (changes) => u(changes));
dux.setMutation("setDriveReqs", (reqs) => u({ reqs }));

// needs to be at the top level
export const calculateDriveReqs = (store) =>
  createSelector(
    [
      (ship) => ship.reqs.mass,
      (ship) => ship.propulsion.drive.rating,
      (ship) => ship.propulsion.drive.advanced,
    ],
    (ship_mass, rating, advanced) =>
      store.dispatch.setDriveReqs(calcDriveReqs(ship_mass, rating, advanced))
  );

export function calcDriveReqs(shipMass, rating, advanced = false) {
  const mass = Math.ceil(rating * 0.05 * shipMass);
  const cost = mass * (advanced ? 3 : 2);

  return { mass, cost };
}

export default dux;
