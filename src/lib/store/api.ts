import ship from "./ship";
import { browser } from "$app/environment";

export type Api = ReturnType<typeof ship.createStore>;

export const createApi = () => {
  const state = browser
    ? JSON.parse(localStorage.getItem("ship") || "null")
    : undefined;

  const api = ship.createStore({
    preloadedState: state,
  });

  api.dispatch.restore(state);

  if (browser) {
    api.subscribe(() => {
      console.log("saving...", api.getState());
      localStorage.setItem("ship", JSON.stringify(api.getState()));
    });
  }

  return api;
};
