module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*', // Match any network id
    },
    develop: {
      port: 9545,
    },
  },
  compilers: {
    solc: {
      version: '^0.8.4', // A version or constraint - Ex. "^0.5.0"
    },
  },
};
