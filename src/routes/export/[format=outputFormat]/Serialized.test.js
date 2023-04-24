import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom";

import Serialized from "./Serialized.svelte";

test("basic", () => {
    const { getByText } = render(Serialized, {
        props: {
            data: "hello world",
            format: "json",
        },
    });
    expect(getByText("hello world")).toBeInTheDocument();
});
