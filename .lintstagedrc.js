const path = require('path')
const rootDir = path.resolve(__dirname)

const buildEslintCommand = (filenames) =>
  `cd ${rootDir}/frontend && yarn next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  'frontend/**.{js,jsx,ts,tsx}': [buildEslintCommand],
  // ref: https://stackoverflow.com/questions/63146057/how-to-check-typescript-type-before-commit
  'frontend/**/*.ts?(x)': () => `cd ${rootDir}/frontend && tsc -p tsconfig.json --noEmit`,
}