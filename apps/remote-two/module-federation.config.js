const baseConfig = require('../module-federation-config');

module.exports = {
  ...baseConfig,
  name: 'remote-two',
  exposes: {
    './Module': 'apps/remote-two/src/app/remote-entry/entry.module.ts',
  },
};
