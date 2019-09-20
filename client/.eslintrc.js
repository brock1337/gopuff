// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   'extends': [
//     'plugin:vue/essential',
//     '@vue/standard'
//   ],
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   overrides: [
//     {
//       files: [
//         '**/__tests__/*.{j,t}s?(x)'
//       ],
//       env: {
//         jest: true
//       }
//     }
//   ]
// }
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    codeFrame: false
  },
  env: {
    node: true,
    es6: true,
    mocha: false
  },
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    'import/extensions': ['off', 'never'],
    'import/newline-after-import': 'off',
    'indent': 'off',
    'no-use-before-define': [
      'error',
      'nofunc'
    ],
    'quotes': ['error', 'single'],
    'semi': 'off'
  }
}
