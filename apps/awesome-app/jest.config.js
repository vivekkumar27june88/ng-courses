module.exports = {
  name: 'awesome-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/awesome-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
