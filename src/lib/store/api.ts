import ship from "./ship";
import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type Api = ReturnType<typeof ship.createStore>;

export const createApi = () => {
  const options: Partial<{ preloadedState: object }> = {};

  const preloadedState = browser && localStorage.getItem("ship");
  if (preloadedState) options.preloadedState = JSON.parse(preloadedState);

  const api = ship.createStore(options);

  const svelteStore = writable();
  if (preloadedState) {
    svelteStore.set(JSON.parse(preloadedState));
  }

  if (browser) {
    api.subscribe(() => {
      const state = api.getState();
      svelteStore.set(state);
      localStorage.setItem("ship", JSON.stringify(state));
    });
  }

  api.svelteStore = svelteStore;

  return api;
};
