import { render } from "@testing-library/svelte";
import SMR from "./index.svelte";

test("basic", () => {
    const { queryByText } = render(SMR, {
        props: {
            extended: true,
        },
    });

    expect(queryByText("extended range")).toBeTruthy();
});
