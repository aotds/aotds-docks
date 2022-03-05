import { Updux } from "updux";
import u from "updeep";

import reqs from "../reqs.js";

const dux = new Updux({
    subduxes: {
        reqs,
    },
    initial: {
        layers: [],
    },
    actions: {
        setArmorLayers: null,
        setArmorRating: null,
    },
});
export default dux;

dux.setMutation('setArmorRating', ({layer, rating}) => state => {
    let layers = [ ...state.layers ].map( (v,k) => k === layer-1 ? rating : v );

    return { layers, reqs: calcArmorReqs(layers) }
} );

dux.setMutation( 'setArmorLayers', nbrLayers => state => {

    let layers = [...state.layers];

    if( nbrLayers < state.layers.length )
        layers = [ ...state.layers ].slice(0,nbrLayers);

    while( layers.length < nbrLayers ) {
        layers.push(0);
    }

    return {
        layers,
        reqs: calcArmorReqs(layers),
    }
});

function calcArmorReqs(layers) {
    const mass = 2* layers.reduce( (a,b) => a+ b,0 );
    const cost = 2* layers.map( (v,k) => v * (k+1) ).reduce( (a,b) => a+ b,0 );

    return {
        mass, cost
    }
}
