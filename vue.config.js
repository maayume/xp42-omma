const { defineConfig } = require('@vue/cli-service')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/xp42-omma/' : '/',
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'index.html',
      filename: 'index.html'
    }
  }
}
