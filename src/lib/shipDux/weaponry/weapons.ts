import { Updux } from "updux";
import u from "updeep";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const weaponTypes = [
    {
        name: "beam",
        type: "beam",
        reqs: beamReqs,
        initial: {
            weaponClass: 1,
        },
    },
    {
        name: "submunition pack",
        type: "submunition",
        reqs: { mass: 1, cost: 3 },
        initial: { arc: "F" },
    },
    {
        name: "point defence system",
        type: "pds",
        reqs: { mass: 1, cost: 3 },
        initial: {},
    },
    {
        name: "scattergun",
        type: "scattergun",
        reqs: { mass: 1, cost: 4 },
        initial: {},
    },
    {
        name: "needle weapon",
        type: "needle",
        reqs: { mass: 2, cost: 6 },
        initial: { arc: "F" },
    },
];

const weaponsSlice = createSlice({
    name: "weapons",
    initialState: [] as {
        id: number;
        weaponClass: string;
        arcs?: unknown[];
        type: string;
    }[],
    reducers: {
        removeWeapon: (state, action: PayloadAction<number>) => {
            return state.filter(({ id }) => id !== action.payload);
        },
        setWeapon: (state, action: PayloadAction<{ id: number }>) => {
            return state.map((weapon) => {
                if (weapon.id !== action.payload.id) return weapon;
                return {
                    ...action.payload,
                    reqs: weaponReqs(action.payload),
                };
            }) as any;
        },
        addWeapon: (state, action: PayloadAction<{ type: string }>) => {
            const initial = weaponTypes.find(
                (w) => w.type === action.payload.type
            ).initial;
            state.push({
                id: state.length + 1,
                type: action.payload.type,
                reqs: weaponReqs({ type: action.payload.type, ...initial }),
                ...initial,
            } as any);
        },
    },
});

export const { actions, reducer } = weaponsSlice;

function weaponReqs(weapon) {
    const { reqs } = weaponTypes.find((wt) => wt.type === weapon.type) || {};

    if (!reqs) return {};

    if (typeof reqs === "function") return reqs(weapon);

    return reqs;
}

const isBroadside = (arcs) => {
    if (arcs.length !== 4) return false;

    // that'd be A or F
    return !arcs.some((a) => a.length === 1);
};

function beamReqs({ weaponClass, arcs }) {
    let mass;

    if (weaponClass === 1) {
        mass = 1;
    }

    if (weaponClass === 2) {
        mass = 2 + (arcs.length > 3 ? 1 : 0);
    }

    if (weaponClass == 3) {
        mass = 4;

        if (isBroadside(arcs)) {
            mass += 2;
        } else {
            mass += arcs.length - 1;
        }
    }

    if (weaponClass == 4) {
        mass = 8;

        if (isBroadside(arcs)) {
            mass += 4;
        } else {
            mass += 2 * (arcs.length - 1);
        }
    }

    return {
        mass,
        cost: 3 * mass,
    };
}
