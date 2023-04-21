import { writable, get } from "svelte/store";

export default () => {
  const store = writable(0);

  const genUid = (prefix = "") => {
    store.update((x) => x + 1);
    return prefix.length
      ? [prefix, "" + get(store)].join("-")
      : "" + get(store);
  };

  return {
    store,
    genUid,
  };
};
