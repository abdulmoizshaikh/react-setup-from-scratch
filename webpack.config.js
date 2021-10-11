const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * Define entry point for webpack
   * First, we need to tell webpack where to start bundling the javascript files, this we can do by specifying entry property. Learn more about the entry field.
   * Here we are using path this is native NodeJs module, it helps us in the concatenation of file paths.
   */
  entry: path.join(__dirname, "src", "index.js"),

  /**
   * Define output path for the bundled file
   * Here we tell webpack to create the final bundled file in dist folder in the root of the project. Learn more about the output field.
   */
  output: {
    path: path.resolve(__dirname, "dist"),
  },

  /**
   * Add the bundled js file to the HTML file
   * Once the bundled javascript file is created we need to tell webpack to inject it as a script tag to the HTML file. To do that we first need to install a webpack plugin that will help us do it.
   * Now we are going to use this plugin.
   * This will take the /public/index.html and inject script tag to it. And move that HTML file to the dist folder. Learn more about this plugin.
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],

  /**
   * Configure webpack to use babel
   * We now need to tell webpack to transpile javascript files using babel before bundling them. To do that we need to define some rules for the module bundling.
   * Here we tell webpack to use babel-loader to transpile files that end with .js. Learn more about the rules field.
   * module: {
   *     rules: [
   *       {
   *         test: /\.?js$/,
   *         exclude: /node_modules/,
   *         use: {
   *           loader: "babel-loader",
   *         }
   *       },
   *     ]
   *   },
   */
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // Babel config for CSS files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Babel config for images
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },

  /**
   * Defining rules for babel
   * Babel is a transpiler so we need to tell it what to transpile, we do this using presets. These are predefined configuration that is used to transpile different type to javascript to browsers understandable one.
   * Let’s install these presets first.
   * npm install @babel/preset-env @babel/preset-react --save-dev
   * Now let's use them in webpack.config.js
   *  options: {
   *         presets: ['@babel/preset-env', '@babel/preset-react']
   *       }
   * Here we have 2 presets @babel/preset-env for transpiling ES2015+ syntax and we have @babel/preset-react for transpiling react code. Learn more about these presets.
   */

  /**
   * Build and run
   * Now that we have created the config file it is time to actually build and run the app. To do that we need to add some scripts to package.json.
   * "scripts": {
   *   "dev": "webpack serve",
   *   "build": "webpack",
   *   ...
   * }
   * dev will use the webpack dev server and run the application locally. build will create a bundle of assets that can be deployed to servers.
   */

  /**
   * The 'mode' option has not been set, webpack will fallback to 'production' for this value.
   * Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
   */
  mode: "development",
  performance: {
    // hints: true,
    // Turn off size warnings for entry points
    hints: false,
    // maxBundleSize: 250,
    // warnAtPercent: 80,
  },

  /**resolve absolute path in webpack
   * Then you can import by
   * import something from 'src/index.js'
   */

  // resolve: {
  //   extensions: [".js", ".jsx"],
  //   // alias: {
  //   //   root: __dirname,
  //   //   src: path.resolve(__dirname, 'src'),
  //   // },
  // },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx", ".react.js"],
    // mainFields: ["browser", "jsnext:main", "main"],
  },
};
