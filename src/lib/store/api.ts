import ship from "./ship";

export type Api = ReturnType<typeof ship.createStore>;

export const createApi = () => {
    const api = ship.createStore();
    console.log(api);
    return api;
};
