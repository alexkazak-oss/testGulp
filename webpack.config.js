const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		mobileNav: './src/js/modules/mobile-nav.js',
		prMenu: './src/js/modules/progressiveMenu.js',
		counterPrice: './src/js/modules/counterPrice.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
