import { render } from "@testing-library/svelte";
import HeavyMissile from "./index.svelte";

test("basic", () => {
    const { queryByText } = render(HeavyMissile, {
        props: {
            extended: true,
            multiStage: false,
        },
    });

    expect(queryByText("extended range")).toBeTruthy();
    expect(queryByText("multi-stage")).toBeFalsy();
});
