import { browser } from "$app/env";
import { readable } from "svelte/store";
import { compose, applyMiddleware } from "redux";

import { calc_ship_req } from "../dux/utils";

let composeEnhancers = compose;

if (browser) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

import shipDux from "../dux";

export default () => {
  let saved;

  if (browser) saved = window.localStorage.getItem("aotds-shipyard");

  if (saved) {
    saved = JSON.parse(saved);
  } else {
    saved = undefined;
  }

  const duxStore = shipDux.createStore(saved, (mw) =>
    composeEnhancers(applyMiddleware(mw))
  );

  duxStore.dispatch(
    duxStore.actions.set_ship_reqs(calc_ship_req(duxStore.getState()))
  );

  Object.entries(duxStore.actions).forEach(([type, action]) => {
    duxStore.dispatch[type] = (payload) => duxStore.dispatch(action(payload));
  });

  let previous = undefined;
  duxStore.subscribe(() => {
    let current = duxStore.getState();
    if (previous === current) return;
    previous = current;

    if (browser)
      window.localStorage.setItem("aotds-shipyard", JSON.stringify(current));
  });

  const state = readable(duxStore.getState(), (set) =>
    duxStore.subscribe(() => {
      set(duxStore.getState());
    })
  );

  const dispatch_action = (action, payload) =>
    duxStore.dispatch[action](payload);

  return {
    subscribe: state.subscribe,
    dispatch: duxStore.dispatch,
    actions: duxStore.actions,
    selectors: duxStore.selectors,
    dispatch_action,
  };
};
