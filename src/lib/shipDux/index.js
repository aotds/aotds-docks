import { Updux } from "updux";
import u from "updeep";

import propulsion from "./propulsion/index.js";
import identification from "./identification.js";
import { calculateDriveReqs } from "./propulsion/drive.js";
import { ftlReqsReaction } from "./propulsion/ftl.js";
import structure from "./structure/index.js";
import carrier from "./carrier.js";
import weaponry from "./weaponry/index.js";
import { screensReqsReaction } from "./structure/screens.js";

const dux = new Updux({
  subduxes: {
    identification,
    propulsion,
    structure,
    carrier,
    weaponry,
  },
  initial: {
    reqs: { cost: 0, mass: 10, usedMass: 0 },
  },
  actions: {
    setShipReqs: null,
    setUITransform: null,
        resetLayout: null,
  },
});

function resetUITransform(thing) {
    if(typeof thing !== 'object') return thing;

    return u.map((v,k) => k === 'uiTransform' ? '' : resetUITransform(v) , thing )

}

dux.setMutation( 'resetLayout', () => resetUITransform );

dux.setMutation("setShipMass", (mass) => u({ reqs: { mass } }));
dux.setMutation("setShipReqs", (reqs) => u({ reqs }));

dux.setMutation("setUITransform", ({ system, systemId, translate }) => {
  const transform = translate
    ? `translate(${translate[0]}px,${translate[1]}px)`
    : "";

  switch (system) {
    case "firecons":
      return u.updateIn("weaponry.firecons.uiTransform", transform);

    case "weapon":
      return u.updateIn(
        "weaponry.weapons",
        u.map(u.if(({ id }) => id === systemId, u({ uiTransform: transform })))
      );

    case "screens":
      return u.updateIn("structure.screens.uiTransform", transform);

    case "hull":
      return u.updateIn("structure.hull.uiTransform", transform);

    case "internalSystems":
      const path = "structure.uiTransform";
      return u.updateIn(path, transform);

    case "ftl":
      return u.updateIn("propulsion.ftl.uiTransform", transform);

    case "drive":
      return u.updateIn("propulsion.drive.uiTransform", transform);

    default:
      return (state) => state;
  }
});

dux.addReaction(calculateDriveReqs);
dux.addReaction(ftlReqsReaction);
dux.addReaction(screensReqsReaction);

dux.addReaction((store) => (state) => {
  let cost = 0;
  let mass = 0;

  let subsystems = Object.values(state);

  while (subsystems.length > 0) {
    const subsystem = subsystems.shift();
    if (typeof subsystem !== "object") continue;

    if (subsystem.reqs) {
      cost += subsystem.reqs.cost;
      mass += subsystem.reqs.mass;
    }

    subsystems.push(...Object.values(subsystem));
  }

  store.dispatch.setShipReqs({ cost, usedMass: mass });
});

export default dux;
