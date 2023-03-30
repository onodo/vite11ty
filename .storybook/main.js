const { resolve } = require("path")
const CopyPlugin = require("copy-webpack-plugin")
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: true,
        controls: false,
        docs: true,
        viewport: true,
        toolbars: true,
      },
    },
    "@whitespace/storybook-addon-html",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "framework": "@storybook/html",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    ;(config.resolve.modules = [...(config.resolve.modules || []), resolve("../")]),
      config.module.rules.push(
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false,
                importLoaders: 2,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  config: resolve(__dirname, "postcss.config.js"),
                },
              },
            },
            "sass-loader",
          ],

          include: resolve(__dirname, "../"),
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset/resource",
        }
      )
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: resolve(__dirname, "../src/images"),
            to: "./images",
          },
        ],
      })
    )
    return config
  },
}