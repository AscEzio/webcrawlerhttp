import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 应用 @eslint/js 的推荐规则
  pluginJs.configs.recommended,
  // 应用 typescript-eslint 推荐配置
  ...tseslint.configs.recommended,
  {
    // 针对所有 JS/TS 文件的基础配置
    files: ['**/*.{ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      // 根据项目环境选择全局变量，例如 Node 项目使用 globals.node；浏览器项目可使用 globals.browser
      globals: globals.node,
    },
    rules: {
      // 允许使用 console
      'no-console': 'off',
      // 强制使用 2 个空格缩进
      'indent': ['error', 2],
      // 强制使用单引号
      'quotes': ['error', 'single'],
      // 强制语句末尾加分号
      'semi': ['error', 'never'],
    },
  },
  {
    // 针对 .js 文件使用 CommonJS 解析
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
]