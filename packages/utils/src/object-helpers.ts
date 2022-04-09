export const mapObject = <T = any, R = any>(
  object: object,
  mapValue: (v: T, k: string) => any = v => v,
  mapKey: (k: string, v: T) => string = k => k
) =>
  Object.fromEntries(
    Object.entries(object).map(([k, v]) => [mapKey(k, v), mapValue(v, k)])
  ) as unknown as R;

export const arrayToObject = <T = unknown>(arr: T[]): { [key: string]: T } =>
  Object.fromEntries(arr.map((value, index) => [index, value]));
