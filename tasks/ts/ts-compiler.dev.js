const chalk = require('chalk');
const esbuild = require('esbuild');

/** ==============================================
 * Statics
 * ============================================== */
const NAMESPACE = chalk.gray('[ESBUILD]');
const options = {
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`,
  },
  entryPoints: ['./src/app.ts'],
  outfile: `dist/scripts/app.bundle.js`,
  minify: !('development' === process.env.NODE_ENV),
  bundle: true,
  sourcemap: true,
};

/** ==============================================
 * Compiler
 * ============================================== */
function createDevCompiler(entry = options.entryPoints, outfile = options.outfile) {
  return esbuild.build({ ...options, entryPoints: entry, outfile });
}

const compileTs = () =>
  createDevCompiler().then(() => {
    console.info(
      `${NAMESPACE} ${chalk.magenta(options.outfile)} ${chalk.green(
        'successfully compiled!'
      )}`
    );
  });

compileTs();
/** ==============================================
 * Exports
 * ============================================== */
module.exports = compileTs;
