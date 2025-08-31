import type { Preview } from "@storybook/react-webpack5";
import 'tailwindcss/tailwind.css';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
