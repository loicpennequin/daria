import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import fs from 'fs';

const PACKAGES_DIR = path.join(__dirname, './packages');
const PACKAGE_ENTRY_POINT = 'src/index';
const isProd = process.env.NODE_ENV === 'production';

const packages = fs
  .readdirSync(PACKAGES_DIR)
  .map(d => path.join(PACKAGES_DIR, d))
  .filter(d => fs.lstatSync(d).isDirectory())
  .map(d => {
    let rawPkgJSON = fs.readFileSync(path.join(d, 'package.json'), {
      encoding: 'utf-8'
    });
    const pkgJSON = JSON.parse(rawPkgJSON);

    return { name: pkgJSON.name, directory: d };
  });

const aliases = isProd
  ? {}
  : Object.fromEntries(
      packages.map(({ name, directory }) => [
        name,
        path.join(directory, PACKAGE_ENTRY_POINT)
      ])
    );

export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': `${process.cwd()}/src`,
      ...aliases
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
