const path = require('path');
const fs = require('fs');
const GENERATED_TSCONFIG_PATH = '../tsconfig.generated.json';

const PACKAGES_DIR = path.join(__dirname, '../packages');

const packages = fs
  .readdirSync(PACKAGES_DIR)
  .map(d => path.join(PACKAGES_DIR, d))
  .filter(d => fs.lstatSync(d).isDirectory())
  .map(d => {
    const pkgJSON = require(path.join(d, 'package.json'));

    return { name: pkgJSON.name, directory: d };
  });

fs.writeFileSync(
  path.join(__dirname, `${GENERATED_TSCONFIG_PATH}`),
  JSON.stringify(
    {
      extends: './tsconfig.base.json',
      compilerOptions: {
        paths: Object.fromEntries(
          packages.map(package => [
            `${package.name}`,
            [`${package.directory}/src`]
          ])
        )
      }
    },
    null,
    2
  )
);
