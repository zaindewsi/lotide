const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;

  eqObjects(actual, expected)
    ? console.log(
        `🐸 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const cd = { a: "2", b: "2" };
const dc = { b: "2", a: "1" };
assertObjectsEqual(cd, dc); // => false
