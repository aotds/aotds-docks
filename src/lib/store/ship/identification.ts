import Updux, { createAction, withPayload } from "updux";
import u from "@yanick/updeep-remeda";
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
const setCarrier = createAction("setCarrier", withPayload<boolean>());

export const identificationDux = new Updux({
  initialState,
  actions: {
    setShipClass,
    updateIdentification,
    setShipReqs,
    setCarrier,
  },
  selectors: {
    getShipMass: (state) => state.reqs.mass,
    isCarrier: ({ isCarrier }) => isCarrier,
  },
});

identificationDux.addMutation(setShipClass, (shipClass) => u({ shipClass }));
identificationDux.addMutation(updateIdentification, (update) => u(update));

identificationDux.addMutation(setCarrier, (isCarrier) => u({ isCarrier }));
identificationDux.addEffect(setCarrier, (api) => (next) => (action) => {
  next(action);
  if (!action.payload) {
    api.dispatch(carrierDux.actions.setNbrCarrierBays(0));
  }
});

identificationDux.addMutation(setShipReqs, (reqs) => u({ reqs }));

export default identificationDux;
