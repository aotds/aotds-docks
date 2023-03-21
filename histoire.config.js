import { defineConfig } from "histoire";
import { HstSvelte } from "@histoire/plugin-svelte";
import { HstScreenshot } from "@histoire/plugin-screenshot";

export default defineConfig({
    plugins: [
        HstSvelte(),
        HstScreenshot({
            // Options here
        }),
    ],
    //    setupFile: "./src/histoire.setup.js",
});
