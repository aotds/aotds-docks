// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import packageJson from "./package.json";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  publicDir: "./static",
  ssr: {},
  optimizeDeps: {},
  define: {
    "import.meta.env.PACKAGE_VERSION": JSON.stringify(packageJson.version),
    "import.meta.env.HOMEPAGE": JSON.stringify(packageJson.homepage),
  },
};

export default config;
