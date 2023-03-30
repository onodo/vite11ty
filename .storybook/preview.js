import "../src/scss/style.scss"
const customViewports = {
  Responsive: {
    name: "Responsive",
    styles: {
      width: "100%",
      height: "100%",
    },
  },
  iPhone: {
    name: "iPhone",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: "css",
      printWidth: 120,
      bracketSameLine: true,
      parser: "html",
    },
  },
  viewport: { viewports: customViewports },
}