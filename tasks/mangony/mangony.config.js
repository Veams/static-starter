'use strict';

const config = require('../../veams-cli');

module.exports = {
	options: {
		collections: [
			'sitemap',
			'type'
		],
		cwd: config.paths.src,
		dest: config.paths.dest,
		exportData: false,
		ext: '.html',
		flatten: true,
		types: {
			data: {
				dir: '',
				files: [
					'core/**/*.hjson',
					'core/**/*.json',
					// 'features/**/*.hjson',
					// 'features/**/*.json',
					'shared/components/**/*.hjson',
					'shared/components/**/*.json',
					'shared/utilities/**/*.hjson',
					'shared/utilities/**/*.json'
				]
			},
			partials: {
				dir: '',
				files: [
					'shared/components/**/*.hbs',
					'core/components/**/*.hbs',
					// 'features/**/*.hbs',
					'shared/utilities/**/*.hbs'
				]
			},
			pages: {
				dir: '',
				files: [
					'pages/**/*.hbs',
					'shared/components/**/*.hbs',
					// 'features/**/*.hbs',
					'shared/utilities/**/*.hbs'
				]
			},
			layouts: {
				dir: '',
				files: [
					'core/layouts/**/*.hbs'
				]
			}
		}
	},
	dev: {
		options: {
			watch: true
		}
	},
	dist: {
		options: {
			watch: false
		}
	}
};
