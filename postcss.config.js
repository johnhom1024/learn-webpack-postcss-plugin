const path = require('path');

const PostCssPluginPx2Rpx = require('./plugins/px2rpx-postcss-plugins');

module.exports = {
  plugins: [
    PostCssPluginPx2Rpx()
  ]
}