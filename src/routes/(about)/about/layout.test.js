import { render, fireEvent, screen, getByText } from "@testing-library/svelte";
import "@testing-library/jest-dom";

import Layout from "./+layout.svelte";

test("we have a see-also page", () => {
  const { getByText } = render(Layout);
  expect(getByText("Other resources")).toBeInTheDocument();
});
