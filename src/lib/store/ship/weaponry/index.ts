import Updux, { createPayloadAction } from "updux";
import { adfcDux } from "./adfc";
import { fireconsDux } from "./firecons";
import { weaponsDux } from "./weapons";
import type { Reqs } from "$lib/shipDux/reqs";
import u from "@yanick/updeep-remeda";
import * as R from "remeda";

if (typeof process !== "undefined") {
    process.env.UPDEEP_MODE = "dangerously_never_freeze";
}

type MissileMagazine = {
    id: number;
    maxAmmo: number;
    extended: boolean;
};

const setMissileMagazine = createPayloadAction(
    "setMissileMagazine",
    (id, maxAmmo, extended = undefined) => ({ id, maxAmmo, extended })
);

const moveMissileMagazine = createPayloadAction(
    "moveMissileMagazine",
    (from, to) => ({
        from,
        to,
    })
);

const removeMissileMagazine = createPayloadAction<number>(
    "removeMissileMagazine"
);

const magazinesDux = new Updux({
    actions: { setMissileMagazine, removeMissileMagazine, moveMissileMagazine },
    initialState: [] as MissileMagazine[],
});

magazinesDux.addMutation(weaponsDux.actions.addWeapon, (payload) => (state) => {
    if (payload !== "sml") return state;

    state.push({
        id: state.length + 1,
        extended: false,
        maxAmmo: 1,
        reqs: magazineReqs({ extended: false, maxAmmo: 1 }),
    });
});

magazinesDux.addMutation(setMissileMagazine, (payload) =>
    u.map(
        u.if(u.matches({ id: payload.id }), (state) => {
            state = u(state, payload);
            return u(state, { reqs: magazineReqs(state) });
        })
    )
);
magazinesDux.addMutation(moveMissileMagazine, ({ from, to }) =>
    u.map(u.if(u.matches({ id: from }), { id: to }))
);

magazinesDux.addMutation(removeMissileMagazine, (id) =>
    u.reject(u.matches({ id }))
);

magazinesDux.addReaction((api) => (store) => {
    store
        .map(R.prop("id"))
        .filter(({ id }, i) => id !== i + 1)
        .forEach((id, i) => api.dispatch.moveMissileMagazine(id, i + 1));
});

function magazineReqs(magazine: MissileMagazine): Reqs {
    let mass = magazine.maxAmmo * (magazine.extended ? 3 : 2);
    return { mass, cost: 3 * mass };
}

export const weaponryDux = new Updux({
    initialState: {},
    subduxes: {
        adfc: adfcDux,
        firecons: fireconsDux,
        weapons: weaponsDux,
        missileMagazines: magazinesDux,
    },
});

weaponryDux.addMutation(moveMissileMagazine, ({ from, to }) =>
    u({
        weapons: u.map(
            u.if(u.matches({ specs: { missileMagazineId: from } }), {
                specs: { missileMagazineId: to },
            })
        ),
    })
);

weaponryDux.addReaction((api) => (state) => {
    const smls = state.weapons.filter(u.matches({ specs: { type: "sml" } }));

    const usedMagazines = smls.map(
        ({ specs: { missileMagazineId } }) => missileMagazineId
    );

    const unusedMags = state.missileMagazines
        .map(R.prop("id"))
        .filter((id) => !usedMagazines.includes(id));

    unusedMags.forEach((id) => api.dispatch.setMissileMagazine(id, 0));

    if (smls.length >= state.missileMagazines.length) return;

    api.dispatch.removeMissileMagazine(unusedMags[0]);
});
