const nextBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            filenameCase: 'kebab',
            memo: true,
            icon: true
          }
        }
      ]
    });

    return config;
  },
  // StrictMode renders components twice (in dev environment only) in order to detect any problems with your code and warn you about them (which can be quite useful).
  // Needs to be disabled for react-beautiful-dnd https://github.com/atlassian/react-beautiful-dnd/issues/2407#issuecomment-1137221247
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  pageExtensions: ['page.tsx']
};

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(nextConfig);
