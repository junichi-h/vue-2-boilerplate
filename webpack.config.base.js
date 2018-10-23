import path from 'path';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes'
import mixin from 'postcss-mixins';
import easing from 'postcss-easings';
import csswring from 'csswring';
import rucksack from 'rucksack-css';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import browserReporter from 'postcss-browser-reporter';
import VueLoaderPlugin from 'vue-loader/lib/plugin';



const isProd = !!(process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev-prod');
const MODE = isProd ? 'production' : 'development';

console.log(
  chalk.cyan(
    `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold.bgCyan(process.env.NODE_ENV)
    )}`
  )
);

const postCSSLoaderOptions = {
  indent: 'postcss',
  sourceMap: isProd ? false : 'inline',
  plugins: (loader) => [
    stylelint(),
    require('postcss-import')({ root: loader.resourcePath }),
    flexbugs(),
    rucksack(),
    easing(),
    mixin(),
    // doiuse({browsers: ['last 2 versions', 'not OperaMini']}),
    autoprefixer(
      {browsers: ['last 2 versions', 'ie 9', 'ios 7', 'android 4.1'], grid: true}
    ),
    csswring(),
    reporter(),
    browserReporter({disabled: isProd}),
  ]
};

export default {
  mode: MODE,
  cache: true,
  target: 'web',
  output: {
  	path: path.join(__dirname, '.tmp', 'assets', 'js'),
    publicPath: `/${config.assets}/${config.js}/`,
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[name].map'
  },
  module: {
  	rules: [
	  {
	  	test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/
	  },
	  {
	  	test: /\.(scss|sass)$/,
	  	use: [
	  		'vue-style-loader',
	  		{
	  		  loader: 'css-loader',
	  		  options: {
	  		  	url: true,
                modules: true,
                sourceMap: !isProd,
                importLoaders: 2
	  		  }
	  		},
	  		{
	  		  loader: 'postcss-loader',
	  		  options: postCSSLoaderOptions
	  		}
	  	]
      },
      'sass-loader'
  	],
  	exclude: /node_modules/
  },
  resolve: {
    descriptionFiles: ['package.json'],
    enforceExtension: false,
    modules: ['src', 'src/js', 'web_modules', 'node_modules']
  }
};