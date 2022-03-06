

const is_broadside = arcs => {
    if( arcs.length !== 4 ) return false;

    // that'd be A or F
    return !arcs.some( a => a.length === 1 );
}

