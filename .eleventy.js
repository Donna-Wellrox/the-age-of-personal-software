module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ assets: "assets" });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse();
  });

  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/the-age-of-personal-software/";

  return {
    dir: {
      includes: "_includes"
    },
    pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
