/// <binding ProjectOpened='Watch - Development' />
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = (env, options) => {
  //let production = options.mode === 'undefined' ? process.env.NODE_ENV === 'production' : options.mode === 'production';
  let production = process.env.NODE_ENV === "production";

  const clientBundleConfig = {
    devtool: production ? "" : "source-map",
    entry: {
      utopia: "./utopia/src/index.tsx"
    },
    output: {
      filename: "[name]/bundle.js",
      path: path.resolve(__dirname, "dist/"),
      publicPath: "dist/",
      globalObject: 'this'
    },
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       utopiaCss: {
    //         test: (m, c, entry = "utopia") =>
    //           m.constructor.name === "CssModule" &&
    //           recursiveIssuer(m) === entry,
    //         name: "main",
    //         chunks: "all",
    //         enforce: true
    //       }
    //     }
    //   },
    //   minimizer: production
    //     ? [
    //         new UglifyJsPlugin({
    //           cache: true,
    //           parallel: true,
    //           sourceMap: false,
    //           uglifyOptions: {
    //             compress: {
    //               drop_console: true
    //             }
    //           }
    //         }),
    //         new OptimizeCSSAssetsPlugin({})
    //       ]
    //     : []
    // },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
          test: /\.scss|css$/,
          exclude: /node_modules/,
          use: [
            // 'css-hot-loader',
            // MiniCssExtractPlugin.loader,
            'style-loader',
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                url: false
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ["ie >= 8", "last 4 version"]
                  })
                ],
                sourceMap: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: "./",
      publicPath: '/',
      hot: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    plugins: [
      // new MiniCssExtractPlugin({
      //   filename: "/[name]/style.css"
      // }),
      new HtmlWebpackPlugin({
        filename: "utopia/index.html",
        baseUrl: process.env.NODE_ENV == 'development'?'/':'./',
        template: './utopia/index.html',
        chunks: ['utopia'],
        inject: false
      })
    ],
    mode: production ? "production" : "development",
  };

  return [clientBundleConfig];
};

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}
