module.exports = {
  preset: 'ts-jest',
  cacheDirectory: '../../.cache/jest',
  coverageThreshold: {
    global: {
      branches: 96,
      functions: 95,
      lines: 97,
      statements: 97,
    },
  },
  coverageReporters: ['html', 'text'],
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
}
