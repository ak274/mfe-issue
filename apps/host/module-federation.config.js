const baseConfig = require('../module-federation-config');

module.exports = {
  ...baseConfig,
  name: 'host',
  remotes: ['remote-one', 'remote-two'],
};
