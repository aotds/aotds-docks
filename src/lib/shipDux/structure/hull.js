import { Updux } from "updux";
import u from 'updeep';

import reqs from '../reqs.js';

const dux = new Updux({
  subduxes: {
        reqs
  },
  initial: {
     rating: 0, min: 0, max: 0,
  },
  actions: {
    setShipMass: null,
    setHull: null,
  }
});
export default dux;

dux.setMutation( 'setHull', rating => u({rating,
    reqs: {
mass: rating, cost: 2 * rating
    }}) );

dux.setMutation( 'setShipMass', mass => state => {
    let {rating} = state;
    if(rating > mass) rating = mass;
    const min = Math.ceil(mass/10);
    if(rating < min) rating = min;
    return u({max: mass, min, rating}, state);
})
