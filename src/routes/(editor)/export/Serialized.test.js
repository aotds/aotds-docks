import { fireEvent, render, waitFor } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { tick } from "svelte";

import Serialized from "./Serialized.svelte";

test("basic", () => {
    const { getByText } = render(Serialized, {
        props: {
            data: { greeting: "hello world" },
        },
    });
    waitFor(() => expect(getByText("hello world")).toBeInTheDocument());
});

test("clipboard", async () => {
    const { getByText } = render(Serialized, {
        props: {
            data: { a: 1 },
        },
    });

    await tick();
    userEvent.setup();

    const write = vi.spyOn(navigator.clipboard, "writeText");

    await fireEvent.click(getByText("clipboard"));

    expect(navigator.clipboard.writeText).not.toHaveBeenCalledWith({ a: 1 });
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(`{\n  "a": 1\n}`);
});
