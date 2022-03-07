import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueTypeImports from 'vite-plugin-vue-type-imports';
import svgLoader from 'vite-svg-loader';
import path from 'path';

export default defineConfig({
  plugins: [vue(), svgLoader(), vueTypeImports()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    sourcemap: true
    // lib: {
    //   entry: path.resolve(__dirname, 'src/index.ts'),
    //   name: 'DariaUi',
    //   fileName: format => `index.${format}.js`
    // },
    // rollupOptions: {
    //   external: ['vue'],
    //   output: {
    //     globals: {
    //       vue: 'Vue'
    //     }
    //   }
    // }
  }
});
