import type { Reqs } from "$lib/shipDux/reqs";
import Updux from "updux";
import u from "@yanick/updeep-remeda";
import * as R from "remeda";
import { weaponReqs } from "./rules";
import { nanoid } from "@reduxjs/toolkit";

type Weapon = {
  weaponClass: string;
  arcs?: unknown[];
  type: string;
};

type IndexedWeapon = { id: string; reqs: Reqs; specs: Weapon };

export const weaponsDux = new Updux({
  initialState: [] as IndexedWeapon[],
  actions: {
    removeWeapon: (id: string) => id,
    setWeapon: (id: string, specs: Weapon) => ({ id, specs }),
    addWeapon: (specs: Weapon) => specs,
  },
});

weaponsDux.addMutation(weaponsDux.actions.removeWeapon, (id) =>
  R.reject(u.matches({ id }))
);

weaponsDux.addMutation(
  weaponsDux.actions.setWeapon,
  ({ id, specs }) =>
    (state) => {
      const weapon = state.find(u.matches({ id }));
      if (!weapon) return;
      weapon.specs = specs;
      weapon.reqs = weaponReqs(specs);
    }
);

weaponsDux.addMutation(weaponsDux.actions.addWeapon, (specs) => (state) => {
  state.push({
    id: nanoid(),
    specs,
    reqs: weaponReqs(specs),
  });
});
