import adapter from "@sveltejs/adapter-static";
import analyze from "rollup-plugin-analyzer";

/** @type {import('@sveltejs/kit').Config} */
export default {
    kit: {
        //        outDir: './docs',
        // hydrate the <div id="svelte"> element in src/app.html
        paths: {
            base: "/aotds-docks",
        },
        adapter: adapter({
            fallback: "index.html",
        }),
        vite: {
            build: {
                rollupOptions: {
                    plugins: [analyze()],
                    //            external: ['updux','@yanick/updeep']
                },
            },
        },
    },
};
