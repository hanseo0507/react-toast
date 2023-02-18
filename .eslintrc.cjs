module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [{ pattern: '{react*,react*/**}', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['./demo/**/*.ts?(x)'],
      rules: {
        // For Unresolved error from import *.css, *.svg
        'import/no-unresolved': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
  },
};
