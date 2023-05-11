import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svx"],
    preprocess: [mdsvex(), preprocess()],
    kit: {
        adapter: adapter({
            fallback: "index.html",
        }),
    },
};

export default config;
