import uids from "./uids";

test("basic", () => {
  const { genUid } = uids();

  expect(genUid()).toEqual("1");
  expect(genUid("potato")).toEqual("potato-2");
});
