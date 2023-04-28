import { test, expect } from "vitest";
import { render } from "@testing-library/svelte";

import About from "./About.svelte";

test("version is present", () => {
  import.meta.env.PACKAGE_VERSION = '1.2.3';
  const { queryByText } = render(About);

  expect(queryByText(/version 1.2.3/)).toBeTruthy();
});
