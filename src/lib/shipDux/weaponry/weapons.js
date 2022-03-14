import { Updux } from "updux";
import u from "updeep";

const reqs = { cost: 0, mass: 0 };

export const weaponTypes = [
    { name: 'beam', type: 'beam', reqs: beam_cost_mass, initial: {
        weaponClass: 1
    }},
    { name: 'submunition pack', type: 'submunition', reqs: { mass:1, cost:3 },
        initial: { arc: 'F' }
    },
    { name: 'point defence system', type: 'pds', reqs: {mass:1,cost:3}, initial: {}},
    { name: 'scattergun', type: 'scattergun', reqs: { mass:1,cost:4 }, initial: {}},
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

dux.setMutation('setWeapon', ({id,...rest}) => state => {
console.log(id,rest,state);
    state = u.map( u.if( (w) => w.id === id,
        weapon => {
            return {
                id,
                ...rest,
                reqs: weaponReqs(rest),
            }
        } ), state );
    console.log(state);
    return state;

}
);

dux.setMutation('removeWeapon', id => state => [
    ...state.filter( (w) => w.id !== id   )
]);

dux.setMutation('addWeapon', type => state => {
    const initial = weaponTypes.find(w => w.type === type ).initial;
    return [
        ...state,
        {
            id: state.length === 0 ? 1 : state[state.length -1]+1,
            type,
            reqs: weaponReqs({type,...initial}),
            ...initial,
        }
    ]
});

function weaponReqs(weapon) {

    const {reqs} = weaponTypes.find( wt => wt.type === weapon.type ) ||{};

    if(!reqs) return {};

    if( typeof reqs === 'function' ) return reqs(weapon);

    return reqs;
}

const isBroadside = arcs => {
    if( arcs.length !== 4 ) return false;

    // that'd be A or F
    return !arcs.some( a => a.length === 1 );
}

function beam_cost_mass({weaponClass, arcs}) {
    console.log({weaponClass,arcs})
    let mass;

    if( weaponClass === 1 ) {
        mass = 1;
    }

    if( weaponClass === 2 ) {
        mass = 2 + (arcs.length > 3 ? 1 : 0);
    }


    if( weaponClass == 3 ) {
        mass = 4;

        if( isBroadside(arcs) ) {
            mass += 2;
        }
        else {
            mass += arcs.length - 1;
        }
    }

    if( weaponClass == 4 ) {
        mass = 8;

        if( isBroadside(arcs) ) {
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
