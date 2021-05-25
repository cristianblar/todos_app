const purgecss = require("@fullhuman/postcss-purgecss");
const purgeHtml = require("purgecss-from-html");
const purgeJs = require("purgecss-from-js");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      content: ["./*.html", "./*.js"],
      options: {
        extractors: [
          {
            extractor: purgeJs,
            extensions: ["js"],
          },
          {
            extractor: purgeHtml,
            extensions: ["html"],
          },
        ],
      },
      safelist: {
        standard: [/^[wh]-\d+\/\d+$/],
      },
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
