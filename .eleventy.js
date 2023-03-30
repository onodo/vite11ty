module.exports = function (eleventyConfig) {
  // Return your Object options:
  eleventyConfig.ignores.add("src/stories/**")
  eleventyConfig.setWatchJavaScriptDependencies(false)
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  })
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "njk/includes",
      layouts: "njk/layouts",
      output: "dist",
    },
  }
}
