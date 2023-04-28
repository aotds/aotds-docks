import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { weaponTypes } from "$lib/store/ship/weaponry/rules";

import printComp from "./printComp.js";

describe("all weapons have a print component", () => {
    test.each(weaponTypes)("$type", ({ type, initial }) => {
        expect(printComp).toHaveProperty(type);
        render(printComp[type], { props: initial });
    });
});
