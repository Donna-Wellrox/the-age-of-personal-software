function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

module.exports = {
  layout: "post.njk",
  tags: ["posts"],
  permalink: (data) => `/posts/${data.page.fileSlug}/`,
  eleventyComputed: {
    title: (data) => data.title || titleFromSlug(data.page.fileSlug)
  }
};
