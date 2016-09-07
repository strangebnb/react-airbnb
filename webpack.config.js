var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		main: "./src/App.js",
		becomeAHost: "./src/become-a-host/BecomeAHost.js",
		searchResults: "./src/search-results/Gmap.js",
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
      },
			{ test: /\.svg$/,
				loader: 'babel!react-svg',
				include: path.join(__dirname, 'src') },
		]
	}
}
