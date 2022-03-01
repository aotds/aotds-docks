import {Updux} from "updux";
import u from 'updeep';

import reqs from './reqs.js';

const dux = new Updux({
    subduxes: { reqs },
    initial: {
        rating: 1,
        advanced: false,
    },
    actions: {
        setEngine: null,
        setEngineReqs: null,
    }
});

dux.addMutation('setEngine', changes => u(changes) );
dux.addMutation('setEngineReqs', reqs => u({reqs}) );

export function calcDriveReqs(shipMass,rating,advanced=false) {
    const mass = Math.ceil(rating * 0.05 * shipMass);
    const cost = mass * ( advanced ? 3 : 2 );

    return { mass, cost };
}

export default dux;
