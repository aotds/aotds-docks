import { Updux } from "updux";
import u from 'updeep';
import { createSelector } from 'reselect';

import reqs from '../reqs.js';

const dux = new Updux({
  subduxes: {
        reqs
  },
  initial: {
        standard: 0, advanced: 0,
  },
  actions: {
        setScreens: null,
        setScreensReqs: null,
  }
});
export default dux;

dux.setMutation('setScreens', payload => u(payload));
dux.setMutation('setScreensReqs', reqs => u({reqs}));

export const screenReqsReaction = store => createSelector(
    (ship) => ship.reqs.mass,
    (ship) => ship.structure.screens.standard,
    (ship) => ship.structure.screens.advanced,
    (...args) => store.dispatch.setScreensReqs(calcScreensReqs(...args)),
);

function calcScreensReqs(mass,standard,advanced) {

    const standard_mass = standard * Math.max(3, Math.ceil(0.05 * mass));
    const advanced_mass = advanced * Math.max(4, Math.ceil(0.075 * mass));

    return {
          mass: standard_mass + advanced_mass,
          cost: 3 * standard_mass + 4 * advanced_mass,
    }
}
