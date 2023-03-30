module.exports = {
  name: 'remote-one',
  exposes: {
    './Module': 'apps/remote-one/src/app/remote-entry/entry.module.ts',
  },
};
