import type { Reqs } from "$lib/shipDux/reqs";

export const arcs = ["FS", "F", "FP", "AP", "A", "AS"] as const;

export const broadsideArcs = ["FP", "AP", "AS", "FS"];

export type Arc = (typeof arcs)[number];

export type WeaponType = "beam";

type Beam = {
    type: "beam";
    weaponClass: 1 | 2 | 3 | 4;
    arcs: Arc[];
};

type Submunition = {
    type: "submunition";
    arc: Arc;
};

type PDS = {
    type: "pds";
};

type Scattergun = { type: "scattergun" };

type Needle = { type: "needle"; arc: Arc };

type HeavyMissile = {
    type: "heavyMissile";
    arcs: Arc[];
    extended: boolean;
    multiStage: boolean;
};

type SalvoMissileRack = {
    type: "salvoMissileRack";
    arcs: Arc[];
    extended: boolean;
};

type Graser = {
    type: "graser";
    weaponClass: 1 | 2 | 3;
    arcs: Arc[];
};

type Torpedo = {
    type: "torpedo";
    weaponClass: 1 | 2 | 3 | 4;
    arcs: Arc[];
};

export type Weapon =
    | Beam
    | Submunition
    | PDS
    | Scattergun
    | Needle
    | Graser
    | Torpedo
    | HeavyMissile;

export const weaponTypes = [
    {
        type: "beam",
        name: "beam",
        reqs: beamReqs,
        initial: {
            type: "beam",
            weaponClass: 1,
            arcs,
        } as any as Beam,
    },
    {
        type: "graser",
        name: "graser",
        reqs: graserReqs,
        initial: {
            type: "graser",
            weaponClass: 1,
            arcs: ["F"],
        } as any as Graser,
        options: [
            { weaponClass: 1, nbrArcs: [1, 3, 6, "broadside"] },
            {
                weaponClass: 2,
                nbrArcs: [1, 2, 3, 4, 5, 6, "broadside"],
            },
            {
                weaponClass: 3,
                nbrArcs: [1, 2, 3, 4, 5, 6, "broadside"],
            },
        ],
    },
    {
        type: "torpedo",
        name: "torpedo",
        reqs: torpedoReqs,
        initial: {
            type: "torpedo",
            weaponClass: 1,
            arcs: ["F"],
        } as any as Torpedo,
        options: {
            maxClass: 4,
            nbrArcs: [1, 2, 3, "broadside"],
        },
    },
    {
        type: "submunition",
        name: "submunition pack",
        reqs: { mass: 1, cost: 3 },
        initial: { type: "submunition", arc: "F" } as Submunition,
    },
    {
        name: "point defence system",
        type: "pds",
        reqs: { mass: 1, cost: 3 },
        initial: {
            type: "pds",
        },
    },
    {
        name: "scattergun",
        type: "scattergun",
        reqs: { mass: 1, cost: 4 },
        initial: { type: "scattergun" },
    },
    {
        name: "needle beam",
        type: "needle",
        reqs: { mass: 2, cost: 6 },
        initial: { arc: "F", type: "needle" },
    },
    {
        name: "heavy missile",
        type: "heavyMissile",
        reqs: missileReqs,
        initial: {
            arcs: ["FP", "F", "FS"],
            extended: false,
            multiStage: false,
            type: "heavyMissile",
        },
    },
    {
        name: "salvo missile rack",
        type: "smr",
        reqs: smrReqs,
        initial: {
            arcs: ["FP", "F", "FS"],
            extended: false,
            type: "smr",
        },
    },
];

export function weaponReqs(weapon): Reqs {
    const { reqs } = weaponTypes.find((wt) => wt.type === weapon.type) || {};

    if (!reqs)
        return {
            cost: 0,
            mass: 0,
        };

    if (typeof reqs === "function") return reqs(weapon);

    return reqs;
}

export const isBroadside = (arcs: Arc[]) => {
    if (arcs.length !== 4) return false;

    // that'd be A or F
    return !arcs.some((a) => a.length === 1);
};

function beamReqs({ weaponClass, arcs }: Beam) {
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

function graserReqs({ weaponClass, arcs }: Graser) {
    let mass: number;

    if (weaponClass === 1) {
        if (arcs.length === 1) {
            mass = 2;
        } else if (arcs.length === 3) {
            mass = 3;
        } else {
            mass = 4;
        }
    } else if (weaponClass === 2) {
        mass = 9;
        if (isBroadside(arcs)) {
            mass += 6;
        } else {
            mass += 3 * (arcs.length - 1);
        }
    } else if (weaponClass === 3) {
        mass = 24;
        if (isBroadside(arcs)) {
            mass += 12;
        } else {
            mass += 6 * (arcs.length - 1);
        }
    }

    return {
        mass,
        cost: 4 * mass,
    };
}

function missileReqs({ extended, multiStage }: HeavyMissile): Reqs {
    let mass = 2;
    let cost = 6;
    if (extended) {
        mass += 1;
        cost += 3;
    }
    if (multiStage) {
        mass += 2;
        cost *= 2;
    }

    return { cost, mass };
}

function smrReqs({ extended }: SalvoMissileRack): Reqs {
    let mass = 4;
    if (extended) mass += 1;
    return {
        mass,
        cost: 3 * mass,
    };
}

function torpedoReqs({ weaponClass, arcs }: Torpedo): Reqs {
    let mass: number = 4;

    if (isBroadside(arcs)) {
        mass += 2;
    } else {
        mass += arcs.length - 1;
    }

    mass = mass * Math.pow(2, weaponClass - 1);

    return {
        mass,
        cost: 3 * mass,
    };
}
