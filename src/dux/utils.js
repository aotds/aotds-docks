import flow from 'lodash/fp/flow.js';
import sumBy from 'lodash/fp/sumBy.js';
import pick from 'lodash/fp/pick.js';
import filter from 'lodash/fp/filter.js';
import flattenDeep from 'lodash/fp/flattenDeep.js';
import has from 'lodash/fp/has.js';

const expand_cost_mass = (obj={}) => ([
    pick(['cost','mass'],obj),
    ...Object.values(obj || {}).filter( val => typeof val === 'object' ).map(
        val => expand_cost_mass(val)
    )
]);

export function calc_ship_req(ship) {

    console.log(ship);
    let { general, ...rest } = ship;

    //if(!general) general = {};

    const items = flow(
        expand_cost_mass,
        flattenDeep,
        filter(has('cost'))
    )({
        ...rest,
         cost: general.mass, mass: 0
    })

    return {
        mass: sumBy('mass',items),
        cost: sumBy('cost',items),
    }
}

// to get around 3.00001 ceiling up to 4
export const ceil = number => Math.ceil( Math.round(10*number)/10 );
