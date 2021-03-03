module.exports = {
  roots: ['<rootDir>/resources/js/tests'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  moduleFileExtensions: [
    'js',
    'vue',
  ],
};
