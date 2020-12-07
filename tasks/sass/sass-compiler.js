/** ==============================================
 * Modules
 * ============================================== */
const sass = require('node-sass');
const fs = require('fs-extra');
const chalk = require('chalk');

/** ==============================================
 * Statics
 * ============================================== */
const NAMESPACE = chalk.gray('[SCSS]');

const options = {
  file: 'src/app.scss',
  outFile: 'dist/css/app.bundle.css',
  outputStyle: 'compressed',
  sourceMap: true,
};
const outputFile = `${process.cwd()}/${options.outFile}`;

function createSassCompiler() {
  return new Promise((resolve, reject) =>
    sass.render(options, function (error, result) {
      if (error) {
        reject(error);
      } else {
        fs.outputFile(outputFile, result.css, function (err) {
          if (!err) {
            //file written on disk
            resolve({ ...result, file: outputFile });
          }
        });
      }
    })
  );
}

/** ==============================================
 * Compiling
 * ============================================== */
const compileSass = () => createSassCompiler()
  .then(() => {
    console.info(
      chalk.green(`${NAMESPACE} ${chalk.magenta(options.outFile)} has been successfully compiled!`)
    );
  })
  .catch((err) => {
    console.error(chalk.red(`${NAMESPACE} ${chalk.magenta(options.outFile)} not compiled: `, err));
  });

compileSass();

module.exports = compileSass;
