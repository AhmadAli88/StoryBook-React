# Create Vite React Project
npm create vite@latest my-storybook-demo -- --template react
cd my-storybook-demo
npm install

# Add Storybook
npx storybook@latest init

# Install additional dependencies
npm install @storybook/addon-a11y @storybook/addon-viewport @storybook/addon-controls --save-dev
npm install clsx @emotion/react @emotion/styled

##### Configure TailwindCSS with Storybook
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer
npm install -D @storybook/addon-styling

# Initialize Tailwind CSS
npx tailwindcss init -p

# tailwind.config.js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/preview.js",                    add this line
  ],
# src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# .storybook/preview.js
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

# .storybook/main.js update config object
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-styling',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins || [])],
    };
  },
};
#  node_modules/.cache
# npm run storybook
