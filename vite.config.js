// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import packageJson from "./package.json";
import getVersion from "git-repo-version";
import git from "git-describe";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    //  publicDir: "./static",
    ssr: {},
    optimizeDeps: {},
    define: {
        "import.meta.env.PACKAGE_VERSION": JSON.stringify(
            git.gitDescribeSync().semverString
        ),
        "import.meta.env.HOMEPAGE": JSON.stringify(packageJson.homepage),
        "import.meta.env.BUGS": JSON.stringify(packageJson.bugs.url),
    },
};

export default config;
