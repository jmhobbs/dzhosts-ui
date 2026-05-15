import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/web-components-vite';

const storybookRoot = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (viteConfig) => {
    const aliases = Array.isArray(viteConfig.resolve?.alias)
      ? viteConfig.resolve.alias
      : [];

    return {
      ...viteConfig,
      resolve: {
        ...viteConfig.resolve,
        alias: [
          ...aliases,
          {
            find: '@dzhosts/components',
            replacement: resolve(storybookRoot, '../../components/src/index.ts')
          },
          {
            find: '@dzhosts/tokens',
            replacement: resolve(storybookRoot, '../../tokens/src/index.ts')
          }
        ]
      }
    };
  }
};

export default config;
