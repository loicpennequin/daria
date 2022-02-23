export const mapObject = <T>(
  object: object,
  mapValue: (v: T) => any = v => v,
  mapKey: (k: string) => string = k => k
) =>
  Object.fromEntries(
    Object.entries(object).map(([k, v]) => [mapKey(k), mapValue(v)])
  );

export const arrayToObject = <T = unknown>(arr: T[]): { [key: string]: T } =>
  Object.fromEntries(arr.map((value, index) => [index, value]));
