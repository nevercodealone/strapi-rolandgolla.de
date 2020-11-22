const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const axios = require('axios')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Roland Golla',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'StartPage'
      }
    }
  ],
  css: {
      loaderOptions: {
          postcss: {
              plugins: postcssPlugins,
          },
      },
  },
}
