import { render, fireEvent, screen, getByText } from "@testing-library/svelte";
import "@testing-library/jest-dom";

import About from "./+page.svelte";

test("we have an about page", () => {
  const { getByText } = render(About);
  expect(getByText("Welcome to the docks!")).toBeInTheDocument();
});

test("link to gitea is there", () => {
  const { getByText } = render(About);
  expect(getByText("my Gitea instance")).toBeInTheDocument();
});
