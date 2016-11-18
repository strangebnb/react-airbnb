var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");

var reactDomLibPath = path.join(__dirname, "./node_modules/react-dom/lib");
var alias = {};
["EventPluginHub", "EventConstants", "EventPluginUtils", "EventPropagators", 
"SyntheticUIEvent", "CSSPropertyOperations", "ViewportMetrics"].forEach(function(filename){
	alias["react/lib/"+filename] = path.join(__dirname, "./node_modules/react-dom/lib", filename)
});


module.exports = {
    entry: {
        main: "./src/App.js",
        becomeAHost: ["./src/become-a-host/BecomeAHost.js"],
        profile: ["./src/profile/Profile.js"],
        rooms: ["./src/rooms/Rooms.js"],
        searchResults: ["./src/search-results/SearchResults.js"],
    },
    output: {
        path: path.join(__dirname, "public/bundle/"),
        filename: "[name].js"
    },
        resolve: {
		alias: alias 
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
