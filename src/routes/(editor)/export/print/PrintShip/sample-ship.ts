import { weaponTypes } from "$lib/store/ship/weaponry/rules";

const weapons = weaponTypes.map(({ initial: specs }, id) => ({
    id: id + 1,
    specs,
}));

export default {
    schemaVersion: "1",
    identification: {
        shipType: "Scout",
        shipClass: "Bonobo",
        isCarrier: false,
        reqs: {
            mass: 10,
            cost: 10,
            usedMass: 4,
        },
    },
    structure: {
        streamlining: {
            type: "none",
            reqs: {
                cost: 0,
                mass: 0,
            },
        },
        cargo: {
            space: 20,
            reqs: {
                cost: 0,
                mass: 0,
            },
        },
        hull: {
            rating: 10,
            min: 1,
            max: 10,
            reqs: {
                cost: 0,
                mass: 0,
            },
        },
        screens: {
            standard: 2,
            advanced: 1,
            reqs: {
                cost: 0,
                mass: 0,
            },
        },
        armor: {
            reqs: {
                cost: 0,
                mass: 0,
            },
            layers: [3, 2],
        },
        carrier: {
            nbrBays: 0,
            squadrons: [],
            reqs: {
                cost: 0,
                mass: 0,
            },
        },
    },
    propulsion: {
        ftl: {
            reqs: {
                cost: 2,
                mass: 1,
            },
            type: "standard",
        },
        drive: {
            rating: 1,
            advanced: false,
            reqs: {
                cost: 2,
                mass: 1,
            },
        },
    },
    carrier: {
        nbrBays: 0,
        squadrons: [],
        reqs: {
            cost: 0,
            mass: 0,
        },
    },
    weaponry: {
        adfc: {
            rating: 0,
            reqs: {
                cost: 0,
                mass: 0,
            },
        },
        firecons: {
            stations: 0,
            reqs: {
                cost: 0,
                mass: 0,
            },
        },
        weapons,
    },
};
