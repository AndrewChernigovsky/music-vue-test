module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@use "sass:math";`,
				webpackImporter: false,
				sassOptions: {
					module: true,
				},
			},
		},
	},
};