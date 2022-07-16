module.exports = {
  syntax: "postcss-scss",
  inline: true,
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('postcss-strip-inline-comments'),
    require('autoprefixer'),
    require('postcss-minify')
  ]
}