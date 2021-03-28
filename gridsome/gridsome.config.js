const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const axios = require("axios");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Roland Golla",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        queryLimit: 1000, // Defaults to 100
        singleTypes: ["StartPage"],
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      use: "@gridsome/source-filesystem",
      options: {
        path: "docs/**/*.md",
        typeName: "StartPage",
      },
    },
    {
      use: "@noxify/gridsome-plugin-remote-image",
      options: {
        typeName: "UploadFile",
        sourceField: "url",
        targetField: "imagesDownloaded",
        targetPath: "./src/assets/remoteImages",
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
