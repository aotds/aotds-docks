import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter(),
        files: {
            lib: './src',
            assets: './public',
        },
        vite: {
    build: {
        rollupOptions: {
//            external: ['updux','@yanick/updeep']
        }
    }
	}},
};
