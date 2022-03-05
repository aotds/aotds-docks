import { Updux } from "updux";
import u from "updeep";
import _ from 'lodash';

import reqs from "./reqs.js";

const dux = new Updux({
  subduxes: { reqs },
  initial: {
    bays: 0,
    squadrons: [],
  },
    actions: {
        setCarrierBays: null,
        setSquadronType: null,
    }
});

dux.setMutation( 'setCarrierBays', bays => u({bays, reqs:
    calcBaysReqs(bays),
    squadrons: adjustSquadrons(bays),
}) );

dux.setMutation('setSquadronType', ({type, id}) => state => {

    return u.updateIn(['squadrons', id-1], {
        type,
        reqs: squadronReqs(type)
    }, state )

} );

export const squadronTypes= [
  { type: "standard", cost: 3 },
  { type: "fast", cost: 4 },
  { type: "heavy", cost: 5 },
  { type: "interceptor", cost: 3 },
  { type: "attack", cost: 4 },
  { type: "long range", cost: 4 },
  { type: "torpedo", cost: 6 },
];

function squadronReqs(type) {
    return { mass: 6, cost: 6 * squadronTypes.find( s => s.type === type )?.cost }
}


const adjustSquadrons = bays => squadrons => {
    if( squadrons.length > bays ) {
        squadrons = squadrons.slice(0,bays);
    }

    if( squadrons.length < bays ) {
            squadrons = [ ...squadrons, ..._.times(
                bays - squadrons.length, () => ({
                    type: squadronTypes[0].type,
                reqs: {
                    cost: 6 * squadronTypes[0].cost,
                    mass: 6,
                },
                })
            )];
    }

    return squadrons;

}

function calcBaysReqs(bays) {
    return {
        mass: 9 * bays,
        cost: 18 * bays,
    }
}

export default dux;
