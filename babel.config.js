module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@common': './src/common',
          '@components': './src/components',
          "@styles": "./src/styles",
          "@colors": "./src/styles/colors.ts",
          "@utils": "utils",
          "@store": "./src/store"
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false
      }
    ]
  ]
};
