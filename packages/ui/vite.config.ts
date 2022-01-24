import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
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
