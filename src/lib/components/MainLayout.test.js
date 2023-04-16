import { readable } from "svelte/store";
import { test, expect, vi } from "vitest";
import { render } from "@testing-library/svelte";

vi.mock("$app/stores", () => ({
  page: readable({ url: { pathname: "/" } }),
}));

import MainLayout from "./MainLayout.svelte";

test("we have an editor link", () => {
  const { queryByText } = render(MainLayout);

  expect(queryByText("Editor")).toBeTruthy();
});
