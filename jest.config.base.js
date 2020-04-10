module.exports = {
  preset: 'ts-jest',
  cacheDirectory: '../../.cache/jest',
  coverageReporters: ['html', 'text'],
  roots: ['<rootDir>/src'],
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  }
}
