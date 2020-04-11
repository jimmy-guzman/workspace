module.exports = {
  preset: 'ts-jest',
  cacheDirectory: '../../.cache/jest',
  coverageThreshold: {
    global: {
      branches: 87,
      functions: 92,
      lines: 93,
      statements: 93
    }
  },
  coverageReporters: ['html', 'text'],
  roots: ['<rootDir>/src'],
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  }
}
