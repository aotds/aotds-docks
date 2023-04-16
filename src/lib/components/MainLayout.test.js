import { test, expect } from "vitest";
import { render } from "@testing-library/svelte";

import MainLayout from "./MainLayout.svelte";

test("we have an editor link", () => {
  const { queryByText } = render(MainLayout);

  expect(queryByText("Editor")).toBeTruthy();
});
