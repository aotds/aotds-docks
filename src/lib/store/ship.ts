import { createSelector } from "@reduxjs/toolkit";
import Updux from "updux";
import * as R from "remeda";
import memoize from "memoize-one";

import identification from "./ship/identification";
import ftl, { calcFtlReqs } from "./ship/propulsion/ftl";
import drive from "./ship/propulsion/drive";
import { calcDriveReqs } from "$lib/shipDux/engine";
import { carrierDux } from "./ship/carrier";
import { streamliningDux as streamlining } from "./ship/structure/streamlining";
import { calcStreamliningReqs } from "./ship/structure/rules";
import { cargoDux } from "./ship/structure/cargo";
import { hullDux } from "./ship/structure/hull";
import { screensDux, screensReqsReaction } from "./ship/structure/screens";
import { armorDux } from "./ship/structure/armor";
import { fireconsDux } from "./ship/weaponry/firecons";
import { adfcDux } from "./ship/weaponry/adfc";
import { weaponsDux } from "./ship/weaponry/weapons";

if (typeof process !== "undefined") {
  process.env.UPDEEP_MODE = "dangerously_never_freeze";
}

const structure = new Updux({
  initialState: {},
  subduxes: {
    streamlining,
    cargo: cargoDux,
    hull: hullDux,
    screens: screensDux,
    armor: armorDux,
  },
});

const propulsion = new Updux({
  initialState: {},
  subduxes: {
    ftl,
    drive,
  },
});

const weaponry = new Updux({
  initialState: {},
  subduxes: {
    adfc: adfcDux,
    firecons: fireconsDux,
    weapons: weaponsDux,
  },
});

const shipDux = new Updux({
  subduxes: {
    identification,
    structure,
    propulsion,
    carrier: carrierDux,
    weaponry,
  },
});

shipDux.addReaction((api) => {
  return createSelector(
    api.selectors.getFtlType,
    api.selectors.getShipMass,
    (type, mass) => api.dispatch.setFtlReqs(calcFtlReqs(type, mass))
  );
});

shipDux.addReaction((api) => {
  const setShipReqs = memoize((cost, usedMass) =>
    api.dispatch.setShipReqs({ cost, usedMass })
  );

  return (state) => {
    let cost = 0;
    let mass = 0;

    let subsystems = R.values(R.omit(state, ["identification"]));

    while (subsystems.length > 0) {
      const subsystem = subsystems.shift();
      if (typeof subsystem !== "object") continue;

      if (subsystem.reqs) {
        cost += subsystem.reqs.cost ?? 0;
        mass += subsystem.reqs.mass ?? 0;
      }

      subsystems.push(...Object.values(subsystem));
    }

    if (Number.isNaN(cost)) {
      console.log(state.weaponry.weapons);
      throw new Error();
    }

    setShipReqs(cost, mass);
  };
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
      api.dispatch.setStreamliningReqs(calcStreamliningReqs(type, mass));
    }
  )
);

shipDux.addReaction(screensReqsReaction);

export default shipDux;
