import { test, expect } from "vitest";
import ship from "./ship";

test("ftlReqs reaction", () => {
    const store = ship.createStore();
    store.dispatch.setFtlType("standard");

    expect(store.getState().propulsion.ftl.reqs.mass).toEqual(1);
    expect(store.getState().identification.reqs.usedMass).toEqual(1);
});
