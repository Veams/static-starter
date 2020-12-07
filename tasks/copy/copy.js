/** ==============================================
 * Imports
 * ============================================== */
const chalk = require('chalk');
const fs = require('fs-extra');

/** ==============================================
 * CONST
 * ============================================== */
const NAMESPACE = `${chalk.gray('[COPY]')}`

/** ==============================================
 * Copy Tasks
 * ============================================== */
const copyAssets = () => {
    fs.copySync(`${process.cwd()}/src/assets`, `${process.cwd()}/dist/assets`);
    console.info(chalk.green(`${NAMESPACE} Asset files successfully copied!`));
}

const copyStatics = () => {
    fs.copySync(`${process.cwd()}/src/static`, `${process.cwd()}/dist`);
    console.info(chalk.green(`${NAMESPACE} Static files successfully copied!`));
}

/** ==============================================
 * Execution
 * ============================================== */
copyAssets();
copyStatics();
