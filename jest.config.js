/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest',{}],
  },
  collectCoverage: true,          // 启用覆盖率报告
  coverageDirectory: 'coverage',  // 指定存放覆盖率报告的目录
  coverageReporters: ['html', 'text', 'json'],  // 指定报告格式，例如 HTML 和文本格式
}