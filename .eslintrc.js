module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: { },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',

    'import/extensions': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',

    'jsx-a11y/label-has-associated-control': 'off',
  },
};
