import { test, expect } from "vitest";
import ship from "./ship";

test("kicking the tires", () => {
  const store = ship.createStore();
  store.dispatch.setFtlType("standard");

  expect(store.getState().propulsion.ftl.reqs.mass).toEqual(1);
  expect(store.getState().identification.reqs.usedMass).toEqual(1);

  store.dispatch.setDrive({ rating: 3, advanced: true });

  expect(store.getState().propulsion.drive.reqs).toEqual({ mass: 2, cost: 6 });

  store.dispatch.setNbrCarrierBays(1);
  expect(store.getState().carrier.nbrBays).toEqual(1);
  store.dispatch.setNbrCarrierBays(2);
  expect(store.getState().carrier.nbrBays).toEqual(2);

  store.dispatch.setSquadronType(2, "fast");

  expect(store.getState().carrier.squadrons[1]).toHaveProperty("type", "fast");

  expect(store.getState.isCarrier()).toBe(true);

  store.dispatch.setStreamlining("partial");

  expect(store.getState.getStreamlining()).toBe("partial");
  expect(store.selectors.getStreamlining(store.getState())).toBe("partial");

  store.dispatch.setCargo(3);
  expect(store.getState().structure.cargo).toEqual({
    space: 3,
    reqs: {
      mass: 3,
      cost: 0,
    },
  });

  store.dispatch.setNbrArmorLayers(1);
  store.dispatch.setArmorRating(1, 3);

  expect(store.getState().structure.armor).toEqual({
    layers: [3],
    reqs: {
      cost: 6,
      mass: 6,
    },
  });

  store.dispatch.addWeapon("beam");
  expect(store.getState().weaponry.weapons[0]).toEqual({
    id: 1,
    reqs: { cost: 3, mass: 1 },
    specs: { arcs: ["F"], type: "beam", weaponClass: 1 },
  });
});
