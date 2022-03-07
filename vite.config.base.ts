import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import getPackageAliases from './scripts/getPackageAliases';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': `${process.cwd()}/src`,
      ...(isProd ? {} : getPackageAliases())
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(process.cwd(), 'src/index.ts'),
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
