import ship from "./ship";
import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type Api = ReturnType<typeof ship.createStore>;

export const createApi = () => {
  const state = browser
    ? JSON.parse(localStorage.getItem("ship") || "null")
    : undefined;

  const api = ship.createStore({
    preloadedState: state,
  });

  api.dispatch.restore(state);

  const svelteStore = writable(state);

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
