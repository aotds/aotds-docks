import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";
import { reqs, type Reqs } from "$lib/shipDux/reqs";

type Squadron = {
    type: string;
    reqs: Reqs;
};

const initialState = {
    nbrBays: 0,
    squadrons: [] as Squadron[],
    reqs,
};

export const squadronTypes = [
    { type: "standard", cost: 3 },
    { type: "fast", cost: 4 },
    { type: "heavy", cost: 5 },
    { type: "interceptor", cost: 3 },
    { type: "attack", cost: 4 },
    { type: "long range", cost: 4 },
    { type: "torpedo", cost: 6 },
];

const setNbrCarrierBays = createPayloadAction<number>("setNbrCarrierBays");
const setSquadronType = createPayloadAction(
    "setSquadronType",
    (id: number, type: string) => ({ id, type })
);

export const carrierDux = new Updux({
    initialState,
    actions: { setNbrCarrierBays, setSquadronType },
});

function calcBaysReqs(bays) {
    return {
        mass: 9 * bays,
        cost: 18 * bays,
    };
}

const adjustSquadrons = (bays: number) => (squadrons) => {
    if (squadrons.length === bays) return squadrons;

    if (squadrons.length > bays) {
        return squadrons.slice(0, bays);
    }

    return [
        ...squadrons,
        ...Array.from({ length: bays - squadrons.length })
            .fill({
                type: squadronTypes[0].type,
                reqs: {
                    cost: 6 * squadronTypes[0].cost,
                    mass: 6,
                },
            })
            .map((s, i) => ({ ...s, id: squadrons.length + i + 1 })),
    ];
};

carrierDux.addMutation(setNbrCarrierBays, (nbrBays) =>
    u({
        nbrBays,
        reqs: calcBaysReqs(nbrBays),
        squadrons: adjustSquadrons(nbrBays),
    })
);

carrierDux.addMutation(setSquadronType, ({ id, type }) => {
    return u({
        squadrons: u.map(
            u.if(u.matches({ id }), (state) => {
                return u(state, {
                    type,
                    reqs: squadronReqs(type),
                });
            })
        ),
    });
});

function squadronReqs(type: string) {
    return {
        mass: 6,
        cost: 6 * squadronTypes.find((s) => s.type === type)?.cost,
    };
}

/*
export const { actions, reducer } = createSlice({
    name: "carrier",
    initialStateState,
    reducers: {
        setCarrierBays: (state, action: PayloadAction<number>) => {
            state.bays = action.payload;
            state.reqs = calcBaysReqs(action.payload);
            state.squadrons = adjustSquadrons(action.payload)(state.squadrons);
        },
        setSquadronType: (
            state,
            action: PayloadAction<{ type: string; id: number }>
        ) => {
            state.squadrons[action.payload.id - 1] = {
                type: action.payload.type,
                reqs: squadronReqs(action.payload.type),
            };
        },
    },
});




*/
