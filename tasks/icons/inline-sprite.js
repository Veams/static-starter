/** ==============================================
 * Imports
 * ============================================== */
const chalk = require('chalk');
const mixer = require('svg-mixer');

/** ==============================================
 * CONST
 * ============================================== */
const NAMESPACE = `${chalk.gray('[SPRITE]')}`;
const ASSETSPATH = `${process.cwd()}/src/assets`;

/** ==============================================
 * Execution
 * ============================================== */
// Classic sprite with empty canvas and <defs> section with symbols
// Useful for inlining directly in HTML markup and refer to images via <use xlink:href="#symbol-id" />
mixer(`${ASSETSPATH}/icons/*.svg`, {
  spriteConfig: { usages: false },
}).then((result) => {
  const filepath = `${ASSETSPATH}/svg/sprite.svg`;

  result.write(`${filepath}`);
  console.info(
    chalk.green(`${NAMESPACE} Sprite file successfully generated to ${chalk.cyan(filepath)}!`)
  );
});
