const createConfig = require("config/createConfig")

module.exports = createConfig(__dirname, '/login',{
  proxy: {
    
    "/api": {
      target: "https://picsum.photos/",
      secure: false,
      "changeOrigin": true,
      pathRewrite: {"^/api" : ""},
    }
  }
} );

