"use strict";

function processArray(parameter) {
  return parameter.map((number) => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
}
