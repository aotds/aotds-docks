import { render } from "@testing-library/svelte";
import PrintShip from "./index.svelte";

describe("cargo", () => {
    test("with", () => {
        const { getByText } = render(PrintShip, {
            props: {
                structure: { cargo: { space: 10 } },
            },
        });

        expect(getByText("cargo")).toBeTruthy();
    });
    test("without", () => {
        const { queryByText } = render(PrintShip, {
            props: {
                structure: { cargo: { space: 0 } },
            },
        });

        expect(queryByText("cargo")).toBeFalsy();
    });
});
