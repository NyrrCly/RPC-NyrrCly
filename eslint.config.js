import antfu from '@antfu/eslint-config';

export default antfu({
  node: true,
  browser: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
    braceStyle: '1tbs',
  },
}, {
  rules: {
    'curly': ['error', 'all'],
    'prefer-const': [
      'error',
      { destructuring: 'all' },
    ],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-bitwise': 'off',
    'class-methods-use-this': 'off',
  },
});
