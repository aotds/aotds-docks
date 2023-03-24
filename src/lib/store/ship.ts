import { createSelector } from "@reduxjs/toolkit";
import Updux from "updux";
import * as R from "remeda";

import identification from "./ship/identification";
import ftl, { calcFtlReqs } from "./ship/propulsion/ftl";
import drive from "./ship/propulsion/drive";
import { calcDriveReqs } from "$lib/shipDux/engine";
import { carrierDux } from "./ship/carrier";
import { streamliningDux as streamlining } from "./ship/structure/streamlining";
import { calcStreamliningReqs } from "./ship/structure/rules";

const shipDux = new Updux({
  subduxes: {
    identification,
    structure: new Updux({
      initialState: {},
      subduxes: {
        streamlining,
      },
    }),
    propulsion: new Updux({
      initialState: {},
      subduxes: {
        ftl,
        drive,
      },
    }),
    carrier: carrierDux,
  },
});

shipDux.addReaction((api) =>
  createSelector(
    api.selectors.getFtlType,
    api.selectors.getShipMass,
    (type, mass) => api.dispatch.setFtlReqs(calcFtlReqs(type, mass))
  )
);

shipDux.addReaction((api) => (state) => {
  let cost = 0;
  let mass = 0;

  let subsystems = R.values(R.omit(state, ["identification"]));

  while (subsystems.length > 0) {
    const subsystem = subsystems.shift();
    if (typeof subsystem !== "object") continue;

    if (subsystem.reqs) {
      cost += subsystem.reqs.cost;
      mass += subsystem.reqs.mass;
    }

    subsystems.push(...Object.values(subsystem));
  }

  api.dispatch.setShipReqs({ cost, usedMass: mass });
});

shipDux.addReaction((api) =>
  createSelector(
    api.selectors.getShipMass,
    (state) => state.propulsion.drive.rating,
    (state) => state.propulsion.drive.advanced,
    (mass, rating, advanced) =>
      api.dispatch.setDriveReqs(calcDriveReqs(mass, rating, advanced))
  )
);

shipDux.addReaction((api) =>
  createSelector(
    //    (state) => state,
    api.selectors.getShipMass,
    api.selectors.getStreamlining,
    (mass, type) => {
      console.log("AH!", mass, type);
      api.dispatch.setStreamliningReqs(calcStreamliningReqs(type, mass));
    }
  )
);

export default shipDux;
