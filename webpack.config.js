var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		main: "./src/App.js",
		becomeAHost: "./src/BecomeAHost/BecomeAHost.js",
	},
	output: {
		path: path.join(__dirname, "public/bundle/"),
		filename: "[name].js"
	},
	 plugins: [
		new CommonsChunkPlugin({
			filename: "commons.js",
			name: "commons"
		})
	],
	devtools: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel"
			},
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
		]
	}
}