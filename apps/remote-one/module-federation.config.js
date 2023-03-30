const baseConfig = require('../module-federation-config');

module.exports = {
  ...baseConfig,
  name: 'remote-one',
  exposes: {
    './Module': 'apps/remote-one/src/app/remote-entry/entry.module.ts',
  },
};
