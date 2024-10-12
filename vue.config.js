const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'wss://silver-invention-j94p9j94vw6h5q7g-8080.app.github.dev/',
    },
  },
})
