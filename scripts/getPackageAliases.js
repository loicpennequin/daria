const path = require('path');
const fs = require('fs');

const PACKAGES_DIR = path.join(__dirname, '../packages');
const PACKAGE_ENTRY_POINT = 'src';

module.exports = () => {
  const packages = fs
    .readdirSync(PACKAGES_DIR)
    .map(d => path.join(PACKAGES_DIR, d))
    .filter(d => fs.lstatSync(d).isDirectory())
    .map(d => {
      const rawPkgJSON = fs.readFileSync(path.join(d, 'package.json'), {
        encoding: 'utf-8'
      });
      const pkgJSON = JSON.parse(rawPkgJSON);

      return { name: pkgJSON.name, directory: d };
    });

  return Object.fromEntries(
    packages.map(({ name, directory }) => [
      name,
      path.join(directory, PACKAGE_ENTRY_POINT)
    ])
  );
};
