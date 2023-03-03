import { browser, dev } from "$app/environment";
import { readable, get, derived } from "svelte/store";
import { compose, applyMiddleware } from "redux";

import shipDux from "../shipDux/index";
import { initial } from "lodash";

let composeEnhancers = compose;

if (dev && browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default (initialState = undefined) => {
    if (browser) {
        const i = localStorage.getItem("ship");

        if (i) initialState = JSON.parse(localStorage.getItem("ship"));
    }

    const duxStore = shipDux.createStore(initialState, (mw) =>
        composeEnhancers(applyMiddleware(mw))
    );

    let previous;
    const state = readable(duxStore.getState(), (set) => {
        duxStore.subscribe(() => {
            if (previous === duxStore.getState()) return;
            previous = duxStore.getState();
            set(previous);
            if (browser) localStorage.setItem("ship", JSON.stringify(previous));
        });
    });

    return {
        dispatch: duxStore.dispatch,
        state,
        shipMass: derived(state, (state) => state.reqs.mass),
    };
};
