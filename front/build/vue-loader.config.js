module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ["> 5%", "last 2 versions", "ie >= 8"]
    })
  ]
}
