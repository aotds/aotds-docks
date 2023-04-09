import Updux, { createAction, withPayload } from "updux";
import u from "@yanick/updeep-remeda";
import * as R from "remeda";
import { carrierDux } from "./carrier";

const initialState = {
  shipType: "",
  shipClass: "",
  isCarrier: false,
  reqs: {
    mass: 10,
    cost: 0,
    usedMass: 0,
  },
};

const setShipClass = createAction("setShipClass", withPayload<string>());
const updateIdentification = createAction("updateIdentification");
const setShipReqs = createAction("setShipReqs", withPayload());

export const identificationDux = new Updux({
  initialState,
  actions: {
    setShipClass,
    updateIdentification,
    setShipReqs,
  },
  selectors: {
    getShipMass: (state) => state.reqs.mass,
    isCarrier: ({ isCarrier }) => isCarrier,
  },
});

identificationDux.addMutation(setShipClass, (shipClass) => u({ shipClass }));
identificationDux.addMutation(updateIdentification, (update) => u(update));
identificationDux.addMutation(setShipReqs, (reqs) => u({ reqs }));

identificationDux.addMutation(carrierDux.actions.setNbrCarrierBays, (nbrBays) =>
  u({
    isCarrier: nbrBays > 0,
  })
);

export default identificationDux;
