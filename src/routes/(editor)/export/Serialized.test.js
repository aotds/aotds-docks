import { render, waitFor } from "@testing-library/svelte";
import "@testing-library/jest-dom";

import Serialized from "./Serialized.svelte";

test("basic", () => {
    const { getByText } = render(Serialized, {
        props: {
            data: { greeting: "hello world" },
        },
    });
    waitFor(() => expect(getByText("hello world")).toBeInTheDocument());
});
