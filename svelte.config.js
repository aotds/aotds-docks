import adapter from "@sveltejs/adapter-static";
import analyze from "rollup-plugin-analyzer";

const dev = process.env.NODE_ENV === 'development';


/** @type {import('@sveltejs/kit').Config} */
export default {
    kit: {
        adapter: adapter({ fallback: 'index.html' }),
        paths: { base: dev? '' : "/aotds-docks" },
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
