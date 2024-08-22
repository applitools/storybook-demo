module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    { name: '@storybook/addon-essentials', options: { backgrounds: false } },
  ],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
    disableTelemetry: true,
  },
  framework: '@storybook/react-webpack5',
  docs: {
    autodocs: true,
  },
}