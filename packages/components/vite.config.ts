import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@dzhosts/tokens': resolve(__dirname, '../tokens/src/index.ts')
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        alert: resolve(__dirname, 'src/components/alert.ts'),
        badge: resolve(__dirname, 'src/components/badge.ts'),
        button: resolve(__dirname, 'src/components/button.ts'),
        checkbox: resolve(__dirname, 'src/components/checkbox.ts'),
        container: resolve(__dirname, 'src/components/container.ts'),
        dialog: resolve(__dirname, 'src/components/dialog.ts'),
        divider: resolve(__dirname, 'src/components/divider.ts'),
        'empty-state': resolve(__dirname, 'src/components/empty-state.ts'),
        field: resolve(__dirname, 'src/components/field.ts'),
        grid: resolve(__dirname, 'src/components/grid.ts'),
        'icon-button': resolve(__dirname, 'src/components/icon-button.ts'),
        inline: resolve(__dirname, 'src/components/inline.ts'),
        input: resolve(__dirname, 'src/components/input.ts'),
        panel: resolve(__dirname, 'src/components/panel.ts'),
        spinner: resolve(__dirname, 'src/components/spinner.ts'),
        stack: resolve(__dirname, 'src/components/stack.ts'),
        textarea: resolve(__dirname, 'src/components/textarea.ts')
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['iconoir/icons/regular/plus.svg?raw', 'lit', 'lit/directives/if-defined.js', 'lit/directives/style-map.js', 'lit/directives/unsafe-html.js']
    }
  }
});
