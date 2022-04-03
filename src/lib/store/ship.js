import { browser } from "$app/env";
import { readable, get, derived } from "svelte/store";
import { compose, applyMiddleware } from "redux";

import shipDux from "../shipDux/index.js";

let composeEnhancers = compose;

if (browser) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default () => {
  const duxStore = shipDux.createStore(undefined, (mw) =>
    composeEnhancers(applyMiddleware(mw))
  );

  let previous;
  const state = readable(duxStore.getState(), (set) => {
    duxStore.subscribe(() => {
      if (previous === duxStore.getState()) return;
      previous = duxStore.getState();
      set(previous);
    });
  });

  return {
    dispatch: duxStore.dispatch,
    state,
    shipMass: derived( state, state => state.reqs.mass )
  };
};