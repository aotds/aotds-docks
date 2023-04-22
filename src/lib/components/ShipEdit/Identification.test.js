import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { tick } from "svelte";

import Identification from "./Identification.svelte";

test("carrier", () => {
  const { getByText } = render(Identification);
  expect(getByText("carrier")).toBeInTheDocument();
});
