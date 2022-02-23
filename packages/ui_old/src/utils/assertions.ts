import { Nil } from './types';

export const isNil = (x: unknown): x is Nil => x === null || x === undefined;
export const isNotNil = (x: unknown): boolean => !isNil(x);
export const isBoolean = (x: unknown): x is boolean =>
  x === true || x === false;
export const isString = (x: unknown): x is string => typeof x === 'string';
export const isFunction = (x: unknown): x is Function =>
  typeof x === 'function';
export const isNumber = (x: unknown): x is number => typeof x === 'number';
export const isObject = (x: unknown): x is object =>
  typeof x === 'object' && x !== null;
export const isArray = (x: unknown): x is Array<any> => Array.isArray(x);
