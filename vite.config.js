// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    publicDir: "./static",
    ssr: {},
    optimizeDeps: {},
};

export default config;
