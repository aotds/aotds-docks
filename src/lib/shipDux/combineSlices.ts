import { combineReducers } from "redux";
import { createAction, Slice } from "@reduxjs/toolkit";
import * as R from "remeda";

type MergedActions<S extends { actions: any }> = S["actions"];

export default function combineSlices<
  S extends Record<string, Slice> = Record<string, Slice>
>(slices: S) {
  const reducer = combineReducers(R.mapValues(slices, R.prop("reducer")));
  const actions: MergedActions<S[keyof S]> = Object.values(slices)
    .map(R.prop("actions"))
    .map(Object.values)
    .flat() as any;

  return { reducer, actions };
}

const x = combineSlices({
  a: {
    reducer: (state) => state,
    actions: {
      a: createAction("a"),
    },
  },
});
