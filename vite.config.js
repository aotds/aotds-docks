// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  ssr: {},
  optimizeDeps: {},
};

export default config;
