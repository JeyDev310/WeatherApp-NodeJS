module.exports = {
  devServer: {
    'port': 8000
  },
  css: {
    sourceMap: false
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }  
}
