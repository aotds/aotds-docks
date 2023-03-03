import { createStore } from "./index.js";

test("basic, initial store", () => {
  const store = createStore();

  const state = store.getState();

  expect(state).toHaveProperty("propulsion.drive.reqs.mass", 0);
  expect(state).toHaveProperty("structure.cargo.space", 0);
});
