/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src'],
      prependData: `@import "styles/_config.sass"`,
    };
  }
  return {
    defaultConfig,
    api: {
      bodyParser: true,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: true,
        },
      ];
    },
  };
};
