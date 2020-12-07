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
const mangonyConfig = require('./mangony.config');

/**
 * Merge default options with dist options.
 */
const options = Object.assign(mangonyConfig.dist.options, mangonyConfig.options);

/**
 * Initialize Mangony instance.
 */
const mangony = new Mangony(options);

/**
 * Generate HTML files.
 */
mangony
  .render()
  .then(() =>
    mangony.use(TemplaterPlugin, {
      helpers: ['shared/utilities/template-helpers/*.js'],
      compileStaticFiles: true,
      allow: {
        YFMContextData: true,
        YFMLayout: true,
      },
    })
  )
  .then(() => {
    mangony.templater.renderPages();
  });
