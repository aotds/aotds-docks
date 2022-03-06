const path = require("path");
const preprocess = require("svelte-preprocess");

module.exports = {
 //   core: { builder: "storybook-builder-vite" },
  staticDirs: ["../static", "../pictures"],
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.svelte",
    "../src/**/stories.svelte",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ],
  framework: "@storybook/svelte",
  svelteOptions: {
    preprocess: preprocess(),
  },
     async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.resolve.alias.$lib = path.resolve(__dirname, "../src/lib/");
    config.resolve.alias.$app = path.resolve(__dirname, "../fake/app/");

    // return the customized config
    return config;
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          $app: path.resolve("./fake/app"),
          "\\$lib": path.resolve(__dirname, "../src/lib/"),
          $lib: path.resolve(__dirname, "../src/lib/"),
          "\\$app/env": path.resolve(__dirname, "../fake/app/env.js"),
        },
      },
    };
  },
};
