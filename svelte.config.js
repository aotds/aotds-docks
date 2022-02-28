import adapter from '@sveltejs/adapter-static';
import analyze from 'rollup-plugin-analyzer';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
        adapter: adapter(),
        vite: {
    build: {
        rollupOptions: {
            plugins: [ analyze() ],
//            external: ['updux','@yanick/updeep']
        }
    }
	}},
};
