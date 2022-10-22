const sushiOP = require('./sushi-OP.json');
const uniswapOP = require('./uniswap-OP.json');
const dydxMainnet = require('./dydx-mainnet.json');
const tokensOP = require('./tokens-OP.json');

module.exports = {
  optimism: {
    sushi: sushiOP,
    uniswap: uniswapOP,
    dydx: dydxMainnet,
    tokens: tokensOP
  }
};
