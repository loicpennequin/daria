const fs = require('fs-extra');
const path = require('path');
const insertLine = require('insert-line');
const { generateTemplateFilesBatch } = require('generate-template-files');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const camelToSnakeCase = str =>
  str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
const upperCaseFirstLetter = str =>
  str.charAt(0).toUpperCase() + str.substring(1);

const argv = yargs(hideBin(process.argv)).argv;
const resourceName = argv._[0];
if (!resourceName)
  throw new Error('Please provide a ressource name in the cli command.');

generateTemplateFilesBatch([
  {
    option: 'Package',
    defaultCase: '(kebabCase)',
    entry: {
      folderPath: path.join(process.cwd(), 'templates/package/')
    },
    dynamicReplacers: [{ slot: '__package__', slotValue: resourceName }],
    output: {
      path: path.join(process.cwd(), './packages/__package__(kebabCase)'),
      pathAndFileNameDefaultCase: '(kebabCase)'
    },
    onComplete: async results => {
      updateDariaUiPackageJson();
      updateDariaUiExports();
    }
  }
]);

function updateDariaUiExports() {
  const filePath = path.join(process.cwd(), 'packages/ui/src/index.ts');
  insertLine(filePath).appendSync(
    `export * from '@daria/${camelToSnakeCase(resourceName)}';`
  );
}

function updateDariaUiPackageJson() {
  const filePath = path.join(process.cwd(), 'packages/ui/package.json');
  const rawPkgJson = fs.readFileSync(filePath);
  const pkgJson = JSON.parse(rawPkgJson);
  pkgJson.dependencies[`@daria/${camelToSnakeCase(resourceName)}`] = '*';

  fs.writeJSONSync(filePath, pkgJson, { spaces: 2 });
}
