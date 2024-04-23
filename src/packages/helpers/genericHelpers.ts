import { detect } from 'detect-browser';
import {
  isArray as isArrayDefault,
  isDate as isDateDefault,
  isEmpty as isEmptyDefault,
  isEqual as isEqualDefault,
  isFloat as isFloatDefault,
  isFunction as isFunctionDefault,
  isInt as isIntDefault,
  isNumber as isNumberDefault,
  isObject as isObjectDefault,
  isPrimitive as isPrimitiveDefault,
  isString as isStringDefault,
  isSymbol as isSymbolDefault,
} from 'radash';

export namespace genericHelpers {
  export const isSymbol = isSymbolDefault;
  export const isArray = isArrayDefault;
  export const isObject = isObjectDefault;
  export const isPrimitive = isPrimitiveDefault;
  export const isFunction = isFunctionDefault;
  export const isString = isStringDefault;
  export const isInt = isIntDefault;
  export const isFloat = isFloatDefault;
  export const isNumber = isNumberDefault;
  export const isDate = isDateDefault;
  export const isEmpty = isEmptyDefault;
  export const isEqual = isEqualDefault;

  /**
   * ### IsDefined
   * @description Check if a value is defined
   */
  export const isDefined = <T>(value: T): value is NonNullable<T> => {
    return !isEmpty(value);
  };

  /**
   * ### Random
   * @description Generate a random number between a minimum and maximum value
   */
  export const random = (minimum: number, maximum: number): number => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  };

  export const getDeviceInfo = () => {
    const browserInfo = detect();

    const browserMapping: Record<string, string> = {
      ios: 'Safari',
    };

    return [
      browserInfo?.os,
      browserInfo?.name
        ? browserMapping[browserInfo.name.toLowerCase()] || undefined
        : undefined,
      browserInfo?.version,
    ]
      .filter(Boolean)
      .join(' ');
  };
}
