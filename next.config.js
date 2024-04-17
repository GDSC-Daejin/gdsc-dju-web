const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

module.exports = stylexPlugin({
  aliases: {
    //'@/*': [path.join(__dirname, '*')],
    '@/*': ['./src/*'],
  },
  rootDir: __dirname,
})({});
