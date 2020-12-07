/**
 * Execute Mangony build process to generate HTML files.
 *
 * @author Sebastian Fitzner
 */
'use strict';

/**
 * Dependencies
 */
const Mangony = require('mangony');
const TemplaterPlugin = require('mangony').plugins.hbsTemplaterPlugin;
const ServerPlugin = require('mangony').plugins.serverPlugin;
const mangonyConfig = require('./mangony.config');
const config = require('../../veams-cli');

/**
 * Merge default options with dist options.
 */
const options = Object.assign(mangonyConfig.dev.options, mangonyConfig.options);

/**
 * Initialize Mangony instance.
 */
const mangony = new Mangony(options);

/**
 * Generate HTML files.
 */
mangony.render()
    .then(() => mangony.use(TemplaterPlugin, {
        helpers: [
            'shared/utilities/template-helpers/*.js'
        ],
        compileStaticFiles: true,
        allow: {
            YFMContextData: true,
            YFMLayout: true
        },
    }))
    .then(() => mangony.use(ServerPlugin, {
        logSnippet: false,
        bsEnabled: true,
        injectScript: true,
        start: true,
        usePort: true,
        useAssetsDir: true,
        useExt: true,
        port: config.ports.server,
        bsOptions: {
            proxy: 'localhost:' + config.ports.server,
            port: config.ports.app,
            files: [
                config.paths.dest + '/**/*.html',
                config.paths.dest + '/css/**/*.css',
                config.paths.dest + '/scripts/**/*.js'
            ]
        }
    }));
