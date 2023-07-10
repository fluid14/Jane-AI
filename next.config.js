/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src'],
      prependData: `@import "styles/_config.sass"`,
    };
  }
  return {
    // output: 'export',
    defaultConfig,
    runtime: 'nodejs',
    distDir: 'dist',
  };
};
