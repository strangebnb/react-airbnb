var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		main: "./src/App.js"
	},
	output: {
		path: "./public",
		filename: "/bundle/bundle.js"
	},
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
        loaders:  ["style", "css", "sass"],
        exclude: /node_modules/
      }
		]
	}
}
