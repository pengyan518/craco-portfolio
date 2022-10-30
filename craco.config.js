// eslint-disable-next-line @typescript-eslint/no-var-requires
const {ESLINT_MODES, POSTCSS_MODES} = require('@craco/craco')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
// const emotionPresetOptions = {};

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const emotionBabelPreset = require("@emotion/babel-preset-css-prop").default(
//   undefined,
//   emotionPresetOptions
// );

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
};
