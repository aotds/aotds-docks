import type { Reqs } from "$lib/shipDux/reqs";

export const arcs = ["FS", "F", "FP", "AP", "A", "AS"] as const;

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

export type Weapon = Beam | Submunition | PDS | Scattergun | Needle;

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
    name: "needle weapon",
    type: "needle",
    reqs: { mass: 2, cost: 6 },
    initial: { arc: "F", type: "needle" },
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

const isBroadside = (arcs: Arc[]) => {
  if (arcs.length !== 4) return false;

  // that'd be A or F
  return !arcs.some((a) => a.length === 1);
};

function beamReqs({ weaponClass, arcs }: Beam) {
  console.log(weaponClass, arcs);
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
