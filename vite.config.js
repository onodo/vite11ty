import { resolve } from "path"
const { eleventyPlugin } = require("vite-plugin-eleventy")
const tailwindcss = require("tailwindcss")
import { defineConfig } from "vite"
export default defineConfig({
  base: "/",
  root: "src",
  publicDir: resolve(__dirname, "public"),
  plugins: [eleventyPlugin()],
  css: {
    postcss: {
      plugins: [require("postcss-import"), tailwindcss("./tailwind.config.js"), require("autoprefixer")],
    },
  },
  // server: {
  //   open: "/",
  // },
  build: {
    outDir: resolve(__dirname, "dist"),
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/js", "app.js"),
      },
    },
    manifest: true,
  },
})