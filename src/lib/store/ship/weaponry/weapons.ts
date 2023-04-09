import type { Reqs } from "$lib/shipDux/reqs";
import Updux from "updux";
import u from "@yanick/updeep-remeda";
import * as R from "remeda";
import { weaponReqs, weaponTypes, type WeaponType, type Weapon } from "./rules";

type IndexedWeapon = { id: number; reqs: Reqs; specs: Weapon };

export const weaponsDux = new Updux({
  initialState: [] as IndexedWeapon[],
  actions: {
    removeWeapon: (id: string) => id,
    setWeapon: (id: string, specs: Weapon) => ({ id, specs }),
    addWeapon: (type: WeaponType) => type,
  },
});

weaponsDux.addMutation(weaponsDux.actions.removeWeapon, (id) =>
  R.reject(u.matches({ id }))
);

// TODO not needed anymore
const mergeArcs = (newArcs) => (original) => {
  if (original === undefined) return undefined;

  let merged = u.filter(original, (a) => newArcs.includes(a));

  let toAdd = newArcs.filter((a) => !merged.includes(a));
  if (toAdd.length) return [...merged, ...toAdd];

  return merged;
};

weaponsDux.addMutation(weaponsDux.actions.setWeapon, ({ id, specs }) =>
  u.map(
    u.if(u.matches({ id }), {
      specs: {
        ...specs,
        arcs: mergeArcs((specs as any).arcs),
      },
      reqs: weaponReqs(specs),
    })
  )
);

weaponsDux.addMutation(weaponsDux.actions.addWeapon, (type) => (state) => {
  const specs = weaponTypes.find(u.matches({ type }))?.initial ?? {};
  const id = 1 + Math.max(0, ...state.map(R.prop("id")));
  state.push({
    id,
    specs,
    reqs: weaponReqs(specs),
  });
});
