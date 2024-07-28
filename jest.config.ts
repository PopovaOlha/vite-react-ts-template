export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/setupJest.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@app/(.*)$': '<rootDir>/$1',
  },
};
