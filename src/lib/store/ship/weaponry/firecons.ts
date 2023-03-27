import { reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";

export const fireconsDux = new Updux({
  initialState: {
    stations: 0,
    reqs,
  },
  actions: {
    setFirecons: (stations: number) => stations,
  },
});

fireconsDux.addMutation(fireconsDux.actions.setFirecons, (stations) =>
  u({
    stations,
    reqs: { cost: 4 * stations, mass: stations },
  })
);
