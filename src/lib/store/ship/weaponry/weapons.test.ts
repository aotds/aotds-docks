import { weaponsDux } from "./weapons";
import Debug from "debug";
const debug = Debug("aotds:weapons");
import u from "@yanick/updeep-remeda";
process.env.UPDEEP_MODE = "dangerously_never_freeze";

test("setWeapon", () => {
  const store = weaponsDux.createStore();

  store.dispatch.addWeapon("beam");
  store.dispatch.addWeapon("submunition");

  expect(store.getState()).toMatchObject([
    {
      specs: {
        type: "beam",
      },
    },
    {
      specs: {
        type: "submunition",
      },
    },
  ]);

  store.dispatch.setWeapon(1, {
    type: "beam",
    weaponClass: 2,
    arcs: ["F", "FP", "FS"],
  });
  debug(store.getState());
  expect(store.getState().find(u.matches({ id: 1 }))).toMatchObject({
    specs: {
      type: "beam",
      weaponClass: 2,
      arcs: ["FS", "F", "FP"],
    },
  });
});
