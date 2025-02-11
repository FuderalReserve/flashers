require("dotenv").config();

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "@eth-optimism/hardhat-ovm";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-web3";

module.exports = {
  ovm: {
    solcVersion: "0.7.6",
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
    ],
  },
  paths: {
    tests: "./ovm/ovmTests",
  },
  networks: {
    // https://community.optimism.io/docs/developers/integration.html#using-the-optimism-repo
    optimismLocal: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
      ovm: true,
      gasPrice: 0,
    },
    optimismKovan: {
      url: "https://optimism-kovan.infura.io/v3/" + process.env.INFURA_API_KEY,
      ovm: true,
      gasPrice: 15000000,
      chainId: 69,
      accounts: [
        process.env.OP_KOVAN_ADMIN_KEY,
        process.env.OP_KOVAN_PROXY_ADMIN_KEY,
      ],
      gasLimit: 18547064,
      timeout: 40000,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    proxyAdmin: {
      default: 1,
    },
  },
};

