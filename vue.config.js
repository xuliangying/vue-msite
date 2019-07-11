module.exports = {
    devServer: {
      proxy: {
        '/bins': {
          target: 'https://api.myjson.com/',
          changeOrigin: true,
        }
      }
    }
  }