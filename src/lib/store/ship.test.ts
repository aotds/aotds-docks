import { test, expect } from "vitest";
import ship from "./ship";

test("misc", () => {
    const store = ship.createStore();
    store.dispatch.setFtlType("standard");

    expect(store.getState().propulsion.ftl.reqs.mass).toEqual(1);
    expect(store.getState().identification.reqs.usedMass).toEqual(1);

    store.dispatch.setDrive({ rating: 3, advanced: true });

    expect(store.getState().propulsion.drive.reqs).toEqual({ mass: 2, cost: 6 });
});
