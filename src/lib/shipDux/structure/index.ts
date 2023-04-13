import { combineReducers } from "redux";
import * as R from "remeda";

import * as screens from "./screen.js";

export const reducer = combineReducers(
  R.mapValues(
    {
      screens,
    },
    R.prop("reducer")
  )
);
