module.exports = {
  preset: 'ts-jest',
  cacheDirectory: '../../.cache/jest',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 92,
      lines: 95,
      statements: 95,
    },
  },
  coverageReporters: ['html', 'text'],
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
}
