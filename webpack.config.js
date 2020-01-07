module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(@moteef\/(shared|mh-shared)|fast-shallow-equal))/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
