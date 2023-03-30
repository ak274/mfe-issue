module.exports = {
  name: 'remote-two',
  exposes: {
    './Module': 'apps/remote-two/src/app/remote-entry/entry.module.ts',
  },
};
