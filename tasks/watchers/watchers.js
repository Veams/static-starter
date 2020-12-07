const chalk = require('chalk');
const chokidar = require('chokidar');
const compileSass = require('../sass/sass-compiler');
const compileTs = require('../ts/ts-compiler.dev');
const NAMESPACE = `[WATCHER]`;

/** ==============================================
 * SCSS Watcher
 * ============================================== */
const sassWatcher = chokidar.watch(`src/**/*.scss`, {
  persistent: true,
});

sassWatcher.on('change', (file) => {
  console.info(chalk.yellow(`${NAMESPACE} ${chalk.magenta(file)} has been changed!`));
  compileSass();
});

/** ==============================================
 * TS Watcher
 * ============================================== */
const tsWatcher = chokidar.watch(`src/**/*.ts`, {
  persistent: true,
});

tsWatcher.on('change', (file) => {
  console.info(chalk.yellow(`${NAMESPACE} ${chalk.magenta(file)} has been changed!`));
  compileTs();
});

/** ==============================================
 * File Copy Watcher
 * ============================================== */
