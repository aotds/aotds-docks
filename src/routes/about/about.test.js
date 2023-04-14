import { render, fireEvent, screen, getByText } from "@testing-library/svelte";
import "@testing-library/jest-dom";

import About from "./+page.svelte";

test("we have an about page", () => {
  const { getByText } = render(About);
  expect(getByText("Welcome to the docks!")).toBeInTheDocument();
});
