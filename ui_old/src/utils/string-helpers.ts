export const kebabToCamelCase = (str: string): string => {
  return str.replace(/(-\w)/g, match => match[1].toUpperCase());
};

export const camelToKebabCase = (str: string): string =>
  str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const upperCaseFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const lowerCaseFirstLetter = (string: string) =>
  string.charAt(0).toLowerCase() + string.slice(1);
