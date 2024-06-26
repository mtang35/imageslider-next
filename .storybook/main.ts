import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    //"@storybook/preset-typescript",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { 
                  postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                      require('tailwindcss'),
                      require('autoprefixer'),
                    ]
                  }
                  //implementation: require.resolve('postcss') 
                }
              }
            ],
          }
        ]
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};

export default config;
