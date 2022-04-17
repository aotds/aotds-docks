import { test, expect } from "vitest";
import { render } from "@testing-library/svelte";

import App from "./Header.svelte";

test("reset ship link is present", () => {
  const { queryByText } = render(App);

  expect(queryByText("reset ship")).toBeTruthy();
});
