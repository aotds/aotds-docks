import { reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import type { Streamlining } from "./rules";
import u from "@yanick/updeep-remeda";

const initialState = {
  type: "none" as Streamlining,
  reqs,
};

const setStreamlining = createPayloadAction<Streamlining>("setStreamlining");
const setStreamliningReqs = createPayloadAction("setStreamliningReqs");

export const streamliningDux = new Updux({
  initialState,
  actions: { setStreamlining, setStreamliningReqs },
  selectors: {
    getStreamlining: (state) => {
      return state?.type;
    },
  },
});

streamliningDux.addMutation(setStreamlining, (type) => u({ type }));

streamliningDux.addMutation(setStreamliningReqs, (reqs) => u({ reqs }));
