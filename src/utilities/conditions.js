import { complement } from 'ramda';

import {
  isArray,
  isBoolean,
  isBuffer,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isError,
  isFunction,
  isInteger,
  isMap,
  isNaN,
  isNull,
  isNumber,
  isPlainObject,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
} from 'lodash/fp';

export {
  isArray,
  isBoolean,
  isBuffer,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isError,
  isFunction,
  isInteger,
  isMap,
  isNaN,
  isNull,
  isNumber,
  isPlainObject,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
} from 'lodash/fp';

export const isNotArray = complement(isArray);
export const isNotBoolean = complement(isBoolean);
export const isNotBuffer = complement(isBuffer);
export const isNotDate = complement(isDate);
export const isNotElement = complement(isElement);
export const isNotEmpty = complement(isEmpty);
export const isNotEqual = complement(isEqual);
export const isNotError = complement(isError);
export const isNotFunction = complement(isFunction);
export const isNotInteger = complement(isInteger);
export const isNotMap = complement(isMap);
export const isNotNaN = complement(isNaN);
export const isNotNull = complement(isNull);
export const isNotNumber = complement(isNumber);
export const isNotPlainObject = complement(isPlainObject);
export const isNotRegExp = complement(isRegExp);
export const isNotString = complement(isString);
export const isNotSymbol = complement(isSymbol);
export const isNotUndefined = complement(isUndefined);
