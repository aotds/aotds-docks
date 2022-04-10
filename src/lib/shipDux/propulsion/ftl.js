import { Updux } from "updux";
import u from "updeep";
import { createSelector } from "reselect";

import reqs from "../reqs.js";

export const ftlTypes = ["none", "standard", "advanced"];

const dux = new Updux({
  subduxes: { reqs },
  initial: {
    type: "none",
    uiTransform: "",
  },
  actions: {
    setFtl: null,
    setFtlReqs: null,
  },
});
export default dux;

dux.setMutation("setFtl", (type) => u({ type }));
dux.setMutation("setFtlReqs", (reqs) => u({ reqs }));

export function calcFtlReqs(type, shipMass) {
  if (type === "none") return { cost: 0, mass: 0 };

  const mass = Math.ceil(shipMass / 10);

  return {
    mass,
    cost: mass * (type === "advanced" ? 3 : 2),
  };
}

// needs to be at the top level
export const ftlReqsReaction = (store) =>
  createSelector(
    [(ship) => ship.propulsion.ftl.type, (ship) => ship.reqs.mass],
    (type, shipMass) => store.dispatch.setFtlReqs(calcFtlReqs(type, shipMass))
  );
