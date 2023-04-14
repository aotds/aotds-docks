import { render, fireEvent, screen, getByText } from "@testing-library/svelte";
import "@testing-library/jest-dom";

import Page from "./+page.svelte";

test("we have a page", () => {
  const { getByText } = render(Page);
  expect(getByText("propulsion")).toBeInTheDocument();
});
