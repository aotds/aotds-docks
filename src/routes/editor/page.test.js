import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import { tick } from "svelte";

import Page from "./+page.svelte";
import { createApi } from "$lib/store/api.ts";

test("we have a page", () => {
  const { getByText } = render(Page);
  expect(getByText("propulsion")).toBeInTheDocument();
});

test("we can pass a store", async () => {
  const context = new Map();
  const api = createApi();
  context.set("api", api);

  api.dispatch.updateIdentification({ shipClass: "Bonobo" });

  const { getByLabelText } = render(Page, { context });

  const classInput = getByLabelText("ship class");
  await fireEvent.input(classInput, { target: { value: "Tarzan" } });
  expect(classInput.value).toEqual("Tarzan");

  expect(api.getState().identification.shipClass).toBe("Tarzan");
});
