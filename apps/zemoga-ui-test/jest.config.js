module.exports = {
  name: 'zemoga-ui-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/zemoga-ui-test',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
