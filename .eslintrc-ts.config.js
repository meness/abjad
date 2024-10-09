module.exports = {
  extends: [
    'plugin:jsdoc/recommended-typescript',
    'plugin:react-prefer-function-component/recommended',
    'next',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'jsdoc'],
  rules: {
    'arrow-body-style': ['warn', 'always'],
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_v', '__ref']
      }
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'warn',
    curly: 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/lines-between-class-members': 'warn',
    'array-element-newline': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/check-param-names': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    // #region Specific rules for this project
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-quotes': ['warn', 'prefer-double']
    // #endregion
  }
};
