import { Updux } from "updux";
import u from "updeep";

import weapons from './weapons.js';

const reqs = { cost: 0, mass: 0 };

const dux = new Updux({
    subduxes: { weapons },
    initial: {
        firecons: {
            stations: 0,
            reqs,
        },
        adfc: { rating: 0, reqs },
    },
    actions: {
        setADFC: null,
        setFirecons: null,
    },
});

dux.setMutation("setFirecons", (stations) =>
    u({
        firecons: {
            stations,
            reqs: {
                cost: 4 * stations,
                mass: stations,
            },
        },
    })
);
dux.setMutation("setADFC", (rating) =>
    u({
        adfc: {
            rating,
            reqs: {
                cost: 8 * rating,
                mass: 2 * rating,
            },
        },
    })
);

export default dux;
