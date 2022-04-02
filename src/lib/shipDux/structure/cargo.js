import { Updux } from "updux";
import u from 'updeep';
import { createSelector } from 'reselect';

import reqs from '../reqs.js';

const dux = new Updux({
  subduxes: {
        reqs
  },
  initial: {
    space: 0,
  },
  actions: {
        setCargo: null,
  }
});
export default dux;

dux.setMutation('setCargo', space => u({
    space,
    reqs: { mass: space }
}));

