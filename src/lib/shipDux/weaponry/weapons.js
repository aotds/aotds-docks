import { Updux } from "updux";
import u from "updeep";

const reqs = { cost: 0, mass: 0 };

export const weaponTypes = [
    { name: 'beam', type: 'beam', reqs: beam_cost_mass },
    { name: 'submunition pack', type: 'submunition', reqs: { mass:1, cost:3 }},
    { name: 'point defence system', type: 'pds', reqs: {mass:1,cost:3}},
    { name: 'scattergun', type: 'scattergun', reqs: { mass:1,cost:4 }},
    { name: 'needle weapon', type: 'needle', reqs: { mass: 2, cost: 6 },
        initial: { arc: 'F' }},
];

const dux = new Updux({
    initial: [],
    actions: {
        addWeapon: null,
        removeWeapon: null,
        setWeapon: null,
    },
});

dux.setMutation('setWeapon', ({id,...rest}) =>
    u.map( u.if( (w) => w.id === id, { ...rest }))
);

dux.setMutation('removeWeapon', id => state => [
    ...state.filter( (w) => w.id !== id   )
]);

dux.setMutation('addWeapon', type => state => {
    return [
        ...state,
        {
            id: state.length === 0 ? 1 : state[state.length -1]+1,
            type,
            reqs: weaponReqs({type}),
            ...weaponTypes.find(w => w.type === type ).initial,
        }
    ]
});

function weaponReqs(weapon) {

    const {reqs} = weaponTypes.find( wt => wt.type === weapon.type ) ||{};

    if(!reqs) return {};

    if( typeof reqs === 'function' ) return reqs(weapon);

    return reqs;
}

function beam_cost_mass({weapon_class, arcs}) {
    let mass;
    if( weapon_class === 1 ) {
        mass = 1;
    }

    if( weapon_class == 2 ) {
        mass = 2 + (arcs.length > 3 ? 1 : 0);
    }


    if( weapon_class == 3 ) {
        mass = 4;

        if( is_broadside(arcs) ) {
            mass += 2;
        }
        else {
            mass += arcs.length - 1;
        }
    }

    if( weapon_class == 4 ) {
        mass = 8;

        if( is_broadside(arcs) ) {
            mass += 4;
        }
        else {
            mass += 2*(arcs.length - 1);
        }
    }

    return {
        mass, cost: 3 * mass
    }


}


export default dux;
