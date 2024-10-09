module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'postcss-import',
          'tailwindcss',
          [
            'postcss-preset-env',
            {
              minimumVendorImplementations: 2,
              stage: 3,
              features: {
                'media-query-ranges': true,
                'logical-viewport-units': true,
                'light-dark-function': true,
                'has-pseudo-class': true,
                'font-variant-property': true,
                'font-format-keywords': true,
                'focus-visible-pseudo-class': true,
                'float-clear-logical-values': true,
                'dir-pseudo-class': true,
                'cascade-layers': true,
                'blank-pseudo-class': true
              }
            }
          ],
          [
            'cssnano',
            {
              preset: ['default', { discardComments: { removeAll: true } }]
            }
          ]

        ]
      : ['postcss-import', 'tailwindcss', 'autoprefixer']
};
