const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://justin-dongwook-jung.github.io/haonFirst' : ''
});
