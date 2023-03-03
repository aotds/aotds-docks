import { combineReducers } from "redux";
import * as R from "remeda";

import * as hull from "./hull.js";
import * as screens from "./screens.js";
import * as cargo from "./cargo.js";
import * as armor from "./armor.js";
import * as streamlining from "./streamlining.js";

export const reducer = combineReducers(
    R.mapValues(
        {
            hull,
            screens,
            cargo,
            armor,
            streamlining,
        },
        R.prop("reducer")
    )
);
