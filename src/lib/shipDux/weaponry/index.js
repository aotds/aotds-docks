import { Updux } from "updux";
import u from "updeep";

const reqs = { cost: 0, mass: 0 };

const dux = new Updux({
    initial: {
        firecons: {
            stations: 0,
            reqs,
        },
    },
    actions: {
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

export default dux;
