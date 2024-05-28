const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

module.exports = {
  ...stylexPlugin({
    aliases: {
      '@/*': ['./src/*'],
    },
    rootDir: __dirname,
  })({}),
  images: {
    domains: ['avatars.slack-edge.com'], // 이미지 호스트 추가
  },

};
