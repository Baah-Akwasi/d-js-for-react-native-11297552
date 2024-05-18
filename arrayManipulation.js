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

const formatArrayStrings = function (strings, numbers) {
  if (strings.length !== numbers.length) {
    prompt("They should be of the same lenght");
  }
  return strings.map((str, i) => {
    if (numbers[i] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
};
