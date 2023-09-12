#!/usr/bin/node

exports.converter = function (base) {
  if (base < 2 || isNaN(base)) {
    return null;
  }

  return function convertToBase(number) {
    if (number < base) {
      return number.toString(base);
    }
    return convertToBase(Math.floor(number / base)) + (number % base).toString(base);
  };
};

