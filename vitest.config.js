import { extractFromSvelteConfig } from "vitest-svelte-kit";

export default extractFromSvelteConfig().then((config) => ({
    ...config,
    test: {
      globals: true,
      environment: "jsdom",
    },
  }));
